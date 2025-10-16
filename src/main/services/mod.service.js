const fs = require('fs-extra');
const path = require('path');
const { FIVEM_PATHS, MOD_TYPES } = require('../../shared/constants');

class ModService {
  getModSourcePath(modFile) {
    return path.join(__dirname, '../../../public/mods', modFile);
  }

  getModDestinationPath(modFile) {
    return path.join(FIVEM_PATHS.MODS, modFile);
  }

  async installMod(modFile, isFreemode = false) {
    try {
      if (isFreemode) {
        await this.removeCitizenFolder();
      }

      const sourcePath = this.getModSourcePath(modFile);
      const destinationPath = this.getModDestinationPath(modFile);

      await fs.ensureDir(FIVEM_PATHS.MODS);
      await fs.copyFile(sourcePath, destinationPath);

      console.log(`Mod ${modFile} installed successfully!`);
      return true;
    } catch (error) {
      console.error(`Error installing mod ${modFile}:`, error);
      throw error;
    }
  }

  async uninstallMod(modFile) {
    try {
      const destinationPath = this.getModDestinationPath(modFile);

      if (await fs.pathExists(destinationPath)) {
        await fs.remove(destinationPath);
        console.log(`Mod ${modFile} uninstalled successfully!`);
        return true;
      }

      console.log(`Mod ${modFile} not found. No action needed.`);
      return false;
    } catch (error) {
      console.error(`Error uninstalling mod ${modFile}:`, error);
      throw error;
    }
  }

  async removeCitizenFolder() {
    try {
      if (await fs.pathExists(FIVEM_PATHS.CITIZEN)) {
        await fs.remove(FIVEM_PATHS.CITIZEN);
        console.log('Citizen folder removed successfully!');
      }
    } catch (error) {
      console.error('Error removing citizen folder:', error);
      throw error;
    }
  }

  async restoreOriginalCitizen() {
    try {
      const sourcePath = path.join(__dirname, '../../../public/mods/citizen');
      
      if (await fs.pathExists(FIVEM_PATHS.CITIZEN)) {
        await fs.remove(FIVEM_PATHS.CITIZEN);
      }

      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, FIVEM_PATHS.CITIZEN);
        console.log('Original citizen restored successfully!');
        return true;
      }

      console.log('Original citizen backup not found.');
      return false;
    } catch (error) {
      console.error('Error restoring original citizen:', error);
      throw error;
    }
  }
}

module.exports = ModService;

