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
  const arquivoLottus = path.join(modsFolder, 'Graphics Lottus by Dzordi.rpf');

  if (fs.existsSync(arquivoLottus)) {
    try {
      fs.unlinkSync(arquivoLottus);
      console.log('Arquivo "Graphics Lottus" desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "Graphics Lottus":', err);
    }
  } else {
    console.log('Arquivo "Graphics Lottus" não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "Graphics Prime by Dzordi.rpf" instalado durante a instalação
  const arquivoPrime = path.join(modsFolder, 'PRIMEV2.rpf');

  if (fs.existsSync(arquivoPrime)) {
    try {
      fs.unlinkSync(arquivoPrime);
      console.log('desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "Graphics Prime":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "fpsplus.rpf" instalado durante a instalação
  const arquivoFpsPlus = path.join(modsFolder, 'fpsplus.rpf');

  if (fs.existsSync(arquivoFpsPlus)) {
    try {
      fs.unlinkSync(arquivoFpsPlus);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo "fpsplus.rpf":', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }


    // Remove o arquivo "Syles.rpf" instalado durante a instalação
  const arquivoStyles = path.join(modsFolder, 'STYLES.rpf');

  if (fs.existsSync(arquivoStyles)) {
    try {
      fs.unlinkSync(arquivoStyles);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }

  // Remove o arquivo "hyper.rpf" instalado durante a instalação
  const arquivoHyper = path.join(modsFolder, 'hyper.rpf');

  if (fs.existsSync(arquivoHyper)) {
    try {
      fs.unlinkSync(arquivoHyper);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

module.exports = { desinstalarArquivo };
