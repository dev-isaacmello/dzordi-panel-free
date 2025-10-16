const { app, ipcMain } = require('electron');
const WindowManager = require('./windows/window.manager');

let windowManager;

app.on('ready', async () => {
  windowManager = new WindowManager();
  await windowManager.initialize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (!windowManager) {
    windowManager = new WindowManager();
    await windowManager.initialize();
  }
});

ipcMain.on('minimize', () => {
  windowManager.minimizeActiveWindow();
});

ipcMain.on('maximize', () => {
  windowManager.maximizeActiveWindow();
});

ipcMain.on('close', () => {
  app.quit();
});

ipcMain.on('discordLogin', async () => {
  await windowManager.handleDiscordLogin();
});

