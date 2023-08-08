const fs = require('fs-extra');
const path = require('path');

function desinstalarArquivo() {
  const modsFolder = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods');
  const citizenFolder = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir com a desinstalação
  if (fs.existsSync(citizenFolder)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(citizenFolder);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  } else {
    console.log('Pasta "citizen" não encontrada. Nenhuma ação necessária.');
  }

  // Remove o arquivo "Graphics Lottus by Dzordi.rpf" instalado durante a instalação
  const arquivoFreemode1 = path.join(modsFolder, 'freemode1.rpf');

  if (fs.existsSync(arquivoFreemode1)) {
    try {
      fs.unlinkSync(arquivoFreemode1);
      console.log('Arquivo "Graphics Lottus" desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "freemode1":', err);
    }
  } else {
    console.log('Arquivo "Graphics Lottus" não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "Graphics Prime by Dzordi.rpf" instalado durante a instalação
  const arquivoFreemode2 = path.join(modsFolder, 'freemode2.rpf');

  if (fs.existsSync(arquivoFreemode2)) {
    try {
      fs.unlinkSync(arquivoFreemode2);
      console.log('desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "freemode2":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "fpsplus.rpf" instalado durante a instalação
  const arquivoFreemode3 = path.join(modsFolder, 'freemode3.rpf');

  if (fs.existsSync(arquivoFreemode3)) {
    try {
      fs.unlinkSync(arquivoFreemode3);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "freemode3.rpf":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }


    // Remove o arquivo "Syles.rpf" instalado durante a instalação
  const arquivoFreemode4 = path.join(modsFolder, 'freemode4.rpf');

  if (fs.existsSync(arquivoFreemode4)) {
    try {
      fs.unlinkSync(arquivoFreemode4);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo: "freemode4.rpf":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "hyper.rpf" instalado durante a instalação
  const arquivoFreemode5 = path.join(modsFolder, 'freemode5.rpf');

  if (fs.existsSync(arquivoFreemode5)) {
    try {
      fs.unlinkSync(arquivoFreemode5);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo: "freemode5":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

module.exports = { desinstalarArquivo };
