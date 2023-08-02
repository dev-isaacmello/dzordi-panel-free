const fs = require('fs-extra');
const path = require('path');

function desinstalarArquivo() {
  const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');

  // Verifica se a pasta "citizen" existe antes de prosseguir com a desinstalação
  if (fs.existsSync(pastaDestino)) {
    try {
      // Exclui a pasta "citizen" de forma síncrona (bloqueante)
      fs.removeSync(pastaDestino);
      console.log('Pasta "citizen" excluída com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir a pasta "citizen":', err);
      return;
    }
  } else {
    console.log('Pasta "citizen" não encontrada. Nenhuma ação necessária.');
  }

  // Remove o arquivo instalado durante a instalação
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');

  if (fs.existsSync(arquivoDestino)) {
    try {
      fs.unlinkSync(arquivoDestino);
      console.log('Arquivo desinstalado com sucesso!');
    } catch (err) {
      console.error('Erro ao desinstalar o arquivo:', err);
    }
  } else {
    console.log('Arquivo não encontrado. Nenhuma ação necessária.');
  }
}

module.exports = { desinstalarArquivo };
