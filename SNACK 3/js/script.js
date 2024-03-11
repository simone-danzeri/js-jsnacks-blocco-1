// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Mi creo array vuoto
const numbersArray = [];
console.log(numbersArray);
// Chiedo 6 numeri a utente
let userNumbers;
for (let i = 0; i < 6; i++) {
    userNumbers = parseInt(prompt('Ciao! Dimmi un numero'));
    console.log(userNumbers);
    // Controllo se è dispari
    if (userNumbers % 2 !== 0) {
        // Lo inserisco in array
        numbersArray.push(userNumbers);
    }
}
// Stampo in console l'array
console.log(numbersArray);