var z =document.getElementById("hello");
console.log("z = ",z);
z.innerHTML="Hello, Master";


//CreateElement do listy

var node = document.createElement("li");
var text = document.createTextNode("Fiat");
node.appendChild(text);
document.getElementById('mojaLista').appendChild(node);


//Modyfikacja progressBar

var x=document.getElementsByClassName('progress-bar');
console.log(x);
var width= 33;
x[0].style.width =width +"%";

//Modyfikacja listy

var x2 = document.querySelectorAll('.example');
for(i=0 ; i < x2.length ; i++){
	x2[i].style.background = "blue"
}

// modyfikacja popUpa

var x3=document.getElementsByClassName('alert-info')
x3[0].innerText="Uwaga komunikat został zmieniony!" ;

// modyfikacja buttona w petli z warunkiem

var x5 = document.getElementsByClassName('btn-secondary');
for(i=0 ; i < x5.length ; i++){
	if(i!=1){x5[i].style.background="red";}
	x5[i].innerText= "To jest Button numer: "+i;
}

//Usunięcie objektu 

var myobj = document.getElementById('card-link1');
myobj.remove();

//Zmiana koloru 

document.getElementById("multiCollapseExample1").style.color = "red";
document.getElementById("multiCollapseExample2").style.color = "blue";

//Naprawa fokusu

function getFocus() {
  document.getElementById("fokus").focus();
}

//Utrata fokusu 

function loseFocus() {
  document.getElementById("myText").blur();
}

//dodanie elementu
	function funkcja(){
  var h = document.getElementById("dodanieTextu");
  h.insertAdjacentText("afterend", "Dodany tekst");
	}

// getElementsByTagName()

var p = document.getElementsByTagName("LI")[1].style.backgroundColor = "red";

//liczenie ilosci obrazkow

  var xz = document.images.length;
  document.getElementById("demo").innerHTML = xz;
  
// zmiana wielkości tekstu

document.getElementById("demo").style.fontSize="3cm";

//zmiana na tytul

var xf = document.title;
document.getElementById("nowy").innerHTML=xf;

//utworzenie komentarza

var c = document.createComment("Komentarz");
document.body.appendChild(c);

//zmiana liter na male

var l=document.getElementById("allSmall").innerText.toLowerCase();
document.getElementById("allSmall").innerText=l;

//zmiana tekstu przez replace

var hhhh = document.getElementById("replce").innerHTML.replace("Bardzo", "Nie");
  document.getElementById("replce").innerHTML = hhhh;

//slice

var w = document.getElementById("slice").innerHTML.slice(0,6); 
document.getElementById("slice").innerHTML=w;

//insertAdjacentElement

var h = document.getElementById("nowyParagraf");
h.insertAdjacentHTML("afterend", "<p>Oto nowy paragraf</p>");


