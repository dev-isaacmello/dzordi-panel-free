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
    createMainWindow();
    loadingWindow.close();
  }, 3000); // Atraso de 5 segundos (5000 milissegundos)
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 800,
    minWidth: 500,
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
