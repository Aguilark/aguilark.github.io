// Cache selectors (Almacena referencias para un acceso más rápido)
var lastId, // Variable que almacenará el último id
    topMenu = $("#top-menu"), // Selector para el menú superior
    topMenuHeight = topMenu.outerHeight() + 15, // Altura del menú superior más un margen adicional
    // Todos los elementos de la lista del menú
    menuItems = topMenu.find("a"), // Selector para los enlaces dentro del menú superior
    // Anclas correspondientes a los elementos del menú
    scrollItems = menuItems.map(function() { // Mapea los enlaces del menú para obtener los elementos asociados
        var item = $($(this).attr("href")); // Obtiene el elemento asociado al enlace actual
        if (item.length) { return item; } // Si el elemento existe, lo retorna
    });

// Enlaza el manejador de clics a los elementos del menú
// para poder obtener una animación de desplazamiento elegante
menuItems.click(function(e) {
    var href = $(this).attr("href"), // Obtiene el href del enlace clickeado
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1; // Calcula la posición de desplazamiento

    $('html, body').stop().animate({
        scrollTop: offsetTop // Realiza la animación de desplazamiento
    }, 300); // Duración de la animación en milisegundos
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace
});

// Enlaza al evento de desplazamiento
$(window).scroll(function() {
    // Obtiene la posición de desplazamiento del contenedor
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Obtiene el id del elemento de desplazamiento actual
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop) // Verifica si el elemento está visible en la ventana
            return this;
    });

    // Obtiene el id del elemento actual
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    // Verifica si el id actual es diferente al último id conocido
    if (lastId !== id) {
        lastId = id; // Actualiza el último id conocido
        // Agrega o remueve la clase activa según el id actual
        menuItems
            .parent().removeClass("active") // Remueve la clase activa del elemento padre
            .end().filter("[href='#" + id + "']").parent().addClass("active"); // Agrega la clase activa al elemento correspondiente en el menú
    }
});
