if (localStorage.getItem('cores') == null) //#565965
{
	var aux = '#565965';
}
else{
var aux =localStorage.getItem('cores')}
document.getElementById("title-mid").style.color = aux;
document.getElementById("singlebutton").style.background = aux;
document.getElementById("singlebutton").style.border = aux;
document.getElementById("singlebutton2").style.background = aux;
document.getElementById("singlebutton2").style.border = aux;
document.getElementById("corum").value = aux;


if (localStorage.getItem('clique') == "false" ) {
		document.body.style.background = "#000000";
		document.getElementById("singlebutton").style.color = "#000000";
		document.getElementById("singlebutton2").style.color = "#000000";
		var first_click = false;
} else {
		document.body.style.background = "#fff";
		document.getElementById("singlebutton").style.color = "#fff";
		document.getElementById("singlebutton2").style.color = "#fff";
		first_click = true;
}


//cores
function trocaCor(){
	var	cor = document.getElementById("corum").value;
	
		document.getElementById("title-mid").style.color = cor;
		document.getElementById("singlebutton").style.background = cor;
		document.getElementById("singlebutton").style.border = cor;
		document.getElementById("singlebutton2").style.background = cor;
		document.getElementById("singlebutton2").style.border = cor;
		console.log(cor);
		
	localStorage.setItem('cores',cor)
}


//button next step
clickButton = function(){

  if (first_click) {
        document.body.style.background = "#000000";
		document.getElementById("singlebutton").style.color = "#000000";
		document.getElementById("singlebutton2").style.color = "#000000";
        first_click = false;
    } else {
        document.body.style.background = "#fff";
		document.getElementById("singlebutton").style.color = "#fff";
		document.getElementById("singlebutton2").style.color = "#fff";
		first_click = true;
    }
	localStorage.setItem('clique', first_click)
  
}
document.getElementsByTagName("button")[0].onclick = clickButton

//button start song


som = true;
clickButton1 = function(){
	if (som){
			var rythm = new Rythm();
			rythm.setMusic("treinaWeb/test.mp3");
			rythm.crossOrigin = "anonymous";
			rythm.start();
			som = false;
	}else{
		rythm.stop();
	}
}
document.getElementsByTagName("button")[1].onclick = clickButton1


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

