// operaciones.js

// Declaración de variables
var num1 = 5;
var num2 = 8;

// Utilizar if-else if-else para evaluar las condiciones
if (num1 <= num2) {
    document.write("La primera condición es verdadera: num1 no es mayor que num2<br>");

    if (num2 <= 0) {
        document.write("La segunda condición es verdadera: num2 es menor o igual a cero<br>");

        if (++num1 < num2) {
            document.write("La tercera condición es verdadera: Incrementar uno en num1 no lo hace mayor que num2<br>");
        } else {
            document.write("La tercera condición no es verdadera: Incrementar uno en num1 lo hace mayor o igual que num2<br>");
        }
    } else {
        document.write("La segunda condición no es verdadera: num2 es positivo<br>");
    }
} else {
    document.write("La primera condición no es verdadera: num1 es mayor que num2<br>");
}
