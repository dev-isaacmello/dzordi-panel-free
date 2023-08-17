const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

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

  setTimeout(() => {
    createMainWindow(); // Carrega a página principal em segundo plano
    loadingWindow.close();
  }, 3000); // Espera 5 segundos (5000 milissegundos) antes de exibir a página principal
}


function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 700,
    minHeight: 900,
    maxWidth: 1920,
    maxHeight: 1080,
    show: false, // Inicialmente oculta a janela principal
    frame: false, 
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show(); // Mostra a janela principal quando estiver pronta
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


app.on('ready', createLoadingWindow);

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
  mainWindow.minimize();
});

ipcMain.on('maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('close', () => {
  app.quit();
});
