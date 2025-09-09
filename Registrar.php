<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: index.html');
  exit;
}

require_once __DIR__ . '/config.php';

// Tomar y validar campos
$nombre   = trim($_POST['nombre'] ?? '');
$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($nombre === '' || $email === '' || $password === '') {
  echo "<script>alert('Faltan datos.'); window.location.href='index.html';</script>";
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "<script>alert('Email inválido.'); window.location.href='index.html';</script>";
  exit;
}

// ¿Email ya existe?
$sqlCheck = "SELECT id FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sqlCheck);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
  $stmt->close();
  echo "<script>alert('Este correo ya está registrado.'); window.location.href='index.html';</script>";
  exit;
}
$stmt->close();

// Insertar usuario
$hash = password_hash($password, PASSWORD_BCRYPT);
$sqlIns = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sqlIns);
$stmt->bind_param("sss", $nombre, $email, $hash);

if ($stmt->execute()) {
  session_start();
  $_SESSION['usuario'] = $nombre; // guardo el usuario en la sesión
  $stmt->close();
  header("Location: index.php");
  exit;
}
else {
  $stmt->close();
  echo "<script>alert('Ocurrió un error al registrar.'); window.location.href='index.html';</script>";
  exit;
}
