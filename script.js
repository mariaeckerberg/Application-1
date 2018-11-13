/*var cards = [
    "AS", "KS", "QS", "JS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
    "AD", "KD", "QD", "JD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
    "AC", "KC", "QC", "JC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C",
    "AH", "KH", "QH", "JH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H"
];*/


function createDeck() {

    let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K"];
    let suitValues = ["H", "C", "D", "S"];

    let cards = [];

    cardValues.forEach(
        function (value) {
            for (var i = 0; i < suitValues.length; i++) {
                let theSuit = suitValues[i];
                let card = value + theSuit;
                cards.push(card);
            }
        }
    );
    return cards;
}

let deck = createDeck();
console.log(deck);

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

shuffle(deck);
console.log(deck);

function deal(theDeck) {
    let playerCards = [];
    let computerCards = [];

    for (var i = 0; i < theDeck.length; i++) {
        if (i % 2 == 0)
            playerCards.push(theDeck[i]);
        else
            computerCards.push(theDeck[i]);
    }
    return {
        playerCards: playerCards,
        computerCards: computerCards
    };
}
let dealtCards = deal(deck);
console.log(dealtCards);


function computerDrawsCard(allComputerCards, cardDrawnFunction) {
    setTimeout(function () {

        let card = allComputerCards.pop();

        cardDrawnFunction(card);

    }, 1500);
}

computerDrawsCard(
    dealtCards.computerCards,
    function (card) {
        console.log("Card: " + card);
    });

//ToDo: Funktion för player draws card

/*
function deal(card) {

    shuffle(deck);

    var half_length = Math.ceil(deck.length / 2);
    var playerCards = deck.slice(0, half_length);
    var computerCards = deck.slice(half_length, deck.length);

    console.log("Player cards: " + playerCards);
    console.log("Computer cards: " + computerCards);

    //card.player = playerCards.pop();
    //card.computer = computerCards.pop();
}
return card;
}
*/




/////// CA /////////



function playerDrawsCard(allPlayerCards) {
    return allPlayerCards.pop();
}

let playerCard = playerDrawsCard(dealtCards.playerCards);

//console.log(computerCard);
//console.log(playerCard);

/*
function scoreCards(card1, card2) {
    let value1 = card1.charAt(0);
    let suit1 = card1.charAt(1);

    let value2 = card2.charAt(0);
    let suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
}

let score = 0;

for (var i = 0; i < 4; i++) {

    computerCard = computerDrawsCard(dealtCards.computerCards);
    playerCard = playerDrawsCard(dealtCards.playerCards);

    let scoreDelta = scoreCards(playerCard, computerCard);

    score += scoreDelta;

    console.log(scoreDelta);
    console.log("Total score: " + score);
}
*/