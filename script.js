// Logic to play the game
function playGame() {
    
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

    // Logic to get the human choice
    // function getHumanChoice() {
    //     return prompt("Choose rock/paper/scissor: ");
    // }

    // Declare the players score variables 
    let humanScore = 0;
    let computerScore = 0;

    // Create button variable
    let btn = document.querySelector('.btn');

    // Add event listener to the button variable
    btn.addEventListener('click', playRound);

    // Logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissor") {
            humanScore++;
            console.log(`You win! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log(`You lose! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissor") {
            computerScore++;
            console.log(`You lose! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`You win! Paper beats rock! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === "scissor" && computerChoice === "rock") {
            computerScore++;
            console.log(`You lose! Rock beats scissor! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === "scissor" && computerChoice === "paper") {
            humanScore++;
            console.log(`You win! Scissor beats paper! Score: Human ${humanScore} x Computer ${computerScore}!`);
        } else if (humanChoice.toLowerCase() === computerChoice) {
            console.log(`It's a draw! Score: Human ${humanScore} x Computer ${computerScore}!`);
        };
    }
    playRound(getHumanChoice(), getComputerChoice());
}
    
playGame();
