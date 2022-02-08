//Alert gaat een popup tonen met een bericht
//Hier zal het bericht de som zijn van 12+13
let getal1 = prompt('geef het eerste getal') ;
// Hier typt de gebruiker het cijfer dat hij wilt
let getal2 = prompt('geef het tweede getal') ;
//getal1 en getal2 zijn string geworden
//let som = (getal1*1) + (getal2*2) ; // de som van de getallen boven
console.log
//alert(som);
//we moeten getal1 en getal2 vergelijken
let isGetal1kleinerdanGetal2 = getal1 < getal2; //Dit geeftals resultaat true or false
if(isGetal1kleinerdanGetal2) {
    alert('Getal 1 is kleiner dan getal 2');
} else{
    // dit voeren we uit indien fout
    alert('Getal 1 is groter dan getal 2');
}
