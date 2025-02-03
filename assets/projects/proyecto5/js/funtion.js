$(document).ready(function() {
    var letrasSeleccionadas = [];

    $('table button').on('click', function() {
        if ($(this).text() === 'FINALIZAR') {
            $('table button').prop('disabled', true).addClass('boton-finalizado');
            return;
        }

        var letra = $(this).text();
        letrasSeleccionadas.push(letra);
        actualizarVisualizacion();
    });

    $('.nivel-btn').on('click', function() {
        var imagenPath = 'img/' + $(this).data('imagen');
        $('.dibujo').css('background-image', 'url(' + imagenPath + ')');
        // Limpia el contenido del div de palabra cuando se pulsa un botón de nivel
        $('.palabra .letras').empty();
    });

    function actualizarVisualizacion() {
        var letrasContainer = $('.letras');
        letrasContainer.empty();

        for (var i = 0; i < 10; i++) {
            var letra = letrasSeleccionadas[i] || '';
            var letraElemento = $('<span class="letra"></span>').text(letra);

            if (letra !== '') {
                letraElemento.addClass('subrayado');
            }

            letrasContainer.append(letraElemento);
        }
    }
});
