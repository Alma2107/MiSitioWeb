import { CATALOG } from './Catalogo.js';

window.addEventListener('DOMContentLoaded', () => {

  // ------------------------------
  // SELECTORES PRINCIPALES
  // ------------------------------
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
  const surpriseSection = document.querySelector('.surprise-section');
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

  // ------------------------------
  // FUNCIONES DE VISUALIZACIÓN
  // ------------------------------
  function showHome() {
    genresSection?.classList.remove('hidden');
    genreView?.classList.add('hidden');
    surpriseSection?.classList.remove('hidden');
    surpriseResult?.classList.add('hidden');
    aboutSection?.classList.add('hidden');

    document.body.classList.add('view-home');
    document.body.classList.remove('view-genre');

    btnSobre?.classList.remove('hidden');
    btnVolver?.classList.add('hidden');
  }

  function showGenre(genre) {
    gvTitle.textContent = genre;
    cardsContainer.innerHTML = '';

    const movies = CATALOG.filter(movie => movie.genre === genre);

    if (movies.length === 0) {
      noResultsMessage?.classList.remove('hidden');
    } else {
      noResultsMessage?.classList.add('hidden');
      movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
          <p><strong>Plataforma:</strong> ${movie.platform}</p>
        `;
        cardsContainer.appendChild(card);
      });
    }

    genresSection?.classList.add('hidden');
    genreView?.classList.remove('hidden');
    surpriseSection?.classList.add('hidden');
    surpriseResult?.classList.add('hidden');
    aboutSection?.classList.add('hidden');

    document.body.classList.remove('view-home');
    document.body.classList.add('view-genre');

    btnSobre?.classList.remove('hidden');
    btnVolver?.classList.add('hidden');
  }

  function showAbout() {
    aboutSection?.classList.remove('hidden');
    genresSection?.classList.add('hidden');
    genreView?.classList.add('hidden');
    surpriseSection?.classList.add('hidden');
    surpriseResult?.classList.add('hidden');

    btnSobre?.classList.add('hidden');
    btnVolver?.classList.remove('hidden');
  }

  function surpriseMe() {
    if (CATALOG.length === 0) return;

    const randomMovie = CATALOG[Math.floor(Math.random() * CATALOG.length)];
    sPoster.src = randomMovie.poster;
    sPoster.alt = randomMovie.title;
    sTitle.textContent = randomMovie.title;
    sDesc.textContent = randomMovie.description;
    sPlatform.textContent = `Plataforma: ${randomMovie.platform}`;

    genresSection?.classList.add('hidden');
    genreView?.classList.add('hidden');
    surpriseSection?.classList.add('hidden');
    surpriseResult?.classList.remove('hidden');
    aboutSection?.classList.add('hidden');

    document.body.classList.remove('view-home');

    btnSobre?.classList.remove('hidden');
    btnVolver?.classList.add('hidden');
  }

  // ------------------------------
  // EVENTOS
  // ------------------------------
  genreElements.forEach(genreEl => {
    genreEl.addEventListener('click', () => showGenre(genreEl.dataset.genre));
  });

  btnBack?.addEventListener('click', () => { showHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  sBack?.addEventListener('click', () => { showHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  btnVolver?.addEventListener('click', () => { showHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  searchBtn?.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const cards = cardsContainer?.querySelectorAll('.card') || [];
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

    noResultsMessage?.classList.toggle('hidden', found);
  });

  searchInput?.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchBtn.click();
  });

  surpriseBtn?.addEventListener('click', surpriseMe);
  btnSobre?.addEventListener('click', () => { showAbout(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ------------------------------
  // INICIO
  // ------------------------------
  mainContent?.classList.add('active');
  showHome();

});
