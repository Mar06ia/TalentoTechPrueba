
// Función para mostrar un mensaje
function mostrarMensaje(mensajeId) {
    document.getElementById(mensajeId).style.display = 'block';
}

// Evento al hacer clic en el botón de inicio de sesión
document.getElementById('button-login').addEventListener('click', function(event) {
    // Simulación de verificación de credenciales (reemplaza con tu lógica real)
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verificar credenciales (ejemplo: correo: "admin", contraseña: "123")
    if (email === 'admin@example.com' && password === '123') {
        // Mostrar mensaje de éxito
        mostrarMensaje('mensaje-exito');
        // Ocultar mensaje de error si estaba visible
        document.getElementById('mensaje-error').style.display = 'none';
    } else {
        // Mostrar mensaje de error
        mostrarMensaje('mensaje-error');
        // Ocultar mensaje de éxito si estaba visible
        document.getElementById('mensaje-exito').style.display = 'none';
    }

    // Prevenir el envío del formulario (solo para este ejemplo)
    event.preventDefault();
});

function redireccionarAInicio() {
    window.location.href = "Registro.html"; 
}
