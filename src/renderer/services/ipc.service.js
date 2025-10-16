const { ipcRenderer } = require('electron');

class IpcService {
  static invoke(channel, ...args) {
    return ipcRenderer.invoke(channel, ...args);
  }

  static send(channel, ...args) {
    ipcRenderer.send(channel, ...args);
  }

  static on(channel, listener) {
    ipcRenderer.on(channel, listener);
  }

  static once(channel, listener) {
    ipcRenderer.once(channel, listener);
  }

  static removeListener(channel, listener) {
    ipcRenderer.removeListener(channel, listener);
  }

  static removeAllListeners(channel) {
    ipcRenderer.removeAllListeners(channel);
  }
}

module.exports = IpcService;

