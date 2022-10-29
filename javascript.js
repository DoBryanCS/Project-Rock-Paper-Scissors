//function to get random computer choice between rock, paper and scissors
function getComputerChoice() {
    var choiceNumber = Math.random() * 3;
    if (choiceNumber <= 1) {
        choice = "Rock";
    } else if (choiceNumber <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice

}

//function to determine the outcome of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() ==  "rock" && computerSelection == "Rock") {
        return "It's a draw!"
    } else if (playerSelection.toLowerCase() ==  "paper" && computerSelection == "Paper") {
        return "It's a draw!"
    } else if (playerSelection.toLowerCase() ==  "scissors" && computerSelection == "Scissors") {
        return "It's a draw!"
    } else if (playerSelection.toLowerCase() ==  "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() ==  "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection.toLowerCase() ==  "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() ==  "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() ==  "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() ==  "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper"
    }
}

//function to play a game of rock, paper, scissors for 5 rounds while keeping track of points
function game() {
    let scoreYou = 0
    let scoreComputer = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?", "")
        const computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        if (result === "It's a draw!") {
            scoreYou += 0
            scoreComputer += 0
            console.log(result)
            console.log(scoreYou)
            console.log(scoreComputer)
        } else if (result === "You Lose! Paper beats Rock" || result === "You Lose! Rock beats Scissors" || result === "You Lose! Scissors beats Paper") {
            scoreYou += 0
            scoreComputer += 1
            console.log(result)
            console.log(scoreYou)
            console.log(scoreComputer)
        } else if (result === "You Win! Paper beats Rock" || result === "You Win! Rock beats Scissors" || result === "You Win! Scissors beats Paper") {
            scoreYou += 1
            scoreComputer += 0
            console.log(result)
            console.log(scoreYou)
            console.log(scoreComputer)

        } else {
            console.log("Invalid choice")
            console.log(scoreYou)
            console.log(scoreComputer)
            if (i > 0) {
                i --
            }
        }
    }
    if (scoreYou > scoreComputer) {
        console.log("You Won!")
    } else if (scoreComputer > scoreYou) {
        console.log("You Lost!")
    } else {
        console.log("Draw!")
    }
}

game()
