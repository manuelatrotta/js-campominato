alert('campominato');
//l computer deve generare 16 numeri casuali da 1 a 100.In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//step 1 : il pc deve generare 16 numeri random da 1 a 100
var randomNumber = getRandom(1, 100) * 16;
console.log(randomNumber);

function getRandom (min, max){
  min = Math.ceil(1);
  max = Math.floor(100);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
