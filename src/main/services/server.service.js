const express = require('express');
const { APP } = require('../../shared/constants');

class ServerService {
  constructor() {
    this.app = express();
    this.server = null;
    this.authCode = null;
  }

  setupRoutes() {
    this.app.get('/callback', (req, res) => {
      this.authCode = req.query.code;
      res.send('<script>window.close();</script>');
    });
  }

  start() {
    this.setupRoutes();
    this.server = this.app.listen(APP.SERVER_PORT, () => {
      console.log(`OAuth server running on port ${APP.SERVER_PORT}`);
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
      this.server = null;
    }
  }

  getAuthCode() {
    return this.authCode;
  }

  clearAuthCode() {
    this.authCode = null;
  }
}

module.exports = ServerService;

