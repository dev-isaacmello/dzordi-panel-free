const { app, BrowserWindow, ipcMain } = require('electron');
const fetch = require("node-fetch")
const path = require('path');
const express = require("express");
const Store = require('electron-store');
const store = new Store();
const server = express();

let mainWindow, loginWindow, authWindow, authenticated = false, code, user, userRoles;

server.get("/callback", (req, res) => {
  code = req.query.code;
  res.send("<script>window.close();</script>");
});

server.listen(3000, () => {})

function createLoadingWindow() {
  const loadingWindow = new BrowserWindow({
    width: 200,
    height: 250,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  loadingWindow.loadFile(path.join(__dirname, 'loading.html'));
  const accessToken = store.get("discordAccessToken");

  fetchUserInfo(accessToken);
  
  // Carrega a página principal (index.html) em segundo plano
  createBackgroundWindow();

  setTimeout(() => {
    createMainWindow();
    loadingWindow.close();
  }, 2000);
}

function createBackgroundWindow() {
  const backgroundWindow = new BrowserWindow({
    show: false, // Não exibe a janela
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  backgroundWindow.loadFile(path.join(__dirname, 'index.html'));
}

function createMainWindow() {
  const accessToken = store.get("discordAccessToken");

  if (!accessToken || !user || !userRoles) return createLoginWindow();
  if (!["1143409659852640408", "1143409936596996157", "1143409639640289300"].some(id => userRoles.includes(id))) return createLoginWindow();

  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 200,
    height: 250,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  loginWindow.loadFile(path.join(__dirname, 'login.html'));
}

function fetchUserInfo(token) {
  const userInfoEndpoint = 'https://discord.com/api/v10/users/@me';

  fetch(userInfoEndpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(userData => {
      user = userData
      fetchUserRoles("1143409639640289300", userData.id)
    })
    .catch(() => { });
}

function fetchUserRoles(guildId, userId) {
  const memberEndpoint = `https://discord.com/api/v10/guilds/${guildId}/members/${userId}`;
  
  fetch(memberEndpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bot MTE0MTgyMzA5MDc1MDM5MDQyNA.GmahbK.u-cPeWDu5NdW24NMlKhaqH0FxNcfl8w6iCFmmk`
    }
  })
    .then(response => response.json())
    .then(memberData => {
      const roles = memberData.roles;      
      userRoles = roles
    })
    .catch(() => {});
}

app.on('ready', () => {
  // Chama a função createLoadingWindow para continuar com a inicialização
  createLoadingWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createLoadingWindow();
  }
});

ipcMain.on('minimize', () => {
  if (!!mainWindow) mainWindow.minimize();
  else if (!!loginWindow) loginWindow.minimize();
});

ipcMain.on('maximize', () => {
  if (!!mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  } else if (!!loginWindow) {
    if (loginWindow.isMaximized()) {
      loginWindow.restore();
    } else {
      loginWindow.maximize();
    }
  }
});

ipcMain.on("discordLogin", () => {
  if (authWindow) return;

  const authorizeUrl = 'https://discord.com/api/oauth2/authorize?client_id=1141823090750390424&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=guilds%20identify%20guilds.members.read';

  authWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  authWindow.loadURL(authorizeUrl);

  authWindow.on('closed', () => {
    authWindow = null;
    if (code) {
      const clientId = '1141823090750390424'; // Substitua pelo seu Client ID
      const clientSecret = 'NoezJ0Js3D96qYCAgzdqW7KTmnyx95qN'; // Substitua pelo seu Client Secret
      const redirectUri = `http://localhost:3000/callback`; // A mesma URL de redirecionamento configurada no Painel do Desenvolvedor do Discord

      const tokenEndpoint = 'https://discord.com/api/oauth2/token';

      const params = new URLSearchParams();
      params.append('client_id', clientId);
      params.append('client_secret', clientSecret);
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', redirectUri);

      fetch(tokenEndpoint, {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => response.json())
        .then(data => {
          accessToken = data.access_token;
          if (accessToken) store.set('discordAccessToken', accessToken);
          createLoadingWindow();
          loginWindow.close();
        })
        .catch(error => {
          console.error('Erro ao obter o token de acesso:', error);
        });
    }
  });
});

ipcMain.on('close', () => {
  app.quit();
});
