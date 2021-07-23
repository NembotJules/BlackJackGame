
let player = {
  name : "Max", 
  chips: 1000, 
}
let initialChip = document.getElementById("initial-chip"); 
initialChip.textContent = player.name + "'s" + " initial bet" + " : " + player.chips + "$";
let sum= 0; 
let cards = []; 
let  hasblackjack = false ;
let isAlive = false; 
let message = ""; 
let messageEl=  document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); 
let cardsEl  = document.getElementById("cards-el"); 
let playerEl = document.getElementById("player-el") ;


function  getRandomCard(){
let  randomCard = Math.floor(Math.random()*13) + 1 ;
if (randomCard===1){
  return 11; 
}
if (randomCard > 10){
  return 10; 
}
else {
  return randomCard; 
}

  };


function startGame(){ 
  isAlive = true; 
  let firstCard = getRandomCard(); 
let secondCard = getRandomCard(); 
 cards = [firstCard, secondCard]; 
 sum  = firstCard + secondCard ;
    renderGame(); 
}
function renderGame(){
  cardsEl.textContent  = "Cards: " ;
for (let i = 0; i<cards.length; i++) {
  cardsEl.textContent += cards[i] + " ";
}
sumEl.textContent = "Sum:  " + sum; 
    if (sum < 21){
       message = "Draw a new card"; 
       isAlive = true; 
       hasblackjack = false; 
    }
    else if (sum===21) {
      message = "Wohoo! You've got the blackjack 1000$. Try to earn more" + "💰"; 
      hasblackjack = true;
      addPlayerChips();  
    }
    else if (sum > 21){
       message = "You're out of Game... Start again" ; 
       isAlive = false; 
      hasblackjack = false; 
    }
  messageEl.textContent  = message ;
}

function reducePlayerChips(){
  player.chips -= 100; 
  playerEl.textContent = player.name + " : " + player.chips + "$"; 
}
function addPlayerChips(){
  player.chips += 1000; 
  playerEl.textContent = player.name + " : " + player.chips + "$";

}

function newCard(){
 
  
  if (isAlive === true && hasblackjack === false) {
    let card = getRandomCard(); 
    sum += card ;
    cards.push(card) ;
    renderGame(); 
   if (player.chips >= 100){
    reducePlayerChips();
   } 
   else if( player.chips === 0){
    messageEl.textContent = "Account  empty... Refill and try again!";
   }

   
  }
  else {
    messageEl.textContent = "You're no longer Alive"; 
  }
}
 