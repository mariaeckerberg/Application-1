var cardPicture = $("#cardArea img");
var newGameButton = $("#newGameButton");

cardPicture.hide();

newGameButton.click(function () {
    cardPicture.show(1000);
});