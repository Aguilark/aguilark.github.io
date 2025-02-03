$(function(){
    var clicsError = 0;
    var clicsAcierto = 0;
    var clicsTotales = 0;
    var aciertosEncontrados = 0;

    // Llamar a la función para inicializar la funcionalidad
    inicializarFuncionalidad();

    function inicializarFuncionalidad() {
        // Llamar a la función para mostrar los contadores iniciales
        actualizarContadores();

        // Manejar clic en elementos con clase 'error'
        $('.error').click(function() {
            clicsError++;
            clicsTotales++;
            actualizarContadores();
        });

        asignarAciertosAleatorios();
    }

    function asignarAciertosAleatorios() {
        // Obtener dos posiciones aleatorias para la clase "acierto"
        var nuevaPosicion1 = getRndInteger(1, 16);
        var nuevaPosicion2 = getRndInteger(1, 16);

        // Asignar la clase "acierto" a las celdas en las posiciones aleatorias
        $('#td' + nuevaPosicion1).addClass('acierto');
        $('#td' + nuevaPosicion2).addClass('acierto');

        // Manejar clic en elementos con clase 'acierto'
        $('.acierto').click(function() {
            if ($(this).hasClass('acierto-encontrado')) {
                // Si ya se encontró este acierto, no hacer nada
                return;
            }

            clicsAcierto++;
            clicsTotales++;
            actualizarContadores();

            // Cambiar la imagen de la clase acierto y dejarla fija con la imagen premio.png
            $(this).css('background-image', 'url(img/premio.png)').addClass('acierto-encontrado');

            aciertosEncontrados++;

            if (aciertosEncontrados === 2) {
                // Mostrar mensaje cuando se encuentran 2 aciertos
                mostrarMensajeEnhorabuena();
            }
        });
    }

    function mostrarMensajeEnhorabuena() {
        // Mostrar mensaje de enhorabuena
        var mensaje = "¡ENHORABUENA! Has encontrado los 2 aciertos.";

        // Desactivar el manejo de clics en todas las celdas
        $('td').off('click');

        // Mostrar el mensaje de enhorabuena después de un breve retraso
        setTimeout(function() {
            alert(mensaje);
            // Recargar la página para reiniciar la funcionalidad
            location.reload();
        }, 500);
    }

    // Función para obtener un número entero aleatorio en un rango dado
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function actualizarContadores() {
        // Actualizar contenido del div de contadores
        $('#contadores').html("Clics en error: " + clicsError + "<br>Clics en acierto: " + clicsAcierto + "<br>Clics totales: " + clicsTotales);
    }
});
