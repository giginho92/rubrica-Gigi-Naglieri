 // ELEMENTI HTML CATTURATI
 let wrapper = document.querySelector("#wrapper");
 let btnshow = document.querySelector("#showcontact");
 let btnadd = document.querySelector("#addcontact");
 let inputname = document.querySelector("#inputName");
 let inputnumber = document.querySelector("#inputNumber")

 
 // INIZIO OGGETTO (oggetto rubrica con all'interno oggetto listacontatti, nella quale c'è un array di oggetti)
 let rubrica = { 
    listacontatti : [  //LISTA CONTATTI CHIAVE; IL SUO VALORE è UN ARRAY DI OGGETTI, E OGNUNO DI QUESTI OGGETTI POSSIEDE UNA CHIAVE : VALORE
    {nome : "Marco", numero : "34588909"},
    {nome : "Raffaele", numero : "11188909"},
    {nome : "Jacopo", numero : "34333909"},
    {nome : "Luca", numero : "34555509"}
],  

aggiungicontatto: function (nuovonome, nuovonumero) {
    if (nuovonome && nuovonumero) {
        this.listacontatti.push({
            nome : nuovonome, numero : nuovonumero
        })
        rubrica.mostracontatti()
        btnshowchecked = true
    }else{
        alert ("I campi inseriti non sono corretti")
        btnshow.innerHTML = "MOSTRA CONTATTI"
        btnshowchecked = false
    }
},






// Abbiamo dato un metodo (funzione) al nostro oggetto: le sue istruzioni sono di ciclare tutti gli elementi dell'array di oggetti (gli elementi sono gli oggetti stessi {}) e di creare un div (card) ad ogni ciclo, per ogni contatto
mostracontatti: function () {
    wrapper.innerHTML = ""
    this.listacontatti.forEach((contatto) => {
        let divrow = document.createElement("div");
        divrow.classList.add("row", "justify-content-center", "text-center")
        divrow.innerHTML = `
        <div class="col-12">
        <h5>${contatto.nome}</h5>
        </div><div class="col-12">
        <h5>${contatto.numero}</h5>
        </div>
        <div class="col-12">
        <svg id="icona" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </div>
        `
        wrapper.appendChild(divrow)
    })
    let icone = document.querySelectorAll("#icona") //Si crea una nodelist (arraylike), l'unico metodo accettato è il forEach
    icone.forEach((icona, i) =>{
        icona.addEventListener("click", () =>{
            rubrica.listacontatti.splice(i, 1)
            rubrica.mostracontatti()
        })
    })
}
}
// FINE OGGETTO (Scope locale dell'oggetto rubrica)

// DICHIARAZIONE EVENTI
let btnshowchecked = false; //variabile checked specifica per l'evento "showcontact"

btnshow.addEventListener("click", () => {
    if (btnshowchecked == false) {
        rubrica.mostracontatti()
        btnshow.innerHTML = "NASCONDI CONTATTI"
        btnshowchecked = true;
    }else{
        wrapper.innerHTML = ""
        btnshow.innerHTML = "MOSTRA CONTATTI"
        btnshowchecked = false

    }
})

btnadd.addEventListener("click", () =>{
    if (btnshowchecked == false) {
        btnshow.innerHTML = "NASCONDI CONTATTI"
        btnshowchecked = true
    }
    rubrica.aggiungicontatto(inputname.value, inputnumber.value)
    inputname.value = "";
    inputnumber.value = ""
} )

