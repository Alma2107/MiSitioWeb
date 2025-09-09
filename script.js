// script.js
import { CATALOG } from './Catalogo.js'; // <--- Importa tu catálogo

document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // VIDEO DE INTRO
  // ==============================
  const introVideo = document.getElementById('intro-video');
  const introContainer = document.getElementById('intro-container');
  const mainContent = document.getElementById('main-content');

  function mostrarMain() {
    if (!mainContent.classList.contains("active")) {
      introContainer.style.display = 'none';
      mainContent.classList.add('active');
    }
  }

  if (introVideo) {
    introVideo.onended = mostrarMain;
    // seguridad: si falla el evento, forzamos a mostrar a los 10 seg
    setTimeout(mostrarMain, 10000);
  } else {
    mostrarMain();
  }

  // ==============================
  // VARIABLES GENERALES
  // ==============================
  const genresGrid = document.getElementById('genres');
  const gvSection = document.getElementById('genre-view');
  const gvTitle = document.getElementById('gvTitle');
  const btnSurprise = document.getElementById('btnSurprise');
  const cardsEl = document.getElementById('cards');

  // ====== BUSCADOR ======
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const noResultsMessage = document.getElementById('noResultsMessage');
  let currentGenre = '';

  // ==============================
  // LOCAL STORAGE
  // ==============================
  const LS_KEY = 'netflixMood.ratingsV2';
  function loadStore() { try { return JSON.parse(localStorage.getItem(LS_KEY)||'{}'); } catch { return {}; } }
  function saveStore(obj) { localStorage.setItem(LS_KEY, JSON.stringify(obj)); }

  // ==============================
  // RENDER ESTRELLAS
  // ==============================
  function renderStars(value) {
    let out = '';
    for (let i = 1; i <= 5; i++) {
      out += `<span class="star ${i <= value ? 'filled' : ''}" data-value="${i}">★</span>`;
    }
    return out;
  }

  // ==============================
  // MOSTRAR GÉNERO
  // ==============================
  function showGenre(genre) {
    currentGenre = genre;
    gvTitle.textContent = genre;
    cardsEl.innerHTML = '';

    const store = loadStore();
    const items = CATALOG.filter(x =>
      (x.genre||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase() ===
      genre.normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase()
    );

    if(!items.length) {
      cardsEl.innerHTML = `<p style="opacity:.75">Sin ítems por ahora en <b>${genre}</b>.</p>`;
    }

    const favStore = JSON.parse(localStorage.getItem("netflixMood.favorites") || "[]");

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';
      const meta = item.type === 'series' ? `${item.seasons} temporada(s) • ${item.episodes} capítulo(s)` : 'Película';
      const ratingValue = store[item.id]?.rating || 0;
      const reviewText = store[item.id]?.review || '';
      const seen = store[item.id]?.seen || false;
      const isFavorite = favStore.includes(item.id);

      card.innerHTML = `
        <div class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${item.id}">🔖</div>
        <img src="${item.poster}" alt="${item.title}"/>
        <div class="card-body">
          <div class="title">${item.title}</div>
          <div class="meta">${meta}</div>
          <p class="desc">${item.description}</p>
          <p class="platform">Plataforma: <b>${item.platform}</b></p>
          <div class="stars" data-id="${item.id}">${renderStars(ratingValue)}</div>
          <textarea class="review" placeholder="Escribí tu reseña aquí..." data-id="${item.id}">${reviewText}</textarea>
          <div class="btn-group">
            <button class="btn-save" data-id="${item.id}">Guardar</button>
            <button class="btn-back" data-id="${item.id}">Borrar</button>
          </div>
          <button class="btn-seen ${seen ? 'seen' : ''}" data-id="${item.id}">${seen ? "¡Ya la vi!" : "No la vi"}</button>
        </div>`;
      cardsEl.appendChild(card);
    });

    document.querySelector('.surprise-section').classList.add('hidden');
    genresGrid.classList.add('hidden');
    gvSection.classList.remove('hidden');
    noResultsMessage.classList.add('hidden');
    document.body.classList.add('view-genre');
    document.body.classList.remove('view-home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState({ genre }, '', `#${encodeURIComponent(genre)}`);
  }

  // ==============================
  // FILTRAR PELÍCULAS POR BÚSQUEDA
  // ==============================
  function filterMovies() {
    const term = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    cardsEl.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.title').textContent.toLowerCase();
      const desc = card.querySelector('.desc').textContent.toLowerCase();
      if(title.includes(term) || desc.includes(term)) { 
        card.style.display='block'; visibleCount++; 
      } else { 
        card.style.display='none'; 
      }
    });
    noResultsMessage.classList.toggle('hidden', visibleCount>0);
  }

  // ==============================
  // VOLVER A LA VISTA INICIAL
  // ==============================
  function showHome() {
    gvSection.classList.add('hidden');
    genresGrid.classList.remove('hidden');
    document.querySelector('.surprise-section').classList.remove('hidden');
    searchInput.value = '';
    noResultsMessage.classList.add('hidden');
    document.body.classList.add('view-home');
    document.body.classList.remove('view-genre');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState({}, '', '#');
  }

  // ==============================
  // EVENTOS GLOBALES
  // ==============================
  document.addEventListener('click', (e) => {
    const g = e.target.closest('.genre'); 
    if(g && g.hasAttribute('data-genre')) { 
      showGenre(g.getAttribute('data-genre')); 
      return; 
    }
    if(e.target.id==='btnBack') { 
      showHome(); 
      return; 
    }

    const star = e.target.closest('.star');
    if(star) {
      const starsWrap = e.target.closest('.stars');
      const id = starsWrap.getAttribute('data-id');
      const value = Number(star.getAttribute('data-value'));
      starsWrap.innerHTML = renderStars(value);
      const store = loadStore();
      store[id] = { ...(store[id]||{}), rating: value };
      saveStore(store);
      return;
    }

    if(e.target.classList.contains('btn-save') && e.target.id !== 'sSave'){
      const id = e.target.getAttribute('data-id');
      const textarea = cardsEl.querySelector(`textarea[data-id="${id}"]`);
      const store = loadStore();
      store[id] = { ...(store[id]||{}), review: textarea.value.trim() };
      saveStore(store);
      e.target.textContent = '¡Guardado!';
      setTimeout(() => e.target.textContent='Guardar',1200);
      return;
    }

    if(e.target.classList.contains('btn-back') && e.target.id !== 'sBack'){
      const id = e.target.getAttribute('data-id');
      const store = loadStore();
      delete store[id];
      saveStore(store);
      const wrap = cardsEl.querySelector(`.stars[data-id="${id}"]`);
      if(wrap) wrap.innerHTML = renderStars(0);
      const textarea = cardsEl.querySelector(`textarea[data-id="${id}"]`);
      if(textarea) textarea.value='';
      e.target.textContent='Limpio';
      setTimeout(()=> e.target.textContent='Borrar',900);
      return;
    }

    if(e.target.classList.contains('btn-seen')){
      const id = e.target.getAttribute('data-id');
      const store = loadStore();
      const seen = !(store[id]?.seen);
      store[id] = { ...(store[id]||{}), seen };
      saveStore(store);
      e.target.classList.toggle('seen',seen);
      e.target.textContent = seen ? "¡Ya la vi!" : "No la vi";
      return;
    }

    // ==============================
    // BOTÓN FAVORITOS
    // ==============================
    const favBtn = e.target.closest('.favorite-btn');
    if (favBtn) {
      const id = favBtn.getAttribute("data-id");
      let favorites = JSON.parse(localStorage.getItem("netflixMood.favorites") || "[]");

      if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        favBtn.classList.remove("active");
      } else {
        favorites.push(id);
        favBtn.classList.add("active");
      }

      localStorage.setItem("netflixMood.favorites", JSON.stringify(favorites));

      // Si estamos en la biblioteca, actualizar la vista en vivo
      if (gvTitle.textContent === "Mi Biblioteca") {
        favBtn.closest('.card').remove();
        if (favorites.length === 0) {
          cardsEl.innerHTML = `<p style="text-align:center; opacity:0.8;">Todavía no agregaste nada a tu biblioteca.</p>`;
        }
      }
      return;
    }
  });

  // ==============================
  // SORPRÉNDEME
  // ==============================
  btnSurprise.addEventListener('click', () => {
    const item = CATALOG[Math.floor(Math.random() * CATALOG.length)];
    document.getElementById('sPoster').src = item.poster;
    document.getElementById('sPoster').alt = item.title;
    document.getElementById('sTitle').textContent = item.title;
    document.getElementById('sDesc').textContent = item.description || "Sin descripción.";
    document.getElementById('sPlatform').textContent = "Plataforma: " + (item.platform || "Desconocida");

    document.getElementById('genres').classList.add('hidden');
    document.querySelector('.surprise-section').classList.add('hidden');
    document.getElementById('genre-view').classList.add('hidden');
    document.getElementById('surprise-result').classList.remove('hidden');
  });

  // ==============================
  // BOTÓN VOLVER EN SORPRÉNDEME
  // ==============================
  document.getElementById('sBack').addEventListener('click', () => {
    document.getElementById('surprise-result').classList.add('hidden');
    document.getElementById('genres').classList.remove('hidden');
    document.querySelector('.surprise-section').classList.remove('hidden');
  });

  // ==============================
  // EVENTOS BUSCADOR
  // ==============================
  searchBtn.addEventListener('click', filterMovies);
  searchInput.addEventListener('keyup', filterMovies);

  // ==============================
  // MI BIBLIOTECA
  // ==============================
  document.getElementById("btnBiblioteca").addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("netflixMood.favorites") || "[]");
    const favItems = CATALOG.filter(item => favorites.includes(item.id));

    cardsEl.innerHTML = '';

    if (favItems.length === 0) {
      cardsEl.innerHTML = `<p style="text-align:center; opacity:0.8;">Todavía no agregaste nada a tu biblioteca.</p>`;
    } else {
      favItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
          <div class="favorite-btn active" data-id="${item.id}">🔖</div>
          <img src="${item.poster}" alt="${item.title}"/>
          <div class="card-body">
            <div class="title">${item.title}</div>
            <p class="desc">${item.description}</p>
          </div>`;
        cardsEl.appendChild(card);
      });
    }

    gvTitle.textContent = "Mi Biblioteca";
    document.querySelector('.surprise-section').classList.add('hidden');
    genresGrid.classList.add('hidden');
    gvSection.classList.remove('hidden');
    document.body.classList.add('view-genre');
    document.body.classList.remove('view-home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==============================
  // DEEP LINK POR HASH
  // ==============================
  const hash = decodeURIComponent(location.hash.replace('#',''));
  if(hash && CATALOG.some(x => (x.genre||'').toLowerCase() === hash.toLowerCase())) {
    showGenre(hash);
  } else {
    showHome();
  }

  window.addEventListener('popstate',(ev)=>{
    if(ev.state?.genre) showGenre(ev.state.genre);
    else showHome();
  });

  // ==============================
  // ====== REGISTRO (abrir/cerrar modal)
  // ==============================
  const btnRegistrar = document.getElementById('btnRegistrar');
  const registerModal = document.getElementById('registerModal');
  const closeRegister = document.getElementById('closeRegister');

  if (btnRegistrar && registerModal && closeRegister) {
    btnRegistrar.addEventListener('click', () => {
      registerModal.classList.remove('hidden');
    });
    closeRegister.addEventListener('click', () => {
      registerModal.classList.add('hidden');
    });
    // Cerrar haciendo click fuera del contenido
    registerModal.addEventListener('click', (e) => {
      if (e.target === registerModal) registerModal.classList.add('hidden');
    });
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') registerModal.classList.add('hidden');
    });
  }

}); // <--- cierre del DOMContentLoaded
