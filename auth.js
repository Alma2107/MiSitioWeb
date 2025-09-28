// ==============================
// ESTADO DEL USUARIO
// ==============================
let isLoggedIn    = JSON.parse(localStorage.getItem("isLoggedIn"))   || false;
let isDeactivated = JSON.parse(localStorage.getItem("isDeactivated")) || false;
let currentUser   = localStorage.getItem("currentUser") || "";

// ==============================
// SELECTORES
// ==============================
const btnRegister   = document.getElementById("btnRegister");
const btnLogin      = document.getElementById("btnLogin");
const btnDeactivate = document.getElementById("btnDeactivate");
const btnDelete     = document.getElementById("btnDelete");
const btnForo       = document.getElementById("btnForo");
const saludo        = document.getElementById("userGreeting");
const btnSobre      = document.getElementById("btnSobre");
const btnVolver     = document.getElementById("btnVolver");
const aboutSection  = document.getElementById("about-section");
const mainContent   = document.getElementById("main-content");

const modalRegister = document.getElementById("modal-register");
const modalLogin    = document.getElementById("modal-login");

// ==============================
// GUARDAR ESTADO EN localStorage + PHP
// ==============================
function saveState() {
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  localStorage.setItem("isDeactivated", JSON.stringify(isDeactivated));
  localStorage.setItem("currentUser", currentUser);

  if (isLoggedIn && !isDeactivated && currentUser) {
    fetch("login_session.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `user=${encodeURIComponent(currentUser)}`
    });
  } else {
    fetch("logout_session.php", { method: "POST" });
  }
}

// ==============================
// ACTUALIZAR BOTONES
// ==============================
function updateButtons() {
  [btnRegister, btnLogin, btnDeactivate, btnDelete, btnForo, saludo, btnSobre, btnVolver]
    .forEach(el => { if (el) el.style.display = "none"; });

  if (!isLoggedIn) {
    if (btnRegister) btnRegister.style.display = "inline-block";
    if (btnLogin) btnLogin.style.display = "inline-block";
    if (btnSobre) btnSobre.style.display = "inline-block";
  } else if (isDeactivated) {
    if (btnLogin) btnLogin.style.display = "inline-block";
    if (btnSobre) btnSobre.style.display = "inline-block";
  } else {
    if (btnForo) btnForo.style.display = "inline-block";
    if (btnDeactivate) btnDeactivate.style.display = "inline-block";
    if (btnDelete) btnDelete.style.display = "inline-block";
    if (saludo) {
      saludo.style.display = "inline-block";
      saludo.textContent = `¡Hola, ${currentUser}!`;
    }
    if (btnSobre) btnSobre.style.display = "inline-block";
  }
}

// ==============================
// MODALES
// ==============================
function openModal(modal) { if (modal) modal.classList.remove("hidden"); }
function closeModal(modal) { if (modal) modal.classList.add("hidden"); }

if (btnLogin) btnLogin.addEventListener("click", () => openModal(modalLogin));
if (btnRegister) btnRegister.addEventListener("click", () => openModal(modalRegister));
const loginCancel = document.getElementById("log_cancel");
if (loginCancel) loginCancel.addEventListener("click", () => closeModal(modalLogin));
const regCancel = document.getElementById("reg_cancel");
if (regCancel) regCancel.addEventListener("click", () => closeModal(modalRegister));
window.addEventListener("click", (e) => {
  if (e.target === modalLogin) closeModal(modalLogin);
  if (e.target === modalRegister) closeModal(modalRegister);
});

// ==============================
// FORMULARIOS
// ==============================
const registerForm = document.getElementById("registerForm");
if (registerForm) registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentUser = e.target.nombre.value.trim();
  isLoggedIn = true;
  isDeactivated = false;
  saveState();
  updateButtons();
  closeModal(modalRegister);
  e.target.reset();
});

const loginForm = document.getElementById("loginForm");
if (loginForm) loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const correoInput = e.target.correo.value.trim();
  currentUser = correoInput.includes("@") ? correoInput.split("@")[0] : correoInput;
  isLoggedIn = true;
  isDeactivated = false;
  saveState();
  updateButtons();
  closeModal(modalLogin);
  e.target.reset();
});

// ==============================
// DESACTIVAR / ELIMINAR CUENTA
// ==============================
if (btnDeactivate) btnDeactivate.addEventListener("click", () => {
  isDeactivated = true;
  isLoggedIn = false;
  saveState();
  updateButtons();
});

if (btnDelete) btnDelete.addEventListener("click", () => {
  isLoggedIn = false;
  isDeactivated = false;
  currentUser = "";
  saveState();
  updateButtons();
});

// ==============================
// SOBRE NOSOTROS
// ==============================
if (btnSobre) btnSobre.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  aboutSection.classList.remove("hidden");
  btnSobre.classList.add("hidden");
  btnVolver.classList.remove("hidden");
});

if (btnVolver) btnVolver.addEventListener("click", () => {
  aboutSection.classList.add("hidden");
  mainContent.classList.remove("hidden");
  btnVolver.classList.add("hidden");
  btnSobre.classList.remove("hidden");
});

// ==============================
// INICIALIZAR
// ==============================
updateButtons();
