<?php
session_start();
require 'conexion.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    exit('No autorizado');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $texto = trim($_POST['texto'] ?? '');
    $padre_id = intval($_POST['mensaje_padre'] ?? 0);
    $persona_id = $_SESSION['user_id'];

    if (!$texto || !$padre_id) {
        http_response_code(400);
        exit('Datos incorrectos');
    }

    $stmt = $conexion->prepare("INSERT INTO mensajes (persona_id, mensaje_padre, texto) VALUES (?, ?, ?)");
    $stmt->execute([$persona_id, $padre_id, $texto]);
    echo "ok";
}
