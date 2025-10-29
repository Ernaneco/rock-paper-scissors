function getComputerChoice() {
    const numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice === 0) {
        return "rock"
    } else if (numberChoice === 1) {
        return "paper"
    } else if (numberChoice === 2) {
        return "scissor"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose rock/paper/scissor: ");
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;