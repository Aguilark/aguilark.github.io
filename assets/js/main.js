/* ===================================================================
    
  Theme Name:  Koyta - Personal Portfolio HTML Template
  Author: themetum
  Description: Koyta is a personal portfolio html template.
  Version: 1.0
    
* ================================================================= */
(function ($) {
	"use strict"; // Modo estricto de JavaScript para evitar errores comunes

	$(document).on('ready', function () { // Cuando el documento HTML está completamente cargado y listo

		/* ==================================================
			# Bootstrap Tooltip Scroll
		 =============================================== */
		// Inicialización de los tooltips de Bootstrap para elementos con el atributo 'data-bs-toggle="tooltip"'
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl); // Crea un nuevo tooltip de Bootstrap para cada elemento
		});

		/* ==================================================
			# Portfolio Menu
		 =============================================== */
		// Inicialización del plugin MixItUp para filtrar y ordenar elementos de portafolio
		$('#portfolio').mixItUp({
			selectors: {
				target: '.tile', // Elementos a mezclar
				filter: '.filter', // Botones de filtro
				sort: '.sort-btn' // Botones de ordenamiento
			},
			animation: {
				animateResizeContainer: false, // Animación de redimensionamiento de contenedor desactivada
				effects: 'fade scale' // Efectos de animación al mezclar
			}
		});

		/* ==================================================
			# Data Background
		 ===============================================*/
		// Establece el fondo de los elementos con el atributo 'data-background'
		$("[data-background]").each(function () {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		});

		/* ==================================================
			# Parallax Background
		 ===============================================*/


		/* ==================================================
			# Fun Factor Init
		===============================================*/
		// Inicialización de los contadores para mostrar los factores de diversión
		$('.timer').countTo(); // Inicia el contador
		$('.fun-fact').appear(function () {
			$('.timer').countTo(); // Inicia el contador cuando los factores de diversión aparecen
		}, {
			accY: -100 // Ajuste de compensación vertical
		});

		/* ==================================================
			# Wow Init
		 ===============================================*/
		// Inicialización de la biblioteca WOW.js para animaciones al hacer scroll
		var wow = new WOW({
			boxClass: 'wow', // Clase CSS de los elementos animados
			animateClass: 'animated', // Clase CSS para las animaciones
			offset: 0, // Distancia desde el borde inferior de la ventana hasta el elemento antes de que la animación se active
			mobile: true, // Habilita las animaciones en dispositivos móviles
			live: true // Actúa sobre el contenido cargado de forma asíncrona
		});
		wow.init(); // Inicia la biblioteca WOW.js

		/* ==================================================
			# Smooth Scroll
		 =============================================== */
		// Desplazamiento suave al hacer clic en los enlaces con la clase 'smooth-menu'
		$('a.smooth-menu').on('click', function (event) {
			var $anchor = $(this); // Selecciona el enlace
			var headerH = '85'; // Altura del encabezado
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px" // Animación de desplazamiento
			}, 1500, 'easeInOutExpo'); // Duración y tipo de animación
			event.preventDefault(); // Previene el comportamiento predeterminado del enlace
		});

		/* ==================================================
			# imagesLoaded active
		===============================================*/
		// Ejecuta código una vez que las imágenes en la cuadrícula de portafolio se hayan cargado
		$('#portfolio-grid,.blog-masonry').imagesLoaded(function () {

			/* Filter menu */
			// Filtrado de elementos de la cuadrícula de portafolio
			$('.mix-item-menu').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter'); // Obtiene el valor del filtro
				$grid.isotope({
					filter: filterValue // Aplica el filtro
				});
			});

			/* filter menu active class  */
			// Establece la clase activa en el botón de filtro seleccionado
			$('.mix-item-menu button').on('click', function (event) {
				$(this).siblings('.active').removeClass('active'); // Elimina la clase activa de los hermanos
				$(this).addClass('active'); // Agrega la clase activa al elemento actual
				event.preventDefault(); // Previene el comportamiento predeterminado del botón
			});

			/* Filter active */
			var $grid = $('#portfolio-grid').isotope({
				itemSelector: '.pf-item', // Selector de los elementos de la cuadrícula de portafolio
				percentPosition: true, // Activa la posición porcentual
				masonry: {
					columnWidth: '.pf-item', // Ancho de columna de la cuadrícula de portafolio
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item', // Selector de los elementos de la cuadrícula de blog
				percentPosition: true, // Activa la posición porcentual
				masonry: {
					columnWidth: '.blog-item', // Ancho de columna de la cuadrícula de blog
				}
			});

		});

		/* ==================================================
			# Typing Text
		 ===============================================*/
		// Efecto de escritura para texto
		$(".typed").each(function () {
			var typed = new Typed('.typed', {
				stringsElement: '.typed-strings', // Selector de las cadenas de texto
				loop: true, // Bucle infinito
				typeSpeed: 100, // Velocidad de escritura
				backSpeed: 30, // Velocidad de retroceso
				backDelay: 2500, // Retraso antes de retroceder
			});
		});

		/* ==================================================
			# Partner Carousel
		 ===============================================*/
		// Carrusel de socios
		$('.partner-sldr').owlCarousel({
			loop: true, // Bucle infinito
			margin: 90, // Margen entre elementos
			nav: false, // Flechas de navegación
			dots: false, // Indicadores de puntos
			autoplay: true, // Reproducción automática
			responsive: { // Configuración de respuesta
				0: {
					items: 2 // Número de elementos a mostrar en dispositivos pequeños
				},
				600: {
					items: 4 // Número de elementos a mostrar en tabletas
				},
				1000: {
					items: 5 // Número de elementos a mostrar en pantallas grandes
				}
			}
		});

		/* ==================================================
			# Partner Carousel
		 ===============================================*/
		// Carrusel de feed
		$('.feed-sldr').owlCarousel({
			loop: true, // Bucle infinito
			margin: 0, // Margen entre elementos
			nav: true, // Flechas de navegación
			dots: false, // Indicadores de puntos
			autoplay: true, // Reproducción automática
			responsive: { // Configuración de respuesta
				0: {
					items: 1 // Número de elementos a mostrar en dispositivos pequeños
				},
				600: {
					items: 1 // Número de elementos a mostrar en tabletas
				},
				1000: {
					items: 1 // Número de elementos a mostrar en pantallas grandes
				}
			}
		});

		/* ==================================================
			#  Blog Slider
		 ===============================================*/
		// Carrusel de blog
		$('.blog-sldr').owlCarousel({
			margin: 30, // Margen entre elementos
			nav: true, // Flechas de navegación
			dots: false, // Indicadores de puntos
			responsive: { // Configuración de respuesta
				0: {
					items: 1 // Número de elementos a mostrar en dispositivos pequeños
				},
				600: {
					items: 1 // Número de elementos a mostrar en tabletas
				},
				768: {
					items: 2 // Número de elementos a mostrar en dispositivos medianos
				},
				991: {
					items: 3 // Número de elementos a mostrar en dispositivos grandes
				}
			}
		});

		/* ==================================================
			# Hero Slider Carousel
		 ===============================================*/
		// Carrusel del slider de héroe
		$('.hero-slider').owlCarousel({
			loop: true, // Bucle infinito
			nav: true, // Flechas de navegación
			dots: false, // Indicadores de puntos
			autoplay: true, // Reproducción automática
			autoplayTimeout: 5000, // Tiempo de espera para la reproducción automática
			items: 1, // Número de elementos a mostrar
			navText: [ // Texto de las flechas de navegación
				"<i class='ti-angle-left'></i>",
				"<i class='ti-angle-right'></i>"
			],
		});

		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		// Inicialización de Magnific Popup para imágenes y videos emergentes
		$(".popup-link").magnificPopup({
			type: 'image', // Tipo de contenido
			// otras opciones
		});

		$(".popup-gallery").magnificPopup({
			type: 'image', // Tipo de contenido
			gallery: {
				enabled: true // Habilita la galería
			},
			// otras opciones
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe", // Tipo de contenido
			mainClass: "mfp-fade", // Clase principal
			removalDelay: 160, // Retraso de eliminación
			preloader: false, // Preloader
			fixedContentPos: false // Posición de contenido fijo
		});

		$('.magnific-mix-gallery').each(function () {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function () {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function () {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});

		/* ==================================================
			Preloader Init
		 ===============================================*/
		// Oculta el preloader cuando todas las imágenes estén cargadas
		$(window).on('load', function () {
			$(".se-pre-con").fadeOut("slow");
		});

		/* ==================================================
			Contact Form Validations
		================================================== */
		// Validación y envío del formulario de contacto mediante AJAX
		$(function () {
			var form = $('#contact-form'); // Selector del formulario
			var formMessages = $('.form-message'); // Selector del mensaje de respuesta

			$(form).submit(function (e) {
				e.preventDefault(); // Previene el envío predeterminado del formulario
				var formData = $(form).serialize(); // Serializa los datos del formulario

				$.ajax({
					type: 'POST',
					url: $(form).attr('action'), // URL del script de procesamiento del formulario
					data: formData // Datos del formulario
				})
					.done(function (response) {
						$(formMessages).removeClass('error'); // Elimina la clase de error
						$(formMessages).addClass('success'); // Agrega la clase de éxito
						$(formMessages).text(response); // Establece el texto del mensaje
						$('#contact-form input,#contact-form textarea').val(''); // Limpia el formulario
					})
					.fail(function (data) {
						$(formMessages).removeClass('success'); // Elimina la clase de éxito
						$(formMessages).addClass('error'); // Agrega la clase de error

						if (data.responseText !== '') {
							$(formMessages).text(data.responseText); // Establece el texto del mensaje de error
						} else {
							$(formMessages).text('Oops! An error occured and your message could not be sent.'); // Mensaje de error genérico
						}
					});
			});
		});

		/* ==================================================
		# Menu
		===============================================*/
		// Alternar menú de navegación
		$('.menu-tab').click(function () {
			$('.menu-hide').toggleClass('show'); // Agrega o elimina la clase 'show' del menú oculto
			$('.menu-tab').toggleClass('active'); // Agrega o elimina la clase 'active' del botón del menú
		});
		$('.menu-hide-link').click(function () {
			$('.menu-hide').removeClass('show'); // Elimina la clase 'show' del menú oculto
			$('.menu-tab').removeClass('active'); // Elimina la clase 'active' del botón del menú
		});


		/* ==================================================
			# Scroll to top
		 =============================================== */
		// Botón de desplazamiento superior
		var mybutton = document.getElementById("scrtop");

		window.onscroll = function () { scrollFunction() };

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block"; // Muestra el botón cuando se desplaza hacia abajo
			} else {
				mybutton.style.display = "none"; // Oculta el botón cuando está en la parte superior
			}
		}
	}); // Fin de la función ready del documento
})(jQuery); // Fin de la función principal
 // End jQuery

