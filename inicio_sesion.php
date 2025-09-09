<?php
session_start();
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    $sql = "SELECT id, nombre, password FROM usuarios WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows === 1) {
        $row = $res->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['usuario'] = $row['nombre'];
            header("Location: index.php");
            exit;
        } else {
            echo "<script>alert('Contraseña incorrecta'); window.location.href='index.php';</script>";
        }
    } else {
        echo "<script>alert('No existe una cuenta con ese email'); window.location.href='index.php';</script>";
    }
}
