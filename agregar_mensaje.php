<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION["usuario"])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $titulo = trim($_POST["titulo"] ?? "");
    $contenido = trim($_POST["contenido"] ?? "");
    $usuario = $_SESSION["usuario"];

    // Obtener ID persona
    $sql_id = "SELECT id FROM personas WHERE nombre = ?";
    $stmt = $conn->prepare($sql_id);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();

    if ($user && $titulo && $contenido) {
        $sql = "INSERT INTO mensajes (id_persona, titulo, contenido) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss", $user["id"], $titulo, $contenido);
        $stmt->execute();
    }
}
header("Location: foro.php");
exit();
?>
