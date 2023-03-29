
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const gameResult = document.createElement('p');
const score = document.createElement('p');

gameResult.textContent = 'Click any button!';

results.appendChild(gameResult);

buttons.forEach((button)=> {

    button.addEventListener('click', () => {

        playRound(button.id)
        
    });

});


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

//Calculate result of single round
function playRound(buttonId) {

    playerSelection = buttonId;
    computerSelection = getComputerChoice();

    playerSelectionLow = playerSelection.toLowerCase();
    computerSelectionLow = computerSelection.toLowerCase();


    if (playerSelectionLow === computerSelectionLow) {

    }
    else if (playerSelectionLow === "rock" && computerSelectionLow === "paper" || playerSelectionLow === "scissors" && computerSelectionLow === "rock" || playerSelectionLow === "paper" && computerSelectionLow === "scissors") {
        compScore += 1;
    }
    else {
        playerScore += 1;
    }

    checkResults();

}

// Determine if the game is over 
function checkResults() {

    if(playerScore === 5) {
        declareWinner('Player');
        return;

    } else if (compScore === 5) {
        declareWinner('Computer');
        return;
    }

    gameResult.textContent = '';
    score.textContent = `Computer: ${compScore}  You: ${playerScore}`;
    results.appendChild(score);

}


//Declare a winner
function declareWinner (winner) {

    gameResult.textContent = `${winner} wins the game!`;
    score.textContent = '';
    compScore = 0;
    playerScore = 0;

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
