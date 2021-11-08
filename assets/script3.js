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
//=================================== Start Game Function

function startGame () {
    console.log('started')
    // startButton.classList.add('hide');
    questionButton.classList.remove('hide');
    startContainer.classList.add('hide');

    // timerId = setInterval(clockTick, 1000) clock was broken
    showQuestion();
}

//===========================================
//=========================================== Show question function

//method 1

// function showQuestion () {
//     var currentQs = questionlist[currentQsIndex]
//     questionElement.innerText = currentQs.question;
//     for (var i = 0; i < currentQs.length; i++) {
//     //     console.log('insidecreatebutton')
//     //     const button = document.createElement('button')
//     //     button.innerText = currentQs.answers[i]
//     //     button.classList.add('btn')
//     //     button.addEventListener('click', selectAnswer)
//     //     answerButtonsElement.appendChild(button);
//     // } 

// ============================================================= why does this not work?

// ============================================================== Method 2

// function showQuestion () {
//     //     var currentQs = questionlist[currentQsIndex]
//     //     questionElement.innerText = currentQs.question;
//     questionlist.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.textContent
//         button.classList.add('btn')
//         button.addEventListener('click', SelectAnswer)
//         answerButtonsElement.appendChild(button)
//     })

// ========================================================================why does this not work?



function showQuestion () {
    var currentQs = questionlist[currentQsIndex]
    questionElement.innerText = currentQs.question;
    currentQs.answers.forEach(function (answers, i) {
    
        var currentChoice = document.createElement('button');
        currentChoice.setAttribute('class','btn');
        currentChoice.setAttribute('value', answers);
        currentChoice.textContent = i+1+'. '+ answers;
        currentChoice.addEventListener('click', checkanswer);
        answerButtonsElement.appendChild(currentChoice);
    })
}

function checkanswer() {
    console.log('checkanswer');
}

// ================================================================================
//  ===============================================================================//function for clicking on the questions

let seconds = 60
let score = 0
let incorrect = 0


function checkAnswer(){

    if(this.value !== question[currentQsIndex].answer){

        alert('correct')
        score += 1
    } else {
        alert('incorrect')
        score -=1
    }

    currentQsIndex++
    if(currentQsIndex === question.length){
        endGame()
    } else {
        question()
    }
}



function setTimer(){

    timercountdowntext.textContent = ""



}

// ============================================//need a function to render results. 
//===================================
// ================================== Event Listener

startButton.addEventListener('click', startGame);