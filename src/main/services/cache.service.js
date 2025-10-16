const fs = require('fs-extra');
const path = require('path');
const { FIVEM_PATHS, CACHE_FOLDERS } = require('../../shared/constants');

class CacheService {
  async clearCache() {
    const results = [];

    for (const folder of CACHE_FOLDERS) {
      const folderPath = path.join(FIVEM_PATHS.DATA, folder);

      try {
        if (await fs.pathExists(folderPath)) {
          await fs.remove(folderPath);
          console.log(`Folder "${folder}" deleted successfully!`);
          results.push({ folder, success: true });
        } else {
          console.log(`Folder "${folder}" not found.`);
          results.push({ folder, success: true, skipped: true });
        }
      } catch (error) {
        console.error(`Error deleting folder "${folder}":`, error);
        results.push({ folder, success: false, error: error.message });
      }
    }

    return results;
  }

  async clearSpecificCache(folderName) {
    try {
      const folderPath = path.join(FIVEM_PATHS.DATA, folderName);

      if (await fs.pathExists(folderPath)) {
        await fs.remove(folderPath);
        console.log(`Folder "${folderName}" deleted successfully!`);
        return true;
      }

      console.log(`Folder "${folderName}" not found.`);
      return false;
    } catch (error) {
      console.error(`Error deleting folder "${folderName}":`, error);
      throw error;
    }
  }
}

module.exports = CacheService;

