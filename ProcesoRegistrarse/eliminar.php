<?php
session_start();
require_once "conexion.php";

if (isset($_SESSION['usuario_id'])) {
    $id = $_SESSION['usuario_id'];
    $sql = "DELETE FROM personas WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->execute([$id]);

    session_destroy();
    echo json_encode(['success' => true]);
}
