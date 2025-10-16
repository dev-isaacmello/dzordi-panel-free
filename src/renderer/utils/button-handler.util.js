class ButtonHandler {
  static toggleButtonState(buttonElement) {
    buttonElement.classList.toggle('clicked');
  }

  static setButtonInstalled(buttonElement) {
    buttonElement.classList.add('clicked');
    buttonElement.textContent = 'Desinstalar';
  }

  static setButtonUninstalled(buttonElement) {
    buttonElement.classList.remove('clicked');
    buttonElement.textContent = 'Instalar';
  }

  static setButtonDone(buttonElement, originalText) {
    buttonElement.classList.add('done');
    buttonElement.textContent = 'Feito!';
    
    setTimeout(() => {
      buttonElement.classList.remove('done');
      buttonElement.textContent = originalText;
    }, 1000);
  }
}

module.exports = ButtonHandler;

