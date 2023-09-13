let myArray = ["rock", "paper", "scissors"];
let getComputerChoice = myArray[Math.floor(Math.random()*myArray.length)];
let playerScore = 0;
let computerScore = 0;
let outcome = "";

function playRound(playerSelection, computerSelection) { 

if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
    playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ||
    playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        outcome = "win";
    }

else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ||
    playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
    playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        outcome = "lose";
    }

else if(playerSelection.toLowerCase() === computerSelection) {
        outcome = "draw";
}
    return { outcome, playerScore , computerScore};
}

function playerPrompt() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    return playerSelection;
}

function game() {
let i = 0;

while (i < 5) {

    i++;
    let computerSelection = getComputerChoice;
    playRound(playerPrompt(), computerSelection);
    return { outcome, playerScore, computerScore };
}

}


console.log(game());