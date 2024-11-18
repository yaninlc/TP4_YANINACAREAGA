document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("age-form");
    const ageMessage = document.getElementById("age-message");

    // Evento para manejar la entrada de edad
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const userAge = parseInt(document.getElementById("user-age").value.trim(), 10);

        // Verifica la condición de la edad
        if (!isNaN(userAge)) {
            if (userAge > 20) {
                ageMessage.textContent = "¡Eres mayor de 20 años! :)";
            } else if (userAge === 20) {
                ageMessage.textContent = "¡Tienes exactamente 20 años! :)";
            } else {
                ageMessage.textContent = "¡Eres menor a 20 años! :(";
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

