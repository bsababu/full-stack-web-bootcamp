


var numDrums =  document.querySelectorAll(".drum").length;
for (let i=0; i < numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // var playaud = new Audio("sounds/tom-1.mp3")
        // playaud.play();
        var buttonInnerHtml = this.innerHTML;
        play_or_run_key(buttonInnerHtml)
       // this.style.color="white";
       addAnimation(buttonInnerHtml);
})};

document.addEventListener("keydown", function(event) {
    //var buttonInnerHtml = this.innerHTML;

    play_or_run_key(event.key);
    addAnimation(event.key);
        
})

function play_or_run_key (event) {
    switch(event) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;
        case "d":
            var tom5 = new Audio("sounds/snare.mp3")
            tom5.play();
        break;
        case "j":
            var tom5 = new Audio("sounds/kick-bass.mp3")
            tom5.play();
        break
        case "l":
            var tom5 = new Audio("sounds/crash.mp3")
            tom5.play();
        break

    default:
    }
}

function addAnimation(param) {
    var currentKey = document.querySelector("."+param)
    currentKey.classList.add("pressed");

    setTimeout(function () {
        currentKey.classList.remove("pressed")
    }, 500);
}