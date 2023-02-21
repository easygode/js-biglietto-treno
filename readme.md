https://github.com/easygode/js-biglietto-treno

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca!
Ricordate: il primo push dovrà essere un file README.md (potete scrivere testo senza concentrarvi sullo stile markdown) contenente la risoluzione dell’esercizio in linguaggio naturale!

1. imposta variabile costoKM 0.21
2. imposta variabile numeroKM con prompt (quanti chilometri vuoi percorrere?) e tipo output numero
3. imposta variabile etaUtente (quanti anni hai? con prompt e tipo output numero
4. calcola prezzo (numeroKM * costoKM)
5. definizione variabili con sconto
   prezzoScontato1 sconto del 20% per under 18
   prezzoScontato2 sconto del 40% per over 65
6. SE etaUtente ≤ 18 mostra prezzo - 20% in forma umana 
   altrimenti SE etaUtente ≥ 65 mostra prezzo - 40% in forma umana
   altrimenti mostra prezzo in forma umana