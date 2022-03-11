//script.js

//function that simulates computer's decision by generating rand num.
function computerPlay() {
    var decisions = ['rock','paper','scissors'] 
    var computerDecision = decisions[Math.floor(Math.random()*decisions.length)]
    return computerDecision
    }

//simulation of one round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    do {
        var playerDecision = prompt("What is your decision?")
        var playerCheck = playerDecision.toLowerCase()
        playerSelection = playerCheck
        var tiegame = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)

    }
    while (playerCheck != "rock" && playerCheck != "scissors" && playerCheck != "paper");
    
    if (playerSelection == computerSelection)
        return ("Tie game! You both selected " + tiegame)
    else if (playerSelection == "paper" && computerSelection == "rock")
        return ("You win! Paper beats Rock!")
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return ("You lose! Scissors beats Paper!")
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return ("You lose! Rock beats Scissors!")
    else if (playerSelection == "scissors" && computerSelection == "paper")
        return ("You win! Scissors beats Paper!")
    else if (playerSelection == "rock" && computerSelection == "paper")
        return ("You lose! Paper beats Rock!")
    else (playerSelection == "rock" && computerSelection == "scissors")
        return ("You win! Rock beats Scissors!")
}
