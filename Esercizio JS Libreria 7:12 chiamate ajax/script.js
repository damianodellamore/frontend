let arrayDiOggetti;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let json = xhr.responseText;
        arrayDiOggetti = JSON.parse(json);
        console.log(arrayDiOggetti);

        // Verifichiamo se il DOM è già stato caricato
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', creaCards);
        } else {
            creaCards();
        }
    }
};

function creaCards() {
 
    const container = document.getElementById('cards-container');


    container.innerHTML = '';

    for (let i = 0; i < arrayDiOggetti.length ; i++) {
        const oggetto = arrayDiOggetti[i];
        
       
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-4 col-sm-6 mb-4'; 

        const cardContent = `
            <div class="card h-100">
                <img src="${oggetto.img}" class="card-img-top" alt="Immagine del libro">
                <div class="card-body">
                    <h5 class="card-title">${oggetto.title}</h5>
                    <p class="card-text">${oggetto.price}€</p>
                    <a href="#" class="btn btn-danger btn-scarta">Scarta</a>
                    <a href="#" class="btn btn-success btn-compra data-id="${i}">Compra Ora</a>
                </div>
            </div>
        `;

       
        cardElement.innerHTML = cardContent;

   
        container.appendChild(cardElement);

        cardElement.querySelector('.btn-scarta').addEventListener('click', function(e) {
            e.preventDefault();
            cardElement.remove();
            
        });
        cardElement.querySelector('.btn-compra').addEventListener('click', function(e) {
            e.preventDefault();
            aggiungiAlCarrello(i);
        })
    }
}

let carrello = [];

function aggiungiAlCarrello(id) {
    carrello.push(arrayDiOggetti[id]);
    aggiornaCarrello();
    salvaCarrello();
}

function aggiornaCarrello() {
    const listaCarrello = document.getElementById('lista-carrello');
    listaCarrello.innerHTML = '';

    carrello.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.title} - ${item.price}€`;
        li.className = 'list-unstyled'

        // BTN per rimuovere l'elemento dal carrello
        let btnRimuovi = document.createElement('button');
        btnRimuovi.textContent = '🗑️';
        btnRimuovi.className = 'rounded border border-light ms-4'
        btnRimuovi.addEventListener('click', function() {
            rimuoviDalCarrello(index);
        });

        li.appendChild(btnRimuovi);
        listaCarrello.appendChild(li);
    });
}

function rimuoviDalCarrello(index) {
    // Rimuove l'elemento dall'array del carrello
    carrello.splice(index, 1);

    // Aggiorna il carrello e salva nel local storage ciò che ho modificato
    aggiornaCarrello();
    salvaCarrello();
}
