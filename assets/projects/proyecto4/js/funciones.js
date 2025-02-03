var resultado;

$(function () {
    // Operación de suma
    $('#sumar').click(function () {
        var num1 = parseFloat($('#numero1').val());
        var num2 = parseFloat($('#numero2').val());

        if (isNaN(num1) || isNaN(num2)) {
            $('#resultado').text("Debes introducir valores numéricos");
        } else {
            resultado = num1 + num2;
            $('#resultado').text(resultado);
        }
    });

    // Operación de resta
    $('#restar').click(function () {
        var num1 = parseFloat($('#numero1').val());
        var num2 = parseFloat($('#numero2').val());

        if (isNaN(num1) || isNaN(num2)) {
            $('#resultado').text("Debes introducir valores numéricos");
        } else {
            resultado = num1 - num2;
            $('#resultado').text(resultado);
        }
    });

    // Operación de multiplicación
    $('#multiplicar').click(function () {
        var num1 = parseFloat($('#numero1').val());
        var num2 = parseFloat($('#numero2').val());

        if (isNaN(num1) || isNaN(num2)) {
            $('#resultado').text("Debes introducir valores numéricos");
        } else {
            resultado = num1 * num2;
            $('#resultado').text(resultado);
        }
    });

    // Operación de división
    $('#dividir').click(function () {
        var num1 = parseFloat($('#numero1').val());
        var num2 = parseFloat($('#numero2').val());

        if (isNaN(num1) || isNaN(num2)) {
            $('#resultado').text("Debes introducir valores numéricos");
        } else {
            if (num2 !== 0) {
                resultado = num1 / num2;
                $('#resultado').text(resultado);
            } else {
                $('#resultado').text("No puedes dividir por cero");
            }
        }
    });

    // Lógica para el botón Reset
    $('#resetBtn').click(function () {
        // Limpiar los campos de entrada y el resultado
        $('#numero1').val('');
        $('#numero2').val('');
        $('#resultado').text('0');
    });
});
