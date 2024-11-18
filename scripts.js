document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("name-form");
    const welcomeMessage = document.getElementById("personalized-message");

    // Evento para manejar el ingreso del nombre
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userName = document.getElementById("user-name").value.trim();
        if (userName) {
            welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido a la página YNLC.`;
            form.style.display = "none"; // Oculta el formulario tras el ingreso
        }
    });
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
