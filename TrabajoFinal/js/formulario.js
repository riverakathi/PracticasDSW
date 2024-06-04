function habilitar() {
  // Obtener el elemento select de la ciudad
  let ciudad = document.getElementById('ciudad');

  // Verificar si se ha seleccionado una ciudad
  if (ciudad.selectedIndex != 1) {
    // Si no se ha seleccionado una ciudad, deshabilitar el elemento de transporte
    document.getElementById("transporte").disabled = true;
  } else {
    // Si se ha seleccionado una ciudad, habilitar el elemento de transporte
    document.getElementById("transporte").disabled = false;
  }
}

function aparecer() {
  // Obtener el elemento select de camisa
  let select = document.getElementById('camisa');
  // Obtener las filas correspondientes a las opciones de talla
  let tr = document.querySelectorAll("tr:nth-child(11),tr:nth-child(12)");
  // Obtener el formulario
  let form = document.getElementById('formulario');

  // Verificar si se ha seleccionado la opción "Si" en el select de camisa
  if (select.selectedIndex == 1) {
    // Si se ha seleccionado "Si", mostrar las opciones de talla y ajustar la altura del formulario
    tr[0].classList.remove('prueba');
    tr[1].classList.remove('prueba');
    form.style.height = '500px';
  } else {
    // Si se ha seleccionado "No", ocultar las opciones de talla y ajustar la altura del formulario
    tr[0].classList.add('prueba');
    tr[1].classList.add('prueba');
    form.style.height = '450px';
  }
}

function mayusculas(e) {
  // Convertir el texto a mayúsculas
  e.value = e.value.toUpperCase();
}

function valideKey(evt) {
  // Obtener el código ASCII de la tecla presionada
  var code = (evt.which) ? evt.which : evt.keyCode;

  // Permitir solo números y la tecla de retroceso
  if (code == 8) { // retroceso.
    return true;
  } else if (code >= 48 && code <= 57) { // es un número.
    return true;
  } else { // otras teclas.
    return false;
  }
}

function validacion() {
  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById('nombres').value;
  let apellido = document.getElementById('apellidos').value;
  let edad = document.getElementById('edad').value;
  let sexo = document.getElementById('sexo').selectedIndex;
  let ciudad = document.getElementById('ciudad').selectedIndex;
  let celular = document.getElementById('celular').value;
  let transporte = document.getElementById('transporte').selectedIndex;
  let camisa = document.getElementById('camisa').selectedIndex;
  let talla = document.getElementById('talla').selectedIndex;

  // Validar que todos los campos obligatorios estén completos
  if (nombre.length == 0) {
    alert('Introduzca un nombre, por favor.');
    return false;
  }

  if (apellido.length == 0) {
    alert('Introduzca un apellido, por favor.');
    return false;
  }

  if (edad.length == 0) {
    alert('Introduzca la edad, por favor.');
    return false;
  }

  if (sexo == "" || sexo == 0) {
    alert('Debe elegir una opcion en la lista de sexos, por favor.');
    return false;
  }

  if (ciudad == "" || ciudad == 0) {
    alert('Debe elegir una ciudad, por favor.');
    return false;
  } else if (ciudad == 1) {
    if (transporte == "" || transporte == 0) {
      alert('Debe elegir una opcion en transporte, por favor.');
      return false;
    }
  }

  if (celular.length == 0) {
    alert('Introduzca un numero de telefono, por favor.');
    return false;
  } else if (celular.length < 10) {
    alert('Introduzca un numero completo, por favor.');
    return false;
  }

  if (camisa == "" || camisa == 0) {
    alert('Debe elegir una opcion en camisa, por favor.');
    return false;
  } else if (camisa == 1) {
    if (talla == "" || talla == 0) {
      alert('Debe elegir un talla, por favor.');
      return false;
    }
  }

  return true;
}

function soloLetras(evt) {
  // Obtener el código ASCII de la tecla presionada
  let letra = (evt.which) ? evt.which : evt.keyCode;

  // Permitir solo letras, la tecla de retroceso y el espacio
  if (letra == 8) {
    return true;
  } else if (letra == 32) {
    return true;
  } else if (letra >= 97 && letra <= 122) {
    return true;
  } else {
    return false;
  }
}

