var timeEl = document.querySelector("header")

var mainEl = document.getElementById("header")

var seconds = 10;

function setTime() {
    var timer = setInterval(function() {
        seconds--;
        timeEl.textContent = seconds + " seconds left";

        if (seconds === 0) {
            clearInterval(timer);
            sendMessag("Finished");
        }
    }, 1000);
}

function sendMessag() {
    timeEl.textContent = "Finished";
}



timer.addEventListener("click", function() {
    setTime();
})


var question1 = [
    {
        question: "What is the name of a commonly used datatype?",

        answers: {
            A: "strings",
            B: "booleans",
            C: "syntax",
            D: "font",
        },
        correctAnswer: "A"
    },
]

var question2
var question3
var question4
var question5
var finalScore
var correctAnswer = "A";
function checkAnswer (divSelected, selectedAnswer) {
    if(selectedAnswer == correctAnswer){
        divSelected.style.backgroundColor = "green";
    }
    else {
        divSelected.style.backgroundColor = "Red";
    }
}

function saveLastSubmit() {
    var finalScore = {
        
    }
} 