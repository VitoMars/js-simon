// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var arrayGenerato = [];

// For per generare 5 numeri casuali
for (let i = 1; i <= 5; i++) {
  let numero = Math.round(Math.random() * 100);
  arrayGenerato.push(numero);
}
console.log(arrayGenerato);
alert(arrayGenerato);

// Non sono 30 secondi perchè sarebbero stati troppi per i test :)
setTimeout(function () {
  var risultato = checkNumeri(arrayGenerato);
  console.log("Hai indovinato: " + risultato + " numeri");
}, 3000);

// setTimeout(checkNumeri, 3000);

// Funzioni
function checkNumeri(array) {
  let arrayUtente = [];
  let numeroUtente = 0;
  let numeriIndovinati = 0;

  for (let i = 1; i <= 5; i++) {
    numeroUtente = parseInt(prompt("Inserisci il " + i + " numero"));
    if (arrayUtente.indexOf(numeroUtente) == -1) {
      arrayUtente.push(numeroUtente);
      if (array.includes(numeroUtente)) {
        numeriIndovinati++;
      }
    }
  }
  // So che non si mettono i console log all'interno delle funzioni.
  // Questo console.log mi serve solo per verificare la correttezza dell'esercizio
  console.log(arrayUtente);
  return numeriIndovinati;
}
