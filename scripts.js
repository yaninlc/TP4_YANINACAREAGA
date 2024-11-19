document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("name-form");
    const welcomeMessage = document.getElementById("personalized-message");

    // Si ya existe un nombre guardado, lo mostramos
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        welcomeMessage.textContent = `¡Hola, ${storedName}! Bienvenido a la página YNLC.`;
        form.style.display = "none"; // Ocultamos el formulario si ya hay un nombre
    }

    // Evento para manejar el ingreso del nombre
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const userName = document.getElementById("user-name").value.trim();  // Obtiene el valor del nombre

        if (userName) {
            welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido a la página YNLC.`;  // Muestra el mensaje
            form.style.display = "none";  // Oculta el formulario
            localStorage.setItem("userName", userName);  // Guardamos el nombre en el localStorage
        }
    });
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;  // Redirige a la página especificada
}
