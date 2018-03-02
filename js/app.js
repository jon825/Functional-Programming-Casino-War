$(document).ready(function() {
  let newDeck = deck(5);

  let shuffleDeck = shuffle(newDeck);
  let playerScore = score();
  let dealerScore = score();
  $("#playerScore h4").html(playerScore);
  $("#dealerScore h4").html(dealerScore);
  $(".dealHand button").click(() => {
    //when deal hand button is clicked, deck is being popped to player and dealer

    let dealersHand = dealersCard(shuffleDeck);
    let playersHand = playersCard(shuffleDeck);
    let playerSuit = suits(playersHand[0].suit);
    let dealerSuit = suits(dealersHand[0].suit);
    console.log("playersHand =", playersHand[0]);
    let winning = winner(playersHand, dealersHand);
    if (winning === "dealer win") {
      dealerScore = dealerScore + 1;
    } else if (winning === "player win") {
      playerScore = playerScore + 1;
    }


    $(".dealersCard").attr(
      "src",
      `img/JPEG/${dealersHand[0].rank}${dealerSuit}.jpg`
    );

    $(".playersCard").attr(
      "src",
      `img/JPEG/${playersHand[0].rank}${playerSuit}.jpg`
    );

    // $("#dealersCard img[src='']").prepend(` class="dealersCard" src='img/JPEG/${dealersHand[0].rank}${dealerSuit}.jpg'`);

    $("#dealerScore h4").html(dealerScore);
    $("#playerScore h4").html(playerScore);

    $(".winner h5").html(winner(playersHand, dealersHand));
  });
});
