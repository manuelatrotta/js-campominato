alert('campominato');
//l computer deve generare 16 numeri casuali da 1 a 100.In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//step 1 : il pc deve generare 16 numeri random da 1 a 100
//variabili
var randomNumbersPc = [];
var arrayUserTries = [];
var counte = 0;
var findNumber = false;
var maxTries = 5;
message = 'you win';

while (randomNumbersPc.length <= 16) {
  var cpuRandomNumber = getRandom(1, 100);
  if(randomNumbersPc.includes(cpuRandomNumber) == false) {
    randomNumbersPc.push(cpuRandomNumber);
  }
}
console.log(randomNumbersPc.sort());
//funzione per numero random
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
//funzione in cui si verifica se il numero da cercare è presente nell'array
function checkBomb(arrayToCheck, numberToCheck) {
  for(var i =0; i < arrayToCheck.length; i++) {
    if (numberToCheck == arrayToCheck[i]) {
      return true;
    }
  }
  return false;
}
//funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
//condizioni che verificano se il numero inserito dall'utente è diverso da quelli random generati dal pc, se viene inserito un numero sempre diverso.
//se il numero inserito dall'utente è diverso allora vince,altrimenti perde. Con counte otteniamo il punteggio.

while (arrayUserTries.length < maxTries && findNumber == false) {
  var userNumber = false;
  do{
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    console.log('numero inserito' + checkRangeNumber(1, 100, userNumber));
  }while(checkRangeNumber(1, 100, userNumber) == false)
    if(checkBomb(arrayUserTries, userNumber) == false) {
    arrayUserTries.push(userNumber);
    // se il numero dell'utente è presente nelle numberBomb hai perso
    if(checkBomb(randomNumbersPc, userNumber) == true){
      message = 'hai perso';
      userNumber = true;
    } else {
      counte++;
    }
  }
}
//stampa su console numeri inseriti da utente, messaggio e punteggio
console.log(arrayUserTries);
console.log(message + ' ' + counte);
