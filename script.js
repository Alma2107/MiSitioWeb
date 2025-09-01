// ====== Intro video ======
const introVideo = document.getElementById('intro-video');
const introContainer = document.getElementById('intro-container');
const mainContent = document.getElementById('main-content');

introVideo.onended = () => {
  introContainer.style.display = 'none';
  mainContent.style.display = 'block';
};

// ====== DOM refs ======
const genresGrid = document.getElementById('genres');
const gvSection = document.getElementById('genre-view');
const gvTitle = document.getElementById('gvTitle');
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

//catalogo
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
 
 
 
 { id: 's1', genre: 'Superhéroes', title: 'Avengers: Endgame', type:'movie', description:'Los héroes restantes se unen para deshacer el daño causado por Thanos y restaurar el universo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/AvengersEndgame.webp' },
  { id: 's2', genre: 'Superhéroes', title: 'Spider-Man: No Way Home', type:'movie', description:'Peter Parker enfrenta las consecuencias de revelar su identidad mientras múltiples villanos de otras dimensiones aparecen.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/SpiderManNoWayHome.jpg' },
  { id: 's3', genre: 'Superhéroes', title: 'Black Panther', type:'movie', description:'T’Challa debe asumir el trono de Wakanda y proteger su nación de enemigos internos y externos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/BlackPanther.jpg' },
  { id: 's4', genre: 'Superhéroes', title: 'Wonder Woman', type:'movie', description:'Diana se aventura al mundo humano durante la Primera Guerra Mundial para detener un conflicto devastador.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/WonderWoman.jpg' },
  { id: 's5', genre: 'Superhéroes', title: 'Justice League', type:'movie', description:'Un grupo de héroes debe unirse para enfrentar una amenaza alienígena que podría destruir la Tierra.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/JusticeLeague.jpg' },
  { id: 's6', genre: 'Superhéroes', title: 'Iron Man', type:'movie', description:'Tony Stark construye una armadura avanzada para escapar de sus captores y proteger al mundo de amenazas peligrosas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/IronMan.jpeg' },
  { id: 's7', genre: 'Superhéroes', title: 'The Dark Knight', type:'movie', description:'Batman enfrenta al Joker, cuyo caos pone a prueba la moral y la justicia de Gotham.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/TheDarkKnight.jpg' },
  { id: 's8', genre: 'Superhéroes', title: 'Thor: Ragnarok', type:'movie', description:'Thor debe salvar Asgard de la destrucción y enfrentarse a su hermana Hela, la diosa de la muerte.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/ThorRagnarok.jpg' },
  { id: 's9', genre: 'Superhéroes', title: 'Doctor Strange', type:'movie', description:'Un cirujano descubre las artes místicas y debe proteger el mundo de fuerzas sobrenaturales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/DoctorStrange.jpeg' },
  { id: 's10', genre: 'Superhéroes', title: 'Captain America: Civil War', type:'movie', description:'Los Vengadores se dividen en dos bandos por diferencias sobre el control gubernamental.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/CaptainAmericaCivilWar.webp' },
  { id: 's11', genre: 'Superhéroes', title: 'Ant-Man', type:'movie', description:'Scott Lang utiliza un traje que lo hace diminuto para robar secretos y salvar al mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/AntMan.webp' },
  { id: 's12', genre: 'Superhéroes', title: 'Guardians of the Galaxy', type:'movie', description:'Un grupo de inadaptados espaciales debe unir fuerzas para proteger un poderoso artefacto.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/GuardiansOfTheGalaxy.webp' },
  { id: 's13', genre: 'Superhéroes', title: 'Aquaman', type:'movie', description:'Arthur Curry lucha por reclamar su lugar como rey de Atlantis mientras enfrenta amenazas de la superficie y el océano.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Aquaman.jpg' },
  { id: 's14', genre: 'Superhéroes', title: 'Shazam!', type:'movie', description:'Un adolescente obtiene poderes mágicos y debe aprender a usarlos para proteger el mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Shazam.webp' },
  { id: 's15', genre: 'Superhéroes', title: 'Black Widow', type:'movie', description:'Natasha Romanoff enfrenta su pasado mientras se enfrenta a conspiraciones dentro de S.H.I.E.L.D.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/BlackWidow.webp' },
  { id: 's16', genre: 'Superhéroes', title: 'Doctor Strange in the Multiverse of Madness', type:'movie', description:'Stephen Strange explora el multiverso mientras enfrenta nuevas amenazas sobrenaturales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/DoctorStrangeMultiverse.webp' },
  { id: 's17', genre: 'Superhéroes', title: 'Spider-Man: Homecoming', type:'movie', description:'Peter Parker equilibra su vida como adolescente con su papel como héroe en Nueva York.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/SpiderManHomecoming.webp' },
  { id: 's18', genre: 'Superhéroes', title: 'Spider-Man: Far From Home', type:'movie', description:'Peter viaja a Europa y enfrenta a un nuevo villano mientras lidia con la pérdida de Tony Stark.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/SpiderManFarFromHome.webp' },
  { id: 's19', genre: 'Superhéroes', title: 'Thor', type:'movie', description:'Thor es desterrado de Asgard y debe aprender humildad en la Tierra mientras enfrenta amenazas cósmicas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Thor.webp' },
  { id: 's20', genre: 'Superhéroes', title: 'Captain Marvel', type:'movie', description:'Carol Danvers descubre sus poderes y lucha por salvar el universo de una guerra intergaláctica.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/CaptainMarvel.jpg' },
  { id: 's21', genre: 'Superhéroes', title: 'Iron Man 2', type:'movie', description:'Tony Stark enfrenta problemas de salud y nuevos enemigos mientras lucha por proteger el mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/IronMan2.webp' },
  { id: 's22', genre: 'Superhéroes', title: 'Iron Man 3', type:'movie', description:'Tony Stark enfrenta a un enemigo inesperado que amenaza su vida y la de quienes ama.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/IronMan3.webp' },
  { id: 's23', genre: 'Superhéroes', title: 'Avengers: Infinity War', type:'movie', description:'Los héroes del universo se enfrentan a Thanos para evitar que obtenga las Gemas del Infinito.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/AvengersInfinityWar.jpeg' },
  { id: 's24', genre: 'Superhéroes', title: 'Batman v Superman: Dawn of Justice', type:'movie', description:'Batman y Superman se enfrentan mientras surge una amenaza aún mayor para la humanidad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/BatmanVSuperman.webp' },
  { id: 's25', genre: 'Superhéroes', title: 'Man of Steel', type:'movie', description:'Clark Kent descubre sus poderes y enfrenta desafíos para convertirse en Superman.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/ManOfSteel.webp' },
  { id: 's26', genre: 'Superhéroes', title: 'Wonder Woman 1984', type:'movie', description:'Diana Prince debe enfrentarse a nuevos enemigos mientras el mundo atraviesa tiempos complicados.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/WonderWoman1984.jpg' },
  { id: 's27', genre: 'Superhéroes', title: 'Venom', type:'movie', description:'Eddie Brock se fusiona con un simbionte alienígena y debe lidiar con sus nuevos poderes y enemigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Venom.jpg' },
  { id: 's28', genre: 'Superhéroes', title: 'Venom 2: Let There Be Carnage', type:'movie', description:'Eddie Brock enfrenta a un nuevo simbionte que amenaza con destruir todo a su paso.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Venom2.webp' },
  { id: 's29', genre: 'Superhéroes', title: 'Deadpool', type:'movie', description:'Un mercenario con habilidades de regeneración busca venganza mientras rompe la cuarta pared.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Deadpool.png' },
  { id: 's30', genre: 'Superhéroes', title: 'Deadpool 2', type:'movie', description:'Deadpool forma un equipo para proteger a un joven mutante mientras enfrenta nuevos enemigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Deadpool2.webp' },
  { id: 's31', genre: 'Superhéroes', title: 'X-Men', type:'movie', description:'Mutantes con poderes extraordinarios luchan por coexistir en un mundo que los teme y odia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/XMen.avif' },
  { id: 's32', genre: 'Superhéroes', title: 'X-Men: Days of Future Past', type:'movie', description:'Los X-Men viajan al pasado para prevenir un futuro apocalíptico y cambiar la historia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/XMenDaysOfFuturePast.jpg' },
  { id: 's33', genre: 'Superhéroes', title: 'X-Men: Apocalypse', type:'movie', description:'Los X-Men deben detener al poderoso mutante Apocalipsis antes de que destruya el mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/XMenApocalypse.jpg' },
  { id: 's34', genre: 'Superhéroes', title: 'Logan', type:'movie', description:'Un envejecido Wolverine protege a una joven mutante mientras enfrenta su propia mortalidad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Logan.jpg' },
  { id: 's35', genre: 'Superhéroes', title: 'Batman Begins', type:'movie', description:'Bruce Wayne comienza su transformación en Batman para proteger Gotham de la corrupción y el crimen.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/BatmanBegins.webp' },
  { id: 's36', genre: 'Superhéroes', title: 'Suicide Squad', type:'movie', description:'Un grupo de villanos es reclutado para misiones peligrosas por el gobierno a cambio de reducción de condena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/SuicideSquad.jpeg' },
  { id: 's37', genre: 'Superhéroes', title: 'The Suicide Squad', type:'movie', description:'Una nueva versión del escuadrón es enviada a una misión suicida con consecuencias inesperadas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/TheSuicideSquad.png' },
  { id: 's38', genre: 'Superhéroes', title: 'Shang-Chi y la Leyenda de los Diez Anillos', type:'movie', description:'Shang-Chi enfrenta a su pasado y a una organización secreta mientras descubre su verdadero destino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/ShangChi.webp' },
  { id: 's39', genre: 'Superhéroes', title: 'Eternals', type:'movie', description:'Un grupo de seres inmortales protege a la humanidad mientras enfrenta dilemas morales y secretos antiguos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/Eternals.jpeg' },
  { id: 's40', genre: 'Superhéroes', title: 'Black Adam', type:'movie', description:'Un anti-héroe con poderes ancestrales emerge y desafía a los héroes para imponer su propia justicia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasSuperheroes/BlackAdam.webp' },
 
 
 
 

