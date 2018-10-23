var time = ""
var questions = ""
var answers = ""
var choice = ""

$(document).ready(function() {
    

    $("#start").on("click", function() {
        answers = "blue";
        console.log(answers);
        $("#start").hide();
        $("#question").html("What color is the sky?");
        $("#answer").html("click to answer");
        $("#next").html("Next Question.");

            $("#answer").on("click", function() {
               choice = prompt("Red, blue, or Green?");

               if (choice === answers) {
                alert("yay!")
                $("#gif").html('<img src="C:\Users\jdabi\OneDrive\Desktop\TriviaGame\images\win1.gif">')
                }
               else {
                alert("booo")

                }
            });

    $("#next").on("click", function() {
        answers = "green";
        $("#gif").hide();
        $("#question").html("what color is grass?");
        $("#answer").html("click to answer");
        $("#next").html("next question");
        $("#next").hide();

            $("#answer").on("click", function() {
                choice = prompt("purple, pink, or green?");

                if (choice === answers) {
                    alert("awsome!")
                    $("#gif").html('<img src="C:\Users\jdabi\OneDrive\Desktop\TriviaGame\images\win1.gif">')
                }
                else {
                    alert("oh no!")
                }
            });

    $("next").on("click", function() {
        answers = "yellow";
        console.log(answers)
    });        
    

    });

                
            

    });













});