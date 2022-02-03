'use strict';

console.log("Ariel Owen oefening werkt");
let h1Element = document.querySelector('.h1'); 
console.log(h1Element);
h1Element.style.backgroundColor = 'blue';

let ariel = document.querySelector('#Ariel'); 
ariel.style.textDecoration = "underline";

let klasseNaam = 'derderij';

let derderij = document.getElementsByClassName(klasseNaam);
console.log(derderij);

const collection = document.getElementsByClassName("derderij");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}