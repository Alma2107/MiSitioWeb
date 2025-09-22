// ==============================
// IMPORTAR CATALOGO
// ==============================
import { CATALOG } from './Catalogo.js';

// ==============================
// SELECTORES
// ==============================
const introContainer = document.getElementById('intro-container');
const introVideo = document.getElementById('intro-video');
const mainContent = document.getElementById('main-content');

const genresSection = document.getElementById('genres');
const genreView = document.getElementById('genre-view');
const gvTitle = document.getElementById('gvTitle');
const cardsContainer = document.getElementById('cards');
const noResultsMessage = document.getElementById('noResultsMessage');

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const btnBack = document.getElementById('btnBack');

const surpriseBtn = document.getElementById('btnSurprise');
const surpriseResult = document.getElementById('surprise-result');
const sPoster = document.getElementById('sPoster');
const sTitle = document.getElementById('sTitle');
const sDesc = document.getElementById('sDesc');
const sPlatform = document.getElementById('sPlatform');
const sBack = document.getElementById('sBack');

const genreElements = document.querySelectorAll('.genre');

// ==============================
// BLOQUEO DE CONTROLES
// ==============================
const allControls = document.querySelectorAll(
  "#btnRegister, #btnLogin, #btnDeactivate, #btnDelete, #btnForo, " +
  "#searchInput, #searchBtn, #btnBack, #btnSurprise, .genre"
);

function lockControls() {
  allControls.forEach(ctrl => {
    if (ctrl) ctrl.setAttribute("disabled", "true");
  });
}

function unlockControls() {
  allControls.forEach(ctrl => {
    if (ctrl) ctrl.removeAttribute("disabled");
  });
}

// ==============================
// INTRO SOLO UNA VEZ
// ==============================
window.addEventListener("DOMContentLoaded", () => {
  const introSeen = localStorage.getItem("introSeen");

  if (introSeen) {
    // Ya se vio -> saltar intro directo
    introContainer.style.display = "none";
    mainContent.classList.add("active");
    unlockControls();
  } else {
    // Primera vez -> mostrar intro
    lockControls();

    introVideo.addEventListener("ended", () => {
      introContainer.style.display = "none";
      mainContent.classList.add("active");
      unlockControls();

      // Guardar que ya se vio
      localStorage.setItem("introSeen", "true");
    });
  }
});

// ==============================
// FUNCIONES
// ==============================

// Mostrar películas de un género
function showGenre(genre) {
  gvTitle.textContent = genre;
  cardsContainer.innerHTML = '';

  const movies = CATALOG.filter(movie => movie.genre === genre);
  if (movies.length === 0) {
    noResultsMessage.classList.remove('hidden');
  } else {
    noResultsMessage.classList.add('hidden');
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <p><strong>Plataforma:</strong> ${movie.platform}</p>
      `;
      cardsContainer.appendChild(card);
    });
  }

  // Cambiar vistas
  document.body.classList.remove('view-home');
  document.body.classList.add('view-genre');
  genresSection.classList.add('hidden');
  genreView.classList.remove('hidden');
  surpriseResult.classList.add('hidden');
}

// Volver a home
function backHome() {
  document.body.classList.add('view-home');
  document.body.classList.remove('view-genre');
  genreView.classList.add('hidden');
  genresSection.classList.remove('hidden');
  surpriseResult.classList.add('hidden');
}

// Buscar películas en género
function searchMovies() {
  const query = searchInput.value.toLowerCase();
  const cards = cardsContainer.querySelectorAll('.card');
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'flex';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (!found) {
    noResultsMessage.classList.remove('hidden');
  } else {
    noResultsMessage.classList.add('hidden');
  }
}

// Sorpréndeme
function surpriseMe() {
  const randomMovie = CATALOG[Math.floor(Math.random() * CATALOG.length)];
  sPoster.src = randomMovie.poster;
  sTitle.textContent = randomMovie.title;
  sDesc.textContent = randomMovie.description;
  sPlatform.textContent = `Plataforma: ${randomMovie.platform}`;

  // Cambiar vistas
  genresSection.classList.add('hidden');
  genreView.classList.add('hidden');
  surpriseResult.classList.remove('hidden');
  document.body.classList.remove('view-home');
}

// ==============================
// EVENTOS
// ==============================
genreElements.forEach(genreEl => {
  genreEl.addEventListener('click', () => {
    const genre = genreEl.dataset.genre;
    showGenre(genre);
  });
});

btnBack.addEventListener('click', backHome);
sBack.addEventListener('click', backHome);
searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchMovies();
});

surpriseBtn.addEventListener('click', surpriseMe);
