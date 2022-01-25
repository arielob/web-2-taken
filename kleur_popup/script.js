var color = prompt("give me a color");
var el = document.getElementsByTagName("body")[0];
console.log(el);
el.style.backgroundColor = color;
var bodyColor = prompt("geef me kleur voor de body"); 
var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.backgroundColor = bodyColor;

var h1Color = prompt("geef me kleur voor de body"); 
var h1Element = document.getElementsByTagName("h1")[0];
h1Element.style.color = h1Color;