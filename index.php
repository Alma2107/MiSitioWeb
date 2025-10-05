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

  <!-- INTRO VIDEO -->
  <div id="intro-container">
    <video id="intro-video" autoplay muted playsinline>
      <source src="Netflix Intro 4k (AI upscaled).mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
  </div>

  <!-- HEADER -->
  <header>
    <div class="menu-icons">
      <img src="logo.png" alt="TuCineIdeal" style="height:60px; margin-right:20px;" />
      <button class="menu-btn" id="btnRegister" type="button">Registrarse</button>
      <button class="menu-btn" id="btnLogin" type="button">Iniciar Sesión</button>
      <button class="menu-btn" id="btnForo" type="button" onclick="location.href='foro.php'">Foro</button>
      <button class="menu-btn" id="btnDeactivate" type="button">Desactivar cuenta</button>
      <button class="menu-btn" id="btnDelete" type="button">Eliminar cuenta</button>
      <button class="menu-btn" id="btnSobre" type="button">Sobre nosotros</button>
      <button class="menu-btn hidden" id="btnVolver" type="button">Volver</button>
      <span id="userGreeting" style="color: var(--red); margin-left:10px;"></span>
    </div>
  </header>

  <!-- CONTENIDO PRINCIPAL -->
  <div id="main-content">
    <!-- HERO -->
    <section class="hero home-only">
      <span>Domingo, sillón y pelis. Vos elegís el mood, nosotros el resto.</span>
    </section>

    <!-- GÉNEROS -->
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

    <!-- SORPRÉNDEME -->
    <section class="surprise-section home-only">
      <h2 class="surprise-title">No sé qué ver... ¡Sorprendeme!</h2>
      <button class="surprise-button" id="btnSurprise" type="button">Click aquí</button>
    </section>

    <!-- RESULTADO SORPRÉNDEME -->
    <section id="surprise-result" class="hidden">
      <div class="surprise-card">
        <img id="sPoster" src="" alt="Poster película" />
        <h2 id="sTitle"></h2>
        <p id="sDesc"></p>
        <p id="sPlatform"></p>
        <button id="sBack" class="btn-back" type="button">⬅ Volver</button>
      </div>
    </section>

    <!-- VISTA DE GÉNERO -->
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

    <!-- FOOTER -->
    <footer>
      Alma Azul Carena - Programación - 5°3 - Redes y Diseño de Páginas Web
    </footer>
  </div>

  <!-- SECCIÓN SOBRE NOSOTROS -->
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

  <!-- ===== FONDO ANIMADO ===== -->
  <canvas id="bgCanvas"></canvas>

  <!-- ===== MODAL REGISTRO ===== -->
  <div id="modal-register" class="modal hidden">
    <div class="modal-content form-card">
      <span class="close-btn" id="reg_cancel">×</span>
      <h2 class="form-title">Crear nueva cuenta</h2>
      <form id="registerForm" method="post" action="registrar.php">
        <div class="input-group">
          <span class="icon">👤</span>
          <input name="nombre" placeholder="Nombre completo" required />
        </div>
        <div class="input-group">
          <span class="icon">📧</span>
          <input name="correo" type="email" placeholder="Correo electrónico" required />
        </div>
         <div class="input-group">
          <span class="icon">🔑</span>
          <input name="password" type="password" placeholder="Contraseña" required />
        </div>
        <div class="input-group">
          <span class="icon">📱</span>
          <input name="telefono" placeholder="Teléfono (opcional)" />
        </div>
        
        

        <button type="submit" class="btn-submit">Registrarse</button>
      </form>
    </div>
  </div>

  <!-- ===== MODAL LOGIN ===== -->
  <div id="modal-login" class="modal hidden">
    <div class="modal-content form-card">
      <span class="close-btn" id="log_cancel">×</span>
      <h2 class="form-title">Iniciar sesión</h2>
      <form id="loginForm" method="post" action="login.php">
        <div class="input-group">
          <span class="icon">📧</span>
          <input name="correo" type="email" placeholder="Correo electrónico" required />
        </div>
        <div class="input-group">
          <span class="icon">🔒</span>
          <input name="password" type="password" placeholder="Contraseña" required />
        </div>
        <button type="submit" class="btn-submit">Ingresar</button>
      </form>
    </div>
  </div>

  <!-- SCRIPTS -->
   <script type="module" src="script.js"></script>
  <script src="auth.js"></script>
  
</body>
</html>
