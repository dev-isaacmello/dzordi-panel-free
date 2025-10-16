const { ipcRenderer } = require('electron');

class WindowControls {
  static initialize() {
    const minimizeBtn = document.getElementById('minimize-btn');
    const maximizeBtn = document.getElementById('maximize-btn');
    const closeBtn = document.getElementById('close-btn');

    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => {
        ipcRenderer.send('minimize');
      });
    }

    if (maximizeBtn) {
      maximizeBtn.addEventListener('click', () => {
        ipcRenderer.send('maximize');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        ipcRenderer.send('close');
      });
    }
  }
}

module.exports = WindowControls;

