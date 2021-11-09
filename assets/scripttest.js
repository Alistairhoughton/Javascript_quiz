let questionlist = [
    {
        question:'What is 2+2?',
            answers: ['10','4', '20', '30'],
            correctAnswer: '4'
    },
    {
        question:'What is 3+3?',
            answers: ['10','20', '30', '6'],
            correctAnswer: '6'
    },
    {
        question:'What is 4+4?',
            answers: ['8','10', '50', '80'],
            correctAnswer: '8'
    },
    {
        question:'What is 5+5?',
            answers: ['25','20', '10', '100'],
            correctAnswer: '10'
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
//=================================== Start Game Function

function startGame () {
    console.log('started')
    questionButton.classList.remove('hide');
    startContainer.classList.add('hide');

    // timerId = setInterval(clockTick, 1000) clock was broken
    showQuestion();
}

//===========================================
//=========================================== Show question function

function showQuestion () {
        var currentQs = questionlist[currentQsIndex]
        questionElement.innerText = currentQs.question;
        console.log(currentQs);
        answerButtonsElement.innerHTML = '';
        currentQs.answers.forEach(answer => {
        const button = document.createElement('button')
        button.textContent = answer;
        button.classList.add('btn')
        button.addEventListener('click', checkAnswer)
        answerButtonsElement.appendChild(button)
    })
}



// ======================================================================== Reset function.

// var reset = ('')

// function resetState () {
//     answerButtonsElement.innerHTML(reset)
// }



// ===========================================================================================
function checkanswer() {
    console.log('checkanswer');
}

// ================================================================================
//  ===============================================================================//function for clicking on the questions

let seconds = 60
let score = 0
let incorrect = 0


function checkAnswer(event){

    var currentQ = questionlist[currentQsIndex];

    
    if  (currentQ && currentQ.correctAnswer === event.target.textContent) {

        alert('correct')
        score += 10;
    } else {
        alert('incorrect')
        score -=5;
    }

    currentQsIndex++
    if(currentQsIndex === questionlist.length){
        endGame();
    } else {
        showQuestion();
    }
}



function setTimer(){
    timercountdowntext.textContent = ""
}



function endGame(){
    
}



// ============================================//need a function to render results. 
//===================================
// ================================== Event Listener

startButton.addEventListener('click', startGame);