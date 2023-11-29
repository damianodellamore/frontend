


let viaggi = document.querySelectorAll('.card')
let numeroViaggi = viaggi.length;
let buttonAlert = document.querySelector('#alert')
buttonAlert.addEventListener('click', ()=>{
    alert('Il numero totale di viaggi nella pagina è :' +numeroViaggi)
})



let button = document.querySelector('#rimuovi');
button.addEventListener('click', ()=>{
    viaggi.forEach(function(card){
        card.remove();
    })
})

function aggiungiBadgeHot() {
 
    var offerte = document.querySelectorAll('.card');

 
    offerte.forEach(function(offerta) {
       
        var badge = document.createElement('span');
        badge.classList.add('badge-hot');
        badge.textContent = 'HOT';

        
        offerta.style.position = 'relative'; 
        offerta.appendChild(badge);
    });
}

aggiungiBadgeHot();
