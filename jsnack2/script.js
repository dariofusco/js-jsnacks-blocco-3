/* Snack 2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */

const numbersArray = []


for (i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 50);
    numbersArray.push(randomNumber);
}

for (i = 0; i < numbersArray.length; i++) {
    const numberArray = numbersArray[i]
    console.log(numberArray)
    if (numberArray % 2 == 0) {
        console.log("il numero è pari")
        document.getElementById("text-green").innerHTML += numberArray
        document.getElementById("text-green").className = "text-success"
    } else {
        console.log("il numero è dispari")
        document.getElementById("text-red").innerHTML += numberArray
        document.getElementById("text-red").className = "text-danger"
    }
}

console.log(numbersArray)






