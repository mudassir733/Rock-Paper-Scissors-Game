const computerDisplay = document.getElementById('computer-choice');
const yourDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result-display');
const containerEL = document.querySelector('.container');

let userChoice
let computerChoice
let result
let score = 10

const scoreEL = document.createElement('h3'); //Creating h3 Heading
containerEL.appendChild(scoreEL); //AppendChild to the Parent Container
scoreEL.textContent = score
const paraGraph = document.createElement('p'); //Creating p Element
containerEL.appendChild(paraGraph); //AppendChild to the Parent Container

// Last Funtion Execution 
function scoreUpdate() {
    if (userChoice === computerChoice) {
        score = score
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        score--

    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        score--

    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        score--

    }
    scoreEL.innerHTML = score
    if (score === 0) {
        paraGraph.innerHTML = 'You Loses all Life'
        scoreEL.style.display = 'none'

    }

}


// Selected All Buttons
const buttons = document.querySelectorAll('.btn'); 

buttons.forEach(button => button.addEventListener('click', (e) =>{
       userChoice = e.target.id
       yourDisplay.innerHTML = userChoice
       getRandomNumberGenerate();
       resultDisplays();
       scoreUpdate();
}))

function getRandomNumberGenerate() {
    const randomNumber = Math.floor(Math.random() * buttons.length) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerDisplay.innerHTML = computerChoice
}

function resultDisplays() {
    if (userChoice === computerChoice) {
        result = 'Match is draw!'
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        result = 'You are win!'

    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        result = 'You are Lose!'

    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You are win!'

    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        result = 'You are win!'

    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You are Lose!'

    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You are Lose!'

    }
    resultDisplay.innerHTML = result

}