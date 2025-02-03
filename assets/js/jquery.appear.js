/*
* jQuery.appear
* https://github.com/bas2k/jquery.appear/
* http://code.google.com/p/jquery-appear/
* http://bas2k.ru/
*
* Copyright (c) 2009 Michael Hixson
* Copyright (c) 2012-2014 Alexander Brovikov
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
(function($) { // Función de encapsulamiento

    "use strict"; // Uso estricto de JavaScript

    $.fn.appear = function(fn, options) { // Extensión de jQuery para detectar cuándo un elemento está visible en la ventana

        var settings = $.extend({ // Extensión de las opciones predeterminadas con las proporcionadas por el usuario

            // Datos arbitrarios para pasar a fn
            data: undefined,

            // ¿Llamar a fn solo en la primera aparición?
            one: true,

            // Precisión en X e Y
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() { // Iteración sobre cada elemento en la selección jQuery

            var t = $(this); // Elemento actual

            // Si no hay una función fn proporcionada, simplemente dispara el evento 'appear' personalizado y devuelve
            if (!fn) {
                t.trigger('appear', settings.data); // Dispara el evento 'appear' con los datos proporcionados
                return;
            }

            var w = $(window); // Objeto de ventana

            // Función para verificar si el elemento está visible en la ventana
            var check = function() {
                if (!t.is(':visible')) { // Si el elemento no está visible en la ventana
                    t.appeared = false; // Marca el elemento como no aparecido
                    return;
                }

                // Verifica si el elemento está dentro de la ventana visible considerando la precisión en X e Y
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    // Dispara el evento 'appear' si el elemento está dentro de la ventana visible
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    // Marca el elemento como no aparecido si está fuera de la vista
                    t.appeared = false;
                }
            };

            // Función modificada con lógica adicional
            var modifiedFn = function() {
                t.appeared = true; // Marca el elemento como visible

                if (settings.one) { // Si se supone que esto sucede solo una vez
                    w.unbind('scroll', check); // Elimina la comprobación en el evento de desplazamiento
                    var i = $.inArray(check, $.fn.appear.checks); // Encuentra la función de comprobación en la lista de comprobaciones
                    if (i >= 0) $.fn.appear.checks.splice(i, 1); // Elimina la función de comprobación de la lista de comprobaciones
                }

                // Ejecuta la función original
                fn.apply(this, arguments);
            };

            // Vincula la función modificada al elemento
            if (settings.one) t.one('appear', settings.data, modifiedFn); // Vincula el evento 'appear' una vez
            else t.bind('appear', settings.data, modifiedFn); // Vincula el evento 'appear' varias veces

            // Verifica cuando la ventana se desplaza
            w.scroll(check);

            // Agrega la función de comprobación a la lista de comprobaciones
            $.fn.appear.checks.push(check);

            // Ejecuta la comprobación ahora
            (check)();
        });
    };

    // Variables y funciones adicionales para el plugin appear
    $.extend($.fn.appear, {
        checks: [], // Lista de funciones de comprobación
        timeout: null,

        // Procesa la lista de comprobaciones
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        // Comprueba la lista de comprobaciones de forma asíncrona
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    // Ejecuta las comprobaciones cuando se llaman estos métodos
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            };
        }
    });

})(jQuery); // Pasa jQuery como parámetro y se autoinvoca para evitar conflictos de nombres y mantener el alcance local
