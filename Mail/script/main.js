// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

// chiedo la mail (prompt)

// creo una lista di 3 Mail

// creo un calcolo che in base all imput restituisce un Output
// se la mail match the 3 ok, sei invitato, altrimenti sei out

var lista = ["Luca", "Marco", "Luigi"];
console.log(lista);

var askmail = prompt("Come ti chiami?");

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

if (trovato == true) {
  console.log("sei nella lista");
} else {
  console.log("non sei nella lista");
}

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("output");




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
