// Gioco dei dadi, chi fa di più vince

// chiedere all utente di tirare

var usernumber = Math.floor(Math.random() * (6 - 1) ) + 1;

console.log(usernumber);

// generare un math random da 1 a 6
var pcnumber = Math.floor(Math.random() * (6 - 1) ) + 1;

console.log(pcnumber);

// confrontare i risultati
if (usernumber > pcnumber) {
  console.log("hai vinto");

  var htmlElement = document.getElementById("vincitore");
  htmlElement.innerHTML = "Hai VINTO !";

}else if (usernumber < pcnumber) {
  console.log("hai perso");

  var htmlElement = document.getElementById("vincitore");
  htmlElement.innerHTML = "Hai PERSO !";

}else {
  console.log("pareggio");

  var htmlElement = document.getElementById("vincitore");
  htmlElement.innerHTML = "Pareggio !";

}

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("numscelto");
htmlElement.innerHTML = "Your number: " + usernumber;

var htmlElement = document.getElementById("computer");
htmlElement.innerHTML = "PC number: " + pcnumber;

// var htmlElement = document.getElementById("vincitore");
// htmlElement.innerHTML = "PC number: " + pcnumber;



// chi fa di piu' vince 3 msg

// stampare i risultati


// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
