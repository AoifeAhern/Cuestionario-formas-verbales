<html>
    <head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta name="robots" content="noindex,nofollow">
		<title>Experiment</title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
		<script src="mmturkey.0.5.js"></script>
		<script type="text/javascript" src="animals.js"></script>
		<link rel="stylesheet" href="style.css" />
	</head> 
	<body>
		<div class="slide" id="instructions">
			<p id='logo-text'>Universidad Complutense de Madrid, proyecto de investigación SPIRIM</p>
			<p class="block-text">
				En este cuestionario, se te presentará una frase en la que falta por incluir una forma verbal, y tres opciones. Hay 50 frases que completar.
			</p>
			<input id="startButton" type="button" name="Begin" value="Empieza" onclick="begin()" />
    		</p>
			<p class="block-text" id="legal">
  				Información legal: Al responder al cuestionario, participas en una investigación de lingüistas de la Universidad Complutense de Madrid acerca del aprendizaje del español como lengua extranjera.   
  
				Tu participación en el cuestionario es voluntario, y no habrá ninguna consecuencia adversa de no participar.  Los investigadores que solicitan tu participación guadarán la información que aportas en la más estricta confidencialidad, empleándola únicamente para la investigación sobre el aprendizaje del español.
  			</p>
		</div>

		<div class="slide" id="intro">
			<form action="action_page.php"> 
				<p><b>En primer lugar, por favor responda a las siguientes preguntas.  A continuación comenzará la prueba sobre aprendizaje de formas verbales en español.</b></p>
				<form>
				<p class="notcentered"><br> Sexo: <br>
				  <td><input name="gender" type="radio" value="hombre" />Hombre</td>
				  <td><input name="gender" type="radio" value="mujer" />Mujer</td>
				</form>
				<form>
				<p class="notcentered"><br> Edad: <br>
				  <td><input name="edad" type="radio" value="menos de 30 años" />Menos de 30 años</td>
				  <td><input name="edad" type="radio" value="entre 30 y 60 años" />Entre 30 y 60 año</td>
				  <td><input name="edad" type="radio" value="mayor de 60" />Más de 60 años</td>
				</form>

				<form>
				  <fieldset>
				  <p class="notcentered">Su lengua materna (la lengua hablada en casa durante su infancia), o si es usted bilingüe de nacimiento, sus lenguas maternas:<br>
				  <p class="notcentered"><input size="50" type="text" name="lengua o lenguas maternas" id="userInputLanguage">
				  <br>

				  <p class="notcentered">Si usted sabe o ha estudiado alguna otra lengua, escriba cuáles, y el nivel de conocimientos que tenga para cada lengua:<br>
				  <p class="notcentered"><input size="50" type="text" name="otras lenguas y nivel" id="userInputOtherLang">

				  <p class="notcentered">¿En qué curso del Instituto Cervantes está usted estudiando?
				  <p class="notcentered"><input size="50" type="text" name="curso en el Instituto Cervantes">

				  <p class="notcentered">¿Dónde ha aprendido usted el español? (Marque todas las opciones válidas)<br>
				  <td><input name="donde aprendió" type="checkbox" value="cursos en su país" id="01"/>En cursos en su país</td><br>
				  <td><input name="donde aprendió" type="checkbox" value="cursos países hispanos" id="02"/>En cursos en países hispanos.  Escriba cuál país y cuánto tiempo.<br><input size="50" type="text" name="cursos país y tiempo" id="text01"></td><br>
				  <td><input name="donde aprendió" type="checkbox" value="viajes cortos a países hispanos" id="03"/>En viajes cortos a países hispanos.  Escriba cuáles países y el tiempo de estancia.<br><input type="text" size="50" name="viajes cortos a países hispanos" id="text02"></td><br>
				  <td><input name="donde aprendió" type="checkbox" value="residencia país y tiempo" id="04"/>Ha vivido en países hispanos. Escriba cuáles países y el tiempo de estancia.<br><input size="50" type="text" name="vresidencia país y tiempo" id="text03"></td><br>
				</fieldset>
				</form>

				<p class="notcentered"><b>Instrucciones</b></p>
	  
				<p class="notcentered">Las frases que verás en este cuestionario están pensadas para ayudarnos a entender cómo se aprende a utilizar las diferentes formas verbales del español. El cuestionario incluye <span class="numberofquestions">50</span> frases. Elige la forma verbal que te parezca mejor para completar la frase. Si te parece que las opciones son muy similares, elige la forma que te resulte más natural en la frase.
				</p>
				<p class="notcentered">Por favor, pincha en el EMPEZAR cuando estés preparado para empezar el cuestionario.</p>
			<input id="startButton" type="button" name="Start" value="Empezar" onclick="start()" />
		</div>
		<div class="slide" id="stage">
  			<h3 class="centered">Frase <span id="qnumber"></span> de <span id="qtotal">50</span></h3>
			<br/>
  			
			<p class="pr" id="question">{{}}</p>

			<form id="fcform">
				<p class="pr" id="a">{{}}</p>
				<p class="pr" id="b">{{}}</p>
				<p class="pr" id="c">{{}}</p>

				<input id="startButton" type="button" name="Next" value="Siguente" onclick="timerFix()" />
			</form>

		</div>

	</div>

	<div class="slide" id="finished">
		Has terminado el cuestionario - ¡muchas gracias por participar!
	</div>

<script src="animals.js" type="text/javascript"></script>

</body>
</html>