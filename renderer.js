const { instalarArquivo, instalarFreemode2, instalarFreemode3, instalarFreemode4, instalarFreemode5 } = require('./install');
const path = require('path');
const { ipcRenderer, shell} = require('electron');
const { desinstalarArquivo } = require('./uninstall');



// Seletor dos botões "Instalar" e "Desinstalar" usando os IDs que você adicionou
// Função para alterar a classe do botão para "clicked"
function toggleButtonColor(buttonElement) {
  buttonElement.classList.toggle('clicked');
}

// Função para alternar o texto do botão e executar ação associada
function toggleButtonTextAndAction(buttonElement, actionFunction, installText, uninstallText) {
  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarArquivo();
    buttonElement.textContent = installText;
  } else {
    actionFunction();
    buttonElement.textContent = uninstallText;
  }
}

// Função para lidar com as ações de instalação/desinstalação dos mods
function handleButtonClick(buttonId, installFunction, uninstallFunction, installText, uninstallText) {
  const button = document.getElementById(buttonId);
  const storageKey = `buttonState_${buttonId}`;

  button.addEventListener('click', () => {
    toggleButtonTextAndAction(button, installFunction, installText, uninstallText);
    toggleButtonColor(button);
    saveButtonState(storageKey, button.classList.contains('clicked'));
  });

  // Restaurar o estado do botão
  const isButtonClicked = getButtonState(storageKey);
  if (isButtonClicked) {
    toggleButtonColor(button);
    button.textContent = uninstallText;
  }
}

// Função para salvar o estado do botão no localStorage
function saveButtonState(storageKey, state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

// Função para obter o estado do botão do localStorage
function getButtonState(storageKey) {
  const state = localStorage.getItem(storageKey);
  return state ? JSON.parse(state) : false;
}

// Chamando a função para cada botão de instalação
handleButtonClick('freemode1', instalarArquivo, desinstalarArquivo, 'Instalar', 'Desinstalar');
handleButtonClick('freemode2', instalarFreemode2, desinstalarArquivo, 'Instalar', 'Desinstalar');
handleButtonClick('freemode3', instalarFreemode3, desinstalarArquivo, 'Instalar', 'Desinstalar');
handleButtonClick('freemode4', instalarFreemode4, desinstalarArquivo, 'Instalar', 'Desinstalar');
handleButtonClick('freemode5', instalarFreemode5, desinstalarArquivo, 'Instalar', 'Desinstalar');



function openDiscord() {
  // Substitua o link abaixo pelo link de convite do servidor do Discord que você deseja redirecionar
  const discordInviteLink = "https://discord.gg/dzordi";

  // Abre o link do Discord em uma nova aba
  shell.openExternal(discordInviteLink);
}

document.getElementById('minimize-btn').addEventListener('click', () => {
  ipcRenderer.send('minimize');
});

document.getElementById('maximize-btn').addEventListener('click', () => {
  ipcRenderer.send('maximize');
});

document.getElementById('close-btn').addEventListener('click', () => {
  ipcRenderer.send('close');
});
