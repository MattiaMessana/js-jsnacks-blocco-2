// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, 
// restituisca la posizione in cui si trova l'elemento all'interno dell'array; 
// se l'elemento non è presente nell'array, allora la funzione deve restituire -1

//  creiamo lista degli arrey
const listClass = ['pippo', 'pluto', 'topolino','paperino'];
console.log(listClass);
// tramite prompt chiediamo un elemento della lista 
const listElem = prompt('dimmi un nome della litsa');


console.log(trovaIndice(listClass,listElem));