const { ipcRenderer } = require('electron');
const WindowControls = require('../utils/window-controls.util');

document.addEventListener('DOMContentLoaded', () => {
  WindowControls.initialize();

  const discordLoginBtn = document.getElementById('discord-login');
  if (discordLoginBtn) {
    discordLoginBtn.addEventListener('click', () => {
      ipcRenderer.send('discordLogin');
    });
  }
});

