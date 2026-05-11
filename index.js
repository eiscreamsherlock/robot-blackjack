// Vars we'll need
let firstCard;
let secondCard;
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");
let player = {
  name: "Bill",
  chips: 145
}

// Basic randInt function since we don't wanna have to keep retyping that.
function randInt(min, max) {
  // The +1 makes sure that we're inside and INCLUDING max and min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCard() {
  let thisCard = randInt(1, 13);
  if (thisCard === 1 ) {
    return 11;
  } else if ( thisCard > 10 ) {
    return 10;
  } else {
    return thisCard;
  }
}

function startGame() {
  isAlive = true;
  firstCard = randomCard();
  secondCard = randomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  renderGame();
}

// TODO: NOT WORKING
function resetGame() {
  sum = 0;
  sumEl = "Sum: ";
  cardsEl = "Cards: ";
  startGame();
}

function renderGame() {
  playerEl.textContent = player.name + ": " + player.chips;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += (cards[i] + ' ');
  }
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

// TODO: Still generates some values that will change the messageEl text. FIX
function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

