/**
 * Description
 * @param {Array} arrayA
 * @returns {Array} un nuvo array senza l'ultimo elemento del primo arrey 
 */

function rimuoviDallaCoda(arrayA) {
    for (let i = 0; i < arrayA.length - 1 ; i++) {
         const arrayB = [arrayA[[arrayA.length - 1]] ] ;
         const arrayC = arrayA - arrayB
        return console.log(arrayC);
    }   
};