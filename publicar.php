<?php
session_start();
require 'conexion.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    exit('No autorizado');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $texto = trim($_POST['texto'] ?? '');
    $titulo = trim($_POST['titulo'] ?? null);
    $persona_id = $_SESSION['user_id'];

    if (!$texto) {
        http_response_code(400);
        exit('Texto vacío');
    }

    $stmt = $conexion->prepare("INSERT INTO mensajes (persona_id, titulo_pelicula, texto) VALUES (?, ?, ?)");
    $stmt->execute([$persona_id, $titulo, $texto]);
    echo "ok";
}
