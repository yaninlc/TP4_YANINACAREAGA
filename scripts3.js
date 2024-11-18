// Función para la navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}

// Función para manejar las operaciones
function calculate(operation) {
    let num1, num2, result;
    switch (operation) {
        case "multiplicacion":
            num1 = prompt("Ingrese el primer número:");
            num2 = prompt("Ingrese el segundo número:");
            if (!isNaN(num1) && !isNaN(num2)) {
                result = num1 * num2;
                alert(`El resultado de la multiplicación es: ${result}`);
            } else {
                alert("Por favor, ingrese números válidos.");
            }
            break;
        case "exponente":
            num1 = prompt("Ingrese un número:");
            if (!isNaN(num1)) {
                result = Math.pow(num1, 2);
                alert(`El resultado de elevar al cuadrado es: ${result}`);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
            break;
        case "resta":
            num1 = prompt("Ingrese el primer número:");
            num2 = prompt("Ingrese el segundo número:");
            if (!isNaN(num1) && !isNaN(num2)) {
                result = num1 - num2;
                alert(`El resultado de la resta es: ${result}`);
            } else {
                alert("Por favor, ingrese números válidos.");
            }
            break;
        default:
            alert("Operación no reconocida.");
    }
}
