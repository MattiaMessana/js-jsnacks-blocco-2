// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

//chiediamo due parole all'utente
const userWord1 = prompt('Dimmi una parola');
console.log(userWord1);

const userWord2 = prompt("Dimmene un'altra");
console.log(userWord2);

//esecuzione

if (userWord2.length > userWord1.length) {
    console.log(userWord2);
    
} else if (userWord1.length > userWord2.length) {
    console.log(userWord1);
    
} else if (wordLength(userWord1, userWord2)) {
    console.log(userWord1, userWord2);
}