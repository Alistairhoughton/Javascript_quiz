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
    // {
    //     question:'test',
    //         answers: ['0'],
    //         correctAnswer: 'test'
    // },
]

// let time = questionlist.length * 10
// var timerId;

// ================================= DOM variables

var questionElement = document.getElementById('questiontext');
var answerButtonsElement = document.getElementById('answer--btn');
let startButton = document.getElementById('start__btn')
let questionContainer = document.getElementById('questionContainer');
let startContainer = document.getElementById('startcontainerid');
let timerCountdown = document.getElementById('timercountdowntext');
let scoreText = document.getElementById('scorecounttext');
let currentQsIndex = 0;
const gameOverScreen = document.getElementById('gameOverScreen')
let maincolumn = document.getElementById('maincolumn')
const userScoretext = document.getElementById('GameOverScoreID')
let timerValue = 60
let score = 0




//===================================
//=================================== Start Game Function

function startGame () {
    console.log('started')
    questionContainer.classList.remove('hide');
    startContainer.classList.add('hide');

    startTimerCount();
    showQuestion();
}

//===========================================
//=========================================== Show question function

function showQuestion () {
    
        var currentQs = questionlist[currentQsIndex]
        console.log("the current question index is " + currentQsIndex)
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
// ===========================================================================================
function checkanswer() {
    console.log('checkanswer');
}

// ================================================================================
//  ===============================================================================//function for clicking on the questions




function checkAnswer(event){

    var currentQ = questionlist[currentQsIndex];

    
    if  (currentQ && currentQ.correctAnswer === event.target.textContent) {

        // alert('correct')
        score += 10;
    } else {
        // alert('incorrect')
        score -=5;
        timerValue = timerValue - 5
    }
    console.log(score);
    currentQsIndex++
    if(currentQsIndex === questionlist.length){
        endGameI();
    } else {
        showQuestion();
    }
    updateScore();

    userScoretext.textContent = 'Your Score for the quiz is ' + score;
}


var updateScore = function () {
scoreText.textContent = 'Score =' + score;

localStorage.setItem('score', score);

}



// ===================================================================== local storage

// const saveToLocalStorage = () => {
//     localStorage.setItem('score', score);
//     localStorage.setItem('username', username );
// };



// hide the buttons display the score and a form to submit intials

var endGameI = function (){
    if (currentQsIndex == 4) {
        questionContainer.classList.add('hide')
        gameOverScreen.classList.remove('hide')
        gameOverScreen.classList.add('gameOverScreen')
    }
}

var endGameTime = function (){
        questionContainer.classList.add('hide')
        gameOverScreen.classList.remove('hide')
        gameOverScreen.classList.add('gameOverScreen')
    
}



endGameI()



// ============================================//need a function to render results. 
// ================================== Event Listener

startButton.addEventListener('click', startGame);


//timer, score, highscore page

var startTimerCount = function() {

    
    
    
    
    var timerMinusSeconds = function (){
        timerValue --
        
        let timerCountdown = document.getElementById('timercountdowntext');
        timerCountdown.innerHTML = "Time =" + timerValue;
        
        if (timerValue <= 0){
            clearInterval(timerDown)
            endGameTime();

        }
    }
    
    const timerDown = setInterval(timerMinusSeconds,1000)
}


