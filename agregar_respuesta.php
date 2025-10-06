<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION["usuario"])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id_mensaje = intval($_POST["id_mensaje"] ?? 0);
    $contenido = trim($_POST["contenido"] ?? "");
    $usuario = $_SESSION["usuario"];

    $sql_id = "SELECT id FROM personas WHERE nombre = ?";
    $stmt = $conn->prepare($sql_id);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();

    if ($user && $contenido) {
        $sql = "INSERT INTO respuestas (id_mensaje, id_persona, contenido) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iis", $id_mensaje, $user["id"], $contenido);
        $stmt->execute();
    }
}
header("Location: foro.php");
exit();
?>
