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

shuffle(cards);

var half_length = Math.ceil(cards.length / 2);

var playerCards = cards.slice(0, half_length);
var computerCards = cards.slice(half_length, cards.length);

console.log(playerCards.pop());
console.log(playerCards.length);


//function deal(card) {

//    var playerCards;

//    var computerCards;

//}
//return card;
//}

//return cards;