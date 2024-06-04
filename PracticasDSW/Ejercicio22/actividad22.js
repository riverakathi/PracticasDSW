// Propiedades de los arreglos
//let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; 

// Visualizar los días de la semana
//document.write("<p>Días de la semana: " + diasSemana.join(", ") + "</p>");

// Agregar un elemento al arreglo
//diasSemana.push("NuevoDía");
//document.write("<p>Días de la semana (con nuevo día): " + diasSemana.join(", ") + "</p>");

// Eliminar un elemento del arreglo
//diasSemana.pop();
//document.write("<p>Días de la semana (sin nuevo día): " + diasSemana.join(", ") + "</p>");

// Sumar números del 1 al 5 usando while
//let suma = 0;
//let contador = 1;
//while (contador <= 5) {
//  suma += contador;
//  contador++;
//}
//document.write("<p>Suma del 1 al 5: " + suma + "</p>"); // Debería imprimir 15

// Obtener factorial de 5 usando do while
//let factorial = 1;
//let num = 5;
//do {
  //factorial *= num;
  //num--;
//} while (num > 0);
//document.write("<p>Factorial de 5: " + factorial + "</p>"); // Debería imprimir 120

// Mostrar "Hola" siete veces, con mensajes especiales
// for (let i = 1; i <= 7; i++) {
//  if (i === 4) {
//    document.write("<p>Soy el 4to</p>");
//  } else {
//    document.write("<p>Hola</p>");
//  }
//}
//document.write("<p>Acabamos de saludar</p>");

// Ejemplo de for in, forEach y for of con un arreglo de meses
//let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// for in
//document.write("<p>Meses usando for in:</p>");
//for (let index in meses) {
  //document.write("<p>" + meses[index] + "</p>");
//}

// forEach
//document.write("<p>Meses usando forEach:</p>");
//meses.forEach(mes => document.write("<p>" + mes + "</p>"));

// for of
//document.write("<p>Meses usando for of:</p>");
//for (let mes of meses) {
  //document.write("<p>" + mes + "</p>");
//}

// Omitir Julio y agregar Diciembre fuera del arreglo
//meses.splice(6, 1); // Elimina Julio
//let diciembre = "Diciembre";
// meses.push(diciembre);

// Mostrar todos los meses incluyendo Diciembre
//document.write("<p>Meses incluyendo Diciembre:</p>");
// for (let mes of meses) {
  // document.write("<p>" + mes + "</p>");
// } 
