function mostrarMensaje() {
    alert("Gracias por tu interés en Style Models. ¡Pronto nos pondremos en contacto contigo!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
});