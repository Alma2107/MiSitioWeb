<?php
session_start();
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $correo = trim($_POST["correo"] ?? "");
    $clave = $_POST["clave"] ?? "";

    $sql = "SELECT * FROM personas WHERE correo = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $user = $resultado->fetch_assoc();

        if (password_verify($clave, $user["clave_hash"])) {
            $_SESSION["usuario"] = $user["nombre"];
            header("Location: index.php");
            exit();
        } else {
            $error = "❌ Contraseña incorrecta.";
        }
    } else {
        $error = "⚠️ No existe una cuenta con ese correo.";
    }

    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Iniciar sesión - TuCineIdeal</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      color: white;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('Fondo.jpg') no-repeat center center/cover;
      background-attachment: fixed;
    }

    .form-container {
      background: rgba(0, 0, 0, 0.75);
      padding: 35px;
      border-radius: 15px;
      width: 360px;
      text-align: center;
      box-shadow: 0 0 20px rgba(229,9,20,0.7);
      backdrop-filter: blur(4px);
    }

    h2 {
      color: #e50914;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      margin: 8px 0;
      padding: 12px;
      border: none;
      border-radius: 6px;
      outline: none;
    }

    button {
      background-color: #e50914;
      color: white;
      border: none;
      width: 100%;
      padding: 12px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }

    button:hover {
      background-color: #f40612;
      transform: scale(1.02);
    }

    a {
      color: #bbb;
      font-size: 14px;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .error {
      color: #ff5555;
      background: rgba(255, 0, 0, 0.2);
      padding: 8px;
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <div class="form-container">
    <h2>Iniciar sesión</h2>

    <?php if (!empty($error)) echo "<div class='error'>$error</div>"; ?>

    <form method="POST">
      <input type="email" name="correo" placeholder="Correo electrónico" required>
      <input type="password" name="clave" placeholder="Contraseña" required>
      <button type="submit">Entrar</button>
    </form>

    <p style="margin-top:10px;">¿No tenés una cuenta? <a href="registrar.php">Registrate</a></p>
  </div>

</body>
</html>
