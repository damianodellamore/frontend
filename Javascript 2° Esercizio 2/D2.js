/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function trovaIlPiuGrande (num1,num2){
  return num1 > num2 ? num1 : num2;
}
let risulato = trovaIlPiuGrande(8,4);
console.log(risulato)
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let notEqual = "not equal";
let numero = prompt("Scrivi qui il tuo numero");
let numeroInt = +numero;
if (numeroInt != 5){
console.log(notEqual)
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let divisibile = "divisibile per 5";
let numero2 = prompt("Scrivi qui il tuo numero");
let numeroInt2 = +numero;
if (numeroInt2 % 5 ===0){
  console.log("divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int1 = parseInt(prompt("scrivi un numero intero"));
let int2 = parseInt(prompt("scrivi un numero intero"));

if (int1 === 8 || int2 === 8){
  console.log(true);
}
else if ((int1 + int2 === 8)||(int2 - int1 === 8 )){
  console.log(true);
}
else{
  console.log(false);
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totaleCarrello= parseFloat(prompt("Saldo Carrello"));

alert("Oggi è il Black Friday, 20% di sconto su tutto");

let costoSpedizione = 10; 
let scontoBlackFriday = totaleCarrello* 0.20;
let totaleConSconto = totaleCarrello - scontoBlackFriday; 

if (totaleConSconto > 50) {
  console.log("Paghi solo la spesa di: " + totaleConSconto + "€ e hai la spedizione gratuita!");
} else {
  let totaleConSpedizione = totaleConSconto + costoSpedizione; 
  console.log("Sconto Black Friday ! paghi: " + totaleConSconto + "€ più la spedizione di: " + costoSpedizione + "€ per un totale di: " + totaleConSpedizione + "€");
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/  


/* SCRIVI QUI LA TUA RISPOSTA */
//FATTO SOPRA

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 7;
let num2 = 15;
let num3 = 22;



if (num1 < num2) {
  [num1, num2] = [num2, num1];
}
if (num1 < num3) {
  [num1, num3] = [num3, num1]; 
}
if (num2 < num3) {
  [num2, num3] = [num3, num2];
}


console.log(num1, num2, num3);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = (prompt("Ti dirò se è un numero"));
if( typeof valore === 'number'){
  function èUnNumero(valore) {

    return typeof valore === 'number';
  }
  console.log(èUnNumero(valore));
}
else if (typeof valore ==='string'){
  console.log("False");
}
else{
 
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroFornito = +(prompt("Scrivi un numero "));

if (numeroFornito % 2 === 0 ){
  console.log("Pari")
}
else {
  console.log("Dispari");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7

  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);
delete me.lastName;
console.log(me);
let array = me.skills;
array.pop();
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrayVuoto = [];
let incremento = 1;

while (arrayVuoto.length < 10) {
  arrayVuoto.push(incremento);
  incremento++;
}
console.log(arrayVuoto);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrayVuoto = [];
let incremento = 1;

while (arrayVuoto.length < 10) {
  arrayVuoto.push(incremento);
  incremento++;
}

arrayVuoto.pop(10);
arrayVuoto.push(100);
console.log(arrayVuoto);