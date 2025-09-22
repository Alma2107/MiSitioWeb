<?php
session_start();
require 'conexion.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    exit('No autorizado');
}

$id = intval($_GET['id'] ?? 0);
$valor = intval($_GET['valor'] ?? 0);
$persona_id = $_SESSION['user_id'];

if (!$id || !in_array($valor, [1,-1])) {
    http_response_code(400);
    exit('Datos inválidos');
}

// Verificar si ya votó
$stmt = $conexion->prepare("SELECT id FROM votos WHERE persona_id=? AND mensaje_id=?");
$stmt->execute([$persona_id, $id]);
$existe = $stmt->fetch();

if ($existe) {
    // Actualizar voto
    $stmt = $conexion->prepare("UPDATE votos SET valor=? WHERE id=?");
    $stmt->execute([$valor, $existe['id']]);
} else {
    // Insertar voto
    $stmt = $conexion->prepare("INSERT INTO votos (persona_id, mensaje_id, valor) VALUES (?, ?, ?)");
    $stmt->execute([$persona_id, $id, $valor]);
}

echo "ok";
