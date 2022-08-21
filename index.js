//Function that at random returns rock paper or scissors: This will be computers choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomGenerate = Math.floor(Math.random()*choices.length);
    let randomChoice = choices[randomGenerate];
    return randomChoice;
}

// Function that will store the players choice, as well as make it case sensitive
function getPlayerChoice () {
    let userChoice = prompt("Type your choice. Rock, Paper, or Scissors:")
    let firstLetter = userChoice.slice(0,1);    // Code to ensure the users input will always return capitalized
    let capitalizeFirst = firstLetter.toUpperCase();
    let restOf = userChoice.slice(1);
    let capitalizeRest = restOf.toLowerCase();
    let capitalConcat = capitalizeFirst + capitalizeRest; 
    return capitalConcat;
}

// List of winning/losing/tie statements
let youTie = "It's a tie!";
let youWin = "You won this round!";
let youLose = "You lose this round.";

//Function that plays a single round of RPS, takes 2 parameters (playerSelection,computerSelection)
//Declares a winner, Returns the results of round
//Increment score depending on round outcome and return the score to global scope
function playRound (playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()){
    if (playerSelection === computerSelection) {
        console.log("Tie! " + computerSelection + " was chosen by both players.");
        tieScore++
        return (tieScore);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win this round! " + playerSelection + " beats " + computerSelection + ".");
        playerScore++
        return playerScore;
    } else {
        console.log("You lose this round. " + playerSelection + " was beaten by " + computerSelection + ".");
        computerScore++
        return computerScore;
    }
}

//Function that plays 5 rounds of rps, reports winner/loser at the end by retrieving the returned round scores and using them in conditionals
function game () { 
for (let i = 0; i < 5; i++) {
    playRound();
}

    if (playerScore === tieScore) {
        console.log("It's a tie game! How underwhelming.. Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerScore > tieScore) {
        console.log ("You won the game Bucko! Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (tieScore > playerScore) {
        console.log ("I'm afraid you lost this game. Player Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

// Create variables to store player, computer, and tie score. In this game a tie doesnt count as a point
//call on these scores in above functions to keep track of scores and declare game winner
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
