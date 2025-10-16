const WindowFactory = require('./window.factory');
const AuthService = require('../services/auth.service');
const ServerService = require('../services/server.service');
const { DISCORD } = require('../../shared/constants');

class WindowManager {
  constructor() {
    this.mainWindow = null;
    this.loginWindow = null;
    this.loadingWindow = null;
    this.authWindow = null;
    this.authService = new AuthService();
    this.serverService = new ServerService();
  }

  async initialize() {
    this.serverService.start();
    await this.createLoadingWindow();
  }

  async createLoadingWindow() {
    this.loadingWindow = WindowFactory.createLoadingWindow();
    
    const accessToken = this.authService.getStoredToken();
    
    if (accessToken) {
      try {
        await this.authService.fetchUserInfo(accessToken);
      } catch (error) {
        console.error('Failed to fetch user info with stored token:', error);
      }
    }

    WindowFactory.createBackgroundWindow();

    setTimeout(async () => {
      await this.createMainWindow();
      if (this.loadingWindow && !this.loadingWindow.isDestroyed()) {
        this.loadingWindow.close();
      }
    }, 2000);
  }

  async createMainWindow() {
    const { APP } = require('../../shared/constants');
    
    if (!APP.DEV_MODE && !this.authService.isAuthenticated()) {
      return this.createLoginWindow();
    }

    this.mainWindow = WindowFactory.createMainWindow();

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  createLoginWindow() {
    this.loginWindow = WindowFactory.createLoginWindow();

    this.loginWindow.on('closed', () => {
      this.loginWindow = null;
    });
  }

  async handleDiscordLogin() {
    if (this.authWindow) return;

    this.authWindow = WindowFactory.createAuthWindow(DISCORD.OAUTH_URL);

    this.authWindow.on('closed', async () => {
      const code = this.serverService.getAuthCode();
      
      if (code) {
        try {
          const accessToken = await this.authService.exchangeCodeForToken(code);
          
          if (accessToken) {
            this.authService.saveToken(accessToken);
            await this.createLoadingWindow();
            
            if (this.loginWindow && !this.loginWindow.isDestroyed()) {
              this.loginWindow.close();
            }
          }
        } catch (error) {
          console.error('Error during Discord login:', error);
        } finally {
          this.serverService.clearAuthCode();
        }
      }
      
      this.authWindow = null;
    });
  }

  minimizeActiveWindow() {
    const activeWindow = this.mainWindow || this.loginWindow;
    if (activeWindow && !activeWindow.isDestroyed()) {
      activeWindow.minimize();
    }
  }

  maximizeActiveWindow() {
    const activeWindow = this.mainWindow || this.loginWindow;
    if (activeWindow && !activeWindow.isDestroyed()) {
      if (activeWindow.isMaximized()) {
        activeWindow.restore();
      } else {
        activeWindow.maximize();
      }
    }
  }

  closeAllWindows() {
    [this.mainWindow, this.loginWindow, this.loadingWindow, this.authWindow].forEach(window => {
      if (window && !window.isDestroyed()) {
        window.close();
      }
    });
  }

  getAuthService() {
    return this.authService;
  }
}

module.exports = WindowManager;

