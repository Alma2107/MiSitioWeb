<?php
// Ajustá estas credenciales a tu instalación SAM/MySQL
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = ""; // si tu SAM tiene clave, ponela acá
$DB_NAME = "tucineideal";

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($conn->connect_error) {
  die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Opcional: forzar charset
$conn->set_charset("utf8mb4");
