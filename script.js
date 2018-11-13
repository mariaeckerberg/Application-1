console.log("Tjenare kexet!");

var cards = [
    "AS", "KS", "QS", "JS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
    "AD", "KD", "QD", "JD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
    "AC", "KC", "QC", "JC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C",
    "AH", "KH", "QH", "JH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H"
];


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// HUR ???

//function deal(card) {

//    shuffle(cards);
//    var half_length = Math.ceil(cards.length / 2);
//    var playerCards = cards.slice(0, half_length);
//    var computerCards = cards.slice(half_length, cards.length);
//    card.player = playerCards.pop();
//    card.computer = computerCards.pop();
//}
//return card;
//}





/////// CA /////////

function createDeck() {

    let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let suitValues = ["H", "C", "D", "S"];

    let deck = [];

    cardValues.forEach(
        function (value) {

            for (var i = 0; i < suitValues.length; i++) {
                let theSuit = suitValues[i];
                let card = value + theSuit;
                deck.push(card);
            }
        }
    );
    return deck;
}
let deck = createDeck();
console.log(deck);