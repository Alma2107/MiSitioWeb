// ====== Intro video ======
// ====== Intro logic ======
const introVideo = document.getElementById('intro-video');
const introContainer = document.getElementById('intro-container');
const mainContent = document.getElementById('main-content');
const formRegistro = document.getElementById('formRegistro');
const btnRegistrar = document.getElementById('btnRegistrar');
const volverBtn = document.getElementById('volverBtn');
const registroForm = document.getElementById('registroForm');

introVideo.onended = () => {
  introContainer.style.display = 'none';
  mainContent.style.display = 'block';
};

// ====== DOM refs ======
const genresGrid = document.getElementById('genres');
const gvSection = document.getElementById('genre-view');
const gvTitle = document.getElementById('gvTitle');
const btnBack = document.getElementById('btnBack');
const btnSurprise = document.getElementById('btnSurprise');
const cardsEl = document.getElementById('cards');

// ====== Storage helpers ======
const LS_KEY = 'netflixMood.ratingsV2';
function loadStore() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)||'{}'); }
  catch { return {}; }
}
function saveStore(obj) {
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

// ====== Helper: render stars ======
function renderStars(value) {
  let out = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= value ? 'filled' : '';
    out += `<span class="star ${filled}" data-value="${i}">★</span>`;
  }
  return out;
}

