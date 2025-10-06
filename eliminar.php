<?php
require_once "conexion.php";
session_start();

if (isset($_SESSION["usuario"])) {
    $nombre = $_SESSION["usuario"];

    $sql = "DELETE FROM personas WHERE nombre = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $nombre);

    if ($stmt->execute()) {
        session_unset();
        session_destroy();
        echo "<script>alert('Cuenta eliminada correctamente.'); window.location='index.php';</script>";
    } else {
        echo "<script>alert('Error al eliminar cuenta.'); window.location='index.php';</script>";
    }

    $stmt->close();
} else {
    header("Location: login.php");
    exit();
}

$conn->close();
?>
