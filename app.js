// function -> dahij ashiglah blomjtoi kodnii tsugluulga
// define/vvsgeh -> funcName(){}
// call/ajluulah -> funcName();
// argument/parametr -> function-iin avah utga
function hello(name,age){
	console.log("Hello my name is "+ name+".")
	console.log("How are you?. Im " + age + "years old");
}
hello("Samdan",16);
hello("Bat",26);

function niilber(too1,too2){
	console.log(too1+too2);
}
niilber(5,50);
niilber(56,199);

function kb(too1){
	console.log(too1*too1);
}
kb(6560)
kb(61)

function nas(nas){
	if(nas>17){
	console.log("Nasand hursen")
	}else {
		console.log("Nasand hureeq")
	}
}
nas(12)
nas(56)

function too(too1){
	if(too1>=100){
		console.log(too1*10)
	}else {
		console.log(too1+10)
	}
}
too(110)
too(10)

// DOM => document : html deer bga bvh kod
console.log(document);

var h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
// varName.style.styleName = "value/utga"
h1.style.color = "yellow";
// varName.innerText = "dotor text-iig uurchlunu";
h1.innerText = "Sain uu"
var h1_2 = document.getElementsByTagName("h1")[1];
function changeColor(){
	h1_2.style.color="green";
	h1_2.innerText = "Changed";
}

var h2_2 = document.getElementsByTagName("h2")[0];
function change(){
	h2_2.style.color="red";
	h2_2.innerText = "MM";
}
// 2024 - input.value-> input deer bichsen utga
var input = document.getElementsByTagName("input")[0];
var p = document.getElementsByTagName("p")[0];
function birthYear(){
	if(input.value==""){
		alert("Cannot be empty");
	}else if (input.value>=130){
		p.style.color="red";
		p.innerText ="Hun iim naslahgui ";
	}else if (input.value<0){
		p.style.color="yellow";
		p.innerText ="Ta turuugui bn ";
	}else{
	var year = 2024 - input.value;
	p.innerText ="Your birth year : " + year + ". Ta 10 jiliin daraa" + (parseInt(input.value) + 10);
	}
}

