<?php
session_start();
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'] ?? '';
    $clave  = $_POST['clave'] ?? '';

    $sql = "SELECT * FROM personas WHERE correo = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->execute([$correo]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        if (password_verify($clave, $row['clave_hash'])) {
            if ($row['estado'] === 'desactivado') {
                echo json_encode(['success' => false, 'message' => 'Cuenta desactivada']);
            } else {
                $_SESSION['usuario_id'] = $row['id'];
                $_SESSION['usuario'] = $row['nombre'];
                echo json_encode([
                    'success' => true,
                    'user' => ['id' => $row['id'], 'nombre' => $row['nombre'], 'isDeactivated' => false]
                ]);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
    }
}
