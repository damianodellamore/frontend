

let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('#input')

btn.addEventListener('click',()=>{
    let contenutoInput = input.value;
    if (contenutoInput.trim() !=="" ){
        let li = document.createElement('li')
        li.innerText = contenutoInput
        ul.appendChild(li)
        input.value = ''

        let cancellaLista = document.createElement('button');
        cancellaLista.innerText = '🗑️'
        cancellaLista.style.marginLeft = '10px';
        li.appendChild(cancellaLista)

        cancellaLista.addEventListener('click',()=>{
            ul.removeChild(li);
        })
    }


});


ul.addEventListener('click', (evento)=> {
    if (evento.target.tagName === 'LI') {
        evento.target.style.textDecoration = 'line-through';
    }
})

