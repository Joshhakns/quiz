var timeEl = document.querySelector("header");

var seconds = 10;

var totalScore= 0;

function setTime() {
    var timer = setInterval(function() {
        seconds--;
        timeEl.textContent = seconds + " seconds left";

        if (seconds <= 0) {
            clearInterval(timer);
            sendMessag("Finished");
            document.getElementById("Card").innerHTML=totalScore+" answers correct." 
        }
    }, 1000);
}

function sendMessag() {
    timeEl.textContent = "Finished";
}

timeEl.addEventListener("click", setTime()) 



function setCard(answer1, answer2, answer3, answer4, questionNumber, question) {
    var questionNum = document.getElementById("questionNumber");
    questionNum.innerHTML=questionNumber;

    var q= document.getElementById("question");
    q.innerHTML=question;

    var firstAnswer=document.getElementById("answerA");
    firstAnswer.innerHTML=answer1;

    document.getElementById("A").checked=false

    var secondAnswer=document.getElementById("answerB");
    secondAnswer.innerHTML=answer2;

    document.getElementById("B").checked=false

    var thirdAnswer=document.getElementById("answerC");
    thirdAnswer.innerHTML=answer3;

    document.getElementById("C").checked=false
    
    var fourthAnswer=document.getElementById("answerD");
    fourthAnswer.innerHTML=answer4;

    document.getElementById("D").checked=false
}


var answer=1
var numQuestion=1
function runQuestion () {

    if (numQuestion===1) {
        setCard("A:Strings", "B:Fonts", "C:MetaData", "D:Functions", "Question 1", "What is the name of a commonly used datatype?");
        answer=1
    } else if (numQuestion===2){
        setCard("A:Quotes","B:Curly Brackets", "C:Parenthesis", "D:Square Brackets", "Question 2", "The Condition in an if/else statement is enclosed with ___?");
        answer=3
    } else if (numQuestion===3){
        setCard("A:Numbers and Strings", "B:Other Arrays", "C:Booleans", "D:All of the Above","Question 3", "Arrays in JavaScript can be used to store ___?",);
        answer=4
    } else if (numQuestion===4){
        setCard("A:Commas", "B:Curly Brackets", "C:Quotes", "D:Parenthesis", "Question 4", "String values must be enclosed within _____ when being assigned to variables.")
        answer=3
    } else if (numQuestion===5){
        setCard("A:Javascript", "B:terminal/bash", "C:For Loops", "D:console.log", "Question 5", "A very useful tool used during development and debugging for printing content to the debugger is:")
        answer=4
    }   else {
        seconds=0
    }
}


function store (num) {
    if (num ===answer) {
        totalScore= totalScore+1;
        alert ("Correct!");
    } else {
        setCard();
        alert ("WRONG!")
        seconds = seconds - 10; 
    }
    numQuestion=numQuestion+1
    runQuestion()
}


var checkBoxA = document.getElementById("A");
checkBoxA.addEventListener('click', function () {store(1)});

var checkBoxB = document.getElementById("B");
checkBoxB.addEventListener('click', function () {store(2)});

var checkBoxC = document.getElementById("C");
checkBoxC.addEventListener('click', function () {store(3)});

var checkBoxD = document.getElementById("D");
checkBoxD.addEventListener('click', function () {store(4)});

runQuestion()

