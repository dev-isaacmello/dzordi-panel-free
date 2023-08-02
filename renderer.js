const { instalarArquivo } = require('./install');
const { desinstalarArquivo } = require('./uninstall');
const path = require('path');

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
  instalarArquivo(destino);
});

botaoULottus.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoPrime.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Prime by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoUPrime.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoGhost.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Ghost by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoUGhost.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoStyles.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Styles by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoUStyles.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoHyper.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Hyper by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoUHyper.addEventListener('click', () => {
  desinstalarArquivo();
});

botaoFpsPlus.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics FPSPlus by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoUFpsPlus.addEventListener('click', () => {
  desinstalarArquivo();
});
