//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// Chiedo 5 numeri a utente
let userNumbers
for (let i = 0; i < 5; i++) {
    userNumbers = parseInt(prompt('Ciao! Dimmi un numero'));
    console.log(userNumbers);
}