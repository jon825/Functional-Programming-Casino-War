//game of war is who has the highest card.
//each players and dealer is assigned a card and whoever has the highest is the winner

function deck(numberofDeck) {
  const suits = ["spade", "heart", "diamond", "club"];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = { suit: suits[i], rank: ranks[j] };
      for (let k = 0; k < numberofDeck; k++) {
        //through this loop user will have the option of inputting how many decks they want to play with;
        deck.push(card);
      }
    }
  }
  return deck;
}

function suits(cardSuit){
  let suit;
  if(cardSuit === "heart"){
    suit = "H";
  }
    if(cardSuit === "club"){
    suit = "C";
  }
    if(cardSuit === "spade"){
    suit = "S";
  }
    if(cardSuit === "diamond"){
    suit = "D";
  }
  return suit
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
      hand: playersCard()
    };
    numberOfPlayers.push(player);
    // if(player.bet !== 0){
    //   numberOfPlayers.push(player);
    //   player.money = player.money - player.bet
    // }
  }
  return numberOfPlayers;
}

function playersCard(newDeck) {
  let player = [];
  let dealtCard = newDeck.pop();
  player.push(faceCardValue(dealtCard));
  return player;
}

function dealersCard(newDeck) {
  let dealer = [];
  let dealtCard = newDeck.pop();
  dealer.push(faceCardValue(dealtCard));
  return dealer;
}

function faceCardValue(card) {
  //cards J, Q, and K are greater than 9
  //cards A are greater than 10
  //we have to implement these rules
  if (card.rank === "J") {
    card.rank = 11;
  }
  if(card.rank === "Q") {
    card.rank = 12};

  if(card.rank === "K") {
    card.rank = 13;
  }
  if (card.rank === "A") {
    card.rank = 14;
  }
  return card;
}

function score() {
  let totalScore = 0;
  return totalScore;
}

function winner(players, dealer) {
  let winner
  if (players[0].rank > dealer[0].rank) {
    winner = "player win";
    playerScore++;
  } else if (players[0].rank == dealer[0].rank) {
    winner = "push";
  } else {
    winner = "dealer win";
  }
  return winner;
}

function placeBets(playerPot, betAmount) {
  let bet = 0;
  let minimumBet = 10;
  if (betAmount > minimumBet) {
    bet = betAmount;
  } else {
    return bet;
  }
  return bet;
}
