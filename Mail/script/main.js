// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato

// chiedo la mail (prompt)
var askmail = prompt("Come ti chiami?");


// creo una lista di 3 Mail

// creo un calcolo che in base all imput restituisce un Output
// de la mail match the 3 ok, sei invitato, altrimenti sei out

var iscritti = ["Luca", "Marco", "Paolo"];

for(var index = 0; index < lista.lenght; index++) {
  console.log(iscritti[index], index);
  if(nome == iscritti [index]) {
  console.log("Nome trovato", index, trovato);
  }
}

if (trovato == true) {
  console.log("sei nella lista");
} else {
  console.log("non sei nella lista");
}

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("output");

if (askmail="Luca", "Marco", "Paolo") {
  htmlElement.innerHTML = "Sei invitato!";
}
else {
  htmlElement.innerHTML = "NON sei invitato!";
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
