var content = document.querySelector(".card")
var question = document.querySelector(".banner")
var start = document.querySelector(".start")

var question, answer, choices



const quiz = [
    {
        question: "Var stands for:",
        choices: ["Var", "Variable", "Variation", "Vertical"],
        answer: "Var"
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

// Start quiz

function startGame () {
start.addEventListener("click", question)
}

generateBtn.addEventListener("click", startGame)