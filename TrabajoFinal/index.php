<?php
//Declarar variable:
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "formulario";

$conexion = mysqli_connect($servidor, $usuario, $clave, $bd);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/formulario.css"> <!-- Enlace a la hoja de estilos del formulario -->
    <link rel="shortcut icon" href="img/fondo.jpg"> <!-- Icono de la página -->
    <link rel="stylesheet" href="./css/navBar.css"> <!-- Enlace a la hoja de estilos de la barra de navegación -->
    <title>Formulario Registro</title> <!-- Título de la página -->
  <link rel="stylesheet" href="formulario.css">
  <link rel="shortcut icon" href="jujutsu.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Barra de navegación -->
  <nav class="navbar">
        <div class="container1">
            <ul class="nav-links">
                <li><a href="index.html" class="nav-button">Inicio</a></li>
                <li><a href="acerca.html" class="nav-button">Acerca de</a></li>
                <li><a href="lugaresturisticos.html" class="nav-button">Lugares turísticos</a></li>
                <li><a href="comidatipica.html" class="nav-button">Comida típica</a></li>
                <li><a href="creador.html" class="nav-button">Contacto del creador</a></li>
                <li><a href="index.php" class="nav-button">Formulario de registro</a></li>
                <li class="nav-dropdown">
                    <a href="#" class="nav-button">Extras</a>
                    <ul class="dropdown-content">
                        <li><a href="cultura.html">Cultura</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Contenedor principal del formulario -->
  <div class="caja">
    <header>
      <h1>Formulario</h1>
    </header>

    <h3>Formulario</h3>
    <table cellspacing="10" cellpadding="2">
      <form class="formulario" action="#" method="post" id="formulario">
        <tr>
          <td>Nombres:</td>
          <td>Apellidos:</td>
        </tr>
        <tr>
          <td><input type="text" id="nombres" name="nombres" onkeyup="mayusculas(this)" onkeypress="return soloLetras(event)"></td>
          <td><input type="text" id="apellidos" name="apellidos" onkeyup="mayusculas(this)" onkeypress="return soloLetras(event)"></td>
        </tr>
        <tr>
          <td>Edad:</td>
          <td>Sexo:</td>
        </tr>
        <tr>
          <td><input type="text" id="edad" name="edad" maxlength="2" onkeypress="return valideKey(event);"></td>
          <td><select class="sexo" id="sexo" name="sexo">
            <option value="1" disabled selected value>Elige una opcion:</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select></td>
        </tr>
        <tr>
          <td>Ciudad:</td>
          <td>Celular: (10 digitos)</td>
        </tr>
        <tr>
          <td><select class="ciudad" name="ciudad" id="ciudad" onchange="habilitar()">
            <option value="1" disabled selected value>Elige una ciudad:</option>
            <option value="Tijuana">Tijuana</option>
            <option value="Tecate">Tecate</option>
            <option value="Rosarito">Rosarito</option>
            <option value="Mexicali">Mexicali</option>
            <option value="Ensenada">Ensenada</option>
          </select></td>
          <td><input type="text" name="celular" id="celular" maxlength="10" value="" onkeypress="return valideKey(event);"></td>
        </tr>
        <tr>
          <td>Transporte:</td>
          <td>Comentarios:</td>
        </tr>
        <tr>
          <td><select class="transporte" name="transporte" id="transporte" disabled>
            <option value="1" disabled selected value>Elige una opcion:</option>
            <option value="No">No</option>
            <option value="Si">Si</option>
          </select></td>
          <td rowspan="3"><textarea value="" name="comentarios" rows="8" cols="21" onkeyup="mayusculas(this)"></textarea></td>
        </tr>
        <tr>
          <td>¿Camisa?:</td>
        </tr>
        <tr>
          <td><select class="camisa" name="camisa" id="camisa" onchange="aparecer()">
            <option value="1" disabled selected value>Elige una opcion:</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select></td>
        </tr>
        <tr class="prueba">
          <td>¿Talla?:</td>
        </tr>
        <tr class="prueba">
          <td><select class="talla" id="talla" name="talla">
            <option value="1" disabled selected value>Elige una opcion:</option>
            <option value="chica">chica</option>
            <option value="mediana">mediana</option>
            <option value="grande">grande</option>
          </select></td>
        </tr>
        <tr>
          <td colspan="2"><input type="submit" name="enviar" id="boton"></td>
        </tr>
      </form>
    </table>
  </div>
  <script type="text/javascript" src="formulario.js"></script>
</body>
</html>

<?php
// if(isset($_POST['enviar'])){
//   // Configuración de la conexión a la base de datos
//   $servidor = "localhost";
//   $usuario = "root"; // Nombre de usuario de MySQL
//   $clave = ""; // Contraseña de MySQL
//   $bd= "formulario"; // Nombre de la base de datos que quieres usar

//   $conexion = mysqli_connect($servidor , $usuario, $clave, $bd);

//   if (!$conexion) {
//     die("Error de conexión: " . mysqli_connect_error());
//   }

//   // Crear conexión
//   $conn = new mysqli($servidor, $usuario, $clave, $bd);

//   // Verificar la conexión
//   if ($conn->connect_error) {
//     die("Error en la conexión: " . $conn->connect_error);
//   }

//   // Obtener los datos del formulario
//   $nombres = $_POST['nombres'];
//   $apellidos = $_POST['apellidos'];
//   $edad = $_POST['edad'];
//   $sexo = $_POST['sexo'];
//   $ciudad = $_POST['ciudad'];
//   $celular = $_POST['celular'];
//   $transporte = $_POST['transporte'];
//   $comentarios = $_POST['comentarios'];
//   $camisa = $_POST['camisa'];
//   $talla = $_POST['talla'];

//   // Query SQL para insertar los datos en la tabla
//   $sql = "INSERT INTO formulario (nombres, apellidos, edad, sexo, ciudad, celular, transporte, comentarios, camisa, talla)
//   VALUES ('$nombres', '$apellidos', '$edad', '$sexo', '$ciudad', '$celular', '$transporte', '$comentarios', '$camisa', '$talla')";

//   // Ejecutar la consulta
//   if ($conn->query($sql) === TRUE) {
//     echo "<script>alert('Datos guardados correctamente');</script>";
//   } else {
//     echo "<script>alert('Error al guardar los datos: " . $conn->error . "');</script>";
//   }

//   // Cerrar la conexión
//   $conn->close();
// }
if(isset($_POST["enviar"])){
  $nombre = $_POST['nombres'];
  $apellidos = $_POST['apellidos'];
  $edad = $_POST['edad'];
  $sexo = $_POST['sexo'];
  $ciudad = $_POST['ciudad'];
  $celular = $_POST['celular'];
  $transporte = $_POST['transporte'];
  $comentario = $_POST['comentarios'];
  $camisa = $_POST['camisa'];
  $talla = $_POST['talla'];

$guardar = "INSERT INTO registro VALUES ('$nombre', '$apellidos', '$edad', 
'$sexo', '$ciudad', '$celular', '$transporte', '$comentario', '$camisa', '$talla', '')";

$ejecutar = mysqli_query($conexion,$guardar);
}
?>



