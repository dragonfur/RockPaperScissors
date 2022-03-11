//script.js

//function that simulates computer's decision by generating rand num.
function computerPlay() {
    var decisions = ['rock','paper','scissors'] 
    var computerDecision = decisions[Math.floor(Math.random()*decisions.length)]
    return computerDecision
    }

//simulation of one round
function playRound(playerSelection, computerSelection) {
    var playerCheck = playerSelection.toLowerCase()
    
    if (playerCheck == computerSelection) {
        return 0
    }
    else if (playerCheck == "paper" && computerSelection == "rock"){
        return 1
    }
    else if (playerCheck == "paper" && computerSelection == "scissors"){
        return 2
        }
    else if (playerCheck == "scissors" && computerSelection == "rock"){
        return 2
        }
    else if (playerCheck== "scissors" && computerSelection == "paper"){
        return 1
    }
    else if (playerCheck == "rock" && computerSelection == "paper"){
        return 2
        }
    else (playerCheck == "rock" && computerSelection == "scissors")
        return 1
}

//simulates 5 rounds of a game, best of 5
function game(){
    var playerSelection
    var computerSelection
    var result 
    var userScore = 0
    var computerScore = 0

    //loop for rounds
    for (let i = 0; i < 5; i++) {
        var round = i + 1
        playerSelection = prompt("What is your decision?")
        computerSelection = computerPlay()
        result = (playRound(playerSelection, computerSelection))
        var compCapitalize = computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)
        var playerCheck = playerSelection.toLowerCase()
        var tiegame = playerCheck.charAt(0).toUpperCase()+playerCheck.slice(1)
        console.log("Round " + round)
        if (result == 1){
            userScore++
            console.log("You win! " + tiegame + " beats " + compCapitalize + "!")
        }
        else if (result == 2){
            computerScore++
            console.log("You lose! " + compCapitalize + " beats " + tiegame + "!")
        }
        else if (result == 0)
            console.log("Tie game! you both picked " + tiegame + "!")
     }
     //displays score after 5 rounds
     if (userScore > computerScore)
        console.log("You win after 5 rounds with a score of " + userScore + " to the computer's " + computerScore)
    else if (userScore < computerScore)
        console.log("You lost after 5 rounds with a score of " + userScore + " to the computer's " + computerScore)
    else if (userScore == computerScore)
        console.log("You drew after 5 rounds with a score of " + userScore + " to the computer's " + computerScore)

}
