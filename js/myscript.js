

let arrayPasswordGenerata = [];//array vuoto in cui pushiamo la password
console.log(arrayPasswordGenerata)
let generaPasswordButton = document.getElementById("generapasswordbutton");
let passwordGenerata = document.getElementById("passowrdgenerata");
let lunghezzaPassword = "";

let array = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","Y","W","X","J","a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j","!","@","#","$","%","^","&","*","(",")","1","2","3","4","5","6","7","8","9","0"]
//let arrayLettereMinusc = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j"]
//let arraySimboli = ["!","@","#","$","%","^","&","*","(",")"]
//let arrayNumeri = ["1","2","3","4","5","6","7","8","9","0"]


generaPasswordButton.addEventListener('click',function(){
    arrayPasswordGenerata = [];
    lunghezzaPassword = document.getElementById("lunghezza").value
    console.log(lunghezzaPassword)
    generaPassword()
    passwordGenerata.innerHTML = arrayPasswordGenerata.join('');
    console.log(arrayPasswordGenerata)
    
})

function generaPassword(){
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let item = array[Math.floor(Math.random()*array.length)];
        arrayPasswordGenerata.push(item)
    }
    console.log(arrayPasswordGenerata);
}

let valueCheckbox = document.getElementsByClassName("value").value

if(valueCheckbox = "lettere"){
    generaPassword()
}

const LettereMaiusc = array.slice(0,25)
console.log(LettereMaiusc )

const LettereMinusc  = array.slice(25,50)
console.log(LettereMinusc)

const simboli = array.slice(50,60)
console.log(simboli)

const numeri = array.slice(60,70)
console.log(numeri)

