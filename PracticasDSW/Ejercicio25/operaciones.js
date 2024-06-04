function operacionesMatematicas(operacion, a, b) {
    switch (operacion) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return a / b;
        case "residuo":
            return a % b;
        default:
            return 0;
    }
}

function realizarOperacion() {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);
    var operacion = document.getElementById("operacion").value;

    var resultado = operacionesMatematicas(operacion, valorA, valorB);
    document.getElementById("resultado").innerText = "El resultado es: " + resultado;
}
