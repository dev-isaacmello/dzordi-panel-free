const { instalarArquivo, instalarGraphicsPrime, instalarHyper, instalarStyles, instalarFpsPlus } = require('./install');
const path = require('path');
const { ipcRenderer } = require('electron');
const { desinstalarArquivo } = require('./uninstall');


// Seletor dos botões "Instalar" e "Desinstalar" usando os IDs que você adicionou

function toggleButtonColor(buttonElement) {
  buttonElement.classList.toggle('clicked');
}

// Função para alterar o texto do botão e ação associada
function toggleButtonTextAndAction(buttonElement, actionFunction) {
  const isInstalled = buttonElement.classList.contains('clicked');
  if (isInstalled) {
    desinstalarArquivo();
    buttonElement.textContent = 'Instalar';
  } else {
    actionFunction();
    buttonElement.textContent = 'Desinstalar';
  }
}

// Função para instalar o Prime
function toggleLottus() {
  const botaoLottus = document.getElementById('lottus');
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  toggleButtonTextAndAction(botaoLottus, () => instalarArquivo(destino));
  toggleButtonColor(botaoLottus);
}

function togglePrime() {
  const botaoPrime = document.getElementById('prime');
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'PRIMEV2.rpf');
  toggleButtonTextAndAction(botaoPrime, () => instalarGraphicsPrime(destino));
  toggleButtonColor(botaoPrime);
}

// Função para instalar o Styles
function toggleStyles() {
  const botaoStyles = document.getElementById('styles');
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'STYLES.rpf');
  toggleButtonTextAndAction(botaoStyles, () => instalarStyles(destino));
  toggleButtonColor(botaoStyles);
}

// Função para instalar o Hyper
function toggleHyper() {
  const botaoHyper = document.getElementById('hyper');
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'hyper.rpf');
  toggleButtonTextAndAction(botaoHyper, () => instalarHyper(destino));
  toggleButtonColor(botaoHyper);
}

// Função para instalar o FPS Plus
function toggleFpsPlus() {
  const botaoFpsPlus = document.getElementById('fpsplus');
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'fpsplus.rpf');
  toggleButtonTextAndAction(botaoFpsPlus, () => instalarFpsPlus(destino));
  toggleButtonColor(botaoFpsPlus);
}

// Adicionar os eventos de clique para cada botão
document.getElementById('lottus').addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  toggleButtonTextAndAction(botaoLottus, () => instalarArquivo(destino));
  toggleButtonColor(botaoLottus);
});

document.getElementById('lottus').addEventListener('click', toggleLottus);
document.getElementById('prime').addEventListener('click', togglePrime);
document.getElementById('styles').addEventListener('click', toggleStyles);
document.getElementById('hyper').addEventListener('click', toggleHyper);
document.getElementById('fpsplus').addEventListener('click', toggleFpsPlus);



document.getElementById('minimize-btn').addEventListener('click', () => {
  ipcRenderer.send('minimize');
});

document.getElementById('maximize-btn').addEventListener('click', () => {
  ipcRenderer.send('maximize');
});

document.getElementById('close-btn').addEventListener('click', () => {
  ipcRenderer.send('close');
});