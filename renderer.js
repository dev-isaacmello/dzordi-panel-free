const { instalarArquivo, instalarGraphicsPrime, instalarHyper, instalarStyles, instalarFpsPlus } = require('./install');
const path = require('path');
const { ipcRenderer } = require('electron');
const { desinstalarArquivo } = require('./uninstall');


// Seletor dos botões "Instalar" e "Desinstalar" usando os IDs que você adicionou
const botaoLottus = document.getElementById('lottus');
const botaoULottus = document.getElementById('ulottus');
const botaoPrime = document.getElementById('prime');
const botaoUPrime = document.getElementById('uprime');
const botaoGhost = document.getElementById('ghost');
const botaoUGhost = document.getElementById('ughost');
const botaoStyles = document.getElementById('styles');
const botaoUStyles = document.getElementById('ustyles');
const botaoHyper = document.getElementById('hyper');
const botaoUHyper = document.getElementById('uhyper');
const botaoFpsPlus = document.getElementById('fpsplus');
const botaoUFpsPlus = document.getElementById('ufpsplus');

// Adicionando os eventos de clique para cada botão
botaoLottus.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  const isInstalled = botaoLottus.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoLottus.textContent = 'Instalar';
  } else {
    instalarArquivo(destino);
    botaoLottus.textContent = 'Instalado';
  }
});

botaoULottus.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoPrime.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'PRIMEV2.rpf');
  const isInstalled = botaoPrime.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoPrime.textContent = 'Instalar';
  } else {
    instalarGraphicsPrime(destino);
    botaoPrime.textContent = 'Instalado';
  }
});

botaoUPrime.addEventListener('click', () => {
  desinstalarArquivo();
  botaoPrime.textContent = 'Instalar';
});

botaoStyles.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'STYLES.rpf');
  const isInstalled = botaoStyles.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoStyles.textContent = 'Instalar';
  } else {
    instalarStyles(destino);
    botaoStyles.textContent = 'Instalado';
  }
});

botaoUStyles.addEventListener('click', () => {
  desinstalarArquivo();
  botaoStyles.textContent = 'Instalar';
});

botaoHyper.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'hyper.rpf');
  const isInstalled = botaoHyper.textContent === 'Instalador';

  if (isInstalled) {
    desinstalarArquivo();
    botaoHyper.textContent = 'Instalar';
  } else {
    instalarHyper(destino);
    botaoHyper.textContent = 'Instalado';
  }
});

botaoUHyper.addEventListener('click', () => {
  desinstalarArquivo();
  botaoHyper.textContent = 'Instalar';
});

botaoFpsPlus.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'fpsplus.rpf');
  const isInstalled = botaoFpsPlus.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoFpsPlus.textContent = 'Instalar';
  } else {
    instalarFpsPlus(destino);
    botaoFpsPlus.textContent = 'Instalado';
  }
});

botaoUFpsPlus.addEventListener('click', () => {
  desinstalarArquivo();
  botaoFpsPlus.textContent = 'Instalar';
});



document.getElementById('minimize-btn').addEventListener('click', () => {
  ipcRenderer.send('minimize');
});

document.getElementById('maximize-btn').addEventListener('click', () => {
  ipcRenderer.send('maximize');
});

document.getElementById('close-btn').addEventListener('click', () => {
  ipcRenderer.send('close');
});
