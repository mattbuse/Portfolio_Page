function genComp() {
    let compChoice;
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        compChoice = 'rock';
        compRock.style.display = 'block';
        compPaper.style.display = 'none';
        compScissors.style.display = 'none';
    } else if (random === 1) {
        compChoice = 'paper';
        compPaper.style.display = 'block';
        compRock.style.display = 'none';
        compScissors.style.display = 'none';
    } else {
        compChoice = 'scissors';
        compScissors.style.display = 'block';
        compRock.style.display = 'none';
        compPaper.style.display = 'none';
    }
    return compChoice;
}

const startGame = (yourPick,genComp) => {
    yourPick = document.getElementById('your-choice').value;
    if (yourPick === genComp) {
        decision.innerHTML = 'The game is a draw!';
    } else if (yourPick === 'rock' && genComp === 'scissors') {
        decision.innerHTML = 'You have won the game!';
    } else if (yourPick === 'paper' && genComp === 'rock') {
        decision.innerHTML = 'You have won the game!';
    } else if (yourPick === 'scissors' && genComp === 'paper') {
        decision.innerHTML = 'You have won the game!';
    } else {
        decision.innerHTML = 'Sorry, the computer beat you.';
    }
}

const showYourChoice = (yourPick) => {
    yourPick = document.getElementById('your-choice').value;
    if (yourPick === 'rock') {
        yourRock.style.display = 'block';
        yourPaper.style.display = 'none';
        yourScissors.style.display = 'none';
    } else if (yourPick === 'paper') {
        yourPaper.style.display = 'block';
        yourRock.style.display = 'none';
        yourScissors.style.display = 'none';
    } else if (yourPick === 'scissors') {
        yourScissors.style.display = 'block';
        yourRock.style.display = 'none';
        yourPaper.style.display = 'none';
    }
}

function resetGame() {
    let decision = document.getElementById('decision');
    let yourChoice = document.getElementById('your-choice').value;
    decision.innerHTML = '';
    yourChoice.value = '';
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
drawComp.addEventListener('click',genComp,startGame);
reset.addEventListener('click',resetGame);