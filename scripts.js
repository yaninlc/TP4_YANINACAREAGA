function greetUser() {
    const userName = document.getElementById('user-name').value;
    const greetingMessage = document.getElementById('greeting-message');
    
    if (userName) {
      greetingMessage.textContent = `¡Bienvenido, ${userName}!`;
    } else {
      greetingMessage.textContent = "¡Por favor ingresa tu nombre!";
    }
  }
  