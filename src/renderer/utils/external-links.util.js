const { shell } = require('electron');

class ExternalLinks {
  static openDiscord() {
    shell.openExternal('https://discord.gg/EbxB748zPF');
  }

  static openYoutube() {
    shell.openExternal('https://www.youtube.com/watch?v=3TLbO7qddm4&ab_channel=DzordiCommunity');
  }
}

window.openDiscord = ExternalLinks.openDiscord;
window.openytb = ExternalLinks.openYoutube;

module.exports = ExternalLinks;

