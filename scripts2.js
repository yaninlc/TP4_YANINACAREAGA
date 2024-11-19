// Función para verificar la edad del usuario
function checkAge() {
    const userAge = document.getElementById('user-age').value;
    const ageMessage = document.getElementById('age-message');
    
    if (userAge) {
      if (userAge > 20) {
        ageMessage.textContent = "Eres mayor a 20 años :).";
      } else if (userAge < 20) {
        ageMessage.textContent = "Eres menor a 20 años.:(";
      } else {
        ageMessage.textContent = "Tienes 20 años.:)";
      }
    } else {
      ageMessage.textContent = "Por favor, ingresa tu edad.";
    }
  }
  