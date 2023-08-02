const fs = require('fs-extra');
const path = require('path');

function instalarArquivo(destino) {
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
  const arquivoOrigem = path.join(__dirname, 'mods', 'Graphics Lottus by Dzordi.rpf');
  const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', 'Graphics Lottus by Dzordi.rpf');

  fs.copyFile(arquivoOrigem, arquivoDestino, (err) => {
    if (err) {
      console.error('Erro ao instalar o arquivo:', err);
    } else {
      console.log('Citizen Lottus v2 Instalada com Sucesso!');
    }
  });
}

module.exports = { instalarArquivo };
