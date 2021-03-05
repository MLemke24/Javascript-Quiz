var content = document.querySelector(".card")
var question = document.querySelector(".banner")
var start = document.querySelector(".start")
var elements = document.getElementsByClassName("answer")
var save = document.querySelector(".save")
var highscorePage = document.querySelector(".highscores")
var playAgain = document.querySelector(".restart")
var again = document.querySelector(".try")
var log = document.querySelector(".finalLog")
var taskIdCounter = 0;

var question, answer, choices, answered, time, question_number, timer, highscore, initials, storeGame, loadScore, loadInitials


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
        question: "The Function 'isNaN' stands for:",
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
        choices: ["Alert", "Confirm and", "Prompt", "None of the above"],
        answer: "None of the above"
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

        // load input initials page 
           document.getElementById("questions").style.display = "none"
   
           document.getElementById("time").style.display = "none"
   
           document.getElementById("log").style.display = "block"
   
           document.getElementById("highScore").innerHTML = time
       }
   
      
       
       
}

// Save Game - sets to local storage 

function saveGame() {

    // Bring Up Scores Page

    document.getElementById("log").style.display = "none"

    document.getElementById("finale").style.display = "block"

    // Place values of High Score and Initials

    highscore = document.getElementById("highScore").innerHTML 
    

    initials = document.getElementById("initials").value
   
    // if (localStorage.getItem("yourScores") === null) {
        // localStorage.setItem("yourScores", JSON.stringify([]));
    //     // localStorage.setItem("yourInitials", JSON.stringify([]));
    // }

    let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];
    // let logInitials = JSON.parse(localStorage.getItem("yourInitials"))

    let numbers = {Score: highscore, Initials: initials} 
  logScores.push(numbers)
    console.log(logScores)
    // logInitials.push({Initials: initials})

    setScore(logScores)
    // displayIntiials(initials)

    localStorage.setItem("yourScores", JSON.stringify(logScores))
    // localStorage.setItem("yourInitials", logInitials)

};

    function setScore(logScores) {

    for (var i = 0; i < logScores.length; i++) {
        var logScore = document.getElementById("finalLog")
        var ulScores = document.createElement("ul")
        ulScores.setAttribute('id', 'yourScores')
        ulScores.setAttribute("data-task-id", taskIdCounter)
        ulScores.textContent = logScores[i].Score

        finalLog.appendChild(ulScores)
    };
        
    };



 // Bring up high Scores Page

// function highscores() {

//     document.getElementById("intro").style.display = "none"

//     document.getElementById("finale").style.display = "block"

//     var getScore = JSON.parse(localStorage.getItem("yourScore"));
//     console.log(getScore)

    

//     var loadScore = document.getElementById("finalLog")

//     var showScore = document.createElement("ul")
//     showScore.setAttribute('id', 'yourScores')
//     showScore.textContent = getScore.Score
    
//     loadScore.appendChild(showScore)

// Load Info Storage





  


// }



  


var reload = function() {
    location.href = "https://mlemke24.github.io/Javascript-Quiz/";
};

var tryAgain = function() {
location.href = "https://mlemke24.github.io/Javascript-Quiz/";
} 



start.addEventListener("click", startGame)

save.addEventListener("click", saveGame)

highscorePage.addEventListener("click", highscores)

playAgain.addEventListener("click", reload)

again.addEventListener("click", reload)




// fix question number count 
// fix answer log 
// fix timer 
// load high scores page 
//save high scores to local storage
// make section for high scores to save 
// attach high scores at top right to high scores saved
// add restart game button 

    // Scores Ul

//     const ulScore = document.createElement('ul')

//     ulScore.setAttribute('id', 'yourScore')
//     ulScore.setAttribute('data-task-id', taskIdCounter)
//     ulScore.textContent = highscore

//     logScore.appendChild(ulScore)
//     )
    

    

//    // Initials Ul

//     const ulInitials = document.createElement('ul')

//     ulInitials.setAttribute('id', 'yourInitials')
//     ulInitials.setAttribute('data-task-id', taskIdCounter)
//     ulInitials.textContent = initials

//     logScore.appendChild(ulInitials)