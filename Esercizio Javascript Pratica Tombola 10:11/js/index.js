let tombola = document.querySelector("#tombolaContainer");
let numeriSelezionati = [];
let tabellina = document.querySelector("#tabellina");

let quanteTabelline = +prompt("quante tabelline acquisti?");


function creaTombola() {
  for (let i = 1; i < 77; i++) {
    let celleNumerate = document.createElement("div");
    celleNumerate.innerText = i;
    celleNumerate.id = "cella-" + i;
    tombola.appendChild(celleNumerate);
  }
}
creaTombola();

let buttonRandom = document.querySelector("#buttonRandom");
let buttonRandom2 = document.querySelector("#buttonRandom2");
buttonRandom.addEventListener("click", () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 76);
  } while (numeriSelezionati.includes(randomNumber));

  let cellaSelezionata = document.querySelector("#cella-" + randomNumber);
  if (cellaSelezionata) {
    cellaSelezionata.style.backgroundColor = "yellow";
    numeriSelezionati.push(randomNumber);
  }

  do {
    randomNumber = Math.floor(Math.random() * 76) + 1;
  } while (numeriSelezionati.includes(randomNumber));

  numeriSelezionati.push(randomNumber);

  for (let i = 0; i < quanteTabelline; i++) {
    let cellaSelezionata = document.querySelector("#tabellina" + i + "Cella-" + randomNumber);
    if (cellaSelezionata) {
      cellaSelezionata.style.backgroundColor = "orange";
    }
  }
});

//console.log(numeriSelezionati)
function creaTabellina(tabellinaIndex) {
  for (let i = 1; i < 25; i++) {
    let celleNumerate = document.createElement("div");
    celleNumerate.innerText = i;
    celleNumerate.id = "tabellina" + tabellinaIndex + "Cella-" + i; 
    tabellina.appendChild(celleNumerate);
  }
}

for (let i = 0; i < quanteTabelline; i++) {
  creaTabellina(i); 
}

buttonRandom2.addEventListener("click", () => {
  
});