// Funciones para mostrar colaboraciones visibles
function visibleCollabDesktop() {
	// Muestra la colaboración de escritorio y oculta la colaboración web
	document.getElementById("desktopColab").style.display = "inline";
	document.getElementById("webColab").style.display = "none";
}

function visibleCollabWeb() {
	// Muestra la colaboración web y oculta la colaboración de escritorio
	document.getElementById("desktopColab").style.display = "none";
	document.getElementById("webColab").style.display = "inline";
}

function visibleCollab() {
	// Muestra ambas colaboraciones
	document.getElementById("desktopColab").style.display = "inline";
	document.getElementById("webColab").style.display = "inline";
}

"use strict"; // Uso estricto de JavaScript

// Spinner
var spinner = function () {
	// Función para ocultar el spinner después de un tiempo
	setTimeout(function () {
		if ($('#spinner').length > 0) {
			$('#spinner').removeClass('show'); // Quita la clase 'show' del spinner
		}
	}, 1); // Tiempo de espera para mostrar el spinner (en milisegundos)
};
spinner(); // Llama a la función spinner

// Iniciar wowjs para animaciones al hacer scroll
new WOW().init();

// Navbar pegajoso
$(window).scroll(function () {
	// Agrega sombra al navbar y lo fija en la parte superior cuando el usuario hace scroll hacia abajo
	if ($(this).scrollTop() > 300) {
		$('.sticky-top').addClass('shadow-sm').css('top', '0px');
	} else {
		$('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
	}
});

// Botón de volver arriba
$(window).scroll(function () {
	// Muestra u oculta el botón de volver arriba cuando el usuario hace scroll
	if ($(this).scrollTop() > 300) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function () {
	// Animación para volver arriba cuando se hace clic en el botón
	$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
	return false;
});
