
let el = document.querySelector("main div");
console.log(el);

el.addEventListener("click", function (event) {
    setTimeout(function () {
        console.log(event);
        let newDiv = document.createElement("div");
        el.appendChild(newDiv);
        newDiv.innerHTML = "<strong>VERY IMPORTANT!!!!!</strong>"
    }, 1000);
});

alert("Before");

//overridear alert-funktionen så att det skrivs i konsollen istället:
window.alert = function (message) {
    console.log("ALERT!!!! " + message);
};

alert("After");