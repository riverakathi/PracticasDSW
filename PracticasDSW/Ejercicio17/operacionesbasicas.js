function realizarOperaciones() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    // Realizar las operaciones
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;

    // Verificar la división por cero
    var division = num2 !== 0 ? num1 / num2 : 'Indefinida';

    // Mostrar los resultados en un alert
    alert('El resultado de la suma es: ' + suma +
          '\nEl resultado de la resta es: ' + resta +
          '\nEl resultado de la multiplicación es: ' + multiplicacion +
          '\nEl resultado de la división es: ' + division);
}
