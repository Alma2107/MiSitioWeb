// ==============================
// ELEMENTOS
// ==============================
const modalRegister = document.getElementById("modal-register");
const modalLogin = document.getElementById("modal-login");
const btnRegister = document.getElementById("btnRegister");
const btnLogin = document.getElementById("btnLogin");
const btnDeactivate = document.getElementById("btnDeactivate");
const btnDelete = document.getElementById("btnDelete");
const regCancel = document.getElementById("reg_cancel");
const logCancel = document.getElementById("log_cancel");
const userGreeting = document.getElementById("userGreeting");

// ==============================
// MODALES
// ==============================
btnRegister.addEventListener("click", () => modalRegister.classList.remove("hidden"));
btnLogin.addEventListener("click", () => modalLogin.classList.remove("hidden"));
regCancel.addEventListener("click", () => modalRegister.classList.add("hidden"));
logCancel.addEventListener("click", () => modalLogin.classList.add("hidden"));

// ==============================
// SESIÓN DE USUARIO
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  if (user) {
    showUserUI(user);
  } else {
    hideUserUI();
  }
});

function showUserUI(user) {
  userGreeting.textContent = `Hola, ${user}`;
  btnRegister.style.display = "none";
  btnLogin.style.display = "none";
  btnDeactivate.style.display = "inline-block";
  btnDelete.style.display = "inline-block";
}

function hideUserUI() {
  userGreeting.textContent = "";
  btnRegister.style.display = "inline-block";
  btnLogin.style.display = "inline-block";
  btnDeactivate.style.display = "none";
  btnDelete.style.display = "none";
}

// ==============================
// ACCIONES DE CUENTA
// ==============================
btnDeactivate.addEventListener("click", () => {
  alert("Tu cuenta ha sido desactivada temporalmente.");
  localStorage.removeItem("user");
  hideUserUI();
});

btnDelete.addEventListener("click", () => {
  if (confirm("¿Seguro que querés eliminar tu cuenta? Esta acción es irreversible.")) {
    alert("Cuenta eliminada correctamente.");
    localStorage.removeItem("user");
    hideUserUI();
  }
});

// ==============================
// LOGIN SIMPLIFICADO
// ==============================
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.correo.value;
  const name = email.split("@")[0];
  localStorage.setItem("user", name);
  modalLogin.classList.add("hidden");
  showUserUI(name);
});

// ==============================
// REGISTRO SIMPLIFICADO
// ==============================
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = registerForm.nombre.value;
  localStorage.setItem("user", name);
  modalRegister.classList.add("hidden");
  showUserUI(name);
});
