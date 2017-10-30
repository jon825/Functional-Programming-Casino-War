//game of war is who has the highest card.
//each players and dealer is assigned a card and whoever has the highest is the winner
let newDeck = deck();
let shuffleDeck = shuffle(newDeck);
let tableGame = table(1);
let playersHand = playersCard();
let dealersHand = dealersCard();
// winner(tableGame, dealersHand);

// console.log("dealers hand", dealersHand);

function deck() {
  const suits = ["spade", "heart", "diamond", "clubs"];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = { suit: suits[i], rank: ranks[j] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function table(players) {
  let numberOfPlayers = [];
  for (let i = 0; i < players; i++) {
    let player = {
      player: [i],
      hand: playersCard(),
      bet: 0
    };
    numberOfPlayers.push(player);
  }
  return numberOfPlayers;
}

function playersCard() {
  let player = [];
  let dealtCard = newDeck.pop();
  player.push(faceCardValue(dealtCard));
  return player;
}

function dealersCard() {
  let dealer = [];
  let dealtCard = newDeck.pop();
  dealer.push(faceCardValue(dealtCard));
  return dealer;
}

function faceCardValue(card) {
  //cards J, Q, and K are greater than 9
  //cards A are greater than 10
  //we have to implement these rules
  if (card.rank === "J" || card.rank === "Q" || card.rank === "K") {
    card.rank = 10;
  } else if (card.rank === "A") {
    card.rank = 11;
  }
  return card;
}

function winner(players, dealer) {
  let winner;
  // console.log(players)
  for (let i = 0; i < players.length; i++) {
    console.log(players[i].hand)
    if (players[i].hand[0].rank > dealersHand[0].rank) {
      console.log("player win");
    } else if (players[i].hand[0].rank == dealersHand[0].rank) {
      console.log("push");
    } else {
      console.log("dealer win");
    }
  }
}

function placeBets(){
  let minimumBet = 10;
  let playerBet = tableGame[0].bet + minimumBet;
  console.log(tableGame);
}

placeBets()
