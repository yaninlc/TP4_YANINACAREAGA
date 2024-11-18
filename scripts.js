document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("name-form");
    const welcomeMessage = document.getElementById("personalized-message");

    // Evento para manejar el ingreso del nombre
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const userName = document.getElementById("user-name").value.trim();  // Obtiene el valor del nombre

        if (userName) {
            welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido a la página YNLC.`;  // Muestra el mensaje
            form.style.display = "none";  // Oculta el formulario
        }
    });
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;  // Redirige a la página especificada
}
