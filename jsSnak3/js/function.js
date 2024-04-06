/**
 * Description
 * @param {any} arrey
 * @returns {string} stampa elementi della lista
 */
function stampa(arrey) {
    for (let i = 0 ; i < arrey.length ; i++){ 
        document.getElementById("lista").innerHTML = ` <li>${arrey}</li> `
    };
};