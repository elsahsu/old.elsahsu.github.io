//lists of cards
var open_cards = [];
var matched_cards = [];
var movecount = 0;

// Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function show_card_symbol(card) {
  card.className += " open";
  card.className += " show";
  if (open_cards.length == 0) {
    open_cards.push(card);
  } else if (open_cards.length == 1) {
    console.log("Clicked card: " + card.firstElementChild.className);
    movecount = movecount + 1;
    console.log(movecount);
    $(".moves").html(movecount);
      if (movecount === 10) {
        $('#star-2').remove();
      } else if (movecount === 15) {
        $('#star-1').remove();
      } else if (movecount === 20) {
        $('#star-0').remove();
      }
    for (var i = 0; i < open_cards.length; i++) {
      var open_card = open_cards[i];
      console.log("Open card:" + i + ": " + open_card.firstElementChild.className);
      if (card.firstElementChild.className === open_card.firstElementChild.className) {
        open_card.className = "card match";
        card.className = "card match";
        matched_cards.push(card);
        matched_cards.push(open_card);
        open_cards.pop();
        return;
      } else {
          open_card.className = "card mismatch";
          card.className = "card mismatch";
          open_cards.push(card);
          return;
        }
      }
  } else if (open_cards.length > 1) {
      for (var i = 0; i < open_cards.length; i++) {
        var open_card = open_cards[i];
        open_card.className = "card";
      }
      open_cards = [];
      open_cards.push(card);
  }

  console.log(open_cards);
};

function start_new_game() {
  $(".deck").empty();
  $(".stars").empty();
  movecount = 0;
  $(".moves").html(movecount);
  var all_cards = ["anchor", "anchor", "bicycle", "bicycle", "bolt", "bolt", "bomb", "bomb", "cube", "cube", "diamond", "diamond", "leaf", "leaf", "paper-plane", "paper-plane"]
  var shuffled_cards = shuffle(all_cards);
  console.log(shuffled_cards);
  for (var i = 0; i < shuffled_cards.length; i++) {
    var imagename = shuffled_cards[i];
    $(".deck").append('<li class="card"><i class="fa fa-' + imagename + '"></i></li>');
  }
  for (var i = 0; i < 3; i++) {
    $(".stars").append('<li id="star-'+ i +'"><i class="fa fa-star"></i></li>');
  }
}

start_new_game();

//var.addEventListener('click', function(event){})-->JS
//$(".selector").click(function(){})-->jQuery
//restart
$(".fa-repeat").click(function() {
  console.log('restart button works asap!')
  start_new_game();
});

const cardlist = document.querySelectorAll('.card');
for (var i = 0; i < cardlist.length; i++) {
  var card = cardlist[i];
  card.addEventListener('click', function(event) {
    console.log('The card was clicked!');
// console.log(event.target);
    show_card_symbol(event.target);
//    event.target.className += " open";
//    event.target.className += " show";
})};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
