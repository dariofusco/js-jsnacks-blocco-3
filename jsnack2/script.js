/* Snack 2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */

// Creo un array vuoto.
const numbersArray = []

// Genero numeri casuali da inserire nell'array
for (i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 50);
    numbersArray.push(randomNumber);
}
// Seleziono i numeri pari e dispari e li stampo nei div creati in html
for (i = 0; i < numbersArray.length; i++) {
    const numberArray = numbersArray[i]
    console.log(numberArray)
    if (numberArray % 2 == 0) {
        console.log("il numero è pari")
        document.getElementById("text-green").innerHTML += `<div>${numberArray}<div>`
        document.getElementById("text-green").className = "text-success"
    } else {
        console.log("il numero è dispari")
        document.getElementById("text-red").innerHTML += `<div>${numberArray}<div>`
        document.getElementById("text-red").className = "text-danger"
    }
}

console.log(numbersArray)






