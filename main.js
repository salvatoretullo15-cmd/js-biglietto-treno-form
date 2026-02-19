/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere,Età del passeggero,
Sulla base di queste informazioni dovrà calcolare il prezzo 
totale del biglietto di viaggio,secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.
*/ 
//selezione dei nodi del dom//
console.log("it work");
const nameField=document.getElementById("passenger-name")
const ageRangeField=document.getElementById("age-range")
const kmField=document.getElementById("km")
const buttonEl=document.querySelector("button")
console.log(nameField , ageRangeField , kmField , buttonEl);

//selezione dei nodi del dom della section//
const name=document.getElementById("name")
const offer=document.getElementById("offer")
const wagonNumb=document.getElementById("wagon-number")
const cpCode=document.getElementById("cp-code")
const ticket=document.getElementById("ticket-price")
console.log(name,offer,wagonNumb,cpCode,ticket)
//MILESTONE 1: 
/*
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale 
(o output) sarà anch’essa da scrivere in console. 
*/
//inizio della logica//
buttonEl.addEventListener("click",function () 
{
    const nameValue=nameField.value;
    const kmValue=Number(kmField.value);
    const ageRangeValue=ageRangeField.value;
    console.log(nameValue,kmValue,ageRangeValue);
    /*Sulla base di queste informazioni dovrà calcolare il prezzo 
    totale del biglietto di viaggio,secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km),
    va applicato uno sconto del 20% per i minorenni,
    va applicato uno sconto del 40% per gli over 65.*/
    let ticketPrice=kmValue * 0.21
    let offerName="standard ticket"
    console.log(ticketPrice);
    if (ageRangeValue === "minor") {
        //sconto del 20% per i minorenni
        const discount=ticketPrice * 0.2
        offerName = "prezzo biglietto per minorenni"
        console.log(discount);
        ticketPrice -= discount
        
    } else if(ageRangeValue === "senior"){
        //sconto del 40% per gli over 65
        const discount=ticketPrice * 0.4
        offerName = "prezzo biglietto per anziani"
        console.log(discount);
        ticketPrice -= discount

    }
    /*
    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante 
    allora realizzeremo un form in pagina in cui l’utente potrà 
    inserire i dati e visualizzare il calcolo finale con il prezzo. 
    Il recap dei dati e l'output del prezzo finale, andranno quindi 
    stampati in pagina (il prezzo dovrà essere formattato con massimo 
    due decimali, per indicare i centesimi sul prezzo). 
    Questo richiederà un minimo di ricerca.
    */
    //output
    console.log(ticketPrice,offerName);
    name.innerHTML=nameValue
    offer.innerHTML=offerName
    ticket.innerHTML=ticketPrice.toFixed(2)

})