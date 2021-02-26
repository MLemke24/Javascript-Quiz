var content = document.querySelector(".card")
var question = document.querySelector(".banner")
var start = document.querySelector(".start")
var elements = document.getElementsByClassName("answer")


var question, answer, choices, ansanswerwered, time, question_number




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
        question: "True or False: You MUST us an 'else' statement in order to use an 'if' statement",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "Java is a nickname for Javascript:",
        choices: ["True", "False"],
        answer: "False"
    },
];

// Start Game 
function startGame () {

    document.getElementById("intro").style.display = "none"

    document.getElementById("questions").style.display = "block"

    time = 60;

    question_number = 0;

    load_question(question_number)

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


    var loadTimer = setInterval(function function1(){
    document.getElementById("time").innerHTML = time + 
    "&nbsp"+"seconds remaining";

    time -= 1;
    if(time <= 0){
        clearInterval(time);
        document.getElementById("time").innerHTML = "Time is up!"
    }
    }, 1000);

    
});
  

// Question Answered
function answer_question (event) {

	answered = event.target.innerHTML

	if(answered == quiz[question_number]["answer"]) {
        // console.log("answer")
	 time++
	// console.log(answered)

	}

	question_number += 1

	load_question(question_number)

    if (answered === answer) {
        time += 10
    } else {
        time -= 10
    }
	
}



// High Scores Page

start.addEventListener("click", startGame)



for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", answer_question);
}