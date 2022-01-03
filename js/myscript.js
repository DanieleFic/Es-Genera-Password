

let arrayPasswordGenerata = [];//array vuoto in cui pushiamo la password
console.log(arrayPasswordGenerata)
let generaPasswordButton = document.getElementById("generapasswordbutton");
let passwordGenerata = document.getElementById("passowrdgenerata");
let lunghezzaPassword = "";
let valueCheckboxLettere = document.getElementById("lettere")
let valueCheckboxSimboli = document.getElementById("simboli")
let valueCheckboxNumeri = document.getElementById("numeri")

let array = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","Y","W","X","J","a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j","!","@","#","$","%","^","&","*","(",")","1","2","3","4","5","6","7","8","9","0"]
let array2 = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","Y","W","X","J","a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j","1","2","3","4","5","6","7","8","9","0"]
//let arrayLettereMinusc = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j"]
//let arraySimboli = ["!","@","#","$","%","^","&","*","(",")"]
//let arrayNumeri = ["1","2","3","4","5","6","7","8","9","0"]
const prova = array.slice(-10, -50);
console.log(prova);

generaPasswordButton.addEventListener('click',function(){
    arrayPasswordGenerata = [];
    lunghezzaPassword = document.getElementById("lunghezza").value
    //console.log(lunghezzaPassword)
    if((valueCheckboxLettere.checked == true) && (valueCheckboxSimboli.checked == false) && (valueCheckboxNumeri.checked == false)){
        generaPasswordMaiusc()
        console.log("entra in if Lettere")
    }else if((valueCheckboxSimboli.checked == true) && (valueCheckboxLettere.checked == false) && (valueCheckboxNumeri.checked == false)){
        generaPasswordSimboli()
        console.log
        console.log("entra in  else if simboli")
    }else if((valueCheckboxNumeri.checked == true)  && (valueCheckboxLettere.checked == false) && (valueCheckboxSimboli.checked == false)) {
        generaPasswordNumeri()
        console.log
        console.log("entra in  else if numeri")
    }else if((valueCheckboxLettere.checked == true) && (valueCheckboxNumeri.checked == false) && (valueCheckboxSimboli.checked == true)){
        generaPasswordMaiuscSimboli()
        console.log
        console.log("entra in  else if numeri e simboli")
    }else if((valueCheckboxLettere.checked == true) && (valueCheckboxNumeri.checked == true) && (valueCheckboxSimboli.checked == false)){
        generaPasswordMaiuscNumeri()
        
        console.log("entra in  else if lettere e numeri")
    }else if((valueCheckboxLettere.checked == false) && (valueCheckboxNumeri.checked == true) && (valueCheckboxSimboli.checked == true)){
        generaPasswordNumeriSimboli()
        
        console.log("entra in  else if simboli e numeri")
    }
    passwordGenerata.innerHTML = arrayPasswordGenerata.join('');
    //console.log(arrayPasswordGenerata)
    
})

function generaPasswordMaiuscNumeri(){
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let lettereMaiuscSimboliRandom = array2[Math.floor(Math.random()*array2.length)];
        arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
    }
    console.log(arrayPasswordGenerata);
}

function generaPasswordNumeriSimboli(){
    const numeriSimboli = array.slice(50,70)
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let numeriRandom = numeriSimboli[Math.floor(Math.random()*numeriSimboli.length)];
        arrayPasswordGenerata.push(numeriRandom)
    }
    console.log(arrayPasswordGenerata);
}

function generaPasswordMaiuscSimboli(){
    const lettereSimboliMaiusc = array.slice(0,60)
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let lettereMaiuscSimboliRandom = lettereSimboliMaiusc[Math.floor(Math.random()*lettereSimboliMaiusc.length)];
        arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
    }
    console.log(arrayPasswordGenerata);
}

function generaPasswordMaiusc(){
    const lettereMaiusc = array.slice(0,50)
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let lettereMaiuscRandom = lettereMaiusc[Math.floor(Math.random()*lettereMaiusc.length)];
        arrayPasswordGenerata.push(lettereMaiuscRandom)
    }
    console.log(arrayPasswordGenerata);
}

function generaPasswordSimboli(){
    const simboli = array.slice(50,60)
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let simboliRandom = simboli[Math.floor(Math.random()*simboli.length)];
        arrayPasswordGenerata.push(simboliRandom)
    }
    console.log(arrayPasswordGenerata);
}

function generaPasswordNumeri(){
    const numeri = array.slice(60,70)
    while(arrayPasswordGenerata.length < lunghezzaPassword){
        let numeriRandom = numeri[Math.floor(Math.random()*numeri.length)];
        arrayPasswordGenerata.push(numeriRandom)
    }
    console.log(arrayPasswordGenerata);
}





