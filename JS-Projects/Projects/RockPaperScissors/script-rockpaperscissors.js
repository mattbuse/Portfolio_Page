function genComp() {
    let compChoice;
    yourPick = document.getElementById('your-choice').value;
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        compChoice = 'rock';
        compRock.style.display = 'flex';
        compPaper.style.display = 'none';
        compScissors.style.display = 'none';
        startGame(yourPick,compChoice);
    } else if (random === 1) {
        compChoice = 'paper';
        compPaper.style.display = 'flex';
        compRock.style.display = 'none';
        compScissors.style.display = 'none';
        startGame(yourPick,compChoice);
    } else {
        compChoice = 'scissors';
        compScissors.style.display = 'flex';
        compRock.style.display = 'none';
        compPaper.style.display = 'none';
        startGame(yourPick,compChoice);
    }
    return compChoice;
}

const startGame = (yourPick,compChoice) => {
    yourPick = document.getElementById('your-choice').value;
    if (yourPick === compChoice) {
        decision.innerHTML = 'The game is a draw!';
    } else if (yourPick === 'rock' && compChoice === 'scissors') {
        decision.innerHTML = 'You have won the game!';
    } else if (yourPick === 'paper' && compChoice === 'rock') {
        decision.innerHTML = 'You have won the game!';
    } else if (yourPick === 'scissors' && compChoice === 'paper') {
        decision.innerHTML = 'You have won the game!';
    } else {
        decision.innerHTML = 'Sorry, the computer beat you.';
    }
}

const showYourChoice = (yourPick) => {
    yourPick = document.getElementById('your-choice').value;
    if (yourPick === 'rock') {
        yourRock.style.display = 'flex';
        yourPaper.style.display = 'none';
        yourScissors.style.display = 'none';
    } else if (yourPick === 'paper') {
        yourPaper.style.display = 'flex';
        yourRock.style.display = 'none';
        yourScissors.style.display = 'none';
    } else if (yourPick === 'scissors') {
        yourScissors.style.display = 'flex';
        yourRock.style.display = 'none';
        yourPaper.style.display = 'none';
    }
}

function resetGame() {
    let decision = document.getElementById('decision');
    let yourPick = document.getElementById('your-choice');
    decision.innerHTML = '';
    yourPick.value = '';
    yourRock.style.display = 'none';
    yourPaper.style.display = 'none';
    yourScissors.style.display = 'none';
    compRock.style.display = 'none';
    compPaper.style.display = 'none';
    compScissors.style.display = 'none';
}

let yourRock = document.getElementById('your-rock-img');
let yourPaper = document.getElementById('your-paper-img');
let yourScissors = document.getElementById('your-scissors-img');

let compRock = document.getElementById('comp-rock-img');
let compPaper = document.getElementById('comp-paper-img');
let compScissors = document.getElementById('comp-scissors-img');

let choose = document.getElementById('choose');
let drawComp = document.getElementById('draw');
let reset = document.getElementById('reset');

let decision = document.getElementById('decision');

choose.addEventListener('click',showYourChoice);
drawComp.addEventListener('click',genComp);
reset.addEventListener('click',resetGame);