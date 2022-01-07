

let arrayPasswordGenerata = [];//array vuoto in cui pushiamo la password
console.log(arrayPasswordGenerata)
let generaPasswordButton = document.getElementById("generapasswordbutton");
let passwordGenerata = document.getElementById("passwordgenerata");
let lunghezzaPassword = "";
let valueCheckboxLettere = document.getElementById("lettere")
let valueCheckboxSimboli = document.getElementById("simboli")
let valueCheckboxNumeri = document.getElementById("numeri")
let caratteriRipetibili = document.getElementById("ripetibile")
let caratteriNonRipetibili = document.getElementById("nonripetibile")

let array = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","Y","W","X","J","a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j","!","@","#","$","%","^","&","*","(",")","1","2","3","4","5","6","7","8","9","0"]
let array2 = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","Y","W","X","J","a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z","y","w","x","j","1","2","3","4","5","6","7","8","9","0"]



generaPasswordButton.addEventListener('click',function(){
    arrayPasswordGenerata = [];
        lunghezzaPassword = document.getElementById("lunghezza").value
        if((valueCheckboxLettere.checked == true) && (valueCheckboxSimboli.checked == false) && (valueCheckboxNumeri.checked == false)){
            generaPasswordLettere()
            console.log("entra in if Lettere")
        }else if((valueCheckboxSimboli.checked == true) && (valueCheckboxLettere.checked == false) && (valueCheckboxNumeri.checked == false)){
            generaPasswordSimboli()
            console.log("entra in  else if simboli")
        }else if((valueCheckboxNumeri.checked == true)  && (valueCheckboxLettere.checked == false) && (valueCheckboxSimboli.checked == false)) {
            generaPasswordNumeri()
            console.log("entra in  else if numeri")
        }else if((valueCheckboxLettere.checked == true) && (valueCheckboxNumeri.checked == false) && (valueCheckboxSimboli.checked == true)){
            generaPasswordMaiuscSimboli()
            console.log("entra in  else if numeri e simboli")
        }else if((valueCheckboxLettere.checked == true) && (valueCheckboxNumeri.checked == true) && (valueCheckboxSimboli.checked == false)){
            generaPasswordLettereNumeri()
            console.log("entra in  else if lettere e numeri")
        }else if((valueCheckboxLettere.checked == false) && (valueCheckboxNumeri.checked == true) && (valueCheckboxSimboli.checked == true)){
            generaPasswordNumeriSimboli()
            console.log("entra in  else if simboli e numeri")
        }else if((valueCheckboxLettere.checked == true) && (valueCheckboxNumeri.checked == true) && (valueCheckboxSimboli.checked == true)){
            generaPasswordTutto()
            console.log("entra in  else if simboli , numeri , lettere")
        }
        passwordGenerata.innerHTML = arrayPasswordGenerata.join('');
        //console.log(arrayPasswordGenerata)
    
    
})

function generaPasswordTutto(){
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let passwordTuttiCaratteri = array[Math.floor(Math.random()*array.length)];
            arrayPasswordGenerata.push(passwordTuttiCaratteri)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while (arrayPasswordGenerata.length < lunghezzaPassword) {
            let passwordTuttiCaratteri = array[Math.floor(Math.random()*array.length)];
            
            if(!arrayPasswordGenerata.includes(passwordTuttiCaratteri)){
                arrayPasswordGenerata.push(passwordTuttiCaratteri);
            }}
            console.log("non si ripete")
    }
    
}

function generaPasswordLettereNumeri(){
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let lettereMaiuscSimboliRandom = array2[Math.floor(Math.random()*array2.length)];
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){

            let lettereMaiuscSimboliRandom = array2[Math.floor(Math.random()*array2.length)];
        if(!arrayPasswordGenerata.includes(lettereMaiuscSimboliRandom)){
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("non si ripete")
        }}
}}

function generaPasswordNumeriSimboli(){
    const numeriSimboli = array.slice(50,70)
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let randomNumeriSimboli = numeriSimboli[Math.floor(Math.random()*numeriSimboli.length)];
            arrayPasswordGenerata.push(randomNumeriSimboli)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){

            let randomNumeriSimboli = numeriSimboli[Math.floor(Math.random()*numeriSimboli.length)];
        if(!arrayPasswordGenerata.includes(randomNumeriSimboli)){
            arrayPasswordGenerata.push(randomNumeriSimboli)
            console.log("non si ripete")
        }}
}}

function generaPasswordMaiuscSimboli(){
    const lettereSimboliMaiusc = array.slice(0,60)
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let lettereMaiuscSimboliRandom = lettereSimboliMaiusc[Math.floor(Math.random()*lettereSimboliMaiusc.length)];
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){

            let lettereMaiuscSimboliRandom = lettereSimboliMaiusc[Math.floor(Math.random()*lettereSimboliMaiusc.length)];
        if(!arrayPasswordGenerata.includes(lettereMaiuscSimboliRandom)){
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("non si ripete")
        }}
}}


function generaPasswordLettere(){
    const lettereMaiusc = array.slice(0,50)
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let lettereMaiuscSimboliRandom = lettereMaiusc[Math.floor(Math.random()*lettereMaiusc.length)];
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){

            let lettereMaiuscSimboliRandom = lettereMaiusc[Math.floor(Math.random()*lettereMaiusc.length)];
        if(!arrayPasswordGenerata.includes(lettereMaiuscSimboliRandom)){
            arrayPasswordGenerata.push(lettereMaiuscSimboliRandom)
            console.log("non si ripete")
        }}
}}

function generaPasswordSimboli(){
    const simboli = array.slice(50,60)
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let simboliRandom = simboli[Math.floor(Math.random()*simboli.length)];
            arrayPasswordGenerata.push(simboliRandom)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < 10){

            let simboliRandom = simboli[Math.floor(Math.random()*simboli.length)];
        if(!arrayPasswordGenerata.includes(simboliRandom)){
            arrayPasswordGenerata.push(simboliRandom)
            console.log("non si ripete")
        }}
}}

function generaPasswordNumeri(){
    const numeri = array.slice(60,70);
    if(caratteriRipetibili.checked == true){
        while(arrayPasswordGenerata.length < lunghezzaPassword){
            let numeriRandom = numeri[Math.floor(Math.random()*numeri.length)];
            arrayPasswordGenerata.push(numeriRandom)
            console.log("si ripete")
        }
        console.log(arrayPasswordGenerata);
    }else if(caratteriNonRipetibili.checked == true){
        while(arrayPasswordGenerata.length < 10){

            let numeriRandom = numeri[Math.floor(Math.random()*numeri.length)];
        if(!arrayPasswordGenerata.includes(numeriRandom)){
            arrayPasswordGenerata.push(numeriRandom)
            console.log("non si ripete")
        }}
}}

function myFunction() {
    /* Get the text field */
    let copyText = document.getElementById("passwordgenerata");
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerHTML);
    console.log("password copiata");
    alert("hai copiato la password")
    
    /* Alert the copied text */
   /*let myVar = setInterval(myTimer, 1);
    function myTimer() {
    const d = new Date();
    let passwordcopiata = copyText.classList.add("copiata");
}*/
  }


