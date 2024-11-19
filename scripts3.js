// Función para manejar las operaciones
function calculate(operation) {
    let num1, num2, result;

    switch (operation) {
        case "multiplicacion":
            num1 = parseFloat(prompt("Ingrese el primer número para multiplicar:"));
            num2 = parseFloat(prompt("Ingrese el segundo número para multiplicar:"));
            if (!isNaN(num1) && !isNaN(num2)) {
                result = num1 * num2;
                alert(`El resultado de la multiplicación es: ${result}`);
            } else {
                alert("Por favor, ingrese valores numéricos válidos.");
            }
            break;

        case "exponente":
            num1 = parseFloat(prompt("Ingrese un número para elevar al cuadrado:"));
            if (!isNaN(num1)) {
                result = Math.pow(num1, 2);
                alert(`El resultado de elevar ${num1} al cuadrado es: ${result}`);
            } else {
                alert("Por favor, ingrese un valor numérico válido.");
            }
            break;

        case "resta":
            num1 = parseFloat(prompt("Ingrese el primer número para restar:"));
            num2 = parseFloat(prompt("Ingrese el segundo número para restar:"));
            if (!isNaN(num1) && !isNaN(num2)) {
                result = num1 - num2;
                alert(`El resultado de la resta es: ${result}`);
            } else {
                alert("Por favor, ingrese valores numéricos válidos.");
            }
            break;

        default:
            alert("Operación no reconocida.");
    }
}

// Función para la navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
