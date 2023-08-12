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



function citizenOriginal() {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');
  const pastaOrigem = path.join(__dirname, 'mods', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.rmSync(pastaDestino, { recursive: true, force: true });
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  }

  // Função para copiar uma pasta de forma recursiva
  function copyFolderRecursive(source, target) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    const files = fs.readdirSync(source);

    files.forEach((file) => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        copyFolderRecursive(sourcePath, targetPath);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
  }

  copyFolderRecursive(pastaOrigem, pastaDestino);

  console.log('Pasta "citizen" instalada com sucesso!');
}

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




module.exports = {
  citizenOriginal,
  limparCache,
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
