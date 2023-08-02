const { instalarArquivo } = require('./install');
const { desinstalarArquivo } = require('./uninstall');
const path = require('path');

const botaoInstalar = document.getElementById('botao-instalar');
const botaoDesinstalar = document.getElementById('botao-uninstall');

botaoInstalar.addEventListener('click', () => {
  const destino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');
  instalarArquivo(destino);
});

botaoDesinstalar.addEventListener('click', () => {
  desinstalarArquivo();
});
