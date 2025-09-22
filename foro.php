<?php
session_start();
require 'conexion.php';

// ====== Traer usuario actual desde session o localStorage ======
// Vamos a usar localStorage desde JS, así que PHP solo muestra el foro.
// Si querés seguridad total, podés hacer un AJAX que valide localStorage en backend.


// Traer comentarios raíz con suma de votos
$stmt = $conexion->prepare("
    SELECT m.*, p.nombre,
        (SELECT COALESCE(SUM(valor),0) FROM votos v WHERE v.mensaje_id = m.id) AS likes
    FROM mensajes m
    JOIN personas p ON m.persona_id = p.id
    WHERE m.mensaje_padre IS NULL AND m.borrado=0
    ORDER BY m.creado DESC
");
$stmt->execute();
$comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

function obtenerRespuestas($conexion, $padre_id) {
    $stmt = $conexion->prepare("
        SELECT m.*, p.nombre,
            (SELECT COALESCE(SUM(valor),0) FROM votos v WHERE v.mensaje_id = m.id) AS likes
        FROM mensajes m
        JOIN personas p ON m.persona_id = p.id
        WHERE m.mensaje_padre = ? AND m.borrado=0
        ORDER BY m.creado ASC
    ");
    $stmt->execute([$padre_id]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Netflix Mood Foro PRO 🚀</title>
<link rel="stylesheet" href="styles.css">
<style>
/* Solo agrego estilos mínimos, tu CSS principal sigue igual */
body { margin:0; font-family:'Segoe UI',sans-serif; background:#121212; color:#fff; }
h1 { text-align:center; color:#e50914; margin:20px 0; }
.contenedor { width:90%; max-width:800px; margin:0 auto 50px; }
.form-publicar { background:#1e1e1e; padding:15px; border-radius:8px; margin-bottom:20px; box-shadow:0 0 10px rgba(229,9,20,0.5);}
.form-publicar input, .form-publicar textarea { width:100%; padding:10px; margin-bottom:10px; border-radius:5px; border:none; background:#111; color:#fff; }
.form-publicar button { background:#e50914; color:#fff; border:none; padding:10px 15px; border-radius:8px; cursor:pointer; transition:0.2s; }
.form-publicar button:hover { background:#ff1e27; transform:scale(1.05); }

.comentario { background:#1e1e1e; padding:15px; margin-bottom:15px; border-radius:8px; box-shadow:0 0 10px rgba(229,9,20,0.5); }
.comentario-header { font-weight:bold; color:#e50914; margin-bottom:5px;}
.comentario-texto { margin-bottom:10px; line-height:1.5;}
.comentario-footer { display:flex; justify-content:flex-start; align-items:center; gap:10px; }
.likes, .dislikes { cursor:pointer; transition:0.2s; position:relative; user-select:none;}
.likes { color:#e50914; }
.likes:hover { transform:scale(1.2);}
.likes::after { content:"❤️"; position:absolute; top:-20px; right:-10px; font-size:1.2em; opacity:0; transform:scale(0); transition:0.3s; }
.likes.active::after { opacity:1; transform:scale(1.5); animation:likePop 0.7s forwards;}
.dislikes { color:#888; }
.dislikes:hover { color:#ff5555; transform:scale(1.2); }

@keyframes likePop { 0% { transform:scale(1); opacity:1; } 50% { transform:scale(2); opacity:1; } 100% { transform:scale(1); opacity:0; } }

.btn-responder { background:#e50914; border:none; padding:5px 10px; color:#fff; border-radius:5px; cursor:pointer; transition:0.2s;}
.btn-responder:hover { transform:scale(1.1);}
.respuesta { background:#2a2a2a; margin-left:20px; padding:10px; border-radius:5px; margin-top:5px; }

.overlay { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%) scale(0); width:400px; background:#222; padding:20px; border-radius:10px; box-shadow:0 0 30px #e50914; transition:transform 0.3s; z-index:10;}
.overlay.active { transform:translate(-50%,-50%) scale(1);}
.overlay textarea { width:100%; height:100px; border-radius:8px; padding:10px; border:none; resize:none; background:#111; color:#fff;}
.overlay button { margin-top:10px; background:#e50914; border:none; padding:10px 15px; border-radius:8px; color:#fff; font-weight:bold; cursor:pointer; transition:0.2s;}
.overlay button:hover { transform:scale(1.1);}

.btn-volver { display:block; width:200px; margin:30px auto 50px; padding:10px; text-align:center; background:#e50914; color:#fff; border-radius:8px; text-decoration:none; font-weight:bold; transition:0.3s;}
.btn-volver:hover { background:#ff1e27; transform:scale(1.05);}
</style>
</head>
<body>

<h1>Netflix Mood Foro PRO 🚀</h1>

<div class="contenedor">
  <!-- Formulario publicar -->
  <div class="form-publicar">
    <textarea id="nuevoTexto" placeholder="Escribe tu comentario..."></textarea>
    <input type="text" id="nuevoTitulo" placeholder="Título de la película (opcional)">
    <button onclick="publicar()">💬 Publicar</button>
  </div>

  <!-- Comentarios -->
  <div id="comentariosFeed">
  <?php foreach($comentarios as $c): ?>
  <div class="comentario" data-id="<?= $c['id'] ?>">
      <div class="comentario-header"><?= htmlspecialchars($c['nombre']) ?> escribió sobre <em><?= $c['titulo_pelicula'] ?: "cine" ?></em></div>
      <div class="comentario-texto"><?= nl2br(htmlspecialchars($c['texto'])) ?></div>

      <?php
        $respuestas = obtenerRespuestas($conexion, $c['id']);
        foreach($respuestas as $r){
            echo '<div class="respuesta"><strong>'.htmlspecialchars($r['nombre']).':</strong> '.nl2br(htmlspecialchars($r['texto'])).'
            <span class="likes" onclick="darLike(this, '.$r['id'].',1)">👍 '.$r['likes'].'</span>
            <span class="dislikes" onclick="darLike(this, '.$r['id'].',-1)">👎</span>
            </div>';
        }
      ?>

      <div class="comentario-footer">
          <span class="likes" onclick="darLike(this, <?= $c['id'] ?>,1)">👍 <?= $c['likes'] ?></span>
          <span class="dislikes" onclick="darLike(this, <?= $c['id'] ?>,-1)">👎</span>
          <button class="btn-responder" onclick="abrirChat(<?= $c['id'] ?>)">💬 Responder</button>
      </div>
  </div>
  <?php endforeach; ?>
  </div>

  <a href="index.php" class="btn-volver">🏠 Volver al inicio</a>
</div>

<!-- Overlay responder -->
<div id="chatOverlay" class="overlay">
    <h2>💬 Responder comentario</h2>
    <textarea id="respuestaTexto" placeholder="Escribe tu respuesta..."></textarea>
    <button onclick="enviarRespuesta()">Enviar 🚀</button>
    <button onclick="cerrarChat()">Cancelar ❌</button>
</div>

<script src="auth.js"></script>
<script>
// ===== Variables =====
let mensajeActual = null;

// ===== Overlay =====
function abrirChat(id){ mensajeActual = id; document.getElementById('chatOverlay').classList.add('active'); }
function cerrarChat(){ document.getElementById('chatOverlay').classList.remove('active'); }

// ===== Publicar comentario =====
function publicar(){
    const texto = document.getElementById('nuevoTexto').value.trim();
    const titulo = document.getElementById('nuevoTitulo').value.trim();
    const user = localStorage.getItem("user");
    if(!user){ alert("Debes iniciar sesión para comentar!"); return; }
    if(!texto){ alert("Escribe algo!"); return; }
    fetch('publicar.php', {
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:`texto=${encodeURIComponent(texto)}&titulo=${encodeURIComponent(titulo)}&usuario=${encodeURIComponent(user)}`
    }).then(res=>res.text()).then(()=>location.reload());
}

// ===== Responder comentario =====
function enviarRespuesta(){
    const texto = document.getElementById('respuestaTexto').value.trim();
    const user = localStorage.getItem("user");
    if(!user){ alert("Debes iniciar sesión para responder!"); return; }
    if(!texto){ alert("Escribe algo!"); return; }
    fetch('responder.php',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:`mensaje_padre=${mensajeActual}&texto=${encodeURIComponent(texto)}&usuario=${encodeURIComponent(user)}`
    }).then(res=>res.text()).then(()=>location.reload());
    cerrarChat();
}

// ===== Likes y Dislikes =====
function darLike(el, mensajeId, valor){
    if(valor === 1) el.classList.add('active');
    fetch(`votar.php?id=${mensajeId}&valor=${valor}`)
        .then(res=>res.text())
        .then(()=>location.reload());
}
</script>

</body>
</html>
