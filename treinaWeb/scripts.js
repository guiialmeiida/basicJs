//global
function id(elemento) {
	return document.getElementById(elemento);
}

//inicializar class body 
if (localStorage.getItem('clique') == null || localStorage.getItem('clique') == "img"){
		document.getElementsByTagName('body')[0].classList.add("backimg");
}

//inicializar cores botoes primeiro acesso
if (localStorage.getItem('cores') == null) //#565965
{
	var aux = '#ff0080';
}
else{
var aux =localStorage.getItem('cores')}
id("title-mid").style.color = aux;
id("banhe").style.color = aux;
id("corum").value = aux;

id("statusS").value = localStorage.getItem('ultimoS');
id("statusC").value = localStorage.getItem('ultimoC');

//inicializar botoes pegando o local.storage
var all = document.getElementsByClassName("btn-secondary");
for (var i = 0; i < all.length; i++) {
  var link = all[i];
  link.style.backgroundColor= aux; 
  link.style.border= aux;
}
id("testImc").style.borderColor=aux;
id("testHoroscopo").style.borderColor=aux;
id("banheiro").style.borderColor=aux;
id("banheiro1").style.borderColor=aux;
id("oie").style.borderColor=aux;

//inicializar letra botoes pegando o true ou false do clique
if (localStorage.getItem('clique') === "preto" ) {
		document.getElementsByTagName('body')[0].classList.remove("backimg");
		document.body.style.background = "#000";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#000";
			id("testImc").style.color= "#fff";
			id("testHoroscopo").style.color= "#fff";
			id("banheiro").style.color= "#fff";
			id("banheiro1").style.color= "#fff";}
		//document.getElementById("singlebutton").style.color = "#000000";
		//var first_click = false;
} else if (localStorage.getItem('clique') === "branco" ){
		document.getElementsByTagName('body')[0].classList.remove("backimg");
		document.body.style.background = "#fff";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			var link = all[i];
			link.style.color= "#fff";
			id("testImc").style.color= "#000";
			id("testHoroscopo").style.color= "#000";
			id("banheiro").style.color= "#000";
			id("banheiro1").style.color= "#000";}
		//document.getElementById("singlebutton").style.color = "#fff";
		//first_click = true;
}else{
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#fff";
			id("testImc").style.color= "#fff";
			id("testHoroscopo").style.color= "#fff";
			id("banheiro").style.color= "#fff";
			id("banheiro1").style.color= "#fff";}
}


//button de cores
function trocaCor(){
	var	cor = id("corum").value;
	
		id("title-mid").style.color = cor;
		id("banhe").style.color = cor;
		var all = document.getElementsByClassName("btn-secondary");
		for (var i = 0; i < all.length; i++) {
		  var link = all[i];
		  link.style.backgroundColor= cor; 
		  link.style.border= cor;
		}
		id("testImc").style.borderColor=cor;
		id("testHoroscopo").style.borderColor=cor;
		id("banheiro").style.borderColor=cor;
		id("banheiro1").style.borderColor=cor;
		id("oie").style.borderColor=cor;
		
		console.log(cor);
		
	localStorage.setItem('cores',cor)
}
first_click = "img";

//button (preto e branco)true or false
clickButton = function(){
  if (first_click === "img" || first_click === "branco") {
		document.getElementsByTagName('body')[0].classList.remove("backimg");
        document.body.style.background = "#000000";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#000";
			id("testImc").style.color= "#fff";
			id("testHoroscopo").style.color= "#fff";
			id("banheiro").style.color= "#fff";
			id("banheiro1").style.color= "#fff";}
       		first_click = "preto";
    } else{
		document.getElementsByTagName('body')[0].classList.remove("backimg");
        document.body.style.background = "#fff";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			var link = all[i];
			link.style.color= "#fff";
			id("testImc").style.color= "#000";
			id("testHoroscopo").style.color= "#000";
			id("banheiro").style.color= "#000";
			id("banheiro1").style.color= "#000";}
		first_click = "branco";
    }	
  localStorage.setItem('clique', first_click)
}

