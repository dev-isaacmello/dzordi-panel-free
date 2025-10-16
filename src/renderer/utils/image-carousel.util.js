class ImageCarousel {
  static setupImageHover(blockId, imageSrcList) {
    const block = document.getElementById(blockId);
    if (!block) {
      console.error(`Block with ID "${blockId}" not found.`);
      return;
    }

    const mainImage = block.querySelector('.mainImage');
    if (!mainImage) {
      console.error(`Main image element not found in block with ID "${blockId}".`);
      return;
    }

    let currentImageIndex = 0;
    let interval;

    block.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageSrcList.length;
        mainImage.src = imageSrcList[currentImageIndex];
      }, 1000);
    });

    block.addEventListener('mouseleave', () => {
      clearInterval(interval);
      mainImage.src = imageSrcList[0];
      currentImageIndex = 0;
    });
  }

  static initializeCarousels() {
    this.setupImageHover('block1', ['./assets/freemode1.jpg', './assets/freemode1night.jpg']);
    this.setupImageHover('block2', ['./assets/freemode2.jpg', './assets/freemode2fps.jpg', './assets/freemode2night.jpg']);
    this.setupImageHover('block3', ['./assets/freemode3.jpg', './assets/freemode3night.jpg', './assets/freemode3fps.jpg']);
    this.setupImageHover('block4', ['./assets/freemode4.jpg', './assets/freemode4night.jpg', './assets/freemode4fps.jpg', './assets/freemode4night2.jpg']);
  }
}

module.exports = ImageCarousel;

