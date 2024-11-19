// Función para mostrar el mensaje al hacer clic en los botones
function showMessage(operation) {
    let message = "";
    
    switch(operation) {
      case "multiplicación":
        message = "Por favor, ingresa los dos números para multiplicar.";
        break;
      case "exponente":
        message = "Por favor, ingresa el número para elevar al cuadrado.";
        break;
      case "resta":
        message = "Por favor, ingresa los dos números para restar.";
        break;
      default:
        message = "Error: Operación desconocida.";
    }
    
    alert(message);
  }
  
