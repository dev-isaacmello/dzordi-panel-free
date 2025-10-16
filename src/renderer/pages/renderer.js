const ModInstallerComponent = require('../components/mod-installer.component');
const WindowControls = require('../utils/window-controls.util');
const ImageCarousel = require('../utils/image-carousel.util');
const ExternalLinks = require('../utils/external-links.util');

document.addEventListener('DOMContentLoaded', () => {
  WindowControls.initialize();
  ImageCarousel.initializeCarousels();
  
  const modInstaller = new ModInstallerComponent();

  modInstaller.initializeModButton('freemode1', 'freemode1.rpf', true);
  modInstaller.initializeModButton('freemode2', 'freemode2.rpf', true);
  modInstaller.initializeModButton('freemode3', 'freemode3.rpf', true);
  modInstaller.initializeModButton('freemode4', 'freemode4.rpf', true);
  modInstaller.initializeModButton('freemode5', 'freemode5.rpf', true);

  modInstaller.initializeModButton('skin1', 'skin1.rpf', false);
  modInstaller.initializeModButton('skin2', 'skin2.rpf', false);
  modInstaller.initializeModButton('skin3', 'skin3.rpf', false);
  modInstaller.initializeModButton('skin4', 'skin4.rpf', false);
  modInstaller.initializeModButton('skin5', 'skin5.rpf', false);
  modInstaller.initializeModButton('skin6', 'skin6.rpf', false);

  modInstaller.initializeUtilityButton('limparCache', () => modInstaller.clearCache(), 'Limpar');
  modInstaller.initializeUtilityButton('citizen', () => modInstaller.restoreCitizen(), 'Resetar');
});

