<?php

if(isset($_POST['registro'])){
    $nombre=$_POST['Nombre'];
    $telefonp=$_POST['Telefono'];
    $correo=$_POST['Correo'];
    $comentarios=$_POST['Comentarios'];

    $guardar = "INSERT INTO contactos VALUES ('$nombre', '$telefono', '$correo', '$cometarios', '')";

    $ejecutar = msqli_query ($conexion, $guardar);
}