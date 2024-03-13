// operaciones.js

function calcularPeso() {
    // Obtener los valores de peso y opción desde los elementos de entrada
    var peso = parseFloat(document.getElementById("peso").value);
    var opcion = parseInt(document.getElementById("opcion").value);
    var peso_tierra = 9.8;  // Gravedad en la Tierra (m/s^2)
    var peso_marte = 3.7;   // Gravedad en Marte (m/s^2)
    var peso_jupiter = 24.8; // Gravedad en Júpiter (m/s^2)
    var resultado;

    // Utilizar if-else if-else para evaluar la opción
    if (opcion === 1) {
        // Calcular el peso en Marte
        resultado = peso * peso_marte;
        document.getElementById("resultado").innerHTML = "Su peso es: " + resultado + " kg en Marte";
    } else if (opcion === 2) {
        // Calcular el peso en Júpiter
        resultado = peso * peso_jupiter;
        document.getElementById("resultado").innerHTML = "Su peso es: " + resultado + " kg en Júpiter";
    } else {
        // Opción no válida
        document.getElementById("resultado").innerHTML = "No existe esa opción. Por favor, seleccione 1 para Marte o 2 para Júpiter.";
    }
}
