'use strict'

//1. imposta variabile costoKM 0.21
const costoKM = 0.21;
console.log (costoKM);

//2. imposta variabile numeroKM con prompt (quanti chilometri vuoi percorrere?) e tipo output numero
let numeroKM = prompt('Quanti chilometri vuoi percorrere?');

//3. imposta variabile etaUtente (quanti anni hai? con prompt e tipo output numero
let etaUtente = prompt('Quanti anni hai?');

//4. calcola prezzo (numeroKM * costoKM)
let prezzo = (numeroKM * costoKM);


/*5. SE etaUtente ≤ 18 mostra prezzo - 20% in forma umana 
   altrimenti SE etaUtente ≥ 65 mostra prezzo - 40% in forma umana
   altrimenti mostra prezzo in forma umana*/

