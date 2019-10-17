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

// modyfikacja listy
/*var x1 = document.querySelector('.example');
x1.style.background="red";
*/
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









