
//ESERCIZIO 1

class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.location = location

    }
    confronto(p){
        if(p > this.age){
            return p.firstName + " è piu grande di " + this.firstName
        }else{
            return p.firstName + " è piu piccolo di " + this.firstName
        }
    }
}
let x = new User("mario","rossi",25,"italy")
let y = new User("luca","rossi",35,"italy")

console.log(y.confronto(x))


//ESERCIZIO 2


class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName,
        this.ownerName = ownerName,
        this.species = species, 
        this.breed = breed
    }
    sameOwner(p){
        if (p.ownerName === this.ownerName)
        {
            return true;
        }else{
            return false;
        }
    }
}

let a = new Pet ("Silver", "Anna", "cane", "Labrador");
let b = new Pet ("Olmo", "Anna", "cane", "Rotwailer");
let c = new Pet ("Boh", "Luca", "cane", "Rotwailer");
console.log(a,b)
console.log(b.sameOwner(a));
console.log(b.sameOwner(c));

let btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let form = document.querySelectorAll('.prova ')
    let petName = form[0].value
    let ownerName = form[1].value
    let species = form[2].value
    let breed = form[3].value
    console.log(petName,ownerName)
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
     li.innerHTML = `<strong>PETNAME:</strong> ${petName} <strong>OWNERNAME:</strong> ${ownerName}  <strong>SPECIES</strong> ${species}  <strong>BREED</strong> ${breed}`
    ul.appendChild(li)
})
