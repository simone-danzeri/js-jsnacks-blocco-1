// Calcola la somma e la media dei primi 10 numeri.

let sum = 0;
let mean;
// Prendo i primi 10 numeri
for (let i = 1; i < 11 ; i++) {
    console.log(i);
    // Per ogni ciclo devo sommare i a se stessa
    sum = sum + i;
    // Calcolo la media
    mean = sum / i;
}
// Stampo somma e media in console
console.log(sum);
console.log(mean);