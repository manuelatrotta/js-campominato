alert('campominato');
//l computer deve generare 16 numeri casuali da 1 a 100.In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//step 1 : il pc deve generare 16 numeri random da 1 a 100
var randomNumbersPc = [56];
for( i=1; i<=16; i++) {
  numberCreate = getRandom (1, 100);
  randomNumbersPc.push(numberCreate);
}
console.log(randomNumbersPc);
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
//step 2 chiedere 84 numeri all'utente
var listUser = [ ];
for (var i = 1; i <= 8; i++) {
  numberUser = prompt('inserisci 84 numeri differenti da 1 a 100');
  listUser.push(numberUser);
}
console.log(listUser);
//step 3: se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
var numberPresent = false;
for (var i=0; i<randomNumbersPc.length; i++){
  var present  = randomNumbersPc[i];
  if(numberUser == present){
    numberPresent = true;
  }
}
//comunicare il responso all'utente
console.log(numberPresent);
if (numberPresent == false) {
  console.log('numero non presente,continua a giocare');
  numberUser = prompt('inserisci 84 numeri differenti da 1 a 100');
}else{
  console.log('game over');

}
