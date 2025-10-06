<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION["usuario"])) {
  header("Location: login.php");
  exit();
}

$sql = "SELECT m.*, p.nombre 
        FROM mensajes m
        JOIN personas p ON m.id_persona = p.id
        ORDER BY m.fecha DESC";
$resultado = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Foro - TuCineIdeal</title>
  <style>
    :root {
      --bg: #000;
      --primary: #e50914;
      --accent: #ff1e27;
      --text: #fff;
      --gray: #aaa;
      --card1: #151515;
      --card2: #1e1e1e;
      --shadow: 0 0 25px rgba(229, 9, 20, 0.3);
    }

    * { box-sizing: border-box; }

    body {
      background: radial-gradient(circle at top, #141414 0%, #000 80%);
      font-family: 'Poppins', sans-serif;
      color: var(--text);
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    header {
      background: linear-gradient(90deg, #000, #111, #000);
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #222;
      box-shadow: 0 2px 20px rgba(0,0,0,0.8);
    }

    h1 {
      color: var(--primary);
      font-weight: 700;
      font-size: 1.8em;
    }

    header div {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    header span { color: #ddd; font-weight: 500; }

    header button {
      background: var(--primary);
      border: none;
      color: white;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    header button:hover {
      background: var(--accent);
      transform: scale(1.05);
    }

    .contenedor {
      max-width: 1100px;
      margin: 40px auto;
      padding: 20px;
    }

    .publicar {
      background: rgba(17, 17, 17, 0.9);
      padding: 20px;
      border-radius: 18px;
      box-shadow: var(--shadow);
      margin-bottom: 40px;
      backdrop-filter: blur(6px);
      animation: fadeIn 0.8s ease;
    }

    .publicar input, .publicar textarea {
      width: 100%;
      background: #1a1a1a;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 10px;
      margin-bottom: 10px;
      resize: none;
      transition: 0.3s;
    }

    .publicar input:focus, .publicar textarea:focus {
      outline: none;
      background: #222;
      box-shadow: 0 0 10px rgba(229, 9, 20, 0.4);
    }

    .publicar button {
      background: var(--primary);
      border: none;
      color: white;
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 600;
      transition: 0.3s;
    }

    .publicar button:hover {
      background: var(--accent);
      transform: scale(1.05);
    }

    /* COLLAGE GRID */
    .collage {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 25px;
      animation: fadeIn 1.2s ease;
    }

    .mensaje {
      background: linear-gradient(145deg, var(--card1), var(--card2));
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 0 20px rgba(229,9,20,0.2);
      position: relative;
      overflow: hidden;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 220px;
      backdrop-filter: blur(4px);
    }

    .mensaje:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 0 25px rgba(229, 9, 20, 0.4);
    }

    .mensaje h3 {
      color: var(--primary);
      margin-bottom: 10px;
      font-size: 1.2em;
    }

    .mensaje p {
      color: #ddd;
      font-size: 0.95em;
      margin-bottom: 10px;
      line-height: 1.5;
    }

    .mensaje small {
      color: var(--gray);
    }

    .acciones {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }

    .acciones button {
      background: #1c1c1c;
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 16px;
      padding: 8px;
      transition: 0.3s;
    }

    .acciones button:hover {
      background: var(--primary);
      transform: scale(1.2);
    }

    .respuesta {
      background: rgba(255,255,255,0.05);
      padding: 10px 12px;
      border-radius: 10px;
      margin-top: 10px;
      border-left: 3px solid var(--primary);
      font-size: 0.9em;
      color: #ccc;
      position: relative;
      transition: 0.3s;
    }

    .respuesta:hover {
      transform: scale(1.02);
      box-shadow: 0 0 10px rgba(229,9,20,0.3);
    }

    .respuesta b {
      color: var(--accent);
    }

    .responder-sub {
      display: none;
      margin-top: 8px;
    }

    .respuesta small {
      display: block;
      color: var(--gray);
      font-size: 0.8em;
      margin-top: 4px;
    }

    .btn-toggle {
      background: none;
      border: none;
      color: var(--accent);
      font-size: 0.85em;
      cursor: pointer;
      margin-top: 5px;
    }

    .btn-toggle:hover {
      text-decoration: underline;
    }

    .form-respuesta textarea {
      width: 100%;
      background: #1a1a1a;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 8px;
      margin-top: 8px;
      resize: none;
    }

    .form-respuesta button {
      background: var(--primary);
      border: none;
      padding: 6px 10px;
      border-radius: 8px;
      margin-top: 6px;
      color: white;
      font-size: 0.9em;
      cursor: pointer;
      transition: 0.3s;
    }

    .form-respuesta button:hover {
      background: var(--accent);
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <header>
    <div>
      <span>Hola, <?= htmlspecialchars($_SESSION["usuario"]) ?> 🍿</span>
      <button onclick="location.href='index.php'">Volver</button>
    </div>
  </header>

  <div class="contenedor">
    <div class="publicar">
      <h2>Publicar nuevo tema</h2>
      <form method="POST" action="agregar_mensaje.php">
        <input type="text" name="titulo" placeholder="🎞️ Título del tema" required>
        <textarea name="contenido" placeholder="📝 Escribí tu mensaje..." required></textarea>
        <button type="submit">Publicar</button>
      </form>
    </div>

    <h2>Mensajes recientes</h2>
    <div class="collage">
      <?php while($fila = $resultado->fetch_assoc()): ?>
        <?php
          $id_mensaje = $fila["id"];
          $sqlLikes = "SELECT COUNT(*) AS total FROM votos WHERE id_mensaje = $id_mensaje AND tipo = 'like'";
          $sqlDislikes = "SELECT COUNT(*) AS total FROM votos WHERE id_mensaje = $id_mensaje AND tipo = 'dislike'";
          $likes = $conn->query($sqlLikes)->fetch_assoc()["total"];
          $dislikes = $conn->query($sqlDislikes)->fetch_assoc()["total"];
        ?>
        <div class="mensaje">
          <div>
            <h3><?= htmlspecialchars($fila["titulo"]) ?></h3>
            <p><?= nl2br(htmlspecialchars($fila["contenido"])) ?></p>
            <small>Por <b><?= htmlspecialchars($fila["nombre"]) ?></b> - <?= $fila["fecha"] ?></small>

            <div class="acciones">
              <form method="POST" action="reaccionar.php">
                <input type="hidden" name="id_mensaje" value="<?= $fila['id'] ?>">
                <button name="tipo" value="like">👍</button>
                <span class="contador"><?= $likes ?></span>
                <button name="tipo" value="dislike">👎</button>
                <span class="contador"><?= $dislikes ?></span>
              </form>
            </div>

            <?php
            $sqlR = "SELECT r.*, p.nombre FROM respuestas r
                     JOIN personas p ON r.id_persona = p.id
                     WHERE r.id_mensaje = $id_mensaje ORDER BY r.fecha ASC";
            $resR = $conn->query($sqlR);
            while($resp = $resR->fetch_assoc()):
            ?>
              <div class="respuesta">
                <b><?= htmlspecialchars($resp["nombre"]) ?>:</b>
                <?= nl2br(htmlspecialchars($resp["contenido"])) ?>
                <small><?= $resp["fecha"] ?></small>

                <!-- Botón mostrar respuesta -->
                <button class="btn-toggle" onclick="toggleSub(this)">↪️ Responder</button>

                <form class="responder-sub form-respuesta" method="POST" action="agregar_respuesta.php">
                  <input type="hidden" name="id_mensaje" value="<?= $fila['id'] ?>">
                  <textarea name="contenido" placeholder="💬 Escribí una respuesta..." required></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            <?php endwhile; ?>
          </div>

          <form class="form-respuesta" method="POST" action="agregar_respuesta.php">
            <input type="hidden" name="id_mensaje" value="<?= $fila['id'] ?>">
            <textarea name="contenido" placeholder="💬 Responder al tema..." required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      <?php endwhile; ?>
    </div>
  </div>

  <script>
    function toggleSub(btn) {
      const form = btn.nextElementSibling;
      form.style.display = form.style.display === "block" ? "none" : "block";
    }
  </script>
</body>
</html>
