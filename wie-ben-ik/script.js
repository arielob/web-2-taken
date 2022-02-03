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

for (let element of derderij) {
    console.log(element);
    element.style.backgroundColor = 'purple';
}