document.addEventListener('DOMContentLoaded', () => {
  setupImageHover('block1', ['./assets/freemode1.jpg', './assets/freemode1night.jpg']);
  setupImageHover('block2', ['./assets/freemode2.jpg', './assets/freemode2fps.jpg', './assets/freemode2night.jpg']);
  setupImageHover('block3', ['./assets/freemode3.jpg', './assets/freemode3night.jpg', './assets/freemode3fps.jpg']);
  setupImageHover('block4', ['./assets/lottus1.jpg', './assets/lottus2.jpg']);
  setupImageHover('block5', ['./assets/prime1.jpg', './assets/prime2.jpg']);
  setupImageHover('finalblock', ['./assets/vippanel.jpg', './assets/vippanel2.jpg', './assets/vippanel3.jpg', './assets/vippanel4.jpg', './assets/vippanel5.jpg' ]);
});

function setupImageHover(blockId, imageSrcList) {
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

  block.addEventListener('mouseenter', () => {
    let interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % imageSrcList.length;
      mainImage.src = imageSrcList[currentImageIndex];
    }, 1000);

    block.addEventListener('mouseleave', () => {
      clearInterval(interval);
      mainImage.src = imageSrcList[0];
      currentImageIndex = 0;
    });
  });
}
