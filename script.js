import { CATALOG } from './Catalogo.js';

// ==============================
// SELECTORES PRINCIPALES
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

const btnSobre = document.getElementById("btnSobre");
const btnVolver = document.getElementById("btnVolver");
const aboutSection = document.getElementById("about-section");

// ==============================
// VIDEO DE INTRODUCCIÓN
// ==============================
window.addEventListener("DOMContentLoaded", () => {
  const introSeen = localStorage.getItem("introSeen");

  if (introSeen) {
    // Si ya vio el video antes
    introContainer.style.display = "none";
    mainContent.classList.add("active");
  } else {
    // Mostrar video solo la primera vez
    introVideo.addEventListener("ended", () => {
      introContainer.classList.add("fade-out");
      setTimeout(() => {
        introContainer.remove();
        mainContent.classList.add("active");
        localStorage.setItem("introSeen", "true");
      }, 800);
    });

    // Si tarda demasiado, forzar salida
    setTimeout(() => {
      if (introContainer) {
        introContainer.classList.add("fade-out");
        setTimeout(() => {
          introContainer.remove();
          mainContent.classList.add("active");
          localStorage.setItem("introSeen", "true");
        }, 800);
      }
    }, 6000);
  }
});

// ==============================
// FUNCIONES SECCIONES
// ==============================
function showHome() {
  genresSection.classList.remove('hidden');
  genreView.classList.add('hidden');
  surpriseResult.classList.add('hidden');
  aboutSection.classList.add('hidden');

  // 🟢 Mostrar la sección “¡Sorprendeme!”
  const surpriseSection = document.querySelector('.surprise-section');
  if (surpriseSection) surpriseSection.classList.remove('hidden');

  document.body.classList.add('view-home');
  document.body.classList.remove('view-genre');

  btnSobre.classList.remove('hidden');
  btnVolver.classList.add('hidden');
}

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

  genresSection.classList.add('hidden');
  genreView.classList.remove('hidden');
  surpriseResult.classList.add('hidden');
  aboutSection.classList.add('hidden');

  document.body.classList.remove('view-home');
  document.body.classList.add('view-genre');

  btnSobre.classList.remove('hidden');
  btnVolver.classList.add('hidden');
}

function showAbout() {
  aboutSection.classList.remove('hidden');
  genresSection.classList.add('hidden');
  genreView.classList.add('hidden');
  surpriseResult.classList.add('hidden');

  // 🔴 Ocultar la sección “¡Sorprendeme!”
  const surpriseSection = document.querySelector('.surprise-section');
  if (surpriseSection) surpriseSection.classList.add('hidden');

  btnSobre.classList.add('hidden');
  btnVolver.classList.remove('hidden');
}

function surpriseMe() {
  const randomMovie = CATALOG[Math.floor(Math.random() * CATALOG.length)];
  sPoster.src = randomMovie.poster;
  sTitle.textContent = randomMovie.title;
  sDesc.textContent = randomMovie.description;
  sPlatform.textContent = `Plataforma: ${randomMovie.platform}`;

  genresSection.classList.add('hidden');
  genreView.classList.add('hidden');
  surpriseResult.classList.remove('hidden');
  aboutSection.classList.add('hidden');

  document.body.classList.remove('view-home');

  btnSobre.classList.remove('hidden');
  btnVolver.classList.add('hidden');
}

// ==============================
// EVENTOS
// ==============================

// Click en géneros
genreElements.forEach(genreEl => {
  genreEl.addEventListener('click', () => showGenre(genreEl.dataset.genre));
});

// Botón volver home
btnBack.addEventListener('click', () => {
  showHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
sBack.addEventListener('click', () => {
  showHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Buscar película
searchBtn.addEventListener('click', () => {
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

  noResultsMessage.classList.toggle('hidden', found);
});

// Enter en input de búsqueda
searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchBtn.click();
});

// Sorpresa aleatoria
surpriseBtn.addEventListener('click', surpriseMe);

// Mostrar secciones
btnSobre.addEventListener('click', () => {
  showAbout();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
btnVolver.addEventListener('click', () => {
  showHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==============================
// INICIO
// ==============================
showHome();
