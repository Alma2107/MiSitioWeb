<?php
session_start();
require_once __DIR__ . '/config.php';

if (isset($_SESSION['usuario'])) {
    $nombre = $_SESSION['usuario'];
    $sql = "DELETE FROM usuarios WHERE nombre=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $nombre);
    $stmt->execute();
    session_destroy();
}

header("Location: index.php");
exit;
