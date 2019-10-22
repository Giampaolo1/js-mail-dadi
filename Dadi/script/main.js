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
}else if (usernumber < pcnumber) {
  console.log("hai perso");
}else {
  console.log("pareggio");
}





// chi fa di piu' vince 3 msg

// stampare i risultati


// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
