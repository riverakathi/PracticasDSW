// Arreglo que contiene los nombres de las imágenes de las banderas
let bandera = ["mexico.jpg", "alemania.jpg", "argentina.jpg", "brasil.jpg", "china.jpg","colombia.jpg","francia.jpg","italia.jpg","japon.jpg","peru.jpg"];

// Arreglo que indica la respuesta correcta para cada pregunta
let correcta = [1,0,2,1,2,0,1,2,0,2];

// Arreglo bidimensional que contiene las opciones de respuesta para cada pregunta
let opciones = [];

// Agregar opciones para cada pregunta
opciones.push(["Alemania", "Mexico", "Brasil", "Peru"]);
opciones.push(["Alemania", "Brasil", "China", "Argentina"]);
opciones.push(["Colombia", "Francia", "Argentina", "Italia"]);
opciones.push(["Japon", "Brasil", "Peru", "Francia"]);
opciones.push(["Francia", "Colombia", "China", "Brasil"]);
opciones.push(["Colombia", "Mexico", "Italia", "Peru"]);
opciones.push(["Mexico", "Francia", "Italia", "Argentina"]);
opciones.push(["Mexico", "Peru", "Italia", "Francia"]);
opciones.push(["Japon", "Argentina", "Peru", "China"]);
opciones.push(["Mexico", "Francia", "Peru", "Japon"]);

// Variable que lleva el seguimiento de la posición actual en el juego
let posActual = 0;

// Variable que lleva el seguimiento de la cantidad de respuestas correctas
let cantidadAcertadas = 0;

// Función para comenzar el juego
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    // Oculta la pantalla inicial y muestra la pantalla de juego
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera(); // Carga la primera bandera
}

// Función para cargar la bandera actual y sus opciones
function cargarBandera(){
    if(bandera.length <= posActual){
        terminarJuego(); // Si ya no hay más preguntas, termina el juego
    }
    else{
        limpiarOpciones(); // Limpia las opciones de respuesta
        // Carga la imagen de la bandera y las opciones en la interfaz gráfica
        document.getElementById("imgBandera").src = "img/" + bandera[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

// Función para limpiar las clases CSS de las opciones de respuesta
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

// Función para comprobar la respuesta del jugador
function comprobarRespuesta(opElegida){
    if(opElegida == correcta[posActual]){ // Si la respuesta es correcta
        // Actualiza las clases CSS para indicar que la respuesta fue acertada
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++; // Incrementa la cantidad de respuestas correctas
    }else{ // Si la respuesta es incorrecta
        // Actualiza las clases CSS para indicar que la respuesta fue incorrecta
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        // Muestra la respuesta correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++; // Avanza a la siguiente pregunta
    setTimeout(cargarBandera,1000); // Espera 1 segundo antes de cargar la siguiente pregunta
}

// Función para terminar el juego
function terminarJuego(){
    // Oculta la pantalla de juego y muestra la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Muestra la cantidad de respuestas correctas e incorrectas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = bandera.length - cantidadAcertadas;
}

// Función para volver al inicio del juego
function volverAlInicio(){
    // Oculta la pantalla final y muestra la pantalla inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none"; // Asegura que la pantalla de juego esté oculta
}
