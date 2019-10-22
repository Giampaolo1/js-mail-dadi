// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

// chiedo la mail (prompt)

// creo una lista di 3 Mail

// creo un calcolo che in base all imput restituisce un Output
// se la mail match the 3 ok, sei invitato, altrimenti sei out

var lista = ["luca@boolean", "marco@boolean", "mario@boolean"];
console.log(lista);

var askmail = prompt("inserisci la tua mail per accedere alla festa, ricorda di scrivere: (tuonome@boolean)");

var trovato = false;
console.log(trovato,"prima di for");

// ciclo che non capiro' mai
for(var index = 0; index < lista.length; index++) {
  console.log(lista[index]);
  if(askmail == lista[index]) {
    trovato=true;
    console.log("Nome trovato", index, trovato);
  }
}

console.log(trovato, "dopo for");

// seleziono elemento html in cui fare output

if (trovato == true) {
  console.log("sei nella lista");

  var htmlElement = document.getElementById("output");
  htmlElement.innerHTML = "Sei Invitato!";

} else {
  console.log("non sei nella lista");
  var htmlElement = document.getElementById("output");
  htmlElement.innerHTML = "Non sei invitato!";
}






// var lista = ["Luca","Marco","Luigi"];
// console.log(lista);
// var nome = "Marco";
//
// var trovato = false;
//
//
// for(var index = 0; index < lista.lenght; index++) {
//   console.log(lista[index], index);
//   if(nome == lista[index]) {
//   console.log("Nome trovato", index, trovato);
//   }
// }
//
// if (trovato == true) {
//   console.log("sei nella lista");
// } else {
//   console.log("non sei nella lista");
// }
