// ======== ESTADO DEL USUARIO (desde localStorage si existe) ========
let isLoggedIn   = JSON.parse(localStorage.getItem("isLoggedIn"))   || false;
let isDeactivated = JSON.parse(localStorage.getItem("isDeactivated")) || false;
let currentUser  = localStorage.getItem("currentUser") || "";

// ======== REFERENCIAS ========
const btnRegister   = document.getElementById("btnRegister");
const btnLogin      = document.getElementById("btnLogin");
const btnDeactivate = document.getElementById("btnDeactivate");
const btnDelete     = document.getElementById("btnDelete");
const btnForo       = document.getElementById("btnForo");
const saludo        = document.getElementById("userGreeting");

// MODALES
const modalRegister = document.getElementById("modal-register");
const modalLogin    = document.getElementById("modal-login");

// ======== FUNCIONES ========
function saveState() {
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  localStorage.setItem("isDeactivated", JSON.stringify(isDeactivated));
  localStorage.setItem("currentUser", currentUser);

  // Sincronizar con PHP
  if(isLoggedIn && !isDeactivated && currentUser){
    fetch('login_session.php', {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:`user=${encodeURIComponent(currentUser)}`
    });
  } else {
    // Si no está logueado, limpiar sesión PHP
    fetch('logout_session.php', { method:'POST' });
  }
}

function updateButtons() {
  // Ocultar todos los botones primero
  [btnRegister, btnLogin, btnDeactivate, btnDelete, btnForo, saludo].forEach(el => el.style.display = "none");

  if (!isLoggedIn) {
    // Usuario no logueado → puede registrarse o iniciar sesión
    btnRegister.style.display = "inline-block";
    btnLogin.style.display = "inline-block";
  } else if (isDeactivated) {
    // Usuario desactivado → solo puede iniciar sesión
    btnLogin.style.display = "inline-block";
  } else {
    // Usuario activo → muestra foro, desactivar, eliminar y saludo
    btnForo.style.display = "inline-block";
    btnDeactivate.style.display = "inline-block";
    btnDelete.style.display = "inline-block";
    saludo.style.display = "inline-block";
    saludo.textContent = `¡Hola, ${currentUser}!`;
  }
}

function openModal(modal) {
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  modal.classList.add("hidden");
}

// ======== EVENTOS BOTONES ========
btnLogin.addEventListener("click", () => openModal(modalLogin));
btnRegister.addEventListener("click", () => openModal(modalRegister));

document.getElementById("login_cancel").addEventListener("click", () => closeModal(modalLogin));
document.getElementById("reg_cancel").addEventListener("click", () => closeModal(modalRegister));

// Cerrar clic afuera del modal
window.addEventListener("click", (e) => {
  if (e.target === modalLogin) closeModal(modalLogin);
  if (e.target === modalRegister) closeModal(modalRegister);
});

// ======== ACCIONES USUARIO ========
// Registro
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreInput = e.target.nombre.value.trim();
  if(nombreInput) currentUser = nombreInput;
  isLoggedIn = true;
  isDeactivated = false;
  saveState();
  updateButtons();
  closeModal(modalRegister);
  e.target.reset();
});

// Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const correoInput = e.target.correo.value.trim();
  currentUser = correoInput.split("@")[0]; // Parte antes del @
  isLoggedIn = true;
  isDeactivated = false;
  saveState();
  updateButtons();
  closeModal(modalLogin);
  e.target.reset();
});

// Desactivar cuenta
btnDeactivate.addEventListener("click", () => {
  isDeactivated = true;
  isLoggedIn = false;
  saveState();
  updateButtons();
});

// Eliminar cuenta
btnDelete.addEventListener("click", () => {
  isLoggedIn = false;
  isDeactivated = false;
  currentUser = "";
  saveState();
  updateButtons();
});

// ======== INICIO ========
updateButtons();
