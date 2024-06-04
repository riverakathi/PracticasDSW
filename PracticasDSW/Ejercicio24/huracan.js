function avisoHuracan(hayUnHuracan) {
    if (hayUnHuracan) {
        return "Hay un Huracán";
    } else {
        return "Está Soleado";
    }
}

function verificarHuracan() {
    var input = prompt("¿Hay un huracán? (true/false)");

    // Validar si el usuario ingresó "true" o "false"
    if (input !== null && (input.toLowerCase() === "true" || input.toLowerCase() === "false")) {
        var hayHuracan = input.toLowerCase() === "true";
        var mensaje = avisoHuracan(hayHuracan);
        document.getElementById("mensaje").innerText = mensaje;
    } else {
        alert("Por favor, ingresa 'true' o 'false'.");
    }
}



