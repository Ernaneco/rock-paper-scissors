// Logic to get the computer choice
function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice === 0) {
        return "rock"
    } else if (numberChoice === 1) {
        return "paper"
    } else if (numberChoice === 2) {
        return "scissor"
    }
}

// Declare the players score variables 
let humanScore = 0;
let computerScore = 0;

// Create display variable
let display = document.getElementById('result');

// Create buttons variable
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissor');

// Add event listener to the buttons
rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorBtn.addEventListener('click', playGame);

function playGame(e) {
    e.preventDefault;
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (e.target.id === "rock" && computerChoice === "scissor") {
        humanScore++;
        if (humanScore === 5) {
            display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You win! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else if (e.target.id === "rock" && computerChoice === "paper") {
        computerScore++;
        if (computerScore === 5) {
            display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You lose! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else if (e.target.id === "paper" && computerChoice === "scissor") {
        computerScore++;
        if (computerScore === 5) {
            display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You lose! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else if (e.target.id === "paper" && computerChoice === "rock") {
        humanScore++;
        if (humanScore === 5) {
            display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You win! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else if (e.target.id === "scissor" && computerChoice === "paper") {
        humanScore++;
        if (humanScore === 5) {
            display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You win! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else if (e.target.id === "scissor" && computerChoice === "rock") {
        computerScore++;
        if (computerScore === 5) {
            display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
            humanScore = 0;
            computerScore = 0;
        } else {
            display.textContent = `You lose! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`;
        }
    } else {
        display.textContent = `It's a draw! Score: Human ${humanScore} x Computer ${computerScore}!`;
    }
}

// Alternative method
// rockBtn.addEventListener('click', e => {
//     e.preventDefault;
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     if (computerChoice === "scissor") {
//         humanScore++;
//         if (humanScore === 5) {
//             display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You win! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else if (computerChoice === "paper") {
//         computerScore++;
//         if (computerScore === 5) {
//             display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You lose! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else {
//         display.textContent = `It's a draw! Score: Human ${humanScore} x Computer ${computerScore}!`;
//     }
// });

// paperBtn.addEventListener('click', e => {
//     e.preventDefault;
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     if (computerChoice === "scissor") {
//         computerScore++;
//         if (computerScore === 5) {
//             display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You lose! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else if (computerChoice === "rock") {
//         humanScore++;
//         if (humanScore === 5) {
//             display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You win! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else {
//         display.textContent = `It's a draw! Score: Human ${humanScore} x Computer ${computerScore}!`;
//     }
// });

// scissorBtn.addEventListener('click', e => {
//     e.preventDefault;
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     if (computerChoice === "paper") {
//         humanScore++;
//         if (humanScore === 5) {
//             display.textContent = `Congratulations, ${e.target.id} beats ${computerChoice}. You won the game!`;
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You win! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else if (computerChoice === "rock") {
//         computerScore++;
//         if (computerScore === 5) {
//             display.textContent = `Sorry, ${computerChoice} beats ${e.target.id}. You lost the game!`
//             humanScore = 0;
//             computerScore = 0;
//         } else {
//             display.textContent = `You lose! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`;
//         }
//     } else {
//         display.textContent = `It's a draw! Score: Human ${humanScore} x Computer ${computerScore}!`;
//     }
// });