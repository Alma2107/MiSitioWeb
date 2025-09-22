<?php
$host = "localhost";
$dbname = "cineforo"; // el nombre de tu base de datos
$user = "root";          // usuario por defecto en XAMPP
$pass = "";              // contraseña vacía por defecto en XAMPP

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
