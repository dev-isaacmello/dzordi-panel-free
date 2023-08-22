const { ipcRenderer, shell } = require('electron');

document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('close');
});

document.getElementById('discord-login').addEventListener('click', () => {
    ipcRenderer.send("discordLogin");
})