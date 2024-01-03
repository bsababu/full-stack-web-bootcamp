// $(document).ready(function() {})
$("h1").text("change");
$("h1").css("color", "red");
$("h1").addClass("bigtitle");
$("button").text("click")
$("button").html("<strong>Click</strong>")
$("body").css("background-color","gray");
$("a").attr("href","iriba.rw")


// adding an event listener

// $("button").on("click",function () { 
//     $("h1").hide();
// });

$("button").on("click",function () { 
    $("h1").toggle();
});

$("button").on("click",function () { 
    $("h1").slideToggle();
});
// $("button").click(function() {
//     $("h1").css("color", "purple");
// })

$("input").keydown(function (e) { 
    $("h1").text(e.key);
});


$("h1").on("mouseover",function (e) { 
    $("h1").css("color", "green");
    $("h1").animate({opacity: 0.5}) // it only works for numerical values
});

$("input").click(function () { 
    $("h1").hide();
});