// alert("check");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

const playSound = (name) => {
  var green_audio_pl = new Audio("sounds/" + name + ".mp3");
  green_audio_pl.play();
};



function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("plus success");
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  
      $("#level-title").text("Game Over, Press Any Key to Restart");
  
      startOver();
    }
  }


var nextSequence = () => {
  var randomNumber = Math.floor(Math.random() * 4);
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut(150)
    .fadeIn("slow");
  playSound(randomChosenColour);
};


// $("#green").css("color",randomChosenColour);
// $("#red").css("color",randomChosenColour);
// $("#blue").css("color",randomChosenColour);
// $("#yellow").css("color",randomChosenColour);

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};
