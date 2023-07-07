/* Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

// Creo un array vuoto.
const emptyArray = [];
let sum = 0;

// Chiedo all'utente un numero da inserire nell'array finquando la somma è minore di 50.
while (sum < 50) {
    for (i = 0; i < emptyArray.length; i++) {
        const currentNumber = emptyArray[i];
        console.log(currentNumber)
        sum += parseInt(currentNumber)
        console.log(sum)
    }
    const numberToAsk = prompt("Inserisci un numero")
    emptyArray.push(numberToAsk)
}

console.log(emptyArray)













