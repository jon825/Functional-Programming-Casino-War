$(document).ready(function() {
  let newDeck = deck(2);
  let shuffleDeck = shuffle(newDeck);
  let playerScore = 0;
  let dealerScore = 0;

  $(".dealHand button").click(() => {

    let dealersHand = dealHand(shuffleDeck);
    let playersHand = dealHand(shuffleDeck);
    let playerSuit = suits(playersHand[0].suit);
    let dealerSuit = suits(dealersHand[0].suit);

    let winning = winner(playersHand, dealersHand);
    if (winning === "Dealer Wins") {
      dealerScore = dealerScore + 1;
    } else if (winning === "Player Wins") {
      playerScore = playerScore + 1;
    }

    showHand("players", playersHand, playerSuit);
    showHand("dealers", dealersHand, dealerSuit);

    console.log("players card", $(".playersCard"));

    $("#dealerScore h4").html(dealerScore);
    $("#playerScore h4").html(playerScore);

    $(".winner h5").html(winner(playersHand, dealersHand));
  });
});



function showHand(player, hand, suit) {
  $(`.${player}Card`)
    .attr("src", `img/JPEG/${hand[0].rank}${suit}.jpg`)
    .addClass("animated flipInX");
  setTimeout(() => {
    $(`.${player}Card`)
      .removeClass("animate flipInX")
      .attr("src", "img/cardback.jpg")
      .addClass("animated fadeIn backCard");
  }, 1000);
}
