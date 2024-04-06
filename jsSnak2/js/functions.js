/**
 * Description
 * @param {} arrey
 * @param {} elem 
 * @returns {i} se è all'interno restituisce la posizione altrimenti restituisce -1
 */
function trovaIndice(arrey, elem) {
    for (let i = 0; i < arrey.length; i++) {
        if (elem === arrey[i]) {
            return i
        }
    }
    return -1 ;
}