//Princesas



  { id: 'p1', genre: 'Princesas', title: 'Princesa Rapunzel', type:'movie', description:'Rapunzel sueña con conocer el mundo exterior mientras descubre su verdadera identidad y poder.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/PrincesaRapunzel.jpg' },
  { id: 'p2', genre: 'Princesas', title: 'La Bella y la Bestia', type:'movie', description:'Bella debe aprender a ver más allá de las apariencias mientras descubre el amor verdadero.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/LaBellaYLaBestia.webp' },
  { id: 'p3', genre: 'Princesas', title: 'Cenicienta', type:'movie', description:'Cenicienta lucha por encontrar su felicidad mientras enfrenta obstáculos impuestos por su madrastra y hermanastras.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Cenicienta.webp' },
  { id: 'p4', genre: 'Princesas', title: 'La Sirenita', type:'movie', description:'Ariel, una sirena curiosa, sueña con vivir en el mundo humano y busca cumplir su deseo de amor verdadero.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/LaSirenita.jpg' },
  { id: 'p5', genre: 'Princesas', title: 'Blanca Nieves y los Siete Enanitos', type:'movie', description:'Blanca Nieves debe escapar de la malvada reina mientras encuentra amistad y amor en su camino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/BlancaNieves.webp' },
  { id: 'p6', genre: 'Princesas', title: 'Mulán', type:'movie', description:'Mulán se disfraza de hombre para unirse al ejército y proteger a su familia y a su país.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Mulan.jpg' },
  { id: 'p7', genre: 'Princesas', title: 'Tiana y el Sapo', type:'movie', description:'Tiana sueña con tener su propio restaurante y aprende que el amor puede transformar su vida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Tiana.jpg' },
  { id: 'p8', genre: 'Princesas', title: 'Aurora: La Bella Durmiente', type:'movie', description:'Aurora enfrenta la maldición de una bruja y descubre el poder del amor verdadero.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Aurora.webp' },
  { id: 'p9', genre: 'Princesas', title: 'Jasmine: Aladdin', type:'movie', description:'Jasmine busca libertad y amor verdadero mientras enfrenta los planes de un malvado visir.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Jasmine.jpeg' },
  { id: 'p10', genre: 'Princesas', title: 'Pocahontas', type:'movie', description:'Pocahontas descubre el valor de la paz y la comprensión entre culturas diferentes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Pocahontas.jpg' },
  { id: 'p11', genre: 'Princesas', title: 'Moana', type:'movie', description:'Moana se embarca en una aventura épica para salvar su isla y descubrir su verdadero destino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Moana.jpeg' },
  { id: 'p12', genre: 'Princesas', title: 'Elsa: Frozen', type:'movie', description:'Elsa debe aprender a controlar sus poderes y aceptar su identidad mientras protege a su hermana.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Frozen.webp' },
  { id: 'p13', genre: 'Princesas', title: 'Anna: Frozen', type:'movie', description:'Anna emprende un viaje para encontrar y ayudar a su hermana Elsa, enfrentando aventuras y peligros.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Frozen2.jpeg' },
  { id: 'p14', genre: 'Princesas', title: 'Rapunzel: Enredados Otra Vez', type:'movie', description:'Rapunzel y sus amigos enfrentan nuevas aventuras y desafíos mientras exploran el mundo más allá del reino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/RapunzelEnredadosOtraVez.webp' },
  { id: 'p15', genre: 'Princesas', title: 'Ariel y la Sirenita 2', type:'movie', description:'Ariel y su hija se embarcan en nuevas aventuras bajo el mar enfrentando villanos y descubriendo secretos familiares.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/LaSirenita2.webp' },
  { id: 'p16', genre: 'Princesas', title: 'Merida: Valiente', type:'movie', description:'Merida desafía tradiciones y busca su destino mientras aprende sobre valentía y familia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Merida.jpg' },
  { id: 'p17', genre: 'Princesas', title: 'Raya y el Último Dragón', type:'movie', description:'Raya busca unir a su reino y encontrar al último dragón para salvar a su pueblo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Raya.jpeg' },
  { id: 'p18', genre: 'Princesas', title: 'Cenicienta 2: Un Sueño Real', type:'movie', description:'Cenicienta enfrenta nuevos desafíos en su vida como princesa mientras persigue la felicidad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Cenicienta2.jpeg' },
  { id: 'p19', genre: 'Princesas', title: 'Bella y la Bestia 2', type:'movie', description:'Bella y Bestia viven nuevas aventuras mientras descubren secretos del castillo encantado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/LaBellaYLaBestia2.jpg' },
  { id: 'p20', genre: 'Princesas', title: 'Jasmine y Aladdin 2', type:'movie', description:'Jasmine y Aladdin viven aventuras en Agrabah mientras luchan contra villanos y protegen su reino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Aladdin2.jpg' },
  { id: 'p21', genre: 'Princesas', title: 'Moana 2', type:'movie', description:'Moana vuelve a embarcarse en un viaje épico para salvar su isla y aprender más sobre su legado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPrincesas/Moana2.jpeg' },









  //Animacion



  { id: 'a1', genre: 'Animación', title: 'Cars', type:'movie', description:'Rayo McQueen aprende lecciones de amistad y humildad en Radiator Springs.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Cars.jpg' },
  { id: 'a2', genre: 'Animación', title: 'Cars 2', type:'movie', description:'Rayo McQueen compite internacionalmente y descubre intrigas de espionaje.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Cars2.jpg' },
  { id: 'a3', genre: 'Animación', title: 'Cars 3', type:'movie', description:'Rayo McQueen debe adaptarse a una nueva generación de corredores más rápidos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Cars3.webp' },
  { id: 'a4', genre: 'Animación', title: 'Toy Story', type:'movie', description:'Los juguetes de Andy cobran vida cuando él no está y viven aventuras juntos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ToyStory.jpg' },
  { id: 'a5', genre: 'Animación', title: 'Toy Story 2', type:'movie', description:'Woody es secuestrado y Buzz y sus amigos intentan rescatarlo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ToyStory2.webp' },
  { id: 'a6', genre: 'Animación', title: 'Toy Story 3', type:'movie', description:'Los juguetes enfrentan la incertidumbre de ser donados y la transición de Andy a la adultez.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ToyStory3.jpeg' },
  { id: 'a7', genre: 'Animación', title: 'Toy Story 4', type:'movie', description:'Woody emprende una nueva aventura junto a Forky y viejos amigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ToyStory4.jpg' },
  { id: 'a8', genre: 'Animación', title: 'Buscando a Nemo', type:'movie', description:'Marlin atraviesa el océano para rescatar a su hijo Nemo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/BuscandoANemo.webp' },
  { id: 'a9', genre: 'Animación', title: 'Buscando a Dory', type:'movie', description:'Dory emprende un viaje para encontrar a su familia perdida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/BuscandoADory.jpg' },
  { id: 'a10', genre: 'Animación', title: 'Shrek', type:'movie', description:'Shrek rescata a la princesa Fiona y descubre el valor de la amistad y el amor.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Shrek.jpeg' },
  { id: 'a11', genre: 'Animación', title: 'Shrek 2', type:'movie', description:'Shrek y Fiona visitan el reino de Muy Muy Lejano y enfrentan nuevos desafíos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Shrek2.jpeg' },
  { id: 'a12', genre: 'Animación', title: 'Shrek Tercero', type:'movie', description:'Shrek busca un heredero al trono mientras enfrenta la presión de ser rey.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Shrek3.jpeg' },
  { id: 'a13', genre: 'Animación', title: 'Shrek 4: Felices para Siempre', type:'movie', description:'Shrek intenta recuperar su vida tranquila después de que un libro mágico cambia su mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Shrek4.jpeg' },
  { id: 'a14', genre: 'Animación', title: 'Río', type:'movie', description:'Blu descubre la vida salvaje en Brasil mientras intenta adaptarse a su nuevo hogar.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Rio.jpeg' },
  { id: 'a15', genre: 'Animación', title: 'Río 2', type:'movie', description:'Blu y su familia enfrentan aventuras y peligros en la selva amazónica.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Rio2.jpeg' },
  { id: 'a16', genre: 'Animación', title: 'Mi Villano Favorito', type:'movie', description:'Gru planea robar la luna, pero descubre el valor de la familia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MiVillanoFavorito.jpeg' },
  { id: 'a17', genre: 'Animación', title: 'Mi Villano Favorito 2', type:'movie', description:'Gru enfrenta nuevos villanos mientras equilibra la vida familiar.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MiVillanoFavorito2.webp' },
  { id: 'a18', genre: 'Animación', title: 'Mi Villano Favorito 3', type:'movie', description:'Gru y los Minions luchan contra un villano inesperado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MiVillanoFavorito3.jpeg' },
  { id: 'a19', genre: 'Animación', title: 'El Rey León', type:'movie', description:'Simba aprende a aceptar su destino como rey de la Sabana.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ElReyLeon.webp' },
  { id: 'a20', genre: 'Animación', title: 'El Rey León 2', type:'movie', description:'La nueva generación de leones enfrenta desafíos mientras mantiene el legado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ElReyLeon2.jpeg' },
  { id: 'a21', genre: 'Animación', title: 'Kung Fu Panda', type:'movie', description:'Po aprende Kung Fu y se convierte en un héroe inesperado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/KungFuPanda.jpg' },
  { id: 'a22', genre: 'Animación', title: 'Kung Fu Panda 2', type:'movie', description:'Po enfrenta un enemigo poderoso y descubre su pasado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/KungFuPanda2.webp' },
  { id: 'a23', genre: 'Animación', title: 'Kung Fu Panda 3', type:'movie', description:'Po se reúne con su padre y nuevos pandas para salvar su aldea.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/KungFuPanda3.jpeg' },
  { id: 'a24', genre: 'Animación', title: 'Big Hero 6', type:'movie', description:'Hiro y Baymax forman un equipo para salvar su ciudad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/BigHero.webp' },
  { id: 'a25', genre: 'Animación', title: 'Zootopia', type:'movie', description:'Judy y Nick resuelven un misterio en la ciudad de animales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Zootopia.jpg' },
  { id: 'a26', genre: 'Animación', title: 'Intensa-Mente', type:'movie', description:'Las emociones de Riley la ayudan a afrontar los cambios de su vida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/IntensaMente.webp' },
  { id: 'a27', genre: 'Animación', title: 'Coco', type:'movie', description:'Miguel descubre la historia de su familia en el mundo de los muertos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Coco.jpeg' },
  { id: 'a28', genre: 'Animación', title: 'Ralph, el Demoledor', type:'movie', description:'Ralph intenta ser un héroe dentro de su juego.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/RalphElDemoledor.webp' },
  { id: 'a29', genre: 'Animación', title: 'Ralph Rompe Internet', type:'movie', description:'Ralph y Vanellope exploran Internet para salvar su videojuego.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/RalphRompeInternet.webp' },
  { id: 'a30', genre: 'Animación', title: 'Hotel Transylvania', type:'movie', description:'Drácula dirige un hotel exclusivo para monstruos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/HotelTransylvania.jpg' },
  { id: 'a31', genre: 'Animación', title: 'Hotel Transylvania 2', type:'movie', description:'La familia de Drácula enfrenta nuevas aventuras y retos familiares.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/HotelTransylvania2.jpg' },
  { id: 'a32', genre: 'Animación', title: 'Hotel Transylvania 3', type:'movie', description:'Los monstruos van de crucero y viven un verano lleno de sorpresas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/HotelTransylvania3.jpg' },
  { id: 'a33', genre: 'Animación', title: 'Monster Inc', type:'movie', description:'Monstruos generan energía asustando a los niños, hasta que surge Boo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MonsterInc.webp' },
  { id: 'a34', genre: 'Animación', title: 'Monster University', type:'movie', description:'Mike y Sulley se conocen en la universidad y aprenden a ser grandes amigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MonsterUniversity.jpeg' },
  { id: 'a35', genre: 'Animación', title: 'Wall-E', type:'movie', description:'Un robot solitario limpia la Tierra y encuentra el amor y la esperanza.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/WallE.webp' },
  { id: 'a36', genre: 'Animación', title: 'Up', type:'movie', description:'Un anciano viaja con su casa flotante para cumplir su sueño y encuentra amistad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Up.jpg' },
  { id: 'a37', genre: 'Animación', title: 'Chicken Little', type:'movie', description:'Chicken Little intenta salvar su pueblo mientras demuestra su valentía.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ChickenLittle.webp' },
  { id: 'a38', genre: 'Animación', title: 'Ratatouille', type:'movie', description:'Remy, la rata chef, persigue su sueño en París.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Ratatouille.webp' },
  { id: 'a39', genre: 'Animación', title: 'El Lorax', type:'movie', description:'Un joven descubre la importancia de cuidar el medio ambiente.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ElLorax.jpg' },
  { id: 'a40', genre: 'Animación', title: 'Lluvia de Hamburguesas', type:'movie', description:'La comida cobra vida creando un divertido desastre en la ciudad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LluviaDeHamburguesas.webp' },
  { id: 'a41', genre: 'Animación', title: 'Lluvia de Hamburguesas 2', type:'movie', description:'Las locuras de la comida continúan y Flint debe resolverlo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LluviaDeHamburguesas2.jpg' },
  { id: 'a42', genre: 'Animación', title: 'Metegol', type:'movie', description:'Un juego de metegol cobra vida para salvar a su pueblo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Metegol.jpeg' },
  { id: 'a43', genre: 'Animación', title: 'Bichos', type:'movie', description:'Insectos luchan por sobrevivir y proteger su colonia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Bichos.webp' },
  { id: 'a44', genre: 'Animación', title: 'Pollitos en Fuga', type:'movie', description:'Pollitos planean escapar de la granja.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/PollitosEnFuga.webp' },
  { id: 'a45', genre: 'Animación', title: 'Pollitos en Fuga: El Origen de los Nuggets', type:'movie', description:'La historia de los pollitos antes de su gran escape.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/PollitosEnFuga2.jpg' },
  { id: 'a46', genre: 'Animación', title: 'Cómo Entrenar a tu Dragón', type:'movie', description:'Hipo entrena a Chimuelo y forman un vínculo especial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ComoEntrenarATuDragon.jpg' },
  { id: 'a47', genre: 'Animación', title: 'Cómo Entrenar a tu Dragón 2', type:'movie', description:'Hipo y Chimuelo enfrentan nuevos desafíos y enemigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ComoEntrenarATuDragon2.jpg' },
  { id: 'a48', genre: 'Animación', title: 'Cómo Entrenar a tu Dragón 3', type:'movie', description:'La amistad y valentía de Hipo y Chimuelo se pone a prueba.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ComoEntrenarATuDragon3.jpg' },
  { id: 'a49', genre: 'Animación', title: 'Robots', type:'movie', description:'Rodney busca cumplir sus sueños en un mundo de tecnología avanzada.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Robots.jpeg' },
  { id: 'a50', genre: 'Animación', title: 'Megamente', type:'movie', description:'Un villano descubre accidentalmente que puede ser un héroe.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Megamente.jpeg' },
  { id: 'a51', genre: 'Animación', title: 'Megamente: Segunda Parte', type:'movie', description:'Megamente enfrenta nuevos retos y aprende a ser mejor héroe.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Megamente2.jpg' },
  { id: 'a52', genre: 'Animación', title: 'Monsters vs Aliens', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MonstersvsAliens.webp' },
  { id: 'a53', genre: 'Animación', title: 'Rango', type:'movie', description:'Un camaleón se convierte en sheriff y protege su ciudad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Rango.jpg' },
  { id: 'a54', genre: 'Animación', title: 'Bee Movie', type:'movie', description:'Una abeja cuestiona las normas y descubre un mundo nuevo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/BeeMovie.jpg' },
  { id: 'a55', genre: 'Animación', title: 'Pinocho', type:'movie', description:'Un muñeco de madera sueña con ser un niño real.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Pinocho.jpeg' },
  { id: 'a56', genre: 'Animación', title: 'Los Increíbles', type:'movie', description:'Una familia de superhéroes enfrenta villanos mientras protege la ciudad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LosIncreibles.webp' },
  { id: 'a57', genre: 'Animación', title: 'Los Increíbles 2', type:'movie', description:'La familia continúa luchando contra el crimen mientras equilibra su vida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LosIncreibles2.webp' },
  { id: 'a58', genre: 'Animación', title: 'La Era de Hielo', type:'movie', description:'Animales prehistóricos enfrentan aventuras y desafíos juntos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaEraDeHielo.webp' },
  { id: 'a59', genre: 'Animación', title: 'La Era de Hielo 2', type:'movie', description:'Los amigos deben adaptarse a los cambios de la naturaleza y nuevos peligros.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaEraDeHielo2.webp' },
  { id: 'a60', genre: 'Animación', title: 'La Era de Hielo 3', type:'movie', description:'Viajan al otro lado del mundo y enfrentan volcanes y dinosaurios.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaEraDeHielo3.jpg' },
  { id: 'a61', genre: 'Animación', title: 'La Era de Hielo 4', type:'movie', description:'Los amigos se embarcan en una aventura por el océano.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaEraDeHielo4.jpeg' },
  { id: 'a62', genre: 'Animación', title: 'Los Pitufos', type:'movie', description:'Pequeños seres azules viven aventuras mientras evitan a Gargamel.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LosPitufos.jpg' },
  { id: 'a63', genre: 'Animación', title: 'Los Pitufos 2', type:'movie', description:'Los Pitufos enfrentan un nuevo plan de Gargamel y deben salvar su aldea.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LosPitufos2.jpg' },
  { id: 'a64', genre: 'Animación', title: 'Alvin y las Ardillas', type:'movie', description:'Alvin y sus hermanos se meten en líos mientras buscan éxito musical.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AlvinYLasArdillas.jpg' },
  { id: 'a65', genre: 'Animación', title: 'Alvin y las Ardillas 2', type:'movie', description:'Los hermanos enfrentan nuevos desafíos y travesuras en su camino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AlvinYLasArdillas2.jpg' },
  { id: 'a66', genre: 'Animación', title: 'Angry Birds', type:'movie', description:'Los pájaros luchan contra los cerdos que roban sus huevos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AngryBirds.jpeg' },
  { id: 'a67', genre: 'Animación', title: 'Angry Birds 2', type:'movie', description:'Pájaros y cerdos deben unir fuerzas para enfrentar un enemigo común.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AngryBirds2.webp' },
  { id: 'a70', genre: 'Animación', title: 'Emoji: La Película', type:'movie', description:'Los emojis viven aventuras dentro de un teléfono.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Emoji.jpeg' },
  { id: 'a71', genre: 'Animación', title: 'Trolls', type:'movie', description:'Trolls coloridos viven aventuras y buscan la felicidad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Trolls.jpeg' },
  { id: 'a72', genre: 'Animación', title: 'Trolls 2', type:'movie', description:'Los Trolls enfrentan nuevos desafíos y enemigos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Trolls2.jpeg' },
  { id: 'a73', genre: 'Animación', title: 'Happy Feet', type:'movie', description:'Un pingüino con talento para bailar lucha por su lugar.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/HappyFeet.jpeg' },
  { id: 'a74', genre: 'Animación', title: 'Peabody y Sherman', type:'movie', description:'Un perro genio y su hijo adoptivo viajan en el tiempo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/PeabodyYSherman.webp' },
  { id: 'a75', genre: 'Animación', title: 'Madagascar ', type:'movie', description:'Un pingüino con talento para bailar lucha por su lugar.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Madagascar.jpg' },
  { id: 'a76', genre: 'Animación', title: 'Madagascar 2', type:'movie', description:'Un perro genio y su hijo adoptivo viajan en el tiempo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Madagascar2.jpeg' },
  { id: 'a77', genre: 'Animación', title: 'Madagascar 3 : Los fugitivos', type:'movie', description:'Un perro genio y su hijo adoptivo viajan en el tiempo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Madagascar3.jpg' },
  { id: 'a78', genre: 'Animación', title: 'Monsters vs Aliens 2', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MonstervsAliens2.jpg' },
  { id: 'a79', genre: 'Animación', title: 'Horton y el mundo de los quien', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/HortonYElMundoDeLosQuien.jpeg' },
  { id: 'a80', genre: 'Animación', title: 'Locos por el surf', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LocosPorElSurf.jpg' },
  { id: 'a81', genre: 'Animación', title: 'Locos por el surf 2 : Olamania', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LocosPorElSurf2.jpg' },
  { id: 'a82', genre: 'Animación', title: 'Alvin y las ardillas 3', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AlvinYLasArdillas3.jpg' },
  { id: 'a83', genre: 'Animación', title: 'La era de hielo 5', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaEraDeHielo5.jpg' },
  { id: 'a84', genre: 'Animación', title: 'Kung Fu Panda 4', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/KungFuPanda4.jpg' },
  { id: 'a85', genre: 'Animación', title: 'Mi Villano favorito 4', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/MiVillanoFavorito4.jpeg' },
  { id: 'a86', genre: 'Animación', title: 'Intensamente 2', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Intensamente2.webp' },
  { id: 'a87', genre: 'Animación', title: 'El rey leon 3: Hakuna matata', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ElReyLeon3.jpg' },
  { id: 'a88', genre: 'Animación', title: 'Los Pitufos 3', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LosPitufos3.jpg' },
  { id: 'a88', genre: 'Animación', title: 'Home', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Home.jpeg' },
  { id: 'a89', genre: 'Animación', title: 'El Espantatiburones', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/ElEspantatiburones.webp' },
  { id: 'a90', genre: 'Animación', title: 'Vecinos invasores', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/VecinosInvasores.jpg' },
  { id: 'a91', genre: 'Animación', title: 'Amigos Salvajes', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AmigosSalvajes.jpeg' },
  { id: 'a92', genre: 'Animación', title: 'Amigos Salvajes 2', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AmigosSalvajes2.webp' },,
  { id: 'a93', genre: 'Animación', title: 'Amigos Salvajes 3', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AmigosSalvajes3.jpg' },
  { id: 'a94', genre: 'Animación', title: 'Amigos Salvajes 4', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/AmigosSalvajes4.jpg' },
  { id: 'a95', genre: 'Animación', title: 'Bolt : Un perro fuera de serie', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Bolt.webp' },
  { id: 'a96', genre: 'Animación', title: 'La vida secreta de las mascotas', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaVidaSecretaDeLasMascotas.jpg' },
  { id: 'a97', genre: 'Animación', title: 'La vida secreta de las mascotas 2', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LaVidaSecretaDeLasMascotas2.jpeg' },,
  { id: 'a98', genre: 'Animación', title: 'Lo que el agua se llevo', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/LoQueElAguaSeLlevo.webp' },
  { id: 'a99', genre: 'Animación', title: 'Garfiel : Fuera de casa', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/GarfielFueraDeCasa.jpeg' },
  { id: 'a100', genre: 'Animación', title: 'Dumbo', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Dumbo.webp' },
  { id: 'a102', genre: 'Animación', title: 'Patos', type:'movie', description:'Monstruos defienden la Tierra de una invasión alienígena.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAnimacion/Patos.jpeg' },








// Historia


 { id: 'h1', genre: 'Historia', title: 'Gladiador', type:'movie', description:'Un general romano es traicionado y convertido en esclavo, pero lucha en la arena como gladiador para vengar la muerte de su familia y del emperador que lo traicionó.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Gladiador.jpg' },
{ id: 'h2', genre: 'Historia', title: 'Troya', type:'movie', description:'Basada en la Ilíada de Homero, narra la guerra entre griegos y troyanos tras el rapto de Helena, donde Aquiles y Héctor se enfrentan en una batalla legendaria.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Troya.jpg' },
{ id: 'h3', genre: 'Historia', title: '300', type:'movie', description:'El rey Leónidas lidera a 300 espartanos en la batalla de las Termópilas contra el vasto ejército persa de Jerjes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/300.jpg' },
{ id: 'h4', genre: 'Historia', title: 'Rey Arturo', type:'movie', description:'Una reinterpretación del mito artúrico, donde Arturo y sus caballeros luchan contra invasores sajones en Britania.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Rey_Arturo.jpg' },
{ id: 'h5', genre: 'Historia', title: 'La sociedad de la nieve', type:'movie', description:'Relato del trágico accidente aéreo de 1972 en los Andes, donde los sobrevivientes recurrieron a medidas extremas para mantenerse con vida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_sociedad_de_la_nieve.jpg' },
{ id: 'h6', genre: 'Historia', title: 'La vida es bella', type:'movie', description:'Un padre usa el humor y la imaginación para proteger a su hijo del horror de un campo de concentración nazi.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_vida_es_bella.jpg' },
{ id: 'h7', genre: 'Historia', title: 'El pianista', type:'movie', description:'Basada en hechos reales, sigue la historia de Władysław Szpilman, un pianista judío que lucha por sobrevivir durante la ocupación nazi en Polonia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_pianista.webp' },
{ id: 'h8', genre: 'Historia', title: '12 Años de esclavitud', type:'movie', description:'Un hombre negro libre es secuestrado y vendido como esclavo en el sur de Estados Unidos, luchando por recuperar su libertad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/12_Años_de_esclavitud.webp' },
{ id: 'h9', genre: 'Historia', title: 'Cartas desde Iwo Jima', type:'movie', description:'La batalla de Iwo Jima narrada desde el punto de vista de los soldados japoneses que la defendieron.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Cartas_desde_Iwo_Jima.jpeg' },
{ id: 'h10', genre: 'Historia', title: 'Dunkerque', type:'movie', description:'Miles de soldados aliados son evacuados de Dunkerque durante la Segunda Guerra Mundial, rodeados por las fuerzas nazis.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Dunkerque.jpg' },
{ id: 'h11', genre: 'Historia', title: 'El hundimiento', type:'movie', description:'Los últimos días de Adolf Hitler en su búnker en Berlín, mientras el Tercer Reich se derrumba.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_hundimiento.webp' },
{ id: 'h12', genre: 'Historia', title: 'En tierra hostil', type:'movie', description:'Un escuadrón estadounidense de artificieros en Irak enfrenta el peligro constante de bombas y atentados.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/En_tierra_hostil.jpg' },
{ id: 'h13', genre: 'Historia', title: 'Lazos de guerra', type:'movie', description:'Dos hermanos coreanos son separados por la Guerra de Corea y se encuentran en bandos opuestos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Lazos_de_guerra.jpeg' },
{ id: 'h14', genre: 'Historia', title: 'La lista de Schindler', type:'movie', description:'La historia de Oskar Schindler, un empresario alemán que salvó a más de mil judíos durante el Holocausto.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_lista_de_Schindler.jpg' },
{ id: 'h15', genre: 'Historia', title: 'Salvar al soldado Ryan', type:'movie', description:'Tras el desembarco en Normandía, un grupo de soldados recibe la misión de rescatar a un paracaidista cuyo hermanos han muerto en combate.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Salvar_al_soldado_Ryan.jpg' },
{ id: 'h16', genre: 'Historia', title: 'Sin novedad en el frente', type:'movie', description:'Un joven alemán experimenta los horrores de la Primera Guerra Mundial desde las trincheras, perdiendo la inocencia ante la brutalidad del conflicto.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Sin_novedad_en_el_frente.jpg' },
{ id: 'h17', genre: 'Historia', title: 'La chaqueta metálica', type:'movie', description:'Un grupo de jóvenes reclutas estadounidenses vive el duro entrenamiento militar y luego son enviados a combatir en la Guerra de Vietnam.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_chaqueta_metalica.jpeg' },
{ id: 'h18', genre: 'Historia', title: 'Tiempo de guerra', type:'movie', description:'Drama bélico contemporáneo que retrata las vivencias de soldados en un conflicto armado moderno, mostrando camaradería y sacrificio.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Tiempo_de_guerra.webp' },
{ id: 'h19', genre: 'Historia', title: 'Roma, ciudad abierta', type:'movie', description:'Clásico del neorrealismo italiano que narra la resistencia contra la ocupación nazi en Roma durante la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Roma_ciudad_abierta.jpg' },
{ id: 'h20', genre: 'Historia', title: 'Senderos de gloria', type:'movie', description:'Durante la Primera Guerra Mundial, un coronel francés defiende a sus hombres de ser fusilados injustamente por cobardía.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Senderos_de_gloria.jpeg' },
{ id: 'h21', genre: 'Historia', title: 'El cazador', type:'movie', description:'Tres amigos de un pueblo obrero son marcados para siempre por la Guerra de Vietnam, entre traumas y pérdidas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_cazador.jpeg' },
{ id: 'h22', genre: 'Historia', title: '1917', type:'movie', description:'Dos soldados británicos reciben una misión imposible: atravesar territorio enemigo para entregar un mensaje que puede salvar a cientos de vidas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/1917.webp' },
{ id: 'h23', genre: 'Historia', title: 'La gran ilusión', type:'movie', description:'Un grupo de prisioneros franceses en la Primera Guerra Mundial intenta escapar de un campo alemán, mostrando lazos humanos más allá del conflicto.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_gran_ilusion.webp' },
{ id: 'h24', genre: 'Historia', title: 'Lazos de vida', type:'movie', description:'Relato emotivo sobre las consecuencias de la guerra y los vínculos que se forman en medio de la tragedia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Lazos_de_vida.jpg' },
{ id: 'h25', genre: 'Historia', title: 'Anónima: una mujer en Berlín', type:'movie', description:'Una mujer alemana narra sus vivencias durante la ocupación soviética de Berlín en 1945, basada en un diario real.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Anonima_una_mujer_en_Berlin.jpg' },
{ id: 'h26', genre: 'Historia', title: 'Primero mataron a mi padre', type:'movie', description:'Una niña camboyana cuenta su experiencia bajo el brutal régimen de los Jemeres Rojos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Primero_mataron_a_mi_padre.webp' },
{ id: 'h27', genre: 'Historia', title: 'Juegos prohibidos', type:'movie', description:'Una niña huérfana y un niño campesino en la Francia ocupada por los nazis crean un juego secreto para afrontar la guerra.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Juegos_prohibidos.jpg' },
{ id: 'h28', genre: 'Historia', title: 'Patton', type:'movie', description:'Biografía del general George S. Patton, uno de los líderes militares más polémicos y brillantes de la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Patton.jpeg' },
{ id: 'h29', genre: 'Historia', title: 'Un pasado imborrable', type:'movie', description:'Un soldado traumatizado por la Guerra de Corea intenta reconstruir su vida mientras lidia con el dolor de los recuerdos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Un_Pasado_Imborrable.jpg' },
{ id: 'h30', genre: 'Historia', title: 'La batalla de Argel', type:'movie', description:'Recrea la lucha por la independencia de Argelia frente al dominio colonial francés.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_batalla_de_Argel.webp' },
{ id: 'h31', genre: 'Historia', title: 'Blitz', type:'movie', description:'Relato sobre los bombardeos alemanes en Londres durante la Segunda Guerra Mundial, conocidos como el Blitz.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Blitz.jpeg' },
{ id: 'h32', genre: 'Historia', title: 'El imperio del sol', type:'movie', description:'Un niño inglés sobrevive en Shanghái durante la ocupación japonesa en la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_imperio_del_sol.jpg' },
{ id: 'h34', genre: 'Historia', title: 'La infancia de Iván', type:'movie', description:'Un niño huérfano trabaja como espía para el ejército soviético durante la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_infancia_de_Ivan.jpeg' },
{ id: 'h35', genre: 'Historia', title: 'La vergüenza', type:'movie', description:'Una pareja sueca intenta sobrevivir cuando la guerra llega a su isla, poniendo a prueba su relación y moralidad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_verguenza.jpg' },
{ id: 'h36', genre: 'Historia', title: 'Enemigo invisible', type:'movie', description:'Un equipo militar debe decidir si lanzar un ataque con drones contra terroristas, enfrentando dilemas éticos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Enemigo_invisible..jpeg' },
{ id: 'h37', genre: 'Historia', title: 'Corazón valiente', type:'movie', description:'William Wallace lidera la rebelión escocesa contra la opresión inglesa en el siglo XIII.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Corazon_valiente.webp' },
{ id: 'h38', genre: 'Historia', title: 'La delgada línea roja', type:'movie', description:'Un grupo de soldados estadounidenses reflexiona sobre la vida y la guerra durante la batalla de Guadalcanal.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_delgada_linea_roja..jpg' },
{ id: 'h39', genre: 'Historia', title: 'Europa, Europa', type:'movie', description:'La increíble historia real de un joven judío que se hace pasar por nazi para sobrevivir en la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Europa_Europa.jpg' },
{ id: 'h40', genre: 'Historia', title: 'Mash', type:'movie', description:'Una sátira sobre un grupo de médicos del ejército durante la Guerra de Corea.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Mash.jpeg' },
{ id: 'h41', genre: 'Historia', title: 'Enemigo al acecho', type:'movie', description:'Dos francotiradores, uno soviético y otro alemán, se enfrentan en la batalla de Stalingrado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Enemigo_al_acecho.jpg' },
{ id: 'h42', genre: 'Historia', title: 'El patriota', type:'movie', description:'Un granjero se convierte en héroe al liderar la resistencia durante la Guerra de Independencia de Estados Unidos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_patriota.jpg' },
{ id: 'h43', genre: 'Historia', title: 'El gran desfile', type:'movie', description:'Un joven estadounidense experimenta el amor y el horror de la Primera Guerra Mundial en Francia.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_gran_desfile.jpg' },
{ id: 'h44', genre: 'Historia', title: 'El puente sobre el río Kwai', type:'movie', description:'Prisioneros británicos son obligados a construir un puente para los japoneses en la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/El_puente_sobre_el_rio_Kwai.jp.jpg' },
{ id: 'h45', genre: 'Historia', title: '1914', type:'movie', description:'Relato sobre los acontecimientos que marcaron el inicio de la Primera Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/1914.jpg' },
{ id: 'h46', genre: 'Historia', title: 'Casablanca', type:'movie', description:'Un hombre cínico dueño de un café en Marruecos se enfrenta a decisiones de amor y resistencia en plena Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Casablanca.jpg' },
{ id: 'h47', genre: 'Historia', title: 'Escuadrón rojo', type:'movie', description:'Película de guerra sobre pilotos soviéticos en la Segunda Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Escuadron_rojo.jpeg' },
{ id: 'h48', genre: 'Historia', title: 'La caída del halcón negro', type:'movie', description:'Soldados estadounidenses quedan atrapados en Mogadiscio, Somalia, durante una misión fallida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/La_caida_del_halcon_negro.jpg' },
{ id: 'h50', genre: 'Historia', title: 'Mandarinas', type:'movie', description:'Durante la guerra en Abjasia, un granjero estonio cuida a dos soldados enemigos heridos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Mandarinas.jpg' },
{ id: 'h52', genre: 'Historia', title: 'Vivir al límite', type:'movie', description:'Un equipo de artificieros en Irak enfrenta el peligro constante de bombas y atentados.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Vivir_al_limite.jpg' },
{ id: 'h53', genre: 'Historia', title: 'Hotel Ruanda', type:'movie', description:'Un hotelero protege a cientos de refugiados durante el genocidio de Ruanda en 1994.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Hotel_Ruanda.jpeg' },
{ id: 'h54', genre: 'Historia', title: '¡Tora! ¡Tora! ¡Tora!', type:'movie', description:'Relato detallado del ataque japonés a Pearl Harbor en 1941.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Tora_Tora_Tora.jpg' },
{ id: 'h55', genre: 'Historia', title: 'Senderos de gloria', type:'movie', description:'El coronel Dax lucha por salvar a sus hombres de un juicio militar injusto durante la Primera Guerra Mundial.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasHistoria/Senderos_de_gloria.jpg' },








//Fantasia

{ id: 'f1', genre: 'Fantasía', title: 'Harry Potter y la piedra filosofal', type:'movie', description:'Un niño descubre que es un mago y comienza su aventura en Hogwarts, enfrentando al mago oscuro que asesinó a sus padres.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_1.jpg' },
{ id: 'f2', genre: 'Fantasía', title: 'Harry Potter y la cámara secreta', type:'movie', description:'Harry regresa a Hogwarts donde una misteriosa cámara ha sido abierta, liberando un peligro mortal para los estudiantes.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_2.jpg' },
{ id: 'f3', genre: 'Fantasía', title: 'Harry Potter y el prisionero de Azkaban', type:'movie', description:'Harry se enfrenta a Sirius Black, un prisionero fugado, mientras descubre secretos de su pasado.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_3.jpg' },
{ id: 'f4', genre: 'Fantasía', title: 'Harry Potter y el cáliz de fuego', type:'movie', description:'Harry compite en el Torneo de los Tres Magos y se enfrenta al regreso de Lord Voldemort.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_4.jpg' },
{ id: 'f5', genre: 'Fantasía', title: 'Harry Potter y la Orden del Fénix', type:'movie', description:'Harry lidera a sus compañeros contra la amenaza de Voldemort y la negación del Ministerio de Magia.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_5.jpeg' },
{ id: 'f6', genre: 'Fantasía', title: 'Harry Potter y el misterio del príncipe', type:'movie', description:'Harry descubre más sobre los horrocruxes mientras Hogwarts se prepara para la guerra.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_6.png' },
{ id: 'f7', genre: 'Fantasía', title: 'Harry Potter y las Reliquias de la Muerte: Parte 1', type:'movie', description:'Harry, Ron y Hermione dejan Hogwarts para buscar y destruir los horrocruxes de Voldemort.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_7_1.png' },
{ id: 'f8', genre: 'Fantasía', title: 'Harry Potter y las Reliquias de la Muerte: Parte 2', type:'movie', description:'La batalla final entre Harry y Voldemort determina el destino del mundo mágico.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Harry_Potter_7_2.jpg' },
{ id: 'f9', genre: 'Fantasía', title: 'El Señor de los Anillos: La comunidad del anillo', type:'movie', description:'Frodo Bolsón recibe el Anillo Único y emprende un peligroso viaje para destruirlo en Mordor.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/LOTR1.jpg' },
{ id: 'f10', genre: 'Fantasía', title: 'El Señor de los Anillos: Las dos torres', type:'movie', description:'La Comunidad se divide mientras se avecina la guerra, con Frodo y Sam rumbo a Mordor y Aragorn liderando la resistencia.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/LOTR2.jpg' },
{ id: 'f11', genre: 'Fantasía', title: 'El Señor de los Anillos: El retorno del rey', type:'movie', description:'La batalla final por la Tierra Media enfrenta a los ejércitos libres contra Sauron mientras Frodo llega al Monte del Destino.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/LOTR3.jpg' },
{ id: 'f12', genre: 'Fantasía', title: 'Warcraft: El primer encuentro de dos mundos', type:'movie', description:'La guerra entre humanos y orcos comienza cuando los portales de Azeroth se abren hacia otro mundo.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Warcraft.jpg' },
{ id: 'f13', genre: 'Fantasía', title: 'Willow', type:'movie', description:'Un joven aspirante a mago protege a una niña destinada a derrotar a una reina malvada.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Willow.webp' },
{ id: 'f14', genre: 'Fantasía', title: 'Conan el Bárbaro', type:'movie', description:'Conan busca vengar la muerte de sus padres enfrentando a un malvado hechicero.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Conan_Barbaro.jpg' },
{ id: 'f15', genre: 'Fantasía', title: 'Conan el Destructor', type:'movie', description:'Conan debe escoltar a una princesa en un viaje lleno de magia, criaturas y traiciones.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Conan_Destructor.webp' },
{ id: 'f16', genre: 'Fantasía', title: 'Stardust: El misterio de la estrella', type:'movie', description:'Un joven cruza un muro mágico para encontrar una estrella caída, sin saber que es en realidad una mujer con poderes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Stardust.jpg' },
{ id: 'f17', genre: 'Fantasía', title: 'Eragon', type:'movie', description:'Un joven campesino descubre un huevo de dragón y se convierte en jinete, luchando contra un imperio malvado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Eragon.jpg' },
{ id: 'f18', genre: 'Fantasía', title: 'El Hobbit: Un viaje inesperado', type:'movie', description:'Bilbo Bolsón se une a un grupo de enanos para recuperar su reino del dragón Smaug.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Hobbit1.jpeg' },
{ id: 'f19', genre: 'Fantasía', title: 'El Hobbit: La desolación de Smaug', type:'movie', description:'La compañía continúa su viaje hacia la Montaña Solitaria para enfrentar al temible dragón.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Hobbit2.jpg' },
{ id: 'f20', genre: 'Fantasía', title: 'El Hobbit: La batalla de los cinco ejércitos', type:'movie', description:'La codicia desata un conflicto épico entre humanos, elfos, enanos y orcos.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Hobbit3.jpg' },
{ id: 'f21', genre: 'Fantasía', title: 'Las crónicas de Narnia: El león, la bruja y el armario', type:'movie', description:'Cuatro hermanos descubren un mundo mágico gobernado por una bruja malvada y un león sabio llamado Aslan.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Narnia1.jpg' },
{ id: 'f22', genre: 'Fantasía', title: 'Las crónicas de Narnia: El príncipe Caspian', type:'movie', description:'Los hermanos Pevensie regresan a Narnia para ayudar al príncipe Caspian a recuperar su trono.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Narnia2.jpg' },
{ id: 'f23', genre: 'Fantasía', title: 'Las crónicas de Narnia: La travesía del Viajero del Alba', type:'movie', description:'Lucy y Edmund se embarcan en un viaje marítimo junto al rey Caspian hacia los confines del mundo de Narnia.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Narnia3.jpg' },
{ id: 'f24', genre: 'Fantasía', title: 'Percy Jackson y el ladrón del rayo', type:'movie', description:'Un adolescente descubre que es hijo de Poseidón y debe evitar una guerra entre dioses griegos.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Percy_Jackson1.jpg' },
{ id: 'f25', genre: 'Fantasía', title: 'Percy Jackson y el mar de los monstruos', type:'movie', description:'Percy y sus amigos deben encontrar el Vellocino de Oro para salvar su campamento.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Percy_Jackson2.jpg' },
{ id: 'f26', genre: 'Fantasía', title: 'Alicia en el País de las Maravillas', type:'movie', description:'Alicia regresa al País de las Maravillas para enfrentar a la Reina Roja y cumplir su destino.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Alicia.webp' },
{ id: 'f27', genre: 'Fantasía', title: 'Alicia a través del espejo', type:'movie', description:'Alicia viaja en el tiempo para salvar al Sombrerero Loco y descubrir secretos del mundo de fantasía.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Alicia2.jpg' },
{ id: 'f28', genre: 'Fantasía', title: 'La brújula dorada', type:'movie', description:'Una niña se embarca en una aventura para descubrir la verdad sobre un misterioso polvo y salvar a su mejor amigo.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/La_brujula_dorada.jpg' },
{ id: 'f29', genre: 'Fantasía', title: 'El cristal encantado', type:'movie', description:'Un joven elfo debe restaurar un cristal mágico para salvar su mundo de la oscuridad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_Cristal_Encantado.jpg' },
{ id: 'f30', genre: 'Fantasía', title: 'El laberinto del fauno', type:'movie', description:'En la posguerra española, una niña descubre un mundo mágico donde debe superar pruebas para demostrar que es la princesa perdida.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_laberinto_del_fauno.webp' },
{ id: 'f31', genre: 'Fantasía', title: 'La historia interminable', type:'movie', description:'Un niño lee un libro mágico y se adentra en un mundo fantástico donde debe salvar al reino de la Nada.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/La_historia_interminable.jpg' },
{ id: 'f32', genre: 'Fantasía', title: 'El nombre del viento', type:'movie', description:'Un joven con talento mágico narra su vida, su aprendizaje y su destino como mago legendario.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_nombre_del_viento.jpeg' },
{ id: 'f33', genre: 'Fantasía', title: 'Eragon: La venganza del dragón', type:'movie', description:'Eragon continúa su lucha contra los malvados imperios, montando a su dragón Saphira.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Eragon2.jpeg' },
{ id: 'f34', genre: 'Fantasía', title: 'El aprendiz de hechicero', type:'movie', description:'Un joven aprendiz debe aprender magia rápidamente para enfrentar a un poderoso enemigo.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_aprendiz_de_hechicero.webp' },
{ id: 'f35', genre: 'Fantasía', title: 'Percy Jackson: El héroe del Olimpo', type:'movie', description:'Percy y sus amigos deben salvar al mundo de un desastre provocado por los dioses griegos.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Percy_Heroe_Olimpo.jpeg' },
{ id: 'f39', genre: 'Fantasía', title: 'El séptimo hijo', type:'movie', description:'Un joven aprendiz de cazador de brujas debe enfrentarse a una poderosa bruja que amenaza al mundo.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_septimo_hijo.jpg' },
{ id: 'f40', genre: 'Fantasía', title: 'Crónicas de la Torre', type:'movie', description:'Un grupo de magos jóvenes lucha por proteger su torre de antiguos poderes oscuros.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Cronicas_de_la_Torre.jpg' },
{ id: 'f41', genre: 'Fantasía', title: 'Las crónicas de Spiderwick', type:'movie', description:'Tres hermanos descubren un mundo oculto lleno de criaturas mágicas y deben proteger un libro poderoso.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Spiderwick.jpg' },
{ id: 'f45', genre: 'Fantasía', title: 'El guardián de los secretos', type:'movie', description:'Un joven elegido debe proteger antiguos secretos mágicos mientras lucha contra enemigos poderosos.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Guardián_de_los_secretos.webp' },
{ id: 'f46', genre: 'Fantasía', title: 'La torre oscura', type:'movie', description:'Un pistolero recorre mundos mágicos para encontrar la torre que mantiene el equilibrio del universo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/La_torre_oscura.webp' },
{ id: 'f47', genre: 'Fantasía', title: 'El reino prohibido', type:'movie', description:'Un joven viaja a un reino mágico donde se une a leyendas y aprende artes marciales fantásticas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Reino_prohibido.jpg' },
{ id: 'f48', genre: 'Fantasía', title: 'El último maestro del aire', type:'movie', description:'En un mundo elemental, un joven maestro debe dominar los cuatro elementos para salvar su mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Ultimo_maestro_del_aire.jpg' },
{ id: 'f49', genre: 'Fantasía', title: 'Legend: El hechicero oscuro', type:'movie', description:'Un joven héroe debe enfrentarse a un hechicero que quiere sumir el mundo en la oscuridad.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Legend_hechicero.jpeg' },
{ id: 'f50', genre: 'Fantasía', title: 'El reino de los cielos', type:'movie', description:'Un joven caballero se enfrenta a fuerzas sobrenaturales mientras protege su reino y su honor.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Reino_de_los_cielos.jpg' },
{ id: 'f51', genre: 'Fantasía', title: 'El viajero del tiempo', type:'movie', description:'Un joven descubre un artefacto mágico que le permite viajar a mundos fantásticos y enfrentarse al mal.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Viajero_del_tiempo.jpg' },
{ id: 'f53', genre: 'Fantasía', title: 'El legado de los magos', type:'movie', description:'Jóvenes magos deben unir fuerzas para proteger su legado y enfrentarse a un enemigo ancestral.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Legado_de_los_magos.jpg' },
{ id: 'f54', genre: 'Fantasía', title: 'El druida', type:'movie', description:'Un druida joven descubre poderes antiguos y debe salvar su aldea de un mal inminente.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/El_druida.webp' },
{ id: 'f59', genre: 'Fantasía', title: 'El reino de las sombras', type:'movie', description:'Un héroe solitario debe enfrentarse a criaturas oscuras y recuperar la luz de su mundo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasFantasia/Reino_de_las_sombras.jpeg' },






//Policial

{ id: 'p1', genre: 'Policial', title: 'Se7en', type:'movie', description:'Dos detectives investigan a un asesino serial que utiliza los siete pecados capitales como motivo de sus crímenes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Se7en.webp' },
{ id: 'p2', genre: 'Policial', title: 'Zodiaco', type:'movie', description:'Basada en hechos reales, sigue la investigación de un asesino serial que aterró San Francisco durante los años 70.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Zodiaco.jpg' },
{ id: 'p3', genre: 'Policial', title: 'Los infiltrados', type:'movie', description:'Un policía encubierto y un topo dentro de la policía intentan descubrirse mutuamente en medio de una guerra contra la mafia.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Infiltrados.jpg' },
{ id: 'p4', genre: 'Policial', title: 'Fargo', type:'movie', description:'Un crimen mal planificado en Minnesota se convierte en una espiral de caos, investigado por una decidida oficial de policía.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Fargo.jpg' },
{ id: 'p5', genre: 'Policial', title: 'Pulp Fiction', type:'movie', description:'Historias entrelazadas de criminales, asesinos a sueldo y boxeadores en Los Ángeles.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Pulp_Fiction.jpg' },
{ id: 'p6', genre: 'Policial', title: 'El irlandés', type:'movie', description:'La historia de Frank Sheeran, un sicario de la mafia que reflexiona sobre su vida y sus crímenes.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/El_Irlandes.jpeg' },
{ id: 'p7', genre: 'Policial', title: 'Ciudad de Dios', type:'movie', description:'La vida en una favela de Río de Janeiro donde los niños crecen rodeados de violencia y crimen organizado.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Ciudad_de_Dios.jpg' },
{ id: 'p8', genre: 'Policial', title: 'Memories of Murder', type:'movie', description:'Dos detectives coreanos investigan los brutales asesinatos de mujeres en un pequeño pueblo durante los años 80.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Memories_of_Murder.webp' },
{ id: 'p9', genre: 'Policial', title: 'Prisioneros', type:'movie', description:'Un padre desesperado toma la justicia por mano propia cuando su hija desaparece, mientras la policía sigue pistas confusas.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Prisioneros.jpg' },
{ id: 'p10', genre: 'Policial', title: 'Training Day', type:'movie', description:'Un joven policía pasa un día de entrenamiento con un detective veterano corrupto en Los Ángeles.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Training_Day.webp' },
{ id: 'p11', genre: 'Policial', title: 'Chinatown', type:'movie', description:'Un detective privado en Los Ángeles investiga un caso de adulterio y descubre una red de corrupción y secretos familiares.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Chinatown.jpg' },
{ id: 'p12', genre: 'Policial', title: 'Sin lugar para los débiles', type:'movie', description:'Un cazador se topa con dinero de un cartel y desata una violenta persecución con un asesino implacable.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Sin_Lugar.jpg' },
{ id: 'p13', genre: 'Policial', title: 'Taxi Driver', type:'movie', description:'Un excombatiente convertido en taxista se sumerge en la locura mientras planea un violento acto de justicia.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Taxi_Driver.webp' },
{ id: 'p14', genre: 'Policial', title: 'Heat', type:'movie', description:'Un detective de Los Ángeles y un ladrón profesional se enfrentan en un duelo de ingenio y obsesión.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Heat.jpeg' },
{ id: 'p15', genre: 'Policial', title: 'Mystic River', type:'movie', description:'Tres amigos de la infancia se ven envueltos en un crimen que reabre viejas heridas y secretos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Mystic_River.webp' },
{ id: 'p16', genre: 'Policial', title: 'El silencio de los inocentes', type:'movie', description:'Una joven agente del FBI busca la ayuda de un brillante asesino para atrapar a otro criminal.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Silencio_inocentes.jpg' },
{ id: 'p17', genre: 'Policial', title: 'Gone Baby Gone', type:'movie', description:'Dos detectives privados buscan a una niña desaparecida en Boston, revelando oscuros secretos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Gone_Baby.webp' },
{ id: 'p18', genre: 'Policial', title: 'El secreto de sus ojos', type:'movie', description:'Un oficial de justicia argentino investiga un caso de asesinato mientras revive un amor imposible.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Secreto_Ojos.jpeg' },
{ id: 'p19', genre: 'Policial', title: 'La isla siniestra', type:'movie', description:'Dos agentes investigan la desaparición de una paciente en un hospital psiquiátrico, descubriendo perturbadoras verdades.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Shutter_Island.jpg' },
{ id: 'p20', genre: 'Policial', title: 'Oldboy', type:'movie', description:'Un hombre es secuestrado y encerrado durante 15 años, y al ser liberado busca venganza.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Oldboy.webp' },
{ id: 'p21', genre: 'Policial', title: 'El padrino', type:'movie', description:'La saga de la familia Corleone, una de las más poderosas de la mafia en Nueva York.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Padrino1.jpg' },
{ id: 'p22', genre: 'Policial', title: 'El padrino II', type:'movie', description:'La continuación de la historia de Michael Corleone y los orígenes de su padre, Vito Corleone.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Padrino2.jpg' },
{ id: 'p23', genre: 'Policial', title: 'El padrino III', type:'movie', description:'Michael busca legitimar los negocios de la familia, pero viejos enemigos lo persiguen.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Padrino3.webp' },
{ id: 'p24', genre: 'Policial', title: 'American Gangster', type:'movie', description:'La historia real de un narcotraficante de Harlem y el detective que intenta derribarlo.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/American_Gangster.webp' },
{ id: 'p25', genre: 'Policial', title: 'Scarface', type:'movie', description:'La historia de Tony Montana, un inmigrante cubano que construye un imperio criminal en Miami.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Scarface.jpg' },
{ id: 'p26', genre: 'Policial', title: 'Reservoir Dogs', type:'movie', description:'Un grupo de criminales planea un robo, pero todo se complica tras una traición.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Reservoir_Dogs.jpg' },
{ id: 'p27', genre: 'Policial', title: 'L.A. Confidential', type:'movie', description:'Tres policías de Los Ángeles con métodos muy distintos investigan corrupción y asesinatos.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/LA_Confidential.webp' },
{ id: 'p28', genre: 'Policial', title: 'Inception', type:'movie', description:'Un ladrón roba secretos entrando en los sueños de sus víctimas, pero su última misión es más peligrosa de lo esperado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Inception.jpeg' },
{ id: 'p29', genre: 'Policial', title: 'El topo', type:'movie', description:'Un veterano espía debe descubrir al infiltrado en los servicios secretos británicos.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/El_Topo.jpg' },
{ id: 'p30', genre: 'Policial', title: 'Collateral', type:'movie', description:'Un taxista se ve forzado a conducir a un asesino a sueldo por una serie de encargos mortales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Collateral.jpeg' },
{ id: 'p31', genre: 'Policial', title: 'El abogado del diablo', type:'movie', description:'Un joven abogado entra a un bufete exitoso, pero descubre oscuros secretos detrás de su jefe.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Abogado_Diablo.jpg' },
{ id: 'p32', genre: 'Policial', title: 'True Detective', type:'movie', description:'Dos detectives de Luisiana investigan asesinatos rituales durante 17 años.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/True_Detective.jpeg' },
{ id: 'p33', genre: 'Policial', title: 'El halcón maltés', type:'movie', description:'Un detective se ve envuelto en la búsqueda de una valiosa estatuilla.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Halcon_Maltes.jpeg' },
{ id: 'p34', genre: 'Policial', title: 'Memento', type:'movie', description:'Un hombre con pérdida de memoria a corto plazo intenta encontrar al asesino de su esposa.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Memento.jpg' },
{ id: 'p35', genre: 'Policial', title: 'Insomnia', type:'movie', description:'Un detective investiga un asesinato en Alaska, pero sufre de insomnio y comienza a perder la cordura.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Insomnia.jpeg' },
{ id: 'p36', genre: 'Policial', title: 'Donnie Brasco', type:'movie', description:'Un agente encubierto se infiltra en la mafia de Nueva York, desarrollando un vínculo peligroso.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Donnie_Brasco.webp' },
{ id: 'p37', genre: 'Policial', title: 'El clan', type:'movie', description:'Basada en hechos reales, la historia de la familia Puccio que secuestraba personas en Argentina.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/El_Clan.jpg' },
{ id: 'p38', genre: 'Policial', title: 'Sicario', type:'movie', description:'Una agente del FBI se une a una misión contra un cartel mexicano en la frontera.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Sicario.webp' },
{ id: 'p39', genre: 'Policial', title: 'Tropa de Élite', type:'movie', description:'La dura realidad de una unidad especial de la policía en Río de Janeiro.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/TropaDeElite.jpg' },
{ id: 'p40', genre: 'Policial', title: 'Serpico', type:'movie', description:'La historia real de un policía honesto que lucha contra la corrupción en Nueva York.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Serpico.jpg' },
{ id: 'p41', genre: 'Policial', title: 'Infernal Affairs', type:'movie', description:'Un infiltrado de la policía en la mafia y un infiltrado de la mafia en la policía luchan por sobrevivir.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Infernal_Affairs.jpg' },
{ id: 'p42', genre: 'Policial', title: 'The French Connection', type:'movie', description:'Dos detectives de Nueva York persiguen a narcotraficantes en un caso internacional.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/French_Connection.jpeg' },
{ id: 'p43', genre: 'Policial', title: 'La noche es nuestra', type:'movie', description:'Un club nocturno y una familia policial en Nueva York se ven atrapados en un conflicto mortal.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Noche_nuestra.webp' },
{ id: 'p44', genre: 'Policial', title: 'Miami Vice', type:'movie', description:'Dos detectives encubiertos luchan contra el narcotráfico en Miami.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Miami_Vice.jpeg' },
{ id: 'p45', genre: 'Policial', title: 'El hombre de la mafia', type:'movie', description:'Un asesino a sueldo sigue la pista tras un robo de póker que involucra a la mafia.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Hombre_Mafia.jpg' },
{ id: 'p46', genre: 'Policial', title: 'Enemigos públicos', type:'movie', description:'La historia de John Dillinger, el famoso ladrón de bancos de los años 30, y el FBI que lo persigue.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Enemigos_Publicos.jpeg' },
{ id: 'p47', genre: 'Policial', title: 'Millennium: Los hombres que no amaban a las mujeres', type:'movie', description:'Un periodista y una hacker investigan un caso de desaparición lleno de secretos familiares.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Millennium.webp' },
{ id: 'p48', genre: 'Policial', title: 'La redada', type:'movie', description:'Un escuadrón policial queda atrapado en un edificio controlado por criminales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Raiz.jpg' },
{ id: 'p49', genre: 'Policial', title: 'Enemy of the State', type:'movie', description:'Un abogado se convierte en fugitivo tras descubrir secretos del gobierno.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Enemy_State.jpg' },
{ id: 'p50', genre: 'Policial', title: 'El fugitivo', type:'movie', description:'Un médico inocente escapa tras ser acusado del asesinato de su esposa mientras un agente lo persigue.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Fugitivo.webp' },
{ id: 'p51', genre: 'Policial', title: 'Minority Report', type:'movie', description:'Un policía del futuro es acusado de un asesinato que aún no ha cometido.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Minority_Report.jpg' },
{ id: 'p52', genre: 'Policial', title: 'El contador', type:'movie', description:'Un genio de las matemáticas con autismo lleva una doble vida como contador y asesino a sueldo.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Contador.jpg' },
{ id: 'p53', genre: 'Policial', title: 'La huérfana negra', type:'movie', description:'Un caso policial se complica cuando se descubre una red de conspiraciones y dobles identidades.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Huerfana_negra.jpg' },
{ id: 'p54', genre: 'Policial', title: 'El coleccionista de huesos', type:'movie', description:'Un detective paralizado y su asistente investigan a un asesino serial en Nueva York.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Coleccionista.jpeg' },
{ id: 'p55', genre: 'Policial', title: 'El gran Gatsby', type:'movie', description:'cuenta la historia de Nick Carraway, un escritor que llega a Nueva York en 1922 y se convierte en vecino del millonario Jay Gatsby, conocido por sus fiestas lujosas. A través de los ojos de Nick, se desarrolla una historia de amor imposible', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/Gatsby.jpeg' },
{ id: 'p56', genre: 'Policial', title: 'La hora del silencio', type:'movie', description:'Frank Shaw es un detective de Boston que tiene un accidente en acto de servicio y pierde la audición. Frustrado con su nueva vida, Frank contempla abandonar el cuerpo policial, pero su compañero Doug le convence para demostrar que puede seguir siendo un gran policíaUn detective paralizado y su asistente investigan a un asesino serial en Nueva York.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasPolicial/LaHoraDelSilencio.jpeg' },













//Accion

{ id: 'a1', genre: 'Acción', title: 'Matrix', type:'movie', description:'Un hacker descubre la verdad detrás de la realidad y se une a la rebelión contra las máquinas.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Matrix.jpg' },
{ id: 'a2', genre: 'Acción', title: 'Matrix Reloaded', type:'movie', description:'Neo continúa la lucha contra las máquinas en una batalla por el futuro de la humanidad.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Matrix_Reloaded.webp' },
{ id: 'a3', genre: 'Acción', title: 'Matrix Revolutions', type:'movie', description:'La guerra entre humanos y máquinas alcanza su clímax.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Matrix_Revolutions.jpeg' },
{ id: 'a4', genre: 'Acción', title: 'Matrix Resurrections', type:'movie', description:'Neo y Trinity regresan para enfrentar una nueva iteración de la Matrix.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Matrix_Resurrections.jpg' },
{ id: 'a5', genre: 'Acción', title: 'Los Juegos del Hambre', type:'movie', description:'Katniss Everdeen lucha por sobrevivir en un brutal torneo televisado.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Hunger_Games1.jpg' },
{ id: 'a6', genre: 'Acción', title: 'Los Juegos del Hambre: En llamas', type:'movie', description:'Katniss se convierte en símbolo de rebelión tras su victoria.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Hunger_Games2.webp' },
{ id: 'a7', genre: 'Acción', title: 'Los Juegos del Hambre: Sinsajo Parte 1', type:'movie', description:'La rebelión se organiza para derrocar al Capitolio.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Hunger_Games3.jpg' },
{ id: 'a8', genre: 'Acción', title: 'Los Juegos del Hambre: Sinsajo Parte 2', type:'movie', description:'La batalla final contra el Presidente Snow.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Hunger_Games4.webp' },
{ id: 'a9', genre: 'Acción', title: 'Divergente', type:'movie', description:'En una sociedad de facciones, Tris descubre que es divergente.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Divergente1.webp' },
{ id: 'a10', genre: 'Acción', title: 'Insurgente', type:'movie', description:'Tris y Cuatro luchan contra el sistema que los persigue.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Divergente2.jpg' },
{ id: 'a11', genre: 'Acción', title: 'Leal', type:'movie', description:'La verdad detrás de las facciones cambia el destino del mundo.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Divergente3.jpg' },
{ id: 'a12', genre: 'Acción', title: 'Mini Espías', type:'movie', description:'Dos hermanos deben rescatar a sus padres espías.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Spy_Kids.jpg' },
{ id: 'a13', genre: 'Acción', title: 'Mini Espías 2: La isla de los sueños perdidos', type:'movie', description:'Nueva misión para los Cortez en una isla misteriosa.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Spy_Kids2.jpg' },
{ id: 'a14', genre: 'Acción', title: 'Mini Espías 3D', type:'movie', description:'Los Cortez entran a un videojuego para detener a un villano.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Spy_Kids3.jpeg' },
{ id: 'a15', genre: 'Acción', title: 'Hombres de Negro', type:'movie', description:'Dos agentes secretos protegen la Tierra de amenazas alienígenas.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/MIB1.jpg' },
{ id: 'a16', genre: 'Acción', title: 'Hombres de Negro II', type:'movie', description:'Los agentes J y K se reencuentran para salvar al planeta.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/MIB2.jpg' },
{ id: 'a17', genre: 'Acción', title: 'Hombres de Negro III', type:'movie', description:'Viaje en el tiempo para evitar una invasión.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/MIB3.jpg' },
{ id: 'a18', genre: 'Acción', title: 'Transformers', type:'movie', description:'La guerra entre Autobots y Decepticons llega a la Tierra.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers1.jpg' },
{ id: 'a19', genre: 'Acción', title: 'Transformers: La venganza de los caídos', type:'movie', description:'Una antigua amenaza despierta contra los humanos.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers2.jpg' },
{ id: 'a20', genre: 'Acción', title: 'Transformers: El lado oscuro de la luna', type:'movie', description:'Secretos en la Luna cambian el curso de la guerra.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers3.jpg' },
{ id: 'a21', genre: 'Acción', title: 'Transformers: La era de la extinción', type:'movie', description:'Una nueva amenaza surge junto a los Dinobots.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers4.webp' },
{ id: 'a22', genre: 'Acción', title: 'Transformers: El último caballero', type:'movie', description:'La historia de los Transformers se remonta a la Edad Media.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers5.jpg' },
{ id: 'a23', genre: 'Acción', title: 'Bumblebee', type:'movie', description:'El Autobot encuentra refugio con una adolescente.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Bumblebee.jpg' },
{ id: 'a24', genre: 'Acción', title: 'Transformers: El despertar de las bestias', type:'movie', description:'Maximals y Predacons entran en combate.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Transformers_Beasts.jpg' },
{ id: 'a25', genre: 'Acción', title: 'Mortal Kombat', type:'movie', description:'Guerreros de la Tierra luchan en un torneo mortal.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mortal_Kombat_1995.jpg' },
{ id: 'a26', genre: 'Acción', title: 'Mortal Kombat (2021)', type:'movie', description:'Reinicio del clásico con luchadores legendarios.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mortal_Kombat_2021.jpg' },
{ id: 'a27', genre: 'Acción', title: 'John Wick', type:'movie', description:'Un exasesino regresa para vengar la pérdida de su perro.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/John_Wick1.webp' },
{ id: 'a28', genre: 'Acción', title: 'John Wick 2', type:'movie', description:'John es arrastrado a una deuda de sangre.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/John_Wick2.jpg' },
{ id: 'a29', genre: 'Acción', title: 'John Wick 3: Parabellum', type:'movie', description:'Una recompensa global pone a todos tras su cabeza.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/John_Wick3.jpg' },
{ id: 'a30', genre: 'Acción', title: 'John Wick 4', type:'movie', description:'Guerra total contra la Alta Mesa.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/John_Wick4.webp' },
{ id: 'a31', genre: 'Acción', title: 'Misión Imposible', type:'movie', description:'Ethan Hunt enfrenta a un traidor en la IMF.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision1.jpg' },
{ id: 'a32', genre: 'Acción', title: 'Misión Imposible 2', type:'movie', description:'Un virus mortal amenaza al mundo.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision2.webp' },
{ id: 'a33', genre: 'Acción', title: 'Misión Imposible 3', type:'movie', description:'Un traficante de armas pone a prueba a Ethan.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision3.webp' },
{ id: 'a34', genre: 'Acción', title: 'Misión Imposible: Protocolo Fantasma', type:'movie', description:'IMF es incriminada y debe operar en las sombras.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision4.jpg' },
{ id: 'a35', genre: 'Acción', title: 'Misión Imposible: Nación Secreta', type:'movie', description:'El Sindicato amenaza el orden mundial.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision5.jpg' },
{ id: 'a36', genre: 'Acción', title: 'Misión Imposible: Repercusión', type:'movie', description:'Un plan terrorista a escala global.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision6.webp' },
{ id: 'a37', genre: 'Acción', title: 'Misión Imposible: Sentencia Mortal Parte 1', type:'movie', description:'Una IA fuera de control pone en jaque al mundo.', platform:'Paramount+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Mision7.jpg' },
{ id: 'a38', genre: 'Acción', title: 'La redada', type:'movie', description:'Un escuadrón queda atrapado en un edificio tomado por criminales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/The_Raid.jpg' },
{ id: 'a39', genre: 'Acción', title: 'La redada 2', type:'movie', description:'La lucha se expande a la mafia de la ciudad.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/The_Raid_2.jpeg' },
{ id: 'a40', genre: 'Acción', title: 'Búsqueda Implacable', type:'movie', description:'Un exagente debe rescatar a su hija secuestrada.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Taken1.jpeg' },
{ id: 'a41', genre: 'Acción', title: 'Búsqueda Implacable 2', type:'movie', description:'La venganza alcanza a la familia del héroe en Estambul.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Taken2.jpg' },
{ id: 'a42', genre: 'Acción', title: 'Búsqueda Implacable 3', type:'movie', description:'Acusado injustamente, debe limpiar su nombre.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Taken3.jpg' },
{ id: 'a43', genre: 'Acción', title: 'El Justiciero (The Equalizer)', type:'movie', description:'Un exagente ayuda a los indefensos con métodos letales.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Equalizer1.jpg' },
{ id: 'a44', genre: 'Acción', title: 'El Justiciero 2', type:'movie', description:'Ajustando cuentas contra viejos compañeros.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Equalizer2.jpg' },
{ id: 'a45', genre: 'Acción', title: 'El Justiciero 3', type:'movie', description:'Última cruzada en un pueblo costero italiano.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Equalizer3.webp' },
{ id: 'a46', genre: 'Acción', title: 'Identidad Desconocida', type:'movie', description:'Un hombre sin memoria descubre que es un letal agente.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Bourne1.webp' },
{ id: 'a47', genre: 'Acción', title: 'La Supremacía Bourne', type:'movie', description:'El pasado regresa para cazarlo.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Bourne2.jpg' },
{ id: 'a48', genre: 'Acción', title: 'El Ultimátum Bourne', type:'movie', description:'Bourne descubre el origen de su entrenamiento.', platform:'Prime Video', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Bourne3.jpg' },
{ id: 'a49', genre: 'Acción', title: 'Predator: Killer of Killers', type:'movie', description:'Guerreros de épocas distintas enfrentan a cazadores yautja.', platform:'Disney+', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Predator_Killer_of_Killers.jpg' },
{ id: 'a50', genre: 'Acción', title: 'Sed de venganza', type:'series', description:'Historia de crimen y ajuste de cuentas contemporánea.', platform:'Televisión', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Sed_de_Venganza.jpg' },
{ id: 'a51', genre: 'Acción', title: 'Megalodón', type:'movie', description:'Un grupo de científicos enfrenta a un tiburón prehistórico gigante.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Megalodon1.jpg' },
{ id: 'a52', genre: 'Acción', title: 'Megalodón 2: El Foso', type:'movie', description:'Una expedición desata nuevas criaturas del abismo.', platform:'HBO Max', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Megalodon2.jpg' },
{ id: 'a53', genre: 'Acción', title: 'Megalodón 3', type:'movie', description:'Nueva amenaza bajo el mar (proyecto rumoreado para 2025).', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Megalodon3.jpg' },
{ id: 'a54', genre: 'Acción', title: 'The Amateur', type:'movie', description:'Un analista chantajea a la CIA para entrenarse y vengarse por su cuenta. (2025)', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/The_Amateur.jpg' },
{ id: 'a55', genre: 'Acción', title: 'Ballerina', type:'movie', description:'Spin-off de John Wick: una bailarina letal busca venganza. (2025)', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Ballerina.webp' },
{ id: 'a56', genre: 'Acción', title: 'Rápido y Furioso (The Fast and the Furious)', type:'movie', description:'Brian O\'Conner, un policía encubierto, se infiltra en el mundo de las carreras callejeras y conoce a Dominic Toretto.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos1.jpeg' },
{ id: 'a57', genre: 'Acción', title: 'Más Rápido, Más Furioso (2 Fast 2 Furious)', type:'movie', description:'Brian se une a un viejo amigo para derribar a un peligroso narcotraficante en Miami.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos2.webp' },
{ id: 'a58', genre: 'Acción', title: 'Rápido y Furioso: Reto Tokio (The Fast and the Furious: Tokyo Drift)', type:'movie', description:'Sean Boswell se muda a Japón y se adentra en el mundo de las carreras de derrape.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos3.jpg' },
{ id: 'a59', genre: 'Acción', title: 'Rápidos y Furiosos (Fast & Furious)', type:'movie', description:'Dom y Brian se reúnen para acabar con un cartel de drogas en México.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos4.jpg' },
{ id: 'a60', genre: 'Acción', title: 'Rápidos y Furiosos: 5in Control (Fast Five)', type:'movie', description:'Dom y Brian forman un equipo para realizar un gran golpe en Río de Janeiro mientras son perseguidos por Hobbs.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos5.jpg' },
{ id: 'a61', genre: 'Acción', title: 'Rápidos y Furiosos 6 (Fast & Furious 6)', type:'movie', description:'El equipo recibe la oferta de borrar sus antecedentes si ayudan a atrapar a una peligrosa organización criminal.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos6.jpeg' },
{ id: 'a62', genre: 'Acción', title: 'Rápidos y Furiosos 7 (Furious 7)', type:'movie', description:'Deckard Shaw busca venganza contra Dom y su familia por la derrota de su hermano.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos7.jpeg' },
{ id: 'a63', genre: 'Acción', title: 'Rápidos y Furiosos 8 (The Fate of the Furious)', type:'movie', description:'Cipher obliga a Dom a traicionar a su familia, lo que desata una batalla global.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos8.jpg' },
{ id: 'a64', genre: 'Acción', title: 'Rápidos y Furiosos: Hobbs & Shaw', type:'movie', description:'Spin-off donde Hobbs y Shaw unen fuerzas para detener a un villano modificado genéticamente.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/HobbsShaw.jpg' },
{ id: 'a65', genre: 'Acción', title: 'Rápidos y Furiosos 9 (F9)', type:'movie', description:'El equipo enfrenta a Jakob, el hermano perdido de Dom, que trabaja junto a Cipher.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos9.jpeg' },
{ id: 'a66', genre: 'Acción', title: 'Rápidos y Furiosos 10 (Fast X)', type:'movie', description:'Dante Reyes busca vengarse de Dom y su equipo por la caída de su padre en Río.', platform:'Universal Pictures', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos10.jpeg' },
{ id: 'a67', genre: 'Acción', title: 'Rápidos y Furiosos 11 (Fast X: Part 2)', type:'movie', description:'La saga llega a su gran final con la conclusión de la historia de Dom Toretto y su familia.', platform:'Cine (2025)', poster:'PeliculasRecomendadasPorLaPagina/PeliculasAccion/Rapidos11.jpeg' },




// Drama — Super tristes — Películas 2025
{ id: 'd1', genre: 'Drama', title: 'After the Hunt', type:'movie', description:'Una profesora universitaria enfrenta acusaciones y dilemas éticos que reviven viejos traumas.', platform:'Venecia Film Festival', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/After_the_Hunt.jpg' },
{ id: 'd2', genre: 'Drama', title: 'Straw', type:'movie', description:'Una madre soltera desesperada toma medidas extremas mientras cuida a su hija terminalmente enferma.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Straw.jpeg' },
{ id: 'd3', genre: 'Drama', title: 'Hamnet', type:'movie', description:'William Shakespeare y su esposa atraviesan el duelo por la muerte de su hijo.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Hamnet.jpeeg' },
{ id: 'd4', genre: 'Drama', title: 'The History of Sound', type:'movie', description:'Dos músicos comienzan una relación durante la posguerra que será definida por pérdida y pasión.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/History_of_Sound.jpg' },
{ id: 'd6', genre: 'Drama', title: 'Deaf', type:'movie', description:'Una mujer sorda espera un hijo y debe enfrentar sus diferencias con su pareja oyente.', platform:'Berlín', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Deaf.jpg' },
{ id: 'd7', genre: 'Drama', title: 'My Oxford Year', type:'movie', description:'Una estudiante americana en Oxford lucha por el amor y su identidad personal.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/My_Oxford_Year.jpg' },
{ id: 'd8', genre: 'Drama', title: 'The Scout', type:'movie', description:'Una mujer escoge locaciones para cine mientras desgrana el costo emocional de su vocación.', platform:'Tribeca', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/The_Scout.jpg' },
{ id: 'd9', genre: 'Drama', title: 'Love Me Tender', type:'movie', description:'Una madre lucha por la custodia de su hijo mientras vive una nueva relación.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Love_Me_Tender.jpg' },
{ id: 'd10', genre: 'Drama', title: 'The Love That Remains', type:'movie', description:'Un paisaje familiar escandinavo marcado por pérdida, memoria y reconexión.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Love_That_Remains.jpg' },
{ id: 'd11', genre: 'Drama', title: 'Jay Kelly', type:'movie', description:'Un actor famoso enfrenta una crisis existencial mientras redescubre su humanidad y familia.', platform:'Venecia', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Jay_Kelly.jpg' },
{ id: 'd12', genre: 'Drama', title: 'Kokuho (Living National Treasure)', type:'movie', description:'Actores de kabuki pagan un alto precio personal por alcanzar el estatus de tesoro nacional.', platform:'Cine (Japón)', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Kokuho.jpg' },
{ id: 'd13', genre: 'Drama', title: 'Rosemead', type:'movie', description:'Una madre enferma toma decisiones extremas para proteger a su hijo de impulsos oscuros.', platform:'Tribeca', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Rosemead.jpg' },
{ id: 'd14', genre: 'Drama', title: 'Sentimental Value', type:'movie', description:'Un retrato familiar doloroso, íntimo y despojado, donde el amor y el duelo coexisten.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Sentimental_Value.jpg' },
{ id: 'd15', genre: 'Drama', title: 'Renoir', type:'movie', description:'Una familia japonesa enfrenta enfermedad, duelo y recuerdos en los años 80.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Renoir.jpg' },
{ id: 'd16', genre: 'Drama', title: 'Girls on Wire', type:'movie', description:'Una madre soltera huye de un narco, enfrentando desesperación y resentimientos violentos.', platform:'Berlín', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Girls_on_Wire.jpg' },
{ id: 'd17', genre: 'Drama', title: 'After the Hunt (duplicada?)', type:'movie', description:'Dilemas éticos universitarios reviven viejos distanciamientos y verdades dolorosas.', platform:'Venecia', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/After_the_Hunt.jpg' },
{ id: 'd18', genre: 'Drama', title: 'At Work', type:'movie', description:'Un fotógrafo abandona su carrera artística y se enfrenta a la pobreza y su idealismo.', platform:'Venecia', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/At_Work.jpg' },
{ id: 'd19', genre: 'Drama', title: 'A Big Bold Beautiful Journey', type:'movie', description:'Dos extraños conectan en una odisea emocional que los transforma profundamente.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Big_Bold_Beautiful_Journey.jpg' },
{ id: 'd20', genre: 'Drama', title: 'Sinners', type:'movie', description:'Hermanos enfrentan un mal mayor a su regreso al hogar, redención y horror se mezclan.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Sinners.jpg' },
{ id: 'd21', genre: 'Drama', title: 'The Life of Chuck', type:'movie', description:'Tres capítulos de la vida de un hombre común, profundamente conmovedores.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Life_of_Chuck.jpg' },
{ id: 'd22', genre: 'Drama', title: 'The Smashing Machine', type:'movie', description:'Un peleador libra una batalla emocional brutal dentro y fuera del ring.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Smashing_Machine.jpg' },
{ id: 'd23', genre: 'Drama', title: 'F1: The Movie', type:'movie', description:'Un corredor retirado vuelve a la pista mientras carga culpa, pérdidas y esperanza.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/F1_The_Movie.jpg' },
{ id: 'd24', genre: 'Drama', title: 'Straw (repetida?)', type:'movie', description:'La desesperación maternal en juego, amor extremo y sacrificio personal.', platform:'Netflix', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Straw.jpg' },
{ id: 'd25', genre: 'Drama', title: 'Hard Truths', type:'movie', description:'Una historia intensa de revelaciones crudas y relaciones al filo de lo imposible.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Hard_Truths.jpg' },
{ id: 'd26', genre: 'Drama', title: 'Beneath the Willow', type:'movie', description:'Una mujer enfrenta la pérdida de su hermana y busca sentido en un pequeño pueblo.', platform:'Cannes', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Beneath_the_Willow.jpg' },
{ id: 'd27', genre: 'Drama', title: 'Echoes of Silence', type:'movie', description:'Un periodista reconstruye su infancia marcada por secretos familiares y abandono.', platform:'Berlín', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Echoes_of_Silence.jpg' },
{ id: 'd28', genre: 'Drama', title: 'Winter Garden', type:'movie', description:'Madres e hijas confrontan traumas del pasado mientras intentan reconciliarse.', platform:'Venecia', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Winter_Garden.jpg' },
{ id: 'd29', genre: 'Drama', title: 'The Last Letter', type:'movie', description:'Un hombre descubre cartas antiguas que reescriben la historia de su familia y amor perdido.', platform:'Cine', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/The_Last_Letter.jpg' },
{ id: 'd30', genre: 'Drama', title: 'Fading Memories', type:'movie', description:'Una mujer con Alzheimer recuerda fragmentos de su vida mientras su familia lidia con la pérdida.', platform:'Tribeca', poster:'PeliculasRecomendadasPorLaPagina/PeliculasDrama/Fading_Memories.jpg' },
























];

// ====== Mostrar género ======
function showGenre(genre) {
  gvTitle.textContent = genre;
  cardsEl.innerHTML = '';
  const store = loadStore();
  const items = CATALOG.filter(x => x.genre === genre).slice(0,120);

  if(!items.length) {
    cardsEl.innerHTML = `<p style="opacity:.75">Sin ítems por ahora en <b>${genre}</b>.</p>`;
  }

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    const meta = item.type === 'series' ? `${item.seasons} temporada(s) • ${item.episodes} capítulo(s)` : 'Película';
    const ratingValue = (store[item.id]?.rating) || 0;
    const reviewText = (store[item.id]?.review) || '';
    const seen = (store[item.id]?.seen) || false;

    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}"/>
      <div class="card-body">
        <div class="title">${item.title}</div>
        <div class="meta">${meta}</div>
        <p class="desc">${item.description}</p>
        <p class="platform">Plataforma: <b>${item.platform}</b></p>
        <div class="stars" data-id="${item.id}">${renderStars(ratingValue)}</div>
        <textarea class="review" placeholder="Escribí tu reseña aquí..." data-id="${item.id}">${reviewText}</textarea>
        <div class="card-actions">
          <button class="save-btn" data-id="${item.id}">Guardar</button>
          <button class="clear-btn" data-id="${item.id}">Borrar</button>
        </div>
        <button class="btn-seen ${seen ? 'seen' : ''}" data-id="${item.id}">
          ${seen ? "¡Ya la vi!" : "No la vi"}
        </button>
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

// ====== Eventos globales ======
document.addEventListener('click', (e) => {
  const g = e.target.closest('.genre');
  if(g) { showGenre(g.getAttribute('data-genre')); return; }

  if(e.target.id === 'btnBack') { showHome(); return; }

  // ⭐ estrellas
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

  // 💾 guardar reseña
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

  // 🗑 borrar reseña
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

  // 👀 botón "No la vi / ¡Ya la vi!"
  if(e.target.classList.contains('btn-seen')){
    const id = e.target.getAttribute('data-id');
    const store = loadStore();
    const seen = !(store[id]?.seen); // toggle
    store[id] = { ...(store[id]||{}), seen };
    saveStore(store);

    e.target.classList.toggle("seen", seen);
    e.target.textContent = seen ? "¡Ya la vi!" : "No la vi";
    return;
  }
});

// ====== Sorpréndeme ======
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

// Botón volver en sorpresa
document.getElementById('sBack').addEventListener('click', () => {
  document.getElementById('surprise-result').classList.add('hidden');
  document.getElementById('genres').classList.remove('hidden');
  document.querySelector('.surprise-section').classList.remove('hidden');
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