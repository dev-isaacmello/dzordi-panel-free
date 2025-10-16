const path = require('path');
const fs = require('fs-extra');
const ButtonHandler = require('../utils/button-handler.util');
const ModManagerService = require('../services/mod-manager.service');

class ModInstallerComponent {
  constructor() {
    this.modManager = new ModManagerService();
  }

  async installMod(modFile, isFreemode = false) {
    const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');
    
    if (isFreemode && await fs.pathExists(pastaDestino)) {
      await fs.remove(pastaDestino);
    }

    const arquivoOrigem = path.join(__dirname, '../../../public/mods', modFile);
    const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', modFile);

    await fs.copyFile(arquivoOrigem, arquivoDestino);
  }

  async uninstallMod(modFile) {
    const arquivoDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'mods', modFile);

    if (await fs.pathExists(arquivoDestino)) {
      await fs.remove(arquivoDestino);
    }
  }

  async handleModToggle(modId, modFile, buttonElement, isFreemode = false) {
    const isInstalled = buttonElement.classList.contains('clicked');

    try {
      if (isInstalled) {
        await this.uninstallMod(modFile);
        ButtonHandler.setButtonUninstalled(buttonElement);
      } else {
        await this.installMod(modFile, isFreemode);
        ButtonHandler.setButtonInstalled(buttonElement);
      }

      this.modManager.toggleModInstallation(modId);
    } catch (error) {
      console.error(`Error toggling mod ${modId}:`, error);
    }
  }

  initializeModButton(modId, modFile, isFreemode = false) {
    const button = document.getElementById(modId);
    if (!button) return;

    button.addEventListener('click', () => {
      this.handleModToggle(modId, modFile, button, isFreemode);
    });

    if (this.modManager.isModInstalled(modId)) {
      ButtonHandler.setButtonInstalled(button);
    }
  }

  async clearCache() {
    const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'data');
    const pastasParaExcluir = ['nui-storage', 'cache', 'server-cache', 'server-cache-priv'];

    for (const pasta of pastasParaExcluir) {
      const pastaCompleta = path.join(pastaDestino, pasta);
      if (await fs.pathExists(pastaCompleta)) {
        await fs.remove(pastaCompleta);
      }
    }
  }

  async restoreCitizen() {
    const pastaDestino = path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app', 'citizen');
    const pastaOrigem = path.join(__dirname, '../../../public/mods/citizen');

    if (await fs.pathExists(pastaDestino)) {
      await fs.remove(pastaDestino);
    }

    if (await fs.pathExists(pastaOrigem)) {
      await fs.copy(pastaOrigem, pastaDestino);
    }
  }

  initializeUtilityButton(buttonId, action, actionText) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener('click', async () => {
      try {
        await action();
        ButtonHandler.setButtonDone(button, actionText);
      } catch (error) {
        console.error(`Error executing ${buttonId}:`, error);
      }
    });
  }
}

module.exports = ModInstallerComponent;