//button img
synthWave = function(){
	var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#fff";
			id("testImc").style.color= "#fff";
			id("testHoroscopo").style.color= "#fff";
			id("banheiro").style.color= "#fff";
			id("banheiro1").style.color= "#fff";}
			first_click = "img";
	document.getElementsByTagName('body')[0].classList.add("backimg");
	 localStorage.setItem('clique', first_click)
}

id("synth").onclick = synthWave;
id("bew").onclick = clickButton

//button rythm 
som = true;
clickButton1 = function(){
	if (som){
			var rythm = new Rythm();
			rythm.setMusic("treinaWeb/test.mp3");
			rythm.crossOrigin = "anonymous";
			rythm.loop = true;
			rythm.start();
			som = false;
	}else{	
		window.location.reload(1);
   	 }
}
id("rythm").onclick = clickButton1


//button loading
var meio = "title";
gif = function(){
	if(meio == "title"){
		id('title-mid').style.display = 'none';//retira o elemento principal
		id('loading').style.display = 'flex';//adiciona o gif que está none
		meio = "gif";}
	else if (meio == "imc") {
		id('testImc').style.display = 'none';//retira o elemento principal
		id('loading').style.display = 'flex';//adiciona o gif que está none
		meio = "gif";
	}

	else {
		location.reload();
	}
}
id("load").onclick = gif

//button imc
imc = function(){
	if(meio == "title"){
		id('testImc').classList.add("animated");
		id('testImc').classList.add("bounceInLeft");
		id('title-mid').style.display = 'none';//retira o elemento principal
		id('testImc').style.display = 'flex';//adiciona a div que está none
	meio = "imc";}
	else if (meio == "gif"){
		id('testImc').classList.add("animated");
		id('testImc').classList.add("bounceInLeft");
		id('loading').style.display = 'none';//retira o elemento principal
		id('testImc').style.display = 'flex';//adiciona a div que está none
		meio = "imc";
	}
	else{
		location.reload();
	}
}
id("imcid").onclick = imc




//button banheiro
banheiro = function(){
	if(meio == "title"){
		id('banheiro').classList.add("animated");
		id('banheiro').classList.add("bounceInLeft");
		id('banheiro1').classList.add("animated");
		id('banheiro1').classList.add("bounceInLeft");
		id('banhe').classList.add("animated");
		id('banhe').classList.add("bounceInLeft");
		id('title-mid').style.display = 'none';//retira o elemento principal
		id('banheiro').style.display = 'flex';//adiciona a div que está none
        id('banheiro1').style.display = 'flex';//adiciona a div que está none
		id('banhe').style.display = 'block';//adiciona a div que está none
	meio = "banheiro";}
	else{
		location.reload();
	}
}
id("ban").onclick = banheiro

var statusS = localStorage.getItem('cliqueS');
var statusC = localStorage.getItem('cliqueC');

horaS = function() {
    time1 = moment().format('hh:mm:ss A');
    if (statusS === "desocupado") {
		ultimoS = time1 + " ocupado";
        document.getElementById("statusS").value = ultimoS;
        statusS = "ocupado";
        console.log(statusS)
    } else {
		ultimoS = time1 + " desocupado";
        document.getElementById("statusS").value = ultimoS;
        statusS = "desocupado";
        console.log(statusS)
    }
	localStorage.setItem('ultimoS', ultimoS)
    localStorage.setItem('cliqueS', statusS)
}


document.getElementById("semjanela").onclick = horaS


horaC = function() {
    time1 = moment().format('hh:mm:ss A');
    if (statusC === "desocupado") {
		ultimoC = time1 + " ocupado";
        document.getElementById("statusC").value = ultimoC;
        statusC = "ocupado";
        console.log(statusC)
    } else {
		ultimoC = time1 + " desocupado";
        document.getElementById("statusC").value = ultimoC;
        statusC = "desocupado";
        console.log(statusC)
    }
	localStorage.setItem('ultimoC', ultimoC)
    localStorage.setItem('cliqueC', statusC)
}


