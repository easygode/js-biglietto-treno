'use strict'

var prezzoDiscount;

function myFunctionPriceGen() {

//1. imposta variabile costoKM 0.21
let costoKM = 0.21;
console.log(costoKM);

//2. imposta variabile numeroKM con prompt (quanti chilometri vuoi percorrere?) e tipo output numero
let numeroKM = parseInt(prompt('Quanti chilometri vuoi percorrere?', 'es. 10'));
console.log(numeroKM);

//3. imposta variabile etaUtente (quanti anni hai? con prompt e tipo output numero
let etaUtente = parseInt(prompt('Quanti anni hai?', 'es. 20'));
console.log(etaUtente);

//4. calcola prezzo (numeroKM * costoKM)
let prezzoIntero = (numeroKM * costoKM);
console.log(prezzoIntero);


/*5. SE etaUtente ≤ 18 mostra prezzo - 20% in forma umana 
   altrimenti SE etaUtente ≥ 65 mostra prezzo - 40% in forma umana
   altrimenti mostra prezzo in forma umana*/
if (etaUtente < 18) {
  prezzoScontato = prezzo - 20, 'hai diritto ad uno sconto del 20%';
} else if (etaUtente >= 65) {
    prezzoScontato = prezzo - 40, 'hai diritto ad uno sconto del 40%';
} else 'prezzo pieno'

//6. scrittura del prezzo nel file HTML
document.getElementById("prezzofinale").innerHTML =
`Il tuo biglietto costa: ${prezzoIntero} €`;
//7. step: stampa nella console del prezzo
console.log (prezzoIntero);

}
