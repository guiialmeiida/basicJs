//teste function

/*function pegaBotoes(){
link = [];
var all = document.getElementsByClassName("btn-secondary");
for (var i = 0; i < all.length; i++) {
link[i] = all[i];
}
  return(link)
}*/

//inicializar 
if (localStorage.getItem('cores') == null) //#565965
{
	var aux = '#565965';
}
else{
var aux =localStorage.getItem('cores')}
document.getElementById("title-mid").style.color = aux;
document.getElementById("corum").value = aux;

//inicializar botoes pegando o local.storage
var all = document.getElementsByClassName("btn-secondary");
for (var i = 0; i < all.length; i++) {
  var link = all[i];
  link.style.backgroundColor= aux; 
  link.style.border= aux;
}

//inicializar letra botoes pegando o true ou false do clique
if (localStorage.getItem('clique') == "false" ) {
		document.body.style.background = "#000";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#000";}
		//document.getElementById("singlebutton").style.color = "#000000";
		var first_click = false;
} else {
		document.body.style.background = "#fff";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			var link = all[i];
			link.style.color= "#fff";}
		//document.getElementById("singlebutton").style.color = "#fff";
		first_click = true;
}


//button de cores
function trocaCor(){
	var	cor = document.getElementById("corum").value;
	
		document.getElementById("title-mid").style.color = cor;
		var all = document.getElementsByClassName("btn-secondary");
		for (var i = 0; i < all.length; i++) {
		  var link = all[i];
		  link.style.backgroundColor= cor; 
		  link.style.border= cor;
		}
		document.getElementById("singlebutton").style.background = cor;
		document.getElementById("singlebutton").style.border = cor;
		
		console.log(cor);
		
	localStorage.setItem('cores',cor)
}

//button true or false
clickButton = function(){
  if (first_click) {
        document.body.style.background = "#000000";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			  var link = all[i];
			link.style.color= "#000";}
        first_click = false;
    } else {
        document.body.style.background = "#fff";
		var all = document.getElementsByClassName("btn-secondary");
			for (var i = 0; i < all.length; i++) {
			var link = all[i];
			link.style.color= "#fff";}
		first_click = true;
    }
	localStorage.setItem('clique', first_click)
  
}
document.getElementsByTagName("button")[0].onclick = clickButton

//Desafio Cálculo IMC 

console.log('Calculo IMC - Variaveis: massa e altura')
var massa = 65,
	altura = 1.7,
	imc = massa / (altura ** 2);
console.log('#############################')


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

