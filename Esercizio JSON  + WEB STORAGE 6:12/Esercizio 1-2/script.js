
//ESERCIZIO 1


let btnSalvaInput = document.querySelector('.btn-warning');
let btnResetta = document.querySelector('.btn-danger');

btnSalvaInput.addEventListener('click', ()=>{
    let salvato = (document.querySelector('.form-control').value).toString();
    localStorage.setItem("valore salvato", salvato)
})
btnResetta.addEventListener('click', ()=>{
    localStorage.clear()
})


//ESERCIZIO 2

function inizializzaContatore() {
   
    let tempo = sessionStorage.getItem('tempo') ? parseInt(sessionStorage.getItem('tempo')) : 0;

    setInterval(() => {
        tempo++;
        sessionStorage.setItem('tempo', tempo);
        document.getElementById('contatore').innerText = tempo;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', inizializzaContatore);
