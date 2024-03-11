//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// Chiedo 5 numeri a utente
let userNumbers;
let sum = 0;
for (let i = 0; i < 5; i++) {
    userNumbers = parseInt(prompt('Ciao! Dimmi un numero'));
    console.log(userNumbers);
    // Sommo i 5 numeri tra di loro
    sum = sum + userNumbers;
}
// Stampo la somma in console
console.log(sum);