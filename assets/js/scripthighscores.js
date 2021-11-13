var score = localStorage.getItem('score');

var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var clearBtn = document.getElementById("clearBtn")
let records = JSON.parse(localStorage.getItem('records'));


// highscores list element 
const myList = document.getElementById('my-list');

window.addEventListener('DOMContentLoaded', function() {
    if (!records) {
        records = []
    };

    for (let i = 0; i < records.length; i++) {
          let newListItem = document.createElement('li');
    newListItem.textContent = records[i].nameOfUser + ' '+records[i].scoreOfUser;
    myList.appendChild(newListItem)
    }
})

console.log(records);


// var score = score

// var score = 

var form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var userInputData = userInput.value.trim();
    var record = {
        nameOfUser: userInputData,
        scoreOfUser: score
    }

    records.push(record);

    records.sort(function(a, b) {
      return b.scoreOfUser -a.scoreOfUser;
    });
    records.splice(5)

localStorage.setItem('records', JSON.stringify(records));
window.location.reload();
})


// ==============================================================================

clearBtn.addEventListener('click', function () {
    localStorage.clear()
    window.location.reload();
  })