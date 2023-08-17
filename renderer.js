const path = require('path');
const fs = require('fs-extra');
const { ipcRenderer, shell} = require('electron');
const { citizenOriginal, instalarFreemode1,
  instalarFreemode2,
  instalarFreemode3,
  instalarFreemode4,
  instalarFreemode5,
  instalarSkin1,
  instalarSkin2,
  instalarSkin3,
  instalarSkin4,
  instalarSkin5 } = require('./install');
const {  desinstalarFreemode1, 
  desinstalarFreemode2, 
  desinstalarFreemode3, 
  desinstalarFreemode4, 
  desinstalarFreemode5, 
  desinstalarSkin1,
  desinstalarSkin2,
  desinstalarSkin3,
  desinstalarSkin4,
  desinstalarSkin5 } = require('./uninstall');
const header = document.querySelector('.header');

// MOD 1
// Função para alterar a classe do botão para "clicked"
function toggleButtonColor(buttonElement) {
  buttonElement.classList.toggle('clicked');
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

// Função para lidar com a ação de instalação/desinstalação do mod freemode1
function handleFreemode1ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarFreemode1();
    buttonElement.textContent = installText;
  } else {
    instalarFreemode1();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_freemode1', !isInstalled);
}

// Obtendo o botão 'freemode1' por ID e adicionando o evento de clique
const freemode1Button = document.getElementById('freemode1');
freemode1Button.addEventListener('click', () => {
  handleFreemode1ButtonClick(freemode1Button);
});

// Restaurando o estado do botão 'freemode1'
const isFreemode1ButtonClicked = getButtonState('buttonState_freemode1');
if (isFreemode1ButtonClicked) {
  toggleButtonColor(freemode1Button);
  freemode1Button.textContent = 'Desinstalar';
}

// Obtendo o botão 'freemode2' por ID e adicionando o evento de clique
const freemode2Button = document.getElementById('freemode2');
freemode2Button.addEventListener('click', () => {
  handleFreemode2ButtonClick(freemode2Button);
});

// Restaurando o estado do botão 'freemode2'
const isFreemode2ButtonClicked = getButtonState('buttonState_freemode2');
if (isFreemode2ButtonClicked) {
  toggleButtonColor(freemode2Button);
  freemode2Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod freemode2
function handleFreemode2ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarFreemode2();
    buttonElement.textContent = installText;
  } else {
    instalarFreemode2();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_freemode2', !isInstalled);
}

// Obtendo o botão 'freemode3' por ID e adicionando o evento de clique
const freemode3Button = document.getElementById('freemode3');
freemode3Button.addEventListener('click', () => {
  handleFreemode3ButtonClick(freemode3Button);
});

// Restaurando o estado do botão 'freemode3'
const isFreemode3ButtonClicked = getButtonState('buttonState_freemode3');
if (isFreemode3ButtonClicked) {
  toggleButtonColor(freemode3Button);
  freemode3Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod freemode3
function handleFreemode3ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarFreemode3();
    buttonElement.textContent = installText;
  } else {
    instalarFreemode3();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_freemode3', !isInstalled);
}

// Obtendo o botão 'freemode4' por ID e adicionando o evento de clique
const freemode4Button = document.getElementById('freemode4');
freemode4Button.addEventListener('click', () => {
  handleFreemode4ButtonClick(freemode4Button);
});

// Restaurando o estado do botão 'freemode4'
const isFreemode4ButtonClicked = getButtonState('buttonState_freemode4');
if (isFreemode4ButtonClicked) {
  toggleButtonColor(freemode4Button);
  freemode4Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod freemode4
function handleFreemode4ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarFreemode4();
    buttonElement.textContent = installText;
  } else {
    instalarFreemode4();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_freemode4', !isInstalled);
}

// Obtendo o botão 'freemode5' por ID e adicionando o evento de clique
const freemode5Button = document.getElementById('freemode5');
freemode5Button.addEventListener('click', () => {
  handleFreemode5ButtonClick(freemode5Button);
});

// Restaurando o estado do botão 'freemode5'
const isFreemode5ButtonClicked = getButtonState('buttonState_freemode5');
if (isFreemode5ButtonClicked) {
  toggleButtonColor(freemode5Button);
  freemode5Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod freemode5
function handleFreemode5ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarFreemode5();
    buttonElement.textContent = installText;
  } else {
    instalarFreemode5();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_freemode5', !isInstalled);
}

// Obtendo o botão 'skin1' por ID e adicionando o evento de clique
const skin1Button = document.getElementById('skin1');
skin1Button.addEventListener('click', () => {
  handleSkin1ButtonClick(skin1Button);
});

// Restaurando o estado do botão 'freemode5'
const isSkin1ButtonClicked = getButtonState('buttonState_skin1');
if (isSkin1ButtonClicked) {
  toggleButtonColor(skin1Button);
  skin1Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod freemode5
function handleSkin1ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarSkin1();
    buttonElement.textContent = installText;
  } else {
    instalarSkin1();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_skin1', !isInstalled);
}

// Obtendo o botão 'skin2' por ID e adicionando o evento de clique
const skin2Button = document.getElementById('skin2');
skin2Button.addEventListener('click', () => {
  handleSkin2ButtonClick(skin2Button);
});

// Restaurando o estado do botão 'skin2'
const isSkin2ButtonClicked = getButtonState('buttonState_skin2');
if (isSkin2ButtonClicked) {
  toggleButtonColor(skin2Button);
  skin2Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod skin2
function handleSkin2ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarSkin2();
    buttonElement.textContent = installText;
  } else {
    instalarSkin2();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_skin2', !isInstalled);
}

