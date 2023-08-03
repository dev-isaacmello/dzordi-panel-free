const { instalarArquivo } = require('./install');
const { desinstalarArquivo } = require('./uninstall');
const path = require('path');
const { ipcRenderer } = require('electron');

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
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoLottus.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
  }
});

botaoULottus.addEventListener('click', () => {
  desinstalarArquivo();
  botaoLottus.textContent = 'Instalar';
});

botaoPrime.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Prime by Dzordi.rpf');
  const isInstalled = botaoPrime.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoPrime.textContent = 'Instalar';
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoPrime.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
  }
});

botaoUPrime.addEventListener('click', () => {
  desinstalarArquivo();
  botaoPrime.textContent = 'Instalar';
});

botaoGhost.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  const isInstalled = botaoGhost.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoGhost.textContent = 'Instalar';
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoGhost.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
  }
});

botaoUGhost.addEventListener('click', () => {
  desinstalarArquivo();
  botaoGhost.textContent = 'Instalar';
});

botaoStyles.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  const isInstalled = botaoStyles.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoStyles.textContent = 'Instalar';
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoStyles.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
  }
});

botaoUStyles.addEventListener('click', () => {
  desinstalarArquivo();
  botaoStyles.textContent = 'Instalar';
});

botaoHyper.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  const isInstalled = botaoHyper.textContent === 'Instalador';

  if (isInstalled) {
    desinstalarArquivo();
    botaoHyper.textContent = 'Instalar';
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoHyper.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
  }
});

botaoUHyper.addEventListener('click', () => {
  desinstalarArquivo();
  botaoHyper.textContent = 'Instalar';
});

botaoFpsPlus.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  const isInstalled = botaoFpsPlus.textContent === 'Instalado';

  if (isInstalled) {
    desinstalarArquivo();
    botaoFpsPlus.textContent = 'Instalar';
    botaoLottus.classList.remove('instalado');
  } else {
    instalarArquivo(destino);
    botaoFpsPlus.textContent = 'Instalado';
    botaoLottus.classList.add('instalado');
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