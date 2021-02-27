var content = document.querySelector(".card")
var question = document.querySelector(".banner")
var start = document.querySelector(".start")
var elements = document.getElementsByClassName("answer")
var save = document.querySelector(".save")
var highscorePage = document.querySelector(".hsPage")

var question, answer, choices, answered, time, question_number, timer, highscore, initials

// Questions Array
let quiz = [
    {
        question: "Var stands for:",
        choices: ["Var", "Variable", "Variation", "Vertical"],
        answer: "Variable"
    },
    {
        question: " Which of the following function of String object combines the text of two strings and returns a new string?",
        choices: ["add()", "merge()", "append()", "concat()"],
        answer: "concat()"
    },
    {
        question: "The Function 'isNaN stands for:",
        choices: ["is Not a Name", "is Not a Number", "is Null and null", "None of the above"],
        answer: "is Not a Number"
    },
    {
        question: "Of these options, what is NOT a Javascript Type:",
        choices: ["Number", "Boolean", "Undefined", "Array"],
        answer: "Array"
    },
    {
        question: "Which of the following is NOT valid Pop up box:",
        choices: ["Alert", "Confirm and", "Prompt", "All of the above"],
        answer: "All of the above"
    },
];


// Start Game 
function startGame () {

    document.getElementById("intro").style.display = "none"

    document.getElementById("questions").style.display = "block"

    time = 60;

    question_number = 0;

    load_question(question_number)

    
// For loop

for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", answer_question);
}

}

// Load Questions 
function load_question(question_number) {
document.getElementById("question-text").innerHTML = quiz[question_number]["question"]
document.getElementById("option-01").innerHTML = quiz[question_number]["choices"][0]
document.getElementById("option-02").innerHTML = quiz[question_number]["choices"][1]
document.getElementById("option-03").innerHTML = quiz[question_number]["choices"][2]
document.getElementById("option-04").innerHTML = quiz[question_number]["choices"][3]



console.log(question_number)
}

// Load Timer
document.getElementById("start").addEventListener("click", function(){


    timer = setInterval(function function1(){
    document.getElementById("time").innerHTML = time + 
    "&nbsp"+"seconds remaining";

    time -= 1;
    if(time <= 0){
        clearInterval(time);
        document.getElementById("time").innerHTML = "Game Over!"
        document.getElementById("questions").style.display = "none"
        document.getElementById("finale").style.display = "block"
    };
    }, 1000);

});
  

// Question Answered

function answer_question (event) {

	answered = event.target.innerHTML
    
    if(answered == quiz[question_number]["answer"]) {
       
        time += 10 

	} else {

        time -= 15
    }

    question_number += 1

    if(question_number <= 4 ) {
       
        load_question(question_number)
       } else {
           document.getElementById("questions").style.display = "none"
   
           document.getElementById("time").style.display = "none"
   
           document.getElementById("log").style.display = "block"
   
           document.getElementById("highScore").innerHTML = time
       }
   
    //    return(highScore)
}

function saveGame() {

    document.getElementById("log").style.display = "none"

    document.getElementById("finale").style.display = "block"

    // Log Score

    highscore = document.getElementById("highScore").innerHTML 
   
    document.getElementById("yourScore").innerHTML = highscore

    console.log(highscore)

    // Log Initials

    initials = document.getElementById("initials").value

    document.getElementById("yourInitials").innerHTML = initials

    console.log(initials)
}

// save to local storage

var storeGame = function() {
    localStorage.setItem("yourScore", JSON.stringify(highscore));
    localStorage.setItem("yourIntiials", JSON.stringify(initials));
}

var loadScores = function() {
    var savedGames = localStorage.getItem("yourScore");
}

// High Scores Page

function highscore() {
    document.getElementsByClass(".card").style.display = "none"

    document.getElementsByClass(".finale").style.display = "block"
}



start.addEventListener("click", startGame)

save.addEventListener("click", saveGame)

highscorePage.addEventListener("click", highscore)






// fix question number count 
// fix answer log 
// fix timer 
// load high scores page 
//save high scores to local storage
// make section for high scores to save 
// attach high scores at top right to high scores saved
// add restart game button 
