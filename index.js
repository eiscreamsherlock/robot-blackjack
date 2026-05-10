
// Basic randInt function since we don't wanna have to keep retyping that.
function randInt(min, max) {
  // The +1 makes sure that we're inside and INCLUDING max and min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  renderGame();
}

function resetGame() {
  sum = 0;
  sumEl = "Sum: ";
  cardsEl = "Cards: ";
  startGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + ' ' + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Lucky you!  It's Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're outta the game. Better luck next time...";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = randInt(2,11);
  sum += card;
  cardsEl += (' ' + card);
  renderGame();
}

let firstCard = randInt(2,11);
let secondCard = randInt(2,11);
let cards = [];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById("message-el");
// Using the query selector to be a little more fancy
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");