// ====== CATALOG ======
// Aquí va tu CATALOG tal como lo pusiste
const CATALOG = [


// Romance
{ id: 'r1', genre: 'Romance', title: 'La La Land', type:'movie', description:'Dos artistas persiguen sus sueños en Los Ángeles mientras lidian con su relación.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/LaLaLand.jpg' },
{ id: 'r2', genre: 'Romance', title: 'Orgullo y Prejuicio', type:'movie', description:'Elizabeth Bennet y el señor Darcy enfrentan prejuicios y orgullo en la Inglaterra del siglo XIX.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/OrgulloPrejuicio.jpg' },
{ id: 'r3', genre: 'Romance', title: 'Diario de una Pasión', type:'movie', description:'La apasionada historia de amor entre Noah y Allie que supera el paso del tiempo.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/DiarioPasion.jpg' },
{ id: 'r4', genre: 'Romance', title: 'Titanic', type:'movie', description:'El amor imposible entre Jack y Rose en el viaje más trágico de la historia.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/Titanic.jpg' },
{ id: 'r5', genre: 'Romance', title: 'Antes del Amanecer', type:'movie', description:'Dos jóvenes se conocen en un tren y pasan una noche inolvidable en Viena.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/AntesAmanecer.jpg' },
{ id: 'r6', genre: 'Romance', title: 'Call Me By Your Name', type:'movie', description:'El verano en Italia cambia para siempre la vida de Elio con la llegada de Oliver.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/CallMeByYourName.jpg' },
{ id: 'r7', genre: 'Romance', title: 'A todos los chicos de los que me enamoré', type:'movie', description:'La vida de Lara Jean cambia cuando sus cartas secretas de amor salen a la luz.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/ATodosLosChicosDeLosQueMeEnamore.jpg' },
{ id: 'r8', genre: 'Romance', title: 'El diario de Bridget Jones', type:'movie', description:'Bridget intenta encontrar el amor mientras lidia con su vida caótica y divertida.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/BridgetJones.jpg' },
{ id: 'r9', genre: 'Romance', title: 'Cómo perder a un chico en 10 días', type:'movie', description:'Una periodista y un publicista apuestan en el amor con resultados inesperados.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/ComoPeerderUnChicoPor10Dias.jpg' },
{ id: 'r10', genre: 'Romance', title: 'La propuesta', type:'movie', description:'Una jefa obliga a su asistente a un falso matrimonio que pronto se complica.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/LaPropuesta.jpg' },
{ id: 'r11', genre: 'Romance', title: 'Mi Primer Amor', type:'movie', description:'Dos jóvenes vecinos descubren lo que significa enamorarse por primera vez.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/MiPrimerAmor.jpg' },
{ id: 'r12', genre: 'Romance', title: 'Yo Antes de Ti', type:'movie', description:'Louisa se convierte en cuidadora de un joven parapléjico y juntos transforman sus vidas.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/YoAntesDeTi.jpg' },
{ id: 'r13', genre: 'Romance', title: 'A dos metros de ti', type:'movie', description:'Dos adolescentes con fibrosis quística deben mantener distancia pese a estar enamorados.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/ADosMetrosDeTi.webp' },
{ id: 'r14', genre: 'Romance', title: 'Como si fuera la primera vez', type:'movie', description:'Henry enamora a Lucy cada día, ya que ella pierde la memoria cada noche.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/ComoSiFueraLaPrimeraVez.jpg' },
{ id: 'r15', genre: 'Romance', title: 'La casa del lago', type:'movie', description:'Una pareja se comunica a través de cartas en un buzón mágico que desafía el tiempo.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/LaCasaDelLago.webp' },
{ id: 'r16', genre: 'Romance', title: '500 días con ella', type:'movie', description:'Un joven reflexiona sobre una relación fallida que nunca fue lo que él pensó.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/500DiasConElla.webp' },
{ id: 'r17', genre: 'Romance', title: 'Cuestión de tiempo', type:'movie', description:'Un hombre con la habilidad de viajar en el tiempo busca mejorar su vida amorosa.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/CuestionDeTiempo.jpg' },
{ id: 'r18', genre: 'Romance', title: 'Soltero en casa', type:'movie', description:'Un hombre treintañero se resiste a dejar la casa de sus padres hasta que conoce a alguien.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/SolteroEnCasa.webp' },
{ id: 'r19', genre: 'Romance', title: 'ABC de amor', type:'movie', description:'Un niño de 10 años experimenta por primera vez lo que significa estar enamorado.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/ABC.webp' },
{ id: 'r20', genre: 'Romance', title: '10 Cosas que odio de ti', type:'movie', description:'Un adolescente intenta conquistar a la arisca hermana mayor de la chica de sus sueños.', platform:'Netflix', poster:'PeliculasRecomendadasPorlaPagina/PeliculasRomance/10CosasQueOdioDeTi.jpg' },

  
  
  
  
  
  
  // Terror
{ id: 't1', genre: 'Terror', title: 'El Conjuro', type:'movie', description:'Una pareja de investigadores paranormales enfrenta a una entidad oscura que aterroriza a una familia en su hogar.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/ElConjuro.jpg' },
{ id: 't2', genre: 'Terror', title: 'It', type:'movie', description:'Un grupo de niños se enfrenta a un mal ancestral que toma la forma de un payaso llamado Pennywise.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/It.jpeg' },
{ id: 't3', genre: 'Terror', title: 'Host', type:'movie', description:'Durante una videollamada, un grupo de amigos invoca accidentalmente a un espíritu maligno.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Host.jpeg' },
{ id: 't4', genre: 'Terror', title: 'Devuélvemela', type:'movie', description:'Un viaje a un festival de música en Suecia se convierte en una pesadilla cuando la desaparición de una joven desata horrores.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Devuelvemela.jpg' },
{ id: 't5', genre: 'Terror', title: '1978', type:'movie', description:'Una sangrienta masacre en un campamento de verano revela la maldición de Shadyside.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/1978.jpeg' },
{ id: 't6', genre: 'Terror', title: 'Cuando acecha la maldad', type:'movie', description:'Dos hermanos descubren un hombre poseído en su pueblo y despiertan el horror demoníaco.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/CuandoAcechaLaMaldad.webp' },
{ id: 't7', genre: 'Terror', title: 'Siniestro', type:'movie', description:'Un escritor encuentra cintas caseras que muestran asesinatos vinculados a una entidad demoníaca.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Siniestro.webp' },
{ id: 't8', genre: 'Terror', title: 'El Exorcista', type:'movie', description:'Una niña es poseída por un demonio y dos sacerdotes intentan salvarla mediante un exorcismo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/ElExorcista.jpg' },
{ id: 't9', genre: 'Terror', title: 'El Resplandor', type:'movie', description:'Un escritor se aísla con su familia en un hotel donde fuerzas malignas lo empujan a la locura.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/ElResplandor.jpeg' },
{ id: 't10', genre: 'Terror', title: 'La Sustancia', type:'movie', description:'Una sustancia misteriosa promete juventud eterna, pero esconde un precio macabro.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaSustancia.jpeg' },
{ id: 't11', genre: 'Terror', title: 'Aterrados', type:'movie', description:'Fenómenos paranormales aterrorizan un barrio en Buenos Aires.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Aterrados.jpg' },
{ id: 't12', genre: 'Terror', title: 'La Maldición', type:'movie', description:'Una maldición mortal acecha a quienes entran en una casa marcada por el rencor.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaMaldicion.jpeg' },
{ id: 't13', genre: 'Terror', title: 'El Cienpiés Humano 2', type:'movie', description:'Un hombre obsesionado con la primera película intenta recrear el grotesco experimento.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/ElCienpiesHumano2.jpg' },
{ id: 't14', genre: 'Terror', title: 'Hostel', type:'movie', description:'Un grupo de turistas es atrapado en un macabro negocio de tortura en Europa del Este.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Hostel.jpg' },
{ id: 't15', genre: 'Terror', title: 'Escupiré sobre tu Tumba', type:'movie', description:'Una mujer busca venganza brutal contra quienes la atacaron.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/EscupireSobreTuTumba.jpg' },
{ id: 't16', genre: 'Terror', title: 'Megan está desaparecida', type:'movie', description:'Dos adolescentes caen víctimas de un secuestrador en un caso basado en hechos reales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/MeganEstaDesaparecida.jpg' },
{ id: 't17', genre: 'Terror', title: 'Así en la Tierra como en el Infierno', type:'movie', description:'Exploradores se adentran en las catacumbas de París y enfrentan horrores ocultos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/AsiEnLaTierraComoEnElInfierno.webp' },
{ id: 't18', genre: 'Terror', title: 'Bárbaro', type:'movie', description:'Una joven descubre que su alquiler de Airbnb oculta un oscuro secreto.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Barbaro.jpeg' },
{ id: 't19', genre: 'Terror', title: 'Evil Dead', type:'movie', description:'Un grupo de amigos desata el terror al leer un libro demoníaco en una cabaña.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/EvilDead.jpg' },
{ id: 't20', genre: 'Terror', title: 'Las Crónicas del Miedo', type:'movie', description:'Antología de historias de terror encontradas en cintas caseras.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LasCronicasDelMiedo.webp' },
{ id: 't21', genre: 'Terror', title: 'Slenderman', type:'movie', description:'Un grupo de chicas invoca accidentalmente a la misteriosa figura de Slenderman.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Slenderman.jpg' },
{ id: 't22', genre: 'Terror', title: 'Un Lugar en Silencio', type:'movie', description:'Una familia debe vivir en silencio absoluto para sobrevivir a criaturas que cazan por el sonido.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/UnLugarEnSilencio.jpg' },
{ id: 't23', genre: 'Terror', title: 'Ouija', type:'movie', description:'Un grupo de amigos desata el mal al jugar con una tabla Ouija.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Ouija.webp' },
{ id: 't24', genre: 'Terror', title: 'Fragmentado', type:'movie', description:'Un hombre con múltiples personalidades secuestra a tres chicas, revelando un lado monstruoso.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Fragmentado.jpg' },
{ id: 't25', genre: 'Terror', title: 'La Morgue', type:'movie', description:'Padre e hijo forenses descubren un oscuro misterio en el cuerpo de una joven.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaMorgue.jpg' },
{ id: 't26', genre: 'Terror', title: 'En la Hierba Alta', type:'movie', description:'Dos hermanos quedan atrapados en un campo donde el tiempo y el espacio se distorsionan.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/EnLaHierbaAlta.webp' },
{ id: 't27', genre: 'Terror', title: 'La Monja', type:'movie', description:'Un sacerdote y una novicia enfrentan a un demonio en forma de monja en Rumania.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaMonja.webp' },
{ id: 't28', genre: 'Terror', title: 'Suspiria', type:'movie', description:'Una bailarina descubre oscuros rituales en una prestigiosa academia de danza.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Suspiria.webp' },
{ id: 't29', genre: 'Terror', title: 'En Presencia del Diablo', type:'movie', description:'Un padre intenta salvar a su hija poseída mientras se enfrenta a fuerzas malignas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/EnPresenciaDelDiablo.jpg' },
{ id: 't30', genre: 'Terror', title: 'La Casa Oscura', type:'movie', description:'Una viuda descubre secretos perturbadores en la casa construida por su esposo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaCasaOscura.jpg' },
{ id: 't31', genre: 'Terror', title: 'Sonríe', type:'movie', description:'Una psiquiatra es acechada por una maldición que se transmite con sonrisas inquietantes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/Sonrie.jpg' },
{ id: 't32', genre: 'Terror', title: 'La Maldición de Chucky', type:'movie', description:'Chucky regresa en un nuevo hogar, sembrando el terror mientras busca continuar su legado sangriento.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasTerror/LaMaldicionDeChuky.jpeg' },

  




  // Comedia
  { id: 'c1', genre: 'Comedia', title: 'SuperCool', type:'movie', description:'Dos amigos quieren divertirse antes de ir a la universidad y terminan en una noche caótica', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/SuperCool.jpeg' },
  { id: 'c2', genre: 'Comedia', title: 'Una pareja de idiotas', type:'movie', description:'Dos amigos torpes emprenden un viaje lleno de situaciones absurdas', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/StepBrothers.jpg' },
  { id: 'c3', genre: 'Comedia', title: 'Norbit', type:'movie', description:'Un hombre tímido intenta escapar de su dominante esposa para reencontrarse con su amor de infancia', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Norbit.webp' },
  { id: 'c4', genre: 'Comedia', title: 'Ted', type:'movie', description:'Un oso de peluche con vida propia crea problemas en la vida adulta de su mejor amigo', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Ted.webp' },
  { id: 'c5', genre: 'Comedia', title: '¿Qué pasó ayer?', type:'movie', description:'Un grupo de amigos despierta en Las Vegas sin recordar la noche anterior y buscan al novio desaparecido', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/QuePasoAyer.webp' },
  { id: 'c6', genre: 'Comedia', title: 'Todo Poderoso', type:'movie', description:'Un hombre común recibe los poderes de Dios y los usa con resultados desastrosos y graciosos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/TodoPoderoso.jpg' },
  { id: 'c7', genre: 'Comedia', title: 'Plan Familiar', type:'movie', description:'Un ejecutivo descubre que tiene que cuidar a su hija en medio de su vida caótica', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/PlanFamiliar.webp' },
  { id: 'c8', genre: 'Comedia', title: '¿Quién *&$%! son los Miller?', type:'movie', description:'Un falso matrimonio improvisa una familia para contrabandear droga desde México', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Quien#2#%& son los Miller.jpg' },
  { id: 'c9', genre: 'Comedia', title: 'Scott Pilgrim vs. los ex de la chica de sus sueños', type:'movie', description:'Un joven debe enfrentarse a los siete exnovios de su pareja en batallas llenas de humor y estilo cómic', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/ScottPilgrimYsusExs.jpg' },
  { id: 'c10', genre: 'Comedia', title: '¿Qué culpa tiene el niño?', type:'movie', description:'Una joven queda embarazada tras una aventura de una noche y su vida da un giro inesperado', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/QueCulpaTieneElNiño.jpg' },
  { id: 'c11', genre: 'Comedia', title: 'American Pie: Fraternidad Beta', type:'movie', description:'Un grupo de universitarios vive fiestas salvajes y situaciones embarazosas', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/AmericanPieFraternidadBeta.jpg' },
  { id: 'c12', genre: 'Comedia', title: 'American Pie Presents: The Naked Mile', type:'movie', description:'Un chico tímido corre desnudo junto a cientos de estudiantes en una universidad alocada', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/AmericanPiePresentsTheNakedMile.jpg' },
  { id: 'c13', genre: 'Comedia', title: 'American Pie - La Boda', type:'movie', description:'Jim y Michelle planean casarse, pero Stifler y los amigos complican todo con sus ocurrencias', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/AmericanPieLaBoda.webp' },
  { id: 'c14', genre: 'Comedia', title: 'American Reunion', type:'movie', description:'El grupo original de American Pie se reencuentra para recordar viejos tiempos y nuevas locuras', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/AmericanReunion.jpg' },
  { id: 'c15', genre: 'Comedia', title: '¿Y dónde está el fantasma?', type:'movie', description:'Un joven muerto vuelve como fantasma para ayudar a su amigo a conquistar a la chica de sus sueños', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/DondeEstaElFantasma.jpg' },
  { id: 'c16', genre: 'Comedia', title: 'Un viernes de locos', type:'movie', description:'Madre e hija intercambian cuerpos por un hechizo y deben adaptarse a la vida de la otra', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/UnViernesDeLocos.jpg' },
  { id: 'c17', genre: 'Comedia', title: 'Otro viernes de locos', type:'movie', description:'Dos amigos enfrentan días caóticos tras un intercambio de responsabilidades', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/OtroViernesDeLocos.jpeg' },
  { id: 'c18', genre: 'Comedia', title: 'Entrenando a papá', type:'movie', description:'Un jugador de fútbol americano descubre que tiene una hija de 8 años que cambia su vida', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/EntrenandoPapa.jpg' },
  { id: 'c19', genre: 'Comedia', title: 'De boda en boda', type:'movie', description:'Dos solteros se infiltran en bodas para ligar, pero uno de ellos termina enamorándose de verdad', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/DeBodaEnBoda.jpg' },
  { id: 'c20', genre: 'Comedia', title: 'Son como niños', type:'movie', description:'Amigos de la infancia se reúnen con sus familias y reviven momentos divertidos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/SonComoNiños1.jpg' },
  { id: 'c21', genre: 'Comedia', title: 'Son como niños 2', type:'movie', description:'Los mismos amigos afrontan nuevas situaciones ridículas en su vida adulta', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/SonComoNiños2.jpg' },
  { id: 'c22', genre: 'Comedia', title: 'Ted 2', type:'movie', description:'El oso Ted busca ser reconocido como persona legal junto a su mejor amigo', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Ted2.jpg' },
  { id: 'c23', genre: 'Comedia', title: 'Inexpertos', type:'movie', description:'Dos amigos inexpertos en la vida real se meten en problemas intentando aparentar lo contrario', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Inexpertos.jpg' },
  { id: 'c24', genre: 'Comedia', title: 'La chica de al lado', type:'movie', description:'Un joven se enamora de su vecina, que resulta ser una ex actriz de cine para adultos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/LaChicaDeAlLado.webp' },
  { id: 'c25', genre: 'Comedia', title: 'Vacaciones desastrosas', type:'movie', description:'Una familia emprende un viaje para revivir vacaciones pasadas con resultados caóticos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/VacacionesDesastrosas.jpeg' },
  { id: 'c26', genre: 'Comedia', title: 'Muerte en el funeral', type:'movie', description:'Una familia enfrenta el caos durante un funeral lleno de secretos y enredos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/MuerteEnElFuneral.jpg' },
  { id: 'c27', genre: 'Comedia', title: 'La otra missy', type:'movie', description:'Un hombre invita a la mujer equivocada a un viaje de trabajo y todo se convierte en un desastre divertido', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/LaOtraMissy.jpg' },
  { id: 'c28', genre: 'Comedia', title: 'Desnudo', type:'movie', description:'Un hombre queda atrapado en un bucle temporal reviviendo el mismo día de su boda', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/Desnudo.jpeg' },
  { id: 'c29', genre: 'Comedia', title: 'Chiquito pero peligroso', type:'movie', description:'Un criminal disfrazado de bebé es adoptado por una pareja que desconoce su verdadera identidad', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/ChiquitoPeroPeligroso.jpg' },
  { id: 'c30', genre: 'Comedia', title: 'Papas con honores', type:'movie', description:'Un grupo de estudiantes hace un trato con un vagabundo a cambio de beneficios académicos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/PapasConHonores.jpeg' },
  { id: 'c31', genre: 'Comedia', title: 'Adorable criatura', type:'movie', description:'Una joven sueña con encontrar al hombre perfecto, pero la realidad la sorprende con giros cómicos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/AdorableCriatura.jpg' },
  { id: 'c32', genre: 'Comedia', title: 'Gigolo por accidente en Europa', type:'movie', description:'Un hombre ingenuo se convierte en gigoló y termina enredado en situaciones ridículas en Europa', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/GigoloPorAccidenteEnEuropa.jpg' },
  { id: 'c33', genre: 'Comedia', title: 'Un nada ejemplar', type:'movie', description:'Dos policías torpes son castigados y deben trabajar en un programa juvenil lleno de humor', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/UnNadaParEjemplar.jpg' },
  { id: 'c34', genre: 'Comedia', title: '¿Y dónde están las rubias?', type:'movie', description:'Dos agentes del FBI se hacen pasar por hermanas millonarias en una parodia llena de enredos', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasComedia/DondeEstanLasRubias.jpeg' },


 

  



 //Studio Ghibli
 
  { id: 'g1', genre: 'Studio Ghibli', title: 'Mi vecino Totoro', type:'movie', description:'Dos hermanas se mudan al campo y descubren a Totoro, un espíritu del bosque que las lleva a vivir mágicas aventuras', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/MiVecinoTotoro.jpg' },
  { id: 'g2', genre: 'Studio Ghibli', title: 'El viaje de Chihiro', type:'movie', description:'Una niña se encuentra atrapada en un mundo espiritual y debe trabajar en una casa de baños para salvar a sus padres', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElViajeDeChihiro.jpg' },
  { id: 'g3', genre: 'Studio Ghibli', title: 'La princesa Mononoke', type:'movie', description:'Un joven príncipe se ve envuelto en un conflicto entre humanos y espíritus del bosque, luchando por encontrar un equilibrio', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/LaPrincesaMononoke.jpeg' },
  { id: 'g4', genre: 'Studio Ghibli', title: 'El castillo en el cielo', type:'movie', description:'Dos niños buscan una isla flotante mítica mientras son perseguidos por piratas y agentes del gobierno', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElCastilloEnElCielo.jpg' },
  { id: 'g5', genre: 'Studio Ghibli', title: 'El castillo ambulante', type:'movie', description:'Una joven es transformada en una anciana por una maldición y se embarca en una aventura con un mago y su castillo ambulante', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElCastilloAmbulante.jpg' },
  { id: 'g6', genre: 'Studio Ghibli', title: 'Ponyo en el acantilado', type:'movie', description:'Una niña pez se enamora de un niño humano y desea convertirse en humana, desatando caos en el mundo marino y terrestre', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/Ponyo.jpg' },
  { id: 'g7', genre: 'Studio Ghibli', title: 'Susurros del corazón', type:'movie', description:'Una joven escritora en ciernes sigue su pasión por la escritura mientras descubre más sobre sí misma y su entorno', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/SusurrosDelCorazon.webp' },
  { id: 'g8', genre: 'Studio Ghibli', title: 'La tumba de las luciérnagas', type:'movie', description:'Dos hermanos luchan por sobrevivir en Japón durante los últimos meses de la Segunda Guerra Mundial', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/LaTumbaDeLasLuciérnagas.webp' },
  { id: 'g9', genre: 'Studio Ghibli', title: 'El viento se levanta', type:'movie', description:'La historia de un ingeniero aeronáutico japonés que sueña con diseñar aviones mientras enfrenta desafíos personales y sociales', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElVientoSeLevanta.jpg' },
  { id: 'g10', genre: 'Studio Ghibli', title: 'El regreso del gato', type:'movie', description:'Una niña salva a un gato y es llevada al mundo de los gatos, donde se le ofrece convertirse en princesa', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElRegresoDelGato.webp' },
  { id: 'g11', genre: 'Studio Ghibli', title: 'Pompoko', type:'movie', description:'Un grupo de tanukis (perros mapache) lucha por salvar su hogar en los bosques de Japón de la expansión urbana', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/Pompoko.jpg' },
  { id: 'g12', genre: 'Studio Ghibli', title: 'La chica que saltaba a través del tiempo', type:'movie', description:'Una estudiante descubre que puede viajar en el tiempo, lo que la lleva a enfrentar decisiones difíciles y divertidas', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/LaChicaQueSaltabaATravésDelTiempo.jpg' },
  { id: 'g13', genre: 'Studio Ghibli', title: 'El cuento de la princesa Kaguya', type:'movie', description:'Una niña encontrada en un tallo de bambú crece rápidamente y debe enfrentar su destino como princesa celestial', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElCuentoDeLaPrincesaKaguya.jpeg' },
  { id: 'g14', genre: 'Studio Ghibli', title: 'Arrietty y el mundo de los diminutos', type:'movie', description:'Una pequeña familia de seres diminutos vive escondida en una casa humana mientras entablan amistad con un niño', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/Arriety.webp' },
  { id: 'g15', genre: 'Studio Ghibli', title: 'El recuerdo de Marnie', type:'movie', description:'Una joven solitaria descubre secretos y amistades en un misterioso pueblo costero', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElRecuerdoDeMarnie.webp' },
  { id: 'g16', genre: 'Studio Ghibli', title: 'La colina de las amapolas', type:'movie', description:'Dos estudiantes de secundaria se unen para salvar un edificio histórico en su ciudad mientras enfrentan sus propios desafíos personales', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/LaColinaDeLasAmapolas.jpeg' },
  { id: 'g17', genre: 'Studio Ghibli', title: 'Nicky, la aprendiz de bruja', type:'movie', description:'Una joven bruja debe independizarse y superar desafíos mientras ayuda a la gente con su magia', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/NickyLaAprendizDeBruja.jpg' },
  { id: 'g18', genre: 'Studio Ghibli', title: 'El castillo de Cagliostro', type:'movie', description:'Lupin III persigue tesoros y enfrenta peligros en un castillo lleno de secretos y trampas', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElCastilloDeCagliostro.jpg' },
  { id: 'g19', genre: 'Studio Ghibli', title: 'El reino de los gatos', type:'movie', description:'Una joven es transportada al mundo de los gatos y aprende sobre la amistad y la valentía', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/ElReinoDeLosGatos.webp' },
  { id: 'g20', genre: 'Studio Ghibli', title: 'Cuentos de Terramar', type:'movie', description:'Un joven aprendiz de mago debe enfrentar peligros y descubrir su propio poder en un mundo mágico', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasGhibli/CuentosDeTerramar.jpg' },

 
 
 
 
 
 
 //Superheroes
 
 
 
 
 
 
 
 
  // ... (el resto de tu CATALOG sigue igual)
];

// ====== Mostrar género con 31 películas ======
function showGenre(genre) {
  gvTitle.textContent = genre;
  cardsEl.innerHTML = '';
  const store = loadStore();
  const items = CATALOG.filter(x => x.genre === genre).slice(0,35);

  if(!items.length) {
    cardsEl.innerHTML = `<p style="opacity:.75">Sin ítems por ahora en <b>${genre}</b>.</p>`;
  }

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    const meta = item.type === 'series' ? `${item.seasons} temporada(s) • ${item.episodes} capítulo(s)` : 'Película';
    const ratingValue = (store[item.id]?.rating) || 0;
    const reviewText = (store[item.id]?.review) || '';
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}"/>
      <div class="card-body">
        <div class="title">${item.title}</div>
        <div class="meta">${meta}</div>
        <p class="desc">${item.description}</p>
        <p class="platform">Plataforma: <b>${item.platform}</b></p>
        <div class="stars" data-id="${item.id}" aria-label="Valorar de 1 a 5">${renderStars(ratingValue)}</div>
        <textarea class="review" placeholder="Escribí tu reseña aquí..." data-id="${item.id}">${reviewText}</textarea>
        <div class="card-actions">
          <button class="save-btn" data-id="${item.id}">Guardar</button>
          <button class="clear-btn" data-id="${item.id}">Borrar</button>
        </div>
      </div>`;
    cardsEl.appendChild(card);
  });

  document.querySelector('.surprise-section').classList.add('hidden');
  genresGrid.classList.add('hidden');
  gvSection.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ genre }, '', `#${encodeURIComponent(genre)}`);
}

// ====== Volver a la vista inicial ======
function showHome() {
  gvSection.classList.add('hidden');
  genresGrid.classList.remove('hidden');
  document.querySelector('.surprise-section').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState({}, '', '#');
}

// ====== Eventos ======
document.addEventListener('click', (e) => {
  const g = e.target.closest('.genre');
  if(g) { showGenre(g.getAttribute('data-genre')); return; }

  if(e.target.id === 'btnBack') { showHome(); return; }

  const star = e.target.closest('.star');
  if(star){
    const starsWrap = e.target.closest('.stars');
    const id = starsWrap.getAttribute('data-id');
    const value = Number(star.getAttribute('data-value'));
    starsWrap.innerHTML = renderStars(value);
    const store = loadStore();
    store[id] = { ...(store[id]||{}), rating: value };
    saveStore(store);
    return;
  }

  if(e.target.classList.contains('save-btn')){
    const id = e.target.getAttribute('data-id');
    const textarea = cardsEl.querySelector(`textarea[data-id="${id}"]`);
    const store = loadStore();
    store[id] = { ...(store[id]||{}), review: textarea.value.trim() };
    saveStore(store);
    e.target.textContent = '¡Guardado!';
    setTimeout(() => e.target.textContent = 'Guardar', 1200);
    return;
  }

  if(e.target.classList.contains('clear-btn')){
    const id = e.target.getAttribute('data-id');
    const store = loadStore();
    delete store[id];
    saveStore(store);
    const wrap = cardsEl.querySelector(`.stars[data-id="${id}"]`);
    if(wrap) wrap.innerHTML = renderStars(0);
    const textarea = cardsEl.querySelector(`textarea[data-id="${id}"]`);
    if(textarea) textarea.value = '';
    e.target.textContent = 'Limpio';
    setTimeout(() => e.target.textContent = 'Borrar', 900);
    return;
  }
});

// ====== Sorpréndeme ======
btnSurprise.addEventListener('click', () => {
  const item = CATALOG[Math.floor(Math.random()*CATALOG.length)];
  showGenre(item.genre);
  setTimeout(() => {
    const idx = CATALOG.filter(x=>x.genre===item.genre).findIndex(x=>x.id===item.id);
    const card = cardsEl.children[idx];
    if(card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
});

// ====== Deep-link por hash ======
window.addEventListener('DOMContentLoaded', () => {
  const hash = decodeURIComponent(location.hash.replace('#',''));
  if(hash && CATALOG.some(x => x.genre === hash)) showGenre(hash);
  else showHome();
});

window.addEventListener('popstate', (ev) => {
  if(ev.state?.genre) showGenre(ev.state.genre);
  else showHome();
});
