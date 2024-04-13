function calcularPromedio() {
    var notas = [];
    var asignaturas = ["asignatura1", "asignatura2", "asignatura3", "asignatura4", "asignatura5", "asignatura6", "asignatura7", "asignatura8"];
    var sum = 0;
  
    for (var i = 0; i < asignaturas.length; i++) {
      var nota = document.getElementById(asignaturas[i]).value;
      if (nota === "") {
        alert("Por favor, llene todas las asignaturas.");
        document.getElementById(asignaturas[i]).focus();
        return;
      }
      notas.push(parseFloat(nota));
      sum += notas[i];
    }
  
    var promedio = sum / notas.length;
    alert("El promedio final es: " + promedio.toFixed(2));
  
    if (promedio > 85) {
      alert("Felicidades, está exento de ordinario.");
    } else {
      alert("Debe presentar examen ordinario.");
    }
  }
  