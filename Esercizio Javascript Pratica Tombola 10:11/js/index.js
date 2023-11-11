let tombola = document.querySelector("#tombolaContainer");
let numeriSelezionati = [];
let tabellina = document.querySelector("#tabellina");

let quanteTabelline = +prompt("Quante tabelline acquisti?");

function creaTombola() {
  for (let i = 1; i <= 76; i++) {
    let celleNumerate = document.createElement("div");
    celleNumerate.innerText = i;
    celleNumerate.id = "cella-" + i;
    tombola.appendChild(celleNumerate);
  }
}
creaTombola();

function generaNumeriUnici() {
  let numeri = new Set();
  while (numeri.size < 24) {
    numeri.add(Math.floor(Math.random() * 76) + 1);
  }
  return [...numeri];
}

function creaTabellina(tabellinaIndex) {
  let numeriTabellina = generaNumeriUnici();
  numeriTabellina.forEach(numero => {
    let celleNumerate = document.createElement("div");
    celleNumerate.innerText = numero;
    celleNumerate.id = "tabellina" + tabellinaIndex + "Cella-" + numero;
    tabellina.appendChild(celleNumerate);
  });
}

for (let i = 0; i < quanteTabelline; i++) {
  creaTabellina(i);
}

let buttonRandom = document.querySelector("#buttonRandom");
buttonRandom.addEventListener("click", () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 76) + 1;
  } while (numeriSelezionati.includes(randomNumber));
  numeriSelezionati.push(randomNumber);

  document.querySelectorAll("[id^='cella-']").forEach(cella => {
    if (parseInt(cella.innerText) === randomNumber) {
      cella.style.backgroundColor = "yellow";
    }
  });

  for (let i = 0; i < quanteTabelline; i++) {
    let cellaSelezionata = document.querySelector("#tabellina" + i + "Cella-" + randomNumber);
    if (cellaSelezionata) {
      cellaSelezionata.style.backgroundColor = "orange";
    }
  }
});
