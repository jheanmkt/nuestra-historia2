/* =========================================================
   TODO EL CONTENIDO VIVE AQUÍ.
   Edita textos, fechas o fotos sin tocar el resto del código.
   ========================================================= */

const DATA = {
  para: "Yanira",
  apodoElla: "Kurisu",
  apodoEl: "Okabe",
  // Fecha en que empezamos (año, mes-1, día) → 20 de enero de 2023
  inicio: new Date(2023, 0, 20),
  // Fotos de la portada (se deslizan). Cambia o agrega las que quieras.
  portada: ["fotos/foto-19.jpg", "fotos/foto-01.jpg", "fotos/foto-16.jpg", "fotos/foto-04.jpg", "fotos/foto-22.jpg", "fotos/foto-34.jpg"],

  /* ---------------- NUESTRA HISTORIA ---------------- */
  historia: [
    {
      cuando: "Primaria",
      titulo: "Te vi y supe que eras tú",
      texto:
        "Aunque suene loco, desde la primera vez que te vi me quedé impactado por lo linda que eras. Como Nobita cuando encontró a su Shizuka. Te fuiste de la escuela y solo me quedaron recuerdos, pero cada vez que alguien preguntaba quién nos gustaba, en mi mente había una sola respuesta: tú.",
    },
    {
      cuando: "Sexto grado",
      titulo: "La bicicleta y la escolta",
      texto:
        "Me regalaron una bicicleta en la Plaza de Armas y, oh casualidad, tú estabas en la escolta. Ese día tuve dos cosas por las que estar agradecido: la bicicleta… y verte.",
    },
    {
      cuando: "Secundaria",
      titulo: "El juego de las miradas",
      texto:
        "Me parecías tan interesante y tan misteriosa que hice lo único que tenía a mi alcance: mirarte. Pasaba por tu salón buscando esa mirada seria que intentaba descifrar, y si me la sostenías uno o dos segundos, para mí ya era un logro. En las noches, cuando rezaba, a veces también rezaba por ti y le pedía a Dios que te cuidara.",
    },
    {
      cuando: "2016",
      titulo: "Un «Hola» que lo cambió todo",
      texto:
        "Renata me escribió, me hizo confesar que me gustabas y me animó a escribirte. Después de enviar ese «Hola» me dije: ¿qué hice? Pero me respondiste, y empezamos a hablar de todo: de la primaria, de la Biblia, de la vida. Un día me dijiste que me habías saludado… con los ojos. Un movimiento imperceptible para los demás, pero no para mí.",
      nota: "Años después descubrí el secreto: Renata eras tú. 🧵",
    },
    {
      cuando: "2017",
      titulo: "La academia, el fósil y los sapitos",
      texto:
        "Estudiamos juntos en la academia. Verte llegar por la capilla junto a Cruz de Espinas era como ver un oasis en el desierto. Me diste una notita que decía «te quiero» y un fósil; yo te di una de mis monedas antiguas favoritas. Y a la salida de la academia San Marcos, cuando te dije que en tres segundos aparecería un sapito… apareció. Ese lugar y ese momento no saldrán de mi mente jamás.",
    },
    {
      cuando: "Fin de 2017",
      titulo: "Cuando el hilo se enredó",
      texto:
        "Me armé de todo el valor que tenía y te dije lo que sentía. No era el momento: tú tenías miedos y dudas que en ese entonces no podías contarme. Después vino una carta con un poema y una rosa blanca, y luego el silencio. Pero los hilos rojos se enredan, se estiran… y no se rompen.",
    },
    {
      cuando: "Los años siguientes",
      titulo: "Cada uno en su camino",
      texto:
        "A veces nos cruzábamos en el bus a Huancayo como dos desconocidos. Tú pensabas en mí y te preguntabas qué habría pasado si hubieras dicho que sí. Yo aprendí a sanar, a perdonar y a volver a acercarme a Dios. Sin saberlo, los dos estábamos creciendo para el día en que nos volviéramos a encontrar.",
    },
    {
      cuando: "12 de junio de 2021",
      titulo: "El reencuentro del año",
      texto:
        "Tuviste la valentía de escribirme y pedir perdón. Quedamos frente a la comisaría de Jauja, junto al puente. Llegué unos minutos tarde y cuando te vi, te juro que nunca vi a una mujer más hermosa. Me hice el que no te reconocía para hacerme el interesante. Fue como la cita pendiente del cole que nunca tuvimos.",
      poema:
        "«Al caminar junto a ti, era como dar pequeños saltos por las nubes, sin el miedo a caer.»",
      poemaAutor: "Lo que escribiste esa noche",
    },
    {
      cuando: "Después",
      titulo: "Un tiempo para reconstruirme",
      texto:
        "Necesitaba ordenar mi vida y sanar antes de poder darte algo bueno. Te lo dije y lo aceptaste sin juzgarme. Seguiste tu camino con el corazón intacto, deseándome lo mejor. Eso también es amor.",
    },
    {
      cuando: "Fin de 2022",
      titulo: "El día del Mundial",
      texto:
        "Volviste a escribirme y, poco a poco, volví a abrirme. Nos vimos otra vez en el mismo puente. Almorzamos en una pollería del Jirón Junín (nos sentamos juntos), jugamos fútbol de mesa, basquet y la máquina de baile. Y al despedirnos me preguntaste: «¿Te puedo dar un abrazo?». El tiempo se paró un instante.",
    },
    {
      cuando: "Enero de 2023",
      titulo: "Medir nuestras manos",
      texto:
        "En la plaza Santa Isabel medimos nuestras manos… y ya no las soltamos. Caminamos así hasta el puente. Me apretabas tan fuerte de los nervios que tus dedos estaban tensos. Empezamos a decirnos «te quiero» y «te extraño».",
      foto: "fotos/foto-04.jpg",
    },
    {
      cuando: "20 de enero de 2023",
      titulo: "La lluvia de la Tunantada",
      texto:
        "Era tu cumpleaños. Te regalé una pulsera que decía «Te quiero». Empezó a llover y nos quedamos esperando; pusimos música y te canté Cha Cha Cha moviendo la cabeza en el coro. Nuestras miradas se sincronizaron. Te pregunté si podía darte un beso y me dijiste que un beso no se pide, se roba. Fue el beso más dulce. Luego te pregunté si querías estar conmigo, y tu «¡sííí!» explotó todas mis emociones. Dejó de llover. Sentí que el universo se alegró por nosotros.",
      destacado: true,
    },
    {
      cuando: "Hoy",
      titulo: "Y seguimos",
      texto:
        "Desde ese día no hemos dejado de hablar ni un solo día. Cada vez nos conocemos más y nos amamos más. Puedo decirte lo mucho que te amo libremente y saber que me amas con la misma intensidad. Me sigo enamorando de ti, mi amor.",
      foto: "fotos/foto-16.jpg",
    },
  ],

  /* ---------------- RAZONES ---------------- */
  razones: [
    { t: "Porque desde la primaria supe que eras tú, y el tiempo solo me dio la razón.", f: "fotos/foto-19.jpg" },
    { t: "Por tu mirada misteriosa, esa que pasé años intentando descifrar.", f: "fotos/foto-01.jpg" },
    { t: "Porque me saludas con los ojos, con un gesto que solo yo puedo ver.", f: "fotos/foto-07.jpg" },
    { t: "Por tu letra bonita. Todavía recuerdo tu nombre escrito en ese libro que me prestaste.", f: "fotos/foto-14.jpg" },
    { t: "Porque me regalaste un fósil. ¿Quién regala un fósil? Tú. Y por eso te amo.", f: "fotos/foto-16.jpg" },
    { t: "Por esa notita que decía «te quiero» y que leí mil veces.", f: "fotos/foto-22.jpg" },
    { t: "Porque tuviste la valentía de pedir perdón. Pocas cosas más bonitas ha hecho alguien por mí.", f: "fotos/foto-02.jpg" },
    { t: "Porque me esperaste.", f: "fotos/foto-03.jpg" },
    { t: "Porque cuando te hablo, de verdad me escuchas.", f: "fotos/foto-05.jpg" },
    { t: "Porque escribes poemas y ni te das cuenta de lo lindo que escribes.", f: "fotos/foto-06.jpg" },
    { t: "Por tu «memoria de pollo», que igual guarda cada detalle nuestro.", f: "fotos/foto-09.jpg" },
    { t: "Porque siempre me sigues el juego.", f: "fotos/foto-10.jpg" },
    { t: "Porque respetaste mis tiempos y nunca me juzgaste.", f: "fotos/foto-11.jpg" },
    { t: "Por el abrazo del día del Mundial. De verdad se paró el tiempo.", f: "fotos/foto-12.jpg" },
    { t: "Porque cuando medimos nuestras manos, ya no quise soltarte nunca más.", f: "fotos/foto-13.jpg" },
    { t: "Por cómo me apretabas la mano de los nervios.", f: "fotos/foto-15.jpg" },
    { t: "Porque un beso no se pide, se roba.", f: "fotos/foto-17.jpg" },
    { t: "Porque convertiste una lluvia cualquiera en mi recuerdo favorito.", f: "fotos/foto-18.jpg" },
    { t: "Por tu risa, que me contagia la alegría incluso en mis peores días.", f: "fotos/foto-20.jpg" },
    { t: "Porque eres linda, inteligente y divertida: todo lo que siempre imaginé.", f: "fotos/foto-21.jpg" },
    { t: "Porque me haces cumplidos cuando menos lo espero.", f: "fotos/foto-23.jpg" },
    { t: "Porque contigo quiero volver a acercarme a Dios.", f: "fotos/foto-24.jpg" },
    { t: "Porque buscar juntos citas de la Biblia se volvió algo nuestro.", f: "fotos/foto-26.jpg" },
    { t: "Porque creíste en nosotros incluso cuando yo había dejado de hacerlo.", f: "fotos/foto-27.jpg" },
    { t: "Porque tu corazón siempre quiso mi felicidad, aunque no estuvieras a mi lado.", f: "fotos/foto-28.jpg" },
    { t: "Por el sapito que apareció justo a los tres segundos.", f: "fotos/foto-29.jpg" },
    { t: "Porque verte sigue siendo como ver un oasis en el desierto.", f: "fotos/foto-30.jpg" },
    { t: "Porque contigo los lugares se vuelven recuerdos: el puente, la plaza, el Jirón Junín.", f: "fotos/foto-33.jpg" },
    { t: "Porque cada día te conozco más, y cada día me enamoro más.", f: "fotos/foto-34.jpg" },
    { t: "Porque nuestro hilo rojo se enredó muchas veces, pero nunca se rompió.", f: "fotos/foto-36.jpg" },
  ],

  /* ---------------- ÁBRELO CUANDO… ---------------- */
  cartas: [
    {
      id: "triste",
      emoji: "🌧️",
      cuando: "estés triste",
      carta:
        "Mi amor, si estás leyendo esto es porque hoy pesa un poquito más. Quiero que sepas que no tienes que estar bien todo el tiempo. Llora si lo necesitas, que yo estoy aquí. ¿Te acuerdas de la lluvia de la Tunantada? Parecía que arruinaría el día y terminó siendo el mejor de mi vida. Las lluvias pasan, amor. Y cuando pase esta, yo voy a seguir aquí tomándote la mano.",
      versiculo: "Cercano está Jehová a los quebrantados de corazón; y salvará a los contritos de espíritu.",
      cita: "Salmos 34:18",
    },
    {
      id: "feliz",
      emoji: "☀️",
      cuando: "estés feliz",
      carta:
        "¡Qué bonito que estés feliz! Ojalá pudiera verte ahora mismo, porque cuando sonríes el mundo se ve más lindo. Guarda este momento, disfrútalo sin culpa y después cuéntamelo todo con detalles. Tu alegría es de mis cosas favoritas en este mundo.",
      versiculo: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.",
      cita: "Salmos 118:24",
    },
    {
      id: "enojada",
      emoji: "😤",
      cuando: "estés enojada conmigo",
      carta:
        "Ok, lo acepto: seguro me lo merezco 🙈. Respira, amor. Recuerda que estamos del mismo lado, que el problema nunca eres tú ni soy yo, sino lo que tenemos que resolver juntos. Te prometo escucharte de verdad. Y cuando se te pase un poquito, déjame darte un abrazo. No quiero que se ponga el sol con nosotros peleados.",
      versiculo: "Airaos, y no pequéis; no se ponga el sol sobre vuestro enojo.",
      cita: "Efesios 4:26",
    },
    {
      id: "extranas",
      emoji: "🧵",
      cuando: "me extrañes",
      carta:
        "Yo también te extraño. Siempre. Aunque estemos lejos, nuestro hilo rojo sigue ahí: no importa cuánto se estire, nunca se rompe. Cierra los ojos y acuérdate de cuando medimos nuestras manos en la plaza. Pronto voy a volver a tomar la tuya.",
      versiculo: "Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos.",
      cita: "Cantares 8:7",
    },
    {
      id: "cansada",
      emoji: "📚",
      cuando: "estés cansada o estresada",
      carta:
        "Amor, para un momento. Deja el celular, toma agua y respira hondo. Eres mucho más que tus notas, tus pendientes y tus responsabilidades. Has llegado muy lejos y estoy orgulloso de ti. Descansa un ratito: el mundo puede esperar, y yo te espero con él.",
      versiculo: "Venid a mí todos los que estáis trabajados y cargados, que yo os haré descansar.",
      cita: "Mateo 11:28",
    },
    {
      id: "insegura",
      emoji: "🪞",
      cuando: "dudes de ti",
      carta:
        "Si hoy no te ves como yo te veo, préstame mis ojos un momento: eres linda, inteligente, divertida, valiente y tienes el corazón más noble que conozco. Pasé años intentando descifrar tu mirada y cada cosa que descubrí me enamoró más. No hay nada en ti que tengas que cambiar para ser amada.",
      versiculo: "Toda tú eres hermosa, amiga mía, y en ti no hay mancha.",
      cita: "Cantares 4:7",
    },
    {
      id: "dormir",
      emoji: "🌙",
      cuando: "no puedas dormir",
      carta:
        "¿Otra vez despierta, mi Kurisu? Apaga la mente un ratito. Imagina que estamos caminando por el Jirón Junín, sin prisa, tomados de la mano. Mañana todo se ve más claro. Te mando un beso en la frente, como en el juego de los sapitos. Buenas noches, mi amor.",
      versiculo: "En paz me acostaré, y asimismo dormiré; porque tú, Jehová, solo me harás estar confiada.",
      cita: "Salmos 4:8",
    },
    {
      id: "miedo",
      emoji: "🕊️",
      cuando: "tengas miedo del futuro",
      carta:
        "No sé exactamente qué viene, pero sé con quién quiero enfrentarlo. Si Dios nos trajo de vuelta después de tantos años y tantos caminos, no fue para dejarnos a mitad. Un paso a la vez, amor. Juntos, y con Él en el centro.",
      versiculo: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo.",
      cita: "Isaías 41:10",
    },
  ],

  /* ---------------- VERSÍCULOS ---------------- */
  versiculos: [
    { v: "Y si alguno prevaleciere contra el uno, dos estarán contra él; y cordón de tres dobleces no presto se rompe.", c: "Eclesiastés 4:12" },
    { v: "La caridad es sufrida, es benigna; la caridad no tiene envidia.", c: "1 Corintios 13:4" },
    { v: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.", c: "1 Corintios 13:7" },
    { v: "Mejores son dos que uno; porque tienen mejor paga de su trabajo.", c: "Eclesiastés 4:9" },
    { v: "Nosotros le amamos a él, porque él nos amó primero.", c: "1 Juan 4:19" },
    { v: "Y sobre todas estas cosas vestíos de caridad, la cual es el vínculo de la perfección.", c: "Colosenses 3:14" },
    { v: "Yo soy de mi amado, y mi amado es mío.", c: "Cantares 6:3" },
    { v: "Todo lo hizo hermoso en su tiempo.", c: "Eclesiastés 3:11" },
  ],

  /* ---------------- FOTOS ---------------- */
  // Agrega más fotos a la carpeta /fotos y súmalas aquí.
  fotos: Array.from({ length: 36 }, (_, i) => `fotos/foto-${String(i + 1).padStart(2, "0")}.jpg`),
};
