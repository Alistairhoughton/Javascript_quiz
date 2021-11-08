let question = [
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
let time = question.length * 10
var timerId;

//=======
//Dom ref variables

var questionElement = document.getElementById('questiontext')
var answerButtonsElement = document.getElementById('answer--btn')
let startButton = document.getElementById('start__btn')
let questionButton = document.getElementById('questioncontainer')
let startContainer = document.getElementById('startcontainerid')




//============
//Function that starts the quiz
startButton.addEventListener('click', startGame);

function startGame () {
    console.log('started')
    startButton.classList.add('hide');
    questionButton.classList.remove('hide');
    startContainer.classList.add('hide');

 timerId = setInterval(clockTick, 1000)
    showQuestion()
}




//get qus function
function showQuestion () {
    
    var currentQs = question[currentQsIndex]
    questionElement.innerText = currentQs.question

    
    //clears the html
    answerButtonsElement.innerHTML = ''

 for(var i = 0; i < question[currentQsIndex].answer.length; i++){
     var button = document.createElement('button');
     button.setAttribute('class', 'btn');
     button.textContent = question[currentQsIndex].answer[i];
     button.onclick = checkAnswer;
    answerButtonsElement.appendChild(button)

 }





} 




//function for clicking on the qs

let seconds = 60
let score = 0
let incorrect = 0


function checkAnswer(){

    if(this.value !== question[currentQsIndex].answer){

      alert('correct')
      score += 1
    }  else {
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

    timerId.textContent = ""



}

//need a function to render results. 


