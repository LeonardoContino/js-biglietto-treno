// console.log("ok js");

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
     per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Consigli:
Fate la scaletta degli step e commentate man mano che scrivete il codice
Usate i console.log per verificare che tutto sia a posto
Disattivate live server: può darvi problemi coi prompt.

*/

// scaletta

/*
1.prendere dall' html l'elemento
2.chiedere all'utente il numero di chilometri che vuole fare
3.chiedere all'utente la sua età
4.calcolare il prezzo del biglietto
5.applicare sconto minorenni e over 65
6.modificare il prezzo finale a 2 decimali

*/

const target = document.getElementById("target");
console.log(target);
