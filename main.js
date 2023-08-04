const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Cria uma janela do Electron
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 800,
    minWidth: 400,
    minHeight: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    frame: false, 
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Desabilita o isolamento de contexto para suportar o require no renderer process
    }
  });

  // Carrega o arquivo index.html na janela do Electron
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Abre o DevTools (Ferramentas de Desenvolvedor) - opcional
  // mainWindow.webContents.openDevTools();

  // Evento emitido quando a janela é fechada
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Evento emitido quando o Electron terminou de inicializar e está pronto para criar janelas
app.on('ready', createWindow);

// Evento emitido quando todas as janelas foram fechadas
app.on('window-all-closed', () => {
  // No macOS, é comum que as aplicações e suas barra de menus fiquem ativas até que o usuário feche explicitamente com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // No macOS, é comum recriar a janela do aplicativo quando o ícone do Dock é clicado e não há outras janelas abertas.
  if (mainWindow === null) {
    createWindow();
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

