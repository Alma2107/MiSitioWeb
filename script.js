// Seleccionamos los elementos principales
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
// Botón de registro: ocultar contenido y mostrar formulario
btnRegistrar.addEventListener("click", () => {
  mainContent.style.display = "none";
  formRegistro.style.display = "block";
  window.scrollTo(0,0); // subir arriba de todo
});

// Botón volver: ocultar formulario y mostrar contenido principal
volverBtn.addEventListener("click", () => {
  formRegistro.style.display = "none";
  mainContent.style.display = "block";
});

// Envío del formulario
registroForm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recargar la página
  const email = registroForm.email.value.trim();
  const usuario = registroForm.usuario.value.trim();
  const telefono = registroForm.telefono.value.trim();

  alert(`Registro enviado:\nEmail: ${email}\nUsuario: ${usuario}\nTeléfono: ${telefono}`);

  registroForm.reset(); // limpiamos el formulario
  formRegistro.style.display = "none"; // ocultamos el form
  mainContent.style.display = "block"; // volvemos al contenido principal
});
