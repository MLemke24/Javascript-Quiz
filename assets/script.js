var taskIdCounter = 0;
var content = document.querySelector("card")
var question = document.querySelector(".banner")
var start = document.querySelector("start")

var question, answer, choices






const questionOne = [
    {
        question: "Var stands for:",
        choices: ["Var", "Variable", "Variation", "Vertical"],
        answer: "Var"
    }
    ];

const questionTwo = [
    {
        question: " Which of the following function of String object combines the text of two strings and returns a new string?",
        choices: ["add()", "merge()", "append()", "concat()"],
        answer: "concat()"
    }
    ];

const questionThree = [
    {
        question: "The Function 'isNaN stands for:",
        choices: ["is Not a Name", "is Not a Number", "is Null and null", "None of the above"],
        answer: "is Not a Number"
    }
    ];

const questionFour = [
    {
        question: "True or False: You MUST us an 'else' statement in order to use an 'if' statement",
        choices: ["True", "False"],
        answer: "False"
    }
    ];

const questionFive = [
    {
        question: "Java is a nickname for Javascript:",
        choices: ["True", "False"],
        answer: "False"
    }
    ];


    function startGame() {
        document.getElementById("card").innerHTML = "";

        return startGame;
    }

    function first (startGame) {
    var list = document.createElement("li")
    list.className = "list";

        var one = document.createElement("div");
        one.className = ".option"
        one.innerHTML =
        "<h2 class='ques_text'>" + questionOne.question + "</h2>" + "<div class='optionList'>" + "</div><span class='option'>" + questionOne.choices + "</span>";
        list.appendChild(one);
        
    }






    document.getElementById("start").addEventListener("click", startGame);


