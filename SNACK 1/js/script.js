// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
// Mi serve array vuoto di partenza nel quale metterò i numeri che mi utente
const numbersArray = [];
console.log(numbersArray);
// Chiedo all'utente i 5 numeri
let userNumbers
for (let i = 0; i < 5; i++) {
    userNumbers = parseInt(prompt('Ciao! Dimmi un numero'));
    console.log(userNumbers);
    // Li metto dentro l'array solo se non sono duplicati tra loro
    if (numbersArray.includes(userNumbers) === false) {
        numbersArray.push(userNumbers);
    }
}
// Stampo Array
console.log(numbersArray);