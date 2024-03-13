function capturarYDesplegarDias() {
    // Arreglo para almacenar los días de la semana
    var diasSemana = [];

    // Capturar los días de la semana
    for (var i = 0; i < 7; i++) {
        var dia = prompt('Ingrese el día de la semana #' + (i + 1));

        // Validar si se ingresó un valor
        if (dia === null || dia.trim() === '') {
            alert('Por favor, ingrese un día válido.');
            return;
        }

        // Agregar el día al arreglo
        diasSemana.push(dia);
    }

    // Desplegar los días en un alert
    alert('Días de la semana capturados:\n' + diasSemana.join(', '));
}
