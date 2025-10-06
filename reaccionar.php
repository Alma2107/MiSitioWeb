<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION["usuario"])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $tipo = $_POST["tipo"];
    $id_mensaje = intval($_POST["id_mensaje"]);
    $usuario = $_SESSION["usuario"];

    $sql_id = "SELECT id FROM personas WHERE nombre = ?";
    $stmt = $conn->prepare($sql_id);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();
    $id_persona = $user["id"];

    // Evita duplicados: si ya votó, actualiza
    $sql = "INSERT INTO votos (id_persona, id_mensaje, tipo)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE tipo = VALUES(tipo)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $id_persona, $id_mensaje, $tipo);
    $stmt->execute();
}
header("Location: foro.php");
exit();
?>