// Obtendo o botão 'skin3' por ID e adicionando o evento de clique
const skin3Button = document.getElementById('skin3');
skin3Button.addEventListener('click', () => {
  handleSkin3ButtonClick(skin3Button);
});

// Restaurando o estado do botão 'skin3'
const isSkin3ButtonClicked = getButtonState('buttonState_skin3');
if (isSkin3ButtonClicked) {
  toggleButtonColor(skin3Button);
  skin3Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod skin3
function handleSkin3ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarSkin3();
    buttonElement.textContent = installText;
  } else {
    instalarSkin3();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_skin3', !isInstalled);
}

// Obtendo o botão 'skin4' por ID e adicionando o evento de clique
const skin4Button = document.getElementById('skin4');
skin4Button.addEventListener('click', () => {
  handleSkin4ButtonClick(skin4Button);
});

// Restaurando o estado do botão 'skin4'
const isSkin4ButtonClicked = getButtonState('buttonState_skin4');
if (isSkin4ButtonClicked) {
  toggleButtonColor(skin4Button);
  skin4Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod skin4
function handleSkin4ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarSkin4();
    buttonElement.textContent = installText;
  } else {
    instalarSkin4();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_skin4', !isInstalled);
}

// Obtendo o botão 'skin5' por ID e adicionando o evento de clique
const skin5Button = document.getElementById('skin5');
skin5Button.addEventListener('click', () => {
  handleSkin5ButtonClick(skin5Button);
});

// Restaurando o estado do botão 'skin5'
const isSkin5ButtonClicked = getButtonState('buttonState_skin5');
if (isSkin5ButtonClicked) {
  toggleButtonColor(skin5Button);
  skin5Button.textContent = 'Desinstalar';
}

// Função para lidar com a ação de instalação/desinstalação do mod skin5
function handleSkin5ButtonClick(buttonElement) {
  const installText = 'Instalar';
  const uninstallText = 'Desinstalar';

  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarSkin5();
    buttonElement.textContent = installText;
  } else {
    instalarSkin5();
    buttonElement.textContent = uninstallText;
  }

  toggleButtonColor(buttonElement);
  saveButtonState('buttonState_skin5', !isInstalled);
}

// Obtendo o botão 'citizen' por ID e adicionando o evento de clique
const citizenButton = document.getElementById('citizen');
citizenButton.addEventListener('click', () => {
  handleCitizenButtonClick(citizenButton);
  
  // Restaurando o estado do botão 'citizen' após o clique
  const isCitizenButtonDone = getButtonState('buttonState_citizen');
  if (isCitizenButtonDone) {
    citizenButton.textContent = 'Feito!';
  }
});

// Função para lidar com a ação de instalação/desinstalação da citizen Original
function handleCitizenButtonClick(buttonElement) {
  const installText = 'Resetar';
  const doneText = 'Feito!';

  const isDone = buttonElement.classList.contains('done');
  if (!isDone) {
    citizenOriginal();
    buttonElement.textContent = doneText;
    buttonElement.classList.add('done');

    setTimeout(() => {
      buttonElement.textContent = installText;
      buttonElement.classList.remove('done');
    }, 1000); // Volta ao texto "Instalar" após 1 segundo
  } else {
    buttonElement.textContent = installText;
    buttonElement.classList.remove('done');
    // Desinstalar ou fazer outras ações, se necessário
  }

  saveButtonState('buttonState_citizen', !isDone);
}

// Obtendo o botão 'limparCache' por ID e adicionando o evento de clique
const limparCacheButton = document.getElementById('limparCache');
limparCacheButton.addEventListener('click', () => {
  handlelimparCacheButtonClick(limparCacheButton);
  
  // Restaurando o estado do botão 'limparCache' após o clique
  const islimparCacheButtonDone = getButtonState('buttonState_limparCache');
  if (islimparCacheButtonDone) {
    limparCacheButton.textContent = 'Feito!';
  }
});

// Função para lidar com a ação de limpeza de pastas
function handlelimparCacheButtonClick(buttonElement) {
  const limparText = 'Limpar';
  const doneText = 'Feito!';

  const isDone = buttonElement.classList.contains('done');
  if (!isDone) {
    limparCache();
    buttonElement.textContent = doneText;
    buttonElement.classList.add('done');

    setTimeout(() => {
      buttonElement.textContent = limparText;
      buttonElement.classList.remove('done');
    }, 1000); // Volta ao texto "Limpar Pastas" após 1 segundo
  } else {
    buttonElement.textContent = limparText;
    buttonElement.classList.remove('done');
    // Outras ações, se necessário
  }

  saveButtonState('buttonState_limparCache', !isDone);
}

// Função para limpar as pastas
function limparCache() {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'data');
  const pastasParaExcluir = ['nui-storage', 'cache', 'server-cache', 'server-cache-priv'];

  pastasParaExcluir.forEach((pasta) => {
    const pastaCompleta = path.join(pastaDestino, pasta);

    if (fs.existsSync(pastaCompleta)) {
      try {
        fs.rmSync(pastaCompleta, { recursive: true, force: true });
        console.log(`Pasta "${pasta}" excluída com sucesso!`);
      } catch (err) {
        console.error(`Erro ao excluir a pasta "${pasta}":`, err);
      }
    }
  });
}



window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const header = document.querySelector('.header'); // Seleciona o elemento com a classe 'header'

  if (header) {
    if (scrollTop > 0) {
      header.classList.add('fixed-header');
    } else {
      header.classList.remove('fixed-header');
    }
  }
});






////
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
