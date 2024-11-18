document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("age-form");
    const ageMessage = document.getElementById("age-message");

    // Evento para manejar la entrada de edad
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const userAge = parseInt(document.getElementById("user-age").value.trim(), 10);

        // Verifica si la edad es mayor o menor o igual a 20
        if (!isNaN(userAge)) {
            if (userAge > 20) {
                ageMessage.textContent = "¡Eres mayor de 20 años!";
            } else {
                ageMessage.textContent = "¡Eres menor o igual a 20 años!";
            }
        } else {
            ageMessage.textContent = "Por favor, ingresa un número válido :).";
        }
    });
});

// Función para la navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
