let deckId;
let playerCard;
let computerCard;
const baseUrl = 'https://deckofcardsapi.com/api/deck/';
var gameState = {
    gameLoop: null,
    gameTimer: null
}

//Sätt timer på rätt ställe
//Pausa timer
//Pausa interval för spel-loop
//Local storage för highschore och sparade spel
//Spara spelarens poäng
//Skriv ut topplista

$(document).ready(function () {




    $("#submit").click(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var range = $("#range").val();
        //var color = $('input[type=color]'.val())
        //var cell = $('<td>');
        //cell = color;
        $(".userStats").append('<tr><td id="inputName">' + name + '</td><td id = "inputRange" >' + range + '</td ><td id="inputColor">' + 'Pink' + '</td></tr>')
        
    });


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
                    });

                setInterval(drawComputerCard, Math.floor(Math.random() * 3000));
            });
    });
});

function setPlayerCard(card) {
    playerCard = card.code;
    $('#playerCardImg').attr('src', card.image);
}

function drawComputerCard() {
    $.getJSON(baseUrl + deckId + '/draw/')
        .done(function (computerDraw) {
            computerCard = computerDraw.cards[0].code;
            $('#computerCardImg').attr('src', computerDraw.cards[0].image);
        });
}



function get_elapsed_time_string(total_seconds) {
    function pretty_time_string(num) {
        return (num < 10 ? "0" : "") + num;
    }

    var hours = Math.floor(total_seconds / 3600);
    total_seconds = total_seconds % 3600;

    var minutes = Math.floor(total_seconds / 60);
    total_seconds = total_seconds % 60;

    var seconds = Math.floor(total_seconds);

    // Pad the minutes and seconds with leading zeros, if required
    hours = pretty_time_string(hours);
    minutes = pretty_time_string(minutes);
    seconds = pretty_time_string(seconds);

    // Compose the string for display
    var currentTimeString = hours + ":" + minutes + ":" + seconds;

    return currentTimeString;
}

var elapsed_seconds = 0;
setInterval(function () {
    elapsed_seconds = elapsed_seconds + 1;
    $('#gameTime').text(get_elapsed_time_string(elapsed_seconds));
}, 1000);




//Make it work, then make it right, then make it fast