let deckId;
let playerCard;
let computerCard;
const baseUrl = 'https://deckofcardsapi.com/api/deck/';

$(document).ready(function () {
    var cardImg = $(".cardImg");
    var cardPlaceholder = $(".cardPlaceholder");
    var newGameButton = $("#newGameButton");

    newGameButton.on("click", function () {
        $.getJSON(baseUrl + 'new/shuffle/')
            .done(function (data) {
                cardPlaceholder.hide();
                cardImg.show();
                deckId = data.deck_id;

                $.getJSON(baseUrl + deckId + '/draw/')
                    .done(function (drawData) {
                        let theCard = drawData.cards[0];
                        setPlayerCard(theCard);

                        //Kör datorspelfunktion här


                    });
            });
    });
});

function setPlayerCard(card) {
    playerCard = card.code;
    $('#playerCardImg').attr('src', card.image);
}

function drawComputerCard() {

}

setTimeout(function () {
    $.getJSON(baseUrl + deckId + '/draw/')
        .done(function (computerDraw) {
            computerCard = computerDraw.cards[0].code;
            $('#computerCardImg').attr('src', computerDraw.cards[0].image);
        });
}, 1500);

//Make it work, then make it right, then make it fast