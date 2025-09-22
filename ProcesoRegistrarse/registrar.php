<?php
session_start();
require_once "conexion.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $clave = $_POST['clave'] ?? '';

    if (!$nombre || !$correo || !$clave) {
        echo json_encode(['success' => false, 'message' => 'Faltan datos obligatorios']);
        exit;
    }

    $clave_hash = password_hash($clave, PASSWORD_BCRYPT);

    try {
        $stmt = $conexion->prepare("INSERT INTO personas (nombre, correo, telefono, clave_hash, estado, creado, actualizado) 
                                    VALUES (?, ?, ?, ?, 'activo', NOW(), NOW())");
        $stmt->execute([$nombre, $correo, $telefono, $clave_hash]);

        $id = $conexion->lastInsertId();
        $_SESSION['usuario_id'] = $id;
        $_SESSION['usuario'] = $nombre;

        echo json_encode([
            'success' => true,
            'user' => ['id' => $id, 'nombre' => $nombre, 'isDeactivated' => false]
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error en el registro: ' . $e->getMessage()]);
    }
}
