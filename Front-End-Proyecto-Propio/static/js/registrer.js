// Función para mostrar el mensaje de Registro Exitoso y redirigir
    function mostrarRegistroExitoso() {
        document.getElementById('registro-exitoso').style.display = 'block';
        setTimeout(function() {
        redireccionarAInicio();
        }, 3000); // Cambia el tiempo (en milisegundos) según tus necesidades
    }
    
// Evento al hacer clic en el botón de registro
    document.getElementById('button-registro').addEventListener('click', function(event) {
        // Realizar el proceso de registro (puede ser una llamada AJAX o lo que sea necesario)
    
        // Mostrar el mensaje de Registro Exitoso y redirigir
        mostrarRegistroExitoso();
    
        // Prevenir el envío del formulario (solo para este ejemplo)
        event.preventDefault();
    });
    
       // Función para redirigir a la página de inicio
       function redireccionarAInicio() {
        window.location.href = "inicio.html"; // Cambia esto a la ruta correcta
    }

    // Función para mostrar el mensaje de Registro Exitoso y redirigir
    function mostrarRegistroExitoso() {
        document.getElementById('registro-exitoso').style.display = 'block';
        setTimeout(function() {
            redireccionarAInicio();
        }, 3000); // Cambia el tiempo (en milisegundos) según tus necesidades
    }
    
    // Evento al hacer clic en el botón de registro
    document.getElementById('button-registro').addEventListener('click', function(event) {
        // Realizar el proceso de registro (puede ser una llamada AJAX o lo que sea necesario)
    
        // Mostrar el mensaje de Registro Exitoso y redirigir
        mostrarRegistroExitoso();
    
        // Prevenir el envío del formulario (solo para este ejemplo)
        event.preventDefault();
    });
    
       // Función para redirigir a la página de inicio
       function redireccionarAInicio() {
        window.location.href = "inicio.html"; // Cambia esto a la ruta correcta
    }

