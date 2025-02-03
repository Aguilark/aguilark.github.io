$(function(){
    var imagenes = ['birds1', 'birds2', 'birds3', 'birds4', 'birds5', 'birds6'];
    var clicsTotales = 0;
    var parejaEncontrada = false;
    var celdasAbiertas = 0;
    var primeraCelda, segundaCelda;

    // Llamar a la función para inicializar la funcionalidad
    inicializarJuego();

    function inicializarJuego() {
        // Asignar imágenes aleatorias a las celdas al inicio y en cada reinicio del juego
        asignarImagenesAleatorias();

        // Manejar clic en elementos con clase 'celda'
        $('.celda').click(function() {
            if ($(this).hasClass('descubierta')) {
                // Si la celda ya fue descubierta, no hacer nada
                return;
            }

            clicsTotales++;

            // Descubrir la imagen de la celda temporalmente
            descubrirImagen(this);

            if (celdasAbiertas === 0) {
                primeraCelda = this;
                celdasAbiertas = 1;
            } else {
                segundaCelda = this;
                celdasAbiertas = 2;

                // Comprobar si las dos celdas tienen la misma imagen
                if ($(primeraCelda).hasClass($(segundaCelda).attr('class'))) {
                    parejaEncontrada = true;
                }

                // Esperar un momento y verificar si hay pareja encontrada
                setTimeout(function() {
                    if (!parejaEncontrada) {
                        ocultarTemporalmenteImagen(primeraCelda);
                        ocultarTemporalmenteImagen(segundaCelda);
                    } else {
                        $(primeraCelda).addClass('descubierta');
                        $(segundaCelda).addClass('descubierta');
                        parejaEncontrada = false;
                    }
                    celdasAbiertas = 0;
                }, 800);
            }
        });
    }

    function asignarImagenesAleatorias() {
        // Obtener una copia aleatoria de las imágenes
        var imagenesAleatorias = imagenes.concat(imagenes).sort(function() {
            return 0.5 - Math.random();
        });

        // Asignar las imágenes a las celdas
        $('.celda').each(function(index) {
            $(this).removeClass().addClass('celda ' + imagenesAleatorias[index]);
        });
    }

    function descubrirImagen(celda) {
        // Mostrar la imagen de la celda temporalmente
        var imagen = 'url(img/' + $(celda).attr('class').split(' ')[1] + '.png)';
        $(celda).css('background-image', imagen).addClass('descubierta');
    }

    function ocultarTemporalmenteImagen(celda) {
        // Ocultar la imagen de la celda temporalmente
        $(celda).css('background-image', '').removeClass('descubierta');
    }
});
