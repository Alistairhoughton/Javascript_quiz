//need to star the quiz. 
//store answers in variables
//have the timer function ready

//timer starts on go button. 
//change question
//load the 4 answers. 

//if answer is wrong take away 10s
//if answer is right move on. 

//store the score
//have a highscore page ready to load anytime. (do I make this on a new page?)#

//questions


//this hid my text for some reason??????

// document.querySelector('questiontext'); //use this to change the text in the doc 
// questiontext = document.getElementById('questiontext');
// questiontext.textContent = questionOne;

// need a score 10 points for a right answer, -5 points for a wrong answer. starts at 0. is it a string or array?

// var questionOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. ";
// var questionTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. ";
// var questionThree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. ";
// var questionfour = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. ";

//question one answers 

// var answerOneONe = 'Array';
// var answerOneTwo = 'Javascript';
// var answerOneThree = 'Function';
// var answerOneFour = 'Cascade';

// var rightAnswer = true;
// var wrongAnswer = false;

var score = ('0');


var questionElement = document.getElementById('questiontext')
var answerButtonsElement = document.getElementById('answer--btn')



var questionlist = [
    {
        question: "what is 2+2",
        answers:[
            {text:'4', correct: true},
            {text:'22', incorrest: false} //idk if this is a boolean????
        ]
    }
]

console.log(questionlist);

//load in question one when start is clicked. text.content. and show buttons? 

//when start button is clicked, bring in the question and the answers. 
//I think i need a .value as this value property sets or returns the value of the value attribute of a text field.

let startButton = document.getElementById('startcontainerid')
let questionButton = document.getElementById('questioncontainer')

startButton.addEventListener('click', startGame);

function startGame () {
    console.log('started')
    startButton.classList.add('hide');
    questionButton.classList.remove('hide');
}

function showQuestion (question) {
    questionElement.innerText =  questionlist.question;
} 

showQuestion()

//I idk if the function below would work. 

// function selectAnswer () {
// if (document.getElementById(questiontext).value === true)
// return 'correct';

// else  (document.getElementById(questiontext).value === false)
// return 'incorrect';
// }

//if incorrect take off 10 seconds and -5 points and dont move on, if correct load new questions. 