var qnumber = 0;
var stimuli = [
   {
       name: "stim1",
       question: "Tengo noticias de Juana: ya ______________ a su nuevo destino. Ahora busca casa.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
       responseOption3: "llegaba",
   },    
   {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
   }, 
   {
       name: "stim3",
       question: "Voy a buscar a los niños: ya _________________ de la escuela. Me están esperando.",
       responseOption1: "han salido",
	   responseOption2: "salieron", 
	   responseOption3: "salían",
   }, 
   {
       name: "stim4",
       question: "Por fin podemos descansar del ruido: ya __________________ la casa. Está retirando las máquinas.", 
       responseOption1: "han construido", 
       responseOption2: "construyeron", 
	   responseOption3: "construían"
   }, 
   {
       name: "stim5",
       question: "Ana y Luisa está muy contenta: ya _____________________ el maratón de Nueva York. Tienen unas fotos muy bonitas.", 
       responseOption1: "han corrido", 
       responseOption2: "corrieron", 
	   responseOption3: "corrían"
   }, 
   {
       name: "stim6",
       question: "Pedro está llamando a sus amigos: ya ___________________ la casa y puede salir con ellos esta tarde", 
       responseOption1: "ha limpiado", 
       responseOption2: "limpiaron", 
	   responseOption3: "limpiaban"
   }, 
   {
       name: "stim7",
       question: "Esto no puede continuar así. Pedro ya ___________________ tarde al trabajo tres veces esta semana.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
	   responseOption3: "llegaba"
   }, 
   {
       name: "stim8",
       question: "Creo que Luisa y María están muy ocupadas: ya ________________________ tarde del trabajo tres días este mes.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
	   responseOption3: "salían"
   }, 
   {
       name: "stim9",
       question: "Es una negociación muy difícil: ya _____________________ cuatro veces, pero no se ponen de acuerdo.", 
       responseOption1: "se han reunido", 
       responseOption2: "se reunieron", 
	   responseOption3: "se reunían"
   }, 
   {
       name: "stim10",
       question: "Conozco bien la ciudad y no me perderé. Ya ____________________ allí dos veces.", 
       responseOption1: "he ido", 
       responseOption2: "fui", 
	   responseOption3: "iba"
   }, 
   {
       name: "stim11",
       question: "Tenéis mucha experiencia: ya __________________ tres maratones, y sabéis cómo preparar la carrera.", 
       responseOption1: "habéis corrido", 
       responseOption2: "corristeis", 
	   responseOption3: "corríais"
   }, 
   {
       name: "stim12",
       question: "Todo irá bien: María ya _____________________ la fiesta de Navidad en otras ocasiones y es muy eficaz en estas cosas.", 
       responseOption1: "ha organizado", 
       responseOption2: "organizó", 
	   responseOption3: "organizaba"
   }, 
   {
       name: "stim13",
       question: "Los expertos de la empresa no están preocupados por la situación actual. ________________ muchos años aquí y saben lo que tienen que hacer.", 
       responseOption1: "han vivido", 
       responseOption2: "vivieron", 
	   responseOption3: "vivían"
   }, 
   {
       name: "stim14",
       question: "Estoy en crisis. ______________________ en esta oficina muchos años, pero ahora es el momento de cambiar de vida.", 
       responseOption1: "He trabajado", 
       responseOption2: "Trabajé", 
	   responseOption3: "Trabajaba"
   }, 
   {
       name: "stim15",
       question: "Andrés está muy triste. Susana y él ____________________ juntos muchos años, pero ahora ella está enamorada de otro y quiere dejar a Andrés.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
	   responseOption3: "salían"
   }, 
   {
       name: "stim16",
       question: "Siempre __________________ que la familia es muy importante en la vida de una persona. Estoy convencido de eso.", 
       responseOption1: "he pensado", 
       responseOption2: "pensé", 
	   responseOption3: "pensaba"
   }, 
   {
       name: "stim17",
       question: "Siempre _________________ partidario de la vida sana y la alimentación equilibrada: es lo mejor para tener buena salud.", 
       responseOption1: "he sido", 
       responseOption2: "fui", 
	   responseOption3: "era"
   }, 
   {
       name: "stim18",
       question: "Alberto siempre ___________________ ideas conservadoras. Creo que, a sus años, no va a cambiar.", 
       responseOption1: "ha tenido",
       responseOption2: "tuve",
	   responseOption3: "tenía",
   }, 
   {
       name: "stim19",
       question: "Este año, el Real Madrid ___________________ el campeonato de fútbol.", 
       responseOption1: "ha ganado", 
       responseOption2: "ganó", 
	   responseOption3: "ganaba",      
   }, 
   {
       name: "stim20",
       question: "Este trimestre, Laura __________________ su tesis doctoral. ¡Está contentísima!", 
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
	   responseOption3: "terminaba"
   }, 
   {
       name: "stim21",
       question: "Estos últimos meses, las cosas  _______________________ mejor en la empresa. Parece que la crisis ha pasado.", 
       responseOption1: "han ido", 
       responseOption2: "fueron", 
	   responseOption3: "iban"
   }, 
   {
       name: "stim22",
       question: "Esta semana, Plácido Domingo ___________________ una ópera de Mozart en el Teatro Principal.", 
       responseOption1: "ha cantado", 
       responseOption2: "cantó", 
	   responseOption3: "cantaba"
   }, 
   {
       name: "stim23",
       question: "Estas vacaciones ________________ a mi hermana, que normalmente vive en Chile. ¡Qué bien!", 
       responseOption1: "he visto", 
       responseOption2: "vi", 
	   responseOption3: "veía"
   }, 
   {
       name: "stim24",
       question: "Este verano ___________________ un ascensor nuevo en mi edificio. Ahora van a cambiar la pintura.", 
       responseOption1: "han instalado", 
       responseOption2: "instalaron", 
	   responseOption3: "instalaban"
   }, 
   {
       name: "stim25",
       question: "María y Pedro ___________________ cuando yo llegué, pero finalmente cambiaron de idea y se quedaron conmigo.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
	   responseOption3: "salían"
   }, 
   {
       name: "stim26",
       question: "Rosa___________________ de escribir el informe, pero una llamada telefónica le interrumpió y no pudo hacerlo." ,
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
	   responseOption3: "terminaba"   
   }, 
   {
       name: "stim27",
       question: "El atleta _________________ el primero a la meta, pero en los últimos metros tuvo un problema y otro corredor le adelantó.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
	   responseOption3: "llegaba"   
   }, 
   {
       name: "stim28",
       question: "Aquí ______________________ un edificio completamente nuevo, pero no lo terminaron por culpa de la crisis.", 
       responseOption1: "han construido", 
       responseOption2: "construyeron", 
	   responseOption3: "construían"   
   }, 
   {
       name: "stim29",
       question: "En ese momento, en el Parlamento ___________________ al presidente, pero por un problema técnico invalidaron la votación. La próxima semana tienen que votar otra vez.", 
       responseOption1: "han elegido", 
       responseOption2: "eligieron", 
	   responseOption3: "elegían"   
   }, 
   {
       name: "stim30",
       question: "Juan ____________________ la cena en la cocina, pero tuvo que salir urgentemente y no pudo terminar.", 
       responseOption1: "ha preparado", 
       responseOption2: "preparó", 
	   responseOption3: "preparaba"  
   }, 
   {
       name: "stim31",
       question: "-A: ¿Y Julio? ¿Dónde está?   -B: No sé… Antes he hablado con él y me ha dicho que _________________ unas cervezas y ______________ enseguida para acá.", 
       responseOption1: "ha comprado / ha venido", 
       responseOption2: "compró / vino", 
	   responseOption3: "compraba / venía"   
   }, 
   {
       name: "stim32",
       question: "-A: ¿Qué tal está Pedro? -B: Muy ocupado, creo. Dijo que _______________ del permiso de conducir la semana que viene.",
       responseOption1: "se ha examinado", 
       responseOption2: "se examinó", 
	   responseOption3: "se examinaba"  
   }, 
   {
       name: "stim33",
       question: "-A: ¿Se han ido ya Eugenia y Joaquín de vacaciones? -B: Aún no. Dijeron que __________________ para Roma el viernes que viene.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
	   responseOption3: "salían"   
   }, 
   {
       name: "stim34",
       question: "-A: ¿Qué sabes de Cristina?  -B: No mucho. _________________ a Madrid el próximo fin de semana. Entonces podremos verla.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
	   responseOption3: "salían"   
   }, 
   {
       name: "stim35",
       question: ". - A: ¿Quién ha ganado el partido? - B: Aún es pronto para saberlo. El partido _________________ a las 21.30. Faltan veinte minutos para el final.", 
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
	   responseOption3: "terminaba"  
   }, 
   {
       name: "stim36",
       question: "–A: ¿Ya ha llegado el tren?  -B: Creo que no. ________________ a las 20.10, y ahora son las 19.55.", 
       responseOption1: "Ha llegado", 
       responseOption2: "Llegó", 
	   responseOption3: "Llegaba"   
   }, 
   {
       name: "stim37",
       question: "Ayer me quedé en casa y ____________________ viendo la televisión durante un par de horas.", 
       responseOption1: "he estado", 
       responseOption2: "estuve", 
	   responseOption3: "estaba"
   }, 
   {
       name: "stim38",
       question: "El sábado salió a dar un paseo y __________________ mirando tiendas toda la mañana.", 
       responseOption1: "ha estado", 
       responseOption2: "estuvo", 
	   responseOption3: "estaba"
   }, 
    {
       name: "stim39",
       question: "En la reunión del miércoles _________________ discutiendo ese tema, y finalmente tomaron una decisión.", 
       responseOption1: "han estado", 
       responseOption2: "estuvieron", 
	   responseOption3: "estaban"
   }, 
    {
       name: "stim40",
       question: "Pasaron un día muy agradable en el pueblo: por la mañana ___________________ arreglando la casa, pero después de comerdieron un paseo y vieron cosas muy bonitas.", 
       responseOption1: "han estado", 
       responseOption2: "estuvieron", 
	   responseOption3: "estaban"
   }, 
    {
       name: "stim41",
       question: "No me gustó el comportamiento de Ramón: durante toda la fiesta _______________ bebiendo sin parar, sentado en una silla, solo y sin hablar con nadie. No le invitaré nunca más.", 
       responseOption1: "ha estado", 
       responseOption2: "estuvo", 
	   responseOption3: "estaba"
   }, 
    {
       name: "stim42",
       question: "-A: ¡Quién ___________ ir con ellos a esquiar! –B: Pues si no vas es porque no quieres.", 
       responseOption1: "pudiera", 
       responseOption2: "pueda", 
	   responseOption3: "podrá"
   }, 
    {
       name: "stim43",
       question: "-A: Te revisaré el documento siempre que me lo __________ antes del martes  –B: Vale, yo te lo envío.", 
       responseOption1: "des", 
       responseOption2: "dieras", 
	   responseOption3: "das"
   }, 
    {
       name: "stim44",
       question: "-A: Cuando __________________, tienes que hacer los deberes. -B: Vale, mamá.", 
       responseOption1: "vendrás", 
       responseOption2: "vienes", 
	   responseOption3: "vengas"
   }, 
    {
       name: "stim45",
       question: "Julián ________________ trabajando en esa empresa unos años, pero al final decidió irse.", 
       responseOption1: "han estado", 
       responseOption2: "estuvo", 
	   responseOption3: "estaba"
   }, 
    {
       name: "stim46",
       question: "-A: ¿Has leído la noticia? –B:  Sí, me enteré antes de que la__________________.", 
       responseOption1: "publicaron", 
       responseOption2: "publicaban", 
	   responseOption3: "publiquen"
   }, 
    {
       name: "stim47",
       question: "-A: Es mejor que no le _______________. –B: ¿Tan enfadado está?", 
       responseOption1: "molestarás", 
       responseOption2: "molestarías", 
	   responseOption3: "molestes"
   }, 
    {
       name: "stim48",
       question: "–A: ¡Date prisa, que no quiero llegar tarde el primer día!  –B: No te_______________, que ya estoy preparado.", 
       responseOption1: "preocuparás", 
       responseOption2: "preocupas", 
	   responseOption3: "preocupes"
   }, 
    {
       name: "stim49",
       question: ". –A: Con el frío que ____________, ¿no llevas abrigo?  -B:  No. Es que no me gusta abrigarme.", 
       responseOption1: "hace", 
       responseOption2: "hacía", 
	   responseOption3: "hiciera"
   }, 
    {
       name: "stim50",
       question: "–A: ¿Qué vas a hacer esta noche?  –B:  No sé, pero quizás _____________ en casa.", 
       responseOption1: "me quedaba", 
       responseOption2: "me quede", 
	   responseOption3: "me quedara"
   }, 
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffleArray(stimuli);


function begin() {
	document.getElementById('intro').style.display = "block";
	document.getElementById('instructions').style.display = "none";
	document.getElementById('legal').style.display = "none";
}

function start() {
	document.getElementById('intro').style.display = "none";
	document.getElementById('stage').style.display = "block";
	next();
}

function next(){
	if (stimuli.length === 45) {
		document.getElementById('stage').style.display = "none";
		document.getElementById('language').style.display = "block";
	} else {
	qnumber++;
	document.getElementById('qnumber').innerHTML = qnumber;
	var stimulus = stimuli.shift();
	document.getElementById('question').innerHTML = stimulus.question;
	document.getElementById('a').innerHTML = '<td><input class="opciona" name="option" type="radio" id="a" value="opciona" /></td>' + stimulus.responseOption1;
	document.getElementById('b').innerHTML = '<td><input class="opciona" name="option" type="radio" id="b" value="opcionb" /></td>' + stimulus.responseOption2;
	document.getElementById('c').innerHTML = '<td><input class="opciona" name="option" type="radio" id="c" value="opcionc" /></td>' + stimulus.responseOption3;
	}
}

function lgSubmit() {
	document.getElementById('language').style.display = "none";
	document.getElementById('finished').style.display = "block";
}