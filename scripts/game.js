//Generate and return random choice
function getComputerChoice() {
    let ranNum = Math.floor(Math.random()*3) + 1;
    let choice = "";

    switch(ranNum) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        default:
            choice = "Scissors";

    }

    return choice;

}

//Request and return user choice
function getPlayerChoice() {
    answer = prompt("Please enter Rock, Paper, or Scissors:");
    return answer;
}

//Calculate result based on choices for a single round
function playRound(playerSelection, computerSelection) {

    playerSelectionLow = playerSelection.toLowerCase();
    computerSelectionLow = computerSelection.toLowerCase();

    if (playerSelectionLow === computerSelectionLow) {
        return "It's a tie!";
    }
    else if (playerSelectionLow === "rock" && computerSelectionLow === "paper" || playerSelectionLow === "scissors" && computerSelectionLow === "rock" || playerSelectionLow === "paper" && computerSelectionLow === "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
}

//Calculate and return the results of 5 rounds
function game(){
    console.log("Welcome to ROCK PAPER SCISSORS!");
    let playerScore = 0;
    let computerScore = 0;
    let tieCount = 0;


    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        roundResult = playRound(playerChoice, computerChoice);

        roundResult.includes('Win') ? ++playerScore : roundResult.includes('Lose') ? ++computerScore : ++tieCount
    }

    let winner = playerScore == computerScore? "Tie" : playerScore < computerScore? "Computer" : "Player";
    console.log(`${winner} wins! score: Player --> ${playerScore}  Computer --> ${computerScore} Ties --> ${tieCount}`)
}
