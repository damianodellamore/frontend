let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('#input');
let valoriSalvati = JSON.parse(localStorage.getItem('salva')) || [];

function aggiungiElementoLista(valore) {
    let li = document.createElement('li');
    li.innerText = valore;
    ul.appendChild(li);

    let cancellaLista = document.createElement('button');
    cancellaLista.innerText = '🗑️';
    cancellaLista.style.marginLeft = '10px';
    li.appendChild(cancellaLista);

    cancellaLista.addEventListener('click', () => {
        ul.removeChild(li);
        valoriSalvati = valoriSalvati.filter(item => item !== valore);
        localStorage.setItem('salva', JSON.stringify(valoriSalvati));
    });
}


valoriSalvati.forEach(valore => aggiungiElementoLista(valore));

btn.addEventListener('click', () => {
    let contenutoInput = input.value;
    if (contenutoInput.trim() !== "") {
        aggiungiElementoLista(contenutoInput);
        valoriSalvati.push(contenutoInput);
        localStorage.setItem('salva', JSON.stringify(valoriSalvati));
        input.value = '';
    }
});

ul.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'LI') {
        evento.target.style.textDecoration = 'line-through';
    }
});
