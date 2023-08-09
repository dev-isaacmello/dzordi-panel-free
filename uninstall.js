const fs = require('fs', 'fs-extra');
const path = require('path');

function desinstalarFreemode1() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode1.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

function desinstalarFreemode2() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode2.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

function desinstalarFreemode3() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode3.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

function desinstalarFreemode4() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode4.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

function desinstalarFreemode5() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode5.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

function desinstalarSkin1() {
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin1.rpf');

  // Verifica se o arquivo de destino existe antes de prosseguir
  if (fs.existsSync(arquivoDestino)) {
    try {
      // Remove o arquivo de destino de forma síncrona (bloqueante)
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}


module.exports = { 
  desinstalarFreemode1, 
  desinstalarFreemode2, 
  desinstalarFreemode3, 
  desinstalarFreemode4, 
  desinstalarFreemode5, 
  desinstalarSkin1};
