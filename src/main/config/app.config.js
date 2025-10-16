const { APP } = require('../../shared/constants');

class AppConfig {
  constructor() {
    this.name = APP.NAME;
    this.version = APP.VERSION;
    this.serverPort = APP.SERVER_PORT;
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  getAppInfo() {
    return {
      name: this.name,
      version: this.version,
      environment: this.isDevelopment ? 'development' : 'production'
    };
  }
}

module.exports = new AppConfig();

