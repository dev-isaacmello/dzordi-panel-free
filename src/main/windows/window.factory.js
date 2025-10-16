const { BrowserWindow } = require('electron');
const path = require('path');
const { WINDOW_CONFIG } = require('../../shared/constants');

class WindowFactory {
  static createWindow(type, customOptions = {}) {
    const baseConfig = WINDOW_CONFIG[type.toUpperCase()] || {};
    
    const windowOptions = {
      ...baseConfig,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        ...customOptions.webPreferences
      },
      ...customOptions
    };

    const window = new BrowserWindow(windowOptions);
    
    return window;
  }

  static createLoadingWindow() {
    const window = this.createWindow('loading');
    window.loadFile(path.join(__dirname, '../../renderer/pages/loading.html'));
    return window;
  }

  static createLoginWindow() {
    const window = this.createWindow('login');
    window.loadFile(path.join(__dirname, '../../renderer/pages/login.html'));
    return window;
  }

  static createMainWindow() {
    const window = this.createWindow('main');
    window.loadFile(path.join(__dirname, '../../renderer/pages/index.html'));
    return window;
  }

  static createAuthWindow(url) {
    const window = this.createWindow('auth');
    window.loadURL(url);
    return window;
  }

  static createBackgroundWindow() {
    const window = this.createWindow('main', { show: false });
    window.loadFile(path.join(__dirname, '../../renderer/pages/index.html'));
    return window;
  }
}

module.exports = WindowFactory;

