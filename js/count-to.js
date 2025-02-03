(function ($) {
	$.fn.countTo = function (options) { // Extensión de jQuery para contar hasta un número en un elemento HTML
		options = options || {}; // Si no se proporcionan opciones, establece options como un objeto vacío
		
		return $(this).each(function () { // Itera sobre cada elemento en la selección jQuery
			// Establece las opciones para el elemento actual
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'), // Valor inicial obtenido del atributo 'data-from' del elemento
				to:              $(this).data('to'), // Valor final obtenido del atributo 'data-to' del elemento
				speed:           $(this).data('speed'), // Velocidad de conteo obtenida del atributo 'data-speed' del elemento
				refreshInterval: $(this).data('refresh-interval'), // Intervalo de actualización obtenido del atributo 'data-refresh-interval' del elemento
				decimals:        $(this).data('decimals') // Cantidad de decimales obtenida del atributo 'data-decimals' del elemento
			}, options);
			
			// Cuántas veces actualizar el valor y cuánto incrementarlo en cada actualización
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// Referencias y variables que cambiarán con cada actualización
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// Si se encuentra un intervalo existente, primero se borra
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// Inicializa el elemento con el valor inicial
			render(value);
			
			function updateTimer() {
				value += increment; // Incrementa el valor
				loopCount++; // Incrementa el contador de bucle
				
				render(value); // Renderiza el nuevo valor
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value); // Llama a la función de actualización si está definida
				}
				
				if (loopCount >= loops) {
					// Elimina el intervalo y completa el conteo
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value); // Llama a la función de completado si está definida
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings); // Formatea el valor antes de renderizarlo
				$self.html(formattedValue); // Renderiza el valor en el elemento HTML
			}
		});
	};
	
	// Opciones predeterminadas para el plugin countTo
	$.fn.countTo.defaults = {
		from: 0,               // Valor inicial
		to: 0,                 // Valor final
		speed: 1000,           // Duración total del conteo en milisegundos
		refreshInterval: 100,  // Intervalo de actualización en milisegundos
		decimals: 0,           // Número de decimales a mostrar
		formatter: formatter,  // Función para formatear el valor
		onUpdate: null,        // Función de devolución de llamada para cada actualización
		onComplete: null       // Función de devolución de llamada para cuando se completa el conteo
	};
	
	// Función de formateo predeterminada
	function formatter(value, settings) {
		return value.toFixed(settings.decimals); // Formatea el valor con la cantidad de decimales especificada
	}
}(jQuery)); // Fin de la función autoinvocada y pasando jQuery como parámetro
