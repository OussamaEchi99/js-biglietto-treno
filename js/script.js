// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Chiedere il numero di km e l'età
const userKm = parseInt(prompt('Quanti km vuoi percorere?'));
console.log(userKm);
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// Calcoli
const userStardardPrice = userKm * 0.21;
console.log(userStardardPrice);

// Applicare lo sconto
let userDiscount;
if( userAge <= 18 ) {
    userDiscount = ((userStardardPrice * 20) / 100);
} else if ( userAge >= 65 ) {
    userDiscount = ((userStardardPrice * 40) / 100);
} else {
    userDiscount = userStardardPrice * 0;
}
console.log(userDiscount);

let userDiscountedPrice = userStardardPrice - userDiscount;
console.log(userDiscountedPrice);

// Message
const userMessage = `Il prezzo Totale è ${userDiscountedPrice.toFixed(2)} euro.`

// Output
document.getElementById('user-message').innerHTML = userMessage;