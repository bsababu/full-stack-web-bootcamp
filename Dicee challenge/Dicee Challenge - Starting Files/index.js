var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1);
var randomDiceImages = "dice"+ randomNumber1 + ".png";
var randomDiceImagesSource = "images/" + randomDiceImages;

//var imageSelect = document.querySelectorAll("img")[0];
var imageSelect = document.querySelectorAll("img")[0];
imageSelect.setAttribute("src", randomDiceImagesSource);


// player 2

var randomNumber2 = Math.floor(Math.random()*6) + 1;
//console.log(randomNumber2);
var randomDiceImages2 = "images/dice"+ randomNumber2 + ".png";
var imageSelect2 = document.querySelectorAll("img")[1];
imageSelect2.setAttribute("src", randomDiceImages2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}