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


































  // ... (el resto de tu CATALOG sigue igual)
];

// ====== Mostrar género con 31 películas ======
function showGenre(genre) {
  gvTitle.textContent = genre;
  cardsEl.innerHTML = '';
  const store = loadStore();
  const items = CATALOG.filter(x => x.genre === genre).slice(0,120);

  if(!items.length) {
    cardsEl.innerHTML = `<p style="opacity:.75">Sin ítems por ahora en <b>${genre}</b>.</p>`;
  }