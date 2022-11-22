"use strict";

// default game scores
let playerScore = 0
let computerScore = 0


const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// get random choice from computer
const getComputerChoice = () => {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    return choices[Math.floor(Math.random()*choices.length)];
}


// get players choice from button clicked
const getPlayerChoice = (e) => {
    const weapon = e.target.innerHTML;
    return weapon;
}


// announce final score after five rounds
const announceFinalScore = () => {
    if (playerScore > computerScore) {
        resultDiv.innerHTML = `Congratulations, You won ${playerScore} out of 5 rounds`;
        scoreDiv.innerHTML = 'GAME OVER!';
    } else {
        resultDiv.innerHTML = `Boo hoo! Computer won ${computerScore} out of 5 rounds`;
        scoreDiv.innerHTML = 'GAME OVER!';
    }
}


// compare choices and decide winner
function round(e) {
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getComputerChoice();

    if (playerScore == 3 || computerScore == 3) {
        announceFinalScore();
        return;
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
        playerChoice == "PAPER" && computerChoice == "ROCK" ||
        playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        resultDiv.innerHTML = `You win!, ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
        scoreDiv.innerHTML = `Your score is ${playerScore}`;
    } else if (playerChoice == computerChoice) {
        resultDiv.innerText = "It's a tie";
        scoreDiv.innerHTML = null;
    } else {
        resultDiv.innerHTML = `You lose!, ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
        scoreDiv.innerHTML = `Computer score is ${computerScore}`;
    }
}

// UI Selectors
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        round(e);
    })
})