function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

var numero = prompt("Ingrese un número:");
numero = parseFloat(numero); // Convertir la entrada a un número de coma flotante

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else {
    var resultado = verificarParImpar(numero);
    alert(resultado);
}
