const fs = require('fs-extra');
const path = require('path');



function instalarFreemode1(destino) {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Agora podemos copiar o arquivo para o destino
  const arquivoOrigem = path.join(__dirname, 'mods', 'freemode1.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode1.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarFreemode2(destino) {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Agora podemos copiar o arquivo para o destino
  const arquivoOrigem = path.join(__dirname, 'mods', 'freemode2.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode2.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}



function instalarFreemode3(destino) {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Agora podemos copiar o arquivo para o destino
  const arquivoOrigem = path.join(__dirname, 'mods', 'freemode3.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode3.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarFreemode4(destino) {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Agora podemos copiar o arquivo para o destino
  const arquivoOrigem = path.join(__dirname, 'mods', 'freemode4.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode4.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarFreemode5(destino) {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Agora podemos copiar o arquivo para o destino
  const arquivoOrigem = path.join(__dirname, 'mods', 'freemode5.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'freemode5.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarSkin1(destino) {
  const arquivoOrigem = path.join(__dirname, 'mods', 'skin1.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin1.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarSkin2(destino) {
  const arquivoOrigem = path.join(__dirname, 'mods', 'skin2.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin2.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarSkin3(destino) {
  const arquivoOrigem = path.join(__dirname, 'mods', 'skin3.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin3.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarSkin4(destino) {
  const arquivoOrigem = path.join(__dirname, 'mods', 'skin4.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin4.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}

function instalarSkin5(destino) {
  const arquivoOrigem = path.join(__dirname, 'mods', 'skin5.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'skin5.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Instalada com Sucesso!');
    }
  });
}




module.exports = {
  instalarFreemode1,
  instalarFreemode2,
  instalarFreemode3,
  instalarFreemode4,
  instalarFreemode5,
  instalarSkin1,
  instalarSkin2,
  instalarSkin3,
  instalarSkin4,
  instalarSkin5
};
