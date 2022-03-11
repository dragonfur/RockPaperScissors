//script.js

//function called computerPlay will select random from 1-3 options
function computerPlay() {
    var decisions = ['Rock','Paper','Scissors'] 
    var computerDecision = decisions[Math.floor(Math.random()*decisions.length)]
    computerSelection = computerDecision
    return computerDecision
}

//function called userInput that will record the user's pick
function userInput() {
    do {
        var playerDecision = prompt("What is your decision?")
        var playerCheck = playerDecision.toLowerCase()
        playerDecision = playerCheck.charAt(0).toUpperCase() + playerCheck.slice(1)
    }
    while (playerCheck != "rock" && playerCheck != "scissors" && playerCheck != "paper");
    //playerSelection = playerDecision

}