// Selección de elementos
const video = document.getElementById('intro-video');
const introContainer = document.getElementById('intro-container');
const mainContent = document.getElementById('main-content');
const formRegistro = document.getElementById('formRegistro');
const btnRegistrar = document.getElementById('btnRegistrar');
const volverBtn = document.getElementById('volverBtn');
const registroForm = document.getElementById('registroForm');

// Cuando termina el video, ocultamos el intro y mostramos el contenido
video.onended = function() {
  introContainer.style.display = 'none';
  mainContent.style.display = 'block';
};

