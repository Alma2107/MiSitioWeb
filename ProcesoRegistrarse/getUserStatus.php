<?php
session_start();
require_once "conexion.php";

if (isset($_SESSION['usuario_id'])) {
    $id = $_SESSION['usuario_id'];
    $sql = "SELECT nombre, estado FROM personas WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->execute([$id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo json_encode([
            'user' => [
                'id' => $id,
                'nombre' => $user['nombre'],
                'isDeactivated' => ($user['estado'] === 'desactivado')
            ]
        ]);
        exit;
    }
}

echo json_encode(['user' => null]);
