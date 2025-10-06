<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TuCineIdeal</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="view-home">

  <div id="intro-container">
    <video id="intro-video" autoplay muted playsinline>
      <source src="Netflix Intro 4k (AI upscaled).mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
  </div>


  <header>
    <div class="menu-icons">
      <img src="logo.png" alt="TuCineIdeal" style="height:60px; margin-right:20px;" />

      <?php if (!isset($_SESSION['usuario'])): ?>
       
        <button class="menu-btn" type="button" onclick="window.location.href='registrar.php'">
          Registrarse
        </button>
        <button class="menu-btn" type="button" onclick="window.location.href='login.php'">
          Iniciar sesión
        </button>
      <?php else: ?>
    
        <span id="userGreeting" style="color: var(--red); margin-left:10px;">
          Bienvenido, <?= htmlspecialchars($_SESSION['usuario']) ?> 🍿
        </span>
        <button class="menu-btn" id="btnForo" type="button" onclick="location.href='foro.php'">Foro</button>
        <button class="menu-btn" id="btnDeactivate" type="button" onclick="window.location.href='logout.php'">Desactivar cuenta</button>
        <button class="menu-btn" id="btnDelete" type="button" onclick="window.location.href='eliminar.php'">Eliminar cuenta</button>
      <?php endif; ?>

      <button class="menu-btn" id="btnSobre" type="button">Sobre nosotros</button>
      <button class="menu-btn hidden" id="btnVolver" type="button">Volver</button>
    </div>
  </header>


  <div id="main-content">

    <section class="hero home-only">
      <span>Domingo, sillón y pelis. Vos elegís el mood, nosotros el resto.</span>
    </section>


    <section id="genres" class="curved-section home-only">
      <h2>¿Qué preferís ver un domingo a la noche?</h2>
      <div class="genre-options">
        <div class="genre" data-genre="Romance"><img src="Portadas/PortadaGeneroRomance.jpeg" alt="Romance"/><p>Romance</p></div>
        <div class="genre" data-genre="Terror"><img src="Portadas/PortadaGeneroTerror.webp" alt="Terror"/><p>Terror</p></div>
        <div class="genre" data-genre="Comedia"><img src="Portadas/PortadaGeneroComedia.jpeg" alt="Comedia"/><p>Comedia</p></div>
        <div class="genre" data-genre="Studio Ghibli"><img src="Portadas/PortadaGeneroStudioGhibli.jpg" alt="Studio Ghibli"/><p>Studio Ghibli</p></div>
        <div class="genre" data-genre="Superhéroes"><img src="Portadas/PortadaGeneroSuperheroes.jpg" alt="Superhéroes"/><p>Superhéroes</p></div>
        <div class="genre" data-genre="Animación"><img src="Portadas/PortadaGeneroAnimacion.jpg" alt="Animación"/><p>Animación</p></div>
        <div class="genre" data-genre="Princesas"><img src="Portadas/PortadaGeneroPrincesa.jpg" alt="Princesas"/><p>Princesas</p></div>
        <div class="genre" data-genre="Historia"><img src="Portadas/PortadaGeneroHistoria.jpg" alt="Historia"/><p>Historia</p></div>
        <div class="genre" data-genre="Fantasía"><img src="Portadas/PortadaGeneroFantasia.jpeg" alt="Fantasía"/><p>Fantasía</p></div>
        <div class="genre" data-genre="Policial"><img src="Portadas/PortadaGeneroPolicial.webp" alt="Policial"/><p>Policial</p></div>
        <div class="genre" data-genre="Acción"><img src="Portadas/PortadaGeneroAccion.jpg" alt="Acción"/><p>Acción</p></div>
        <div class="genre" data-genre="Drama"><img src="Portadas/PortadaGeneroParaLlorar.jpeg" alt="Drama"/><p>Para llorar</p></div>
      </div>
    </section>

   
    <section class="surprise-section home-only">
      <h2 class="surprise-title">No sé qué ver... ¡Sorprendeme!</h2>
      <button class="surprise-button" id="btnSurprise" type="button">Click aquí</button>
    </section>

  
    <section id="surprise-result" class="hidden">
      <div class="surprise-card">
        <img id="sPoster" src="" alt="Poster película" />
        <h2 id="sTitle"></h2>
        <p id="sDesc"></p>
        <p id="sPlatform"></p>
        <button id="sBack" class="btn-back" type="button">⬅ Volver</button>
      </div>
    </section>


    <section id="genre-view" class="hidden genre-only">
      <div class="gv-header">
        <h2 class="gv-title" id="gvTitle">Género</h2>
        <div class="gv-right">
          <button class="back-btn" id="btnBack" type="button">← Volver</button>
          <div class="search-container">
            <input type="text" id="searchInput" placeholder="Buscar película..." />
            <button id="searchBtn" type="button">🔍</button>
          </div>
        </div>
      </div>
      <p id="noResultsMessage" class="hidden no-results">
        No se encuentra por el momento :, podés ir al 
        <a href="foro.php">foro</a> y agregar películas ahí!
      </p>
      <div class="cards" id="cards"></div>
    </section>

 
    <footer>
      Alma Azul Carena - Programación - 5°3 - Redes y Diseño de Páginas Web
    </footer>
  </div>

  
 <section id="about-section" class="hidden">
    <div class="about-me">
      <div class="about-photo">
        <img src="photo.jpg" alt="Tu foto" />
      </div>
      <div class="about-text">
        <h2>¿Quién soy?</h2>
        <p>Hola chicos solo quiero aprobar. </p>
        <p>Este proyecto es mi cine ideal, una pagina donde podés elegir películas según tu mood, sorprenderte con recomendaciones y participar en un foro con otros cinéfilos.</p>
        <h2>¿Qué es TuCineIdeal?</h2>
        <p>Una plataforma pensada para vos, donde la experiencia de elegir una peli se convierte en algo divertido, interactivo y diferente.</p>
      </div>
    </div>
  </section>


 
  <script type="module" src="script.js"></script>
  
</body>
</html>
