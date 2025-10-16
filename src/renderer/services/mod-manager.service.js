const { ipcRenderer } = require('electron');

class ModManagerService {
  constructor() {
    this.installedMods = this.loadInstalledMods();
  }

  loadInstalledMods() {
    const mods = {};
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      if (key.startsWith('buttonState_')) {
        const modId = key.replace('buttonState_', '');
        mods[modId] = JSON.parse(localStorage.getItem(key));
      }
    });
    
    return mods;
  }

  isModInstalled(modId) {
    return this.installedMods[modId] === true;
  }

  setModInstalled(modId, installed) {
    this.installedMods[modId] = installed;
    localStorage.setItem(`buttonState_${modId}`, JSON.stringify(installed));
  }

  toggleModInstallation(modId) {
    const currentState = this.isModInstalled(modId);
    this.setModInstalled(modId, !currentState);
    return !currentState;
  }

  getAllInstalledMods() {
    return Object.keys(this.installedMods).filter(modId => this.installedMods[modId]);
  }
}

module.exports = ModManagerService;

