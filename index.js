"use strict";
// const pc = require("prompt-sync");
// const prompt = pc();

// default game scores
let playerScore = 0
let computerScore = 0


// get random choice from computer
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}


// get players choice
const getPlayerChoice = () => {
    const choice = prompt("Shoot: ")
    if (choice != "rock" &&
        choice != "paper" &&
        choice != "scissors"
    ) {
        console.log("Please choose between rock, paper and scissors")
        return
    }
    return choice
}


// compare choices and decide winner
const round = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper"
    ) {
        console.log(`You win!, ${playerChoice} beats ${computerChoice}`)
        playerScore += 1
        console.log(`Your score is ${playerScore}`)
    } else if (playerChoice == computerChoice) {   
        console.log("It's a tie") 
    } else {
        console.log(`You lose!, ${computerChoice} beats ${playerChoice}`)
        computerScore += 1
        console.log(`Computer score is ${computerScore}`)
    }
}


// run game 5 rounds
const game = () => {
    for (let i = 0; i < 5; i++) {
        const gameRound = round();
        if (gameRound) game()
    };

    announceFinalScore()
}


// announce final score after five rounds
const announceFinalScore = () => {
    if (playerScore > computerScore) {
        console.log(`Congratulations, You won ${playerScore} out of 5 rounds`)
        return
    }
    console.log(`Boo hoo! Computer won ${computerScore} out of 5 rounds`)
}

game();