/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1,l2){
   let area = l1 * l2;
   console.log(area +  " metri quadri.");
}
area(20,40);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum (x,y){
    if (x === y ){
      console.log((x+y)*3);
    }
    else {
       console.log(x+y);
    }
}
crazySum(4,4);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let diciannove = 19;
function crazyDiff (x, diciannove){
    if (x > diciannove ){
console.log((x-diciannove)*3);
    }
    else {
        console.log(x-diciannove);
    }
}
crazyDiff(39, diciannove);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = parseInt(prompt("DIGITA UN NUMERO"));
function boundary (n){
    if (n > 20 && n <= 100 || n === 400){
    console.log("true");
}
else {
    console.log("Boh");
}
}
boundary(77);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "sono una stringa"
function epify (stringa){
    if (stringa.indexOf("EPICODE") === 0){
        console.log(stringa);
    }
    else {
console.log("EPICODE" + " " + stringa)
    }
}
epify(stringa);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = parseInt(prompt("Scrivi un numero , ti dirò se è multiplo di 3 o 7"))
function check3and7 (numero){
if (numero % 3 === 0 || numero % 7 ===0){
    console.log("é un multiplo di 3 o 7 (true)")
}
else {
    console.log("non è multiplo di 3")
}
}
check3and7(numero);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = prompt("Scrivi la stringa, te la reverso.");
function reverseString(frase) {
    
    return frase.split('').reverse().join('');
}

let fraseInvertita = reverseString(frase);
console.log(fraseInvertita); 


reverseString(frase);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
    let parole = string.split(' ');
  
   
    for (let i = 0; i < parole.length; i++) {
      parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }
    let risultato = parole.join(' ');
    return risultato;
  }
  
  let diverseParole = "ciao sono una stringa con diverse parole.";
  let risultato = upperFirst(diverseParole);
  console.log(risultato);
  
   
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let descrizione = "ciao sono una descrizione";
function cutString(descrizione) {
    return descrizione.slice(1, -1);

}
console.log(cutString(descrizione)); 




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arrayContenitore = []; 
    let i = 0;
    while ( i < n) { 
      let randomNumber = Math.floor(Math.random() * 11); 
      arrayContenitore.push(randomNumber);
      i++;
    }
    return arrayContenitore;
  }
  
  let arrayCasuale = giveMeRandom(100)
  console.log(arrayCasuale);