let questionlist = [
    {
        question:'What is 2+2',
            answers: ['10','4', '20', '30'],
            correctAnswer: '4'
    },
    {
        question:'TEST QUESTION2',
            answers: ['A','B', 'C', 'D'],
            correctAnswer: 'B'
    },
    {
        question:'TEST QUESTION3',
            answers: ['A','B', 'C', 'D'],
            correctAnswer: 'B'
    },
    {
        question:'TEST QUESTION4',
            answers: ['A','B', 'C', 'D'],
            correctAnswer: 'B'
    },
]

let currentQsIndex = 0;
let time = questionlist.length * 10
var timerId;

// ================================= DOM variables

var questionElement = document.getElementById('questiontext')
var answerButtonsElement = document.getElementById('answer--btn')
let startButton = document.getElementById('start__btn')
let questionButton = document.getElementById('questioncontainer')
let startContainer = document.getElementById('startcontainerid')

//===================================
// ================================== Event Listener

startButton.addEventListener('click', startGame);

//===================================
//=================================== Start Game Function

function startGame () {
    console.log('started')
    startButton.classList.add('hide');
    questionButton.classList.remove('hide');
    startContainer.classList.add('hide');

    // timerId = setInterval(clockTick, 1000)
    // showQuestion() clock is broken for some reason
}

//===========================================
//=========================================== Show question function


function showQuestion () {
    var currentQs = questionlist[currentQsIndex]
    questionElement.innerText = currentQs.question;
    questionlist.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
 }
 

 