document.getElementById("comjanela").onclick = horaC







function message(){

	var signoPessoa = (sel1.selectedOptions[0].text);
   	var recebe = "";
	ranNums = [];
	for(i=0;i<3;i++){
	var number = Math.trunc((Math.random()*9)+1) 
	ranNums += number
	if (number == ranNums[i-1]){
		number++;
		ranNums += number
	}
		switch(number){
			case 1: recebe+= " " + signoPessoa + (" uma boa notícia, relacionada ao aumento de seus rendimentos, pode chegar a qualquer momento.");break;
			case 2: recebe+= " " + signoPessoa + (" o momento pode envolver um novo projeto ou contrato, emprego ou promoção que envolvam o aumento de seus rendimentos.");break;
			case 3: recebe+= " " + signoPessoa + (" sua casa passa a ser ponto de encontros entre amigos e parentes queridos.");break;
			case 4: recebe+= " " + signoPessoa + (" você vai priorizar os amigos íntimos no mês de novembro e dezembro.");break;
			case 5: recebe+= " " + signoPessoa + (" se puder, tire uns dias para cuidar de si mesmo, deixe os contatos comerciais para daqui alguns dias.");break;
			case 6: recebe+= " " + signoPessoa + (" não será um ano leve ou fácil, pois Saturno exigirá muito de você.");break;
			case 7: recebe+= " " + signoPessoa + (" esse mês indica para você um período de maior assertividade e determinação a alcançar suas metas de trabalho.");break;
			case 8: recebe+= " " + signoPessoa + (" em agosto, setembro ou novembro uma viagem rápida pode ter o mesmo efeito sobre você.");break;
			case 9: recebe+= " " + signoPessoa + (" seja racional, procure não agir ou reagir impulsivamente e saiba direcionar essa intensa energia para suas conquistas, e não para a destrutividade.");break;
		}
	}
	console.log(recebe)
	document.getElementById('textAreaH').innerHTML = "";
	document.getElementById('textAreaH').innerHTML = recebe;
}




//button banheiro
horoscopo = function(){
	if(meio == "title"){
		id('testHoroscopo').classList.add("animated");
		id('testHoroscopo').classList.add("bounceInLeft");
		id('title-mid').style.display = 'none';//retira o elemento principal
		id('testHoroscopo').style.display = 'flex';//adiciona a div que está none
	meio = "horoscopo";}
	else{
		location.reload();
	}
}
id("horoscopo").onclick = horoscopo


//######################################################################################################################################################################################################################################################################################################################################################################################################

//Desafio Cálculo IMC 
console.log('Calculo IMC - Variaveis: massa e altura')
var massa = 65,
	altura = 1.7,
	imc = massa / (altura ** 2);
console.log('#############################')



//learning treinaWeb
//Desafio Vogal ou Consoante 

console.log('Vogal ou Consoante utilizando switch, if e else // function vorC(letra)')
function vorC(letter){
	isVowel = false;
switch(letter){
	case 'a': isVowel = true; break;
	case 'e': isVowel = true; break;
	case 'i': isVowel = true; break;
	case 'o': isVowel = true; break;
	case 'u': isVowel = true; break;
}
if(isVowel){
	console.log('vogal');
}else{
	console.log('consoante');
}}

console.log('#############################')

//Desafio Triângulo


console.log('Desenho triangulo utilizando FOR')
for(var i = 0; i < 10; i++){
	var line = '';
	for(var j = 0; j < i; j++){
		line += '*';
	}
	console.log(line);
}

for(var i = 10; i > 0; i--){
	var line = '';
	for(var j = 0; j < i; j++){
		line += '*';
	}
	console.log(line);
}
console.log('#############################')

//Desafio Número Primo 

console.log('Function numero primo isPrime(nr)')
function isPrime(num){
	for(var i = 2; i < num; i++){
		if(num % i === 0){
			return false;
		}
	}
	return num !== 1;
}
console.log('#############################')

