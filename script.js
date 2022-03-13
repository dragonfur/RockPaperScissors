//script.js

var computerScore = 0
var playerScore = 0
var WonLost

const results = document.querySelector(".results")
const winner = document.createElement("div")
const content = document.createElement("div")
const playerResults = document.createElement("span")
const computerResults = document.createElement("span")

//keeps track of scores and updates in real time
function keepingScore(){
    playerResults.textContent = "Player score: " + playerScore + "  "
    computerResults.textContent = "Computer score: " + computerScore
    results.appendChild(playerResults)
    results.appendChild(computerResults)
}

keepingScore()

//checks for winner and displays who won
function theWinner() {
    if (playerScore == 5) {
        winner.textContent = "You won with a score of " + playerScore + " to the computer's " + computerScore
        results.appendChild(winner)
    
        //stops play
        rock.remove("#rock")
        paper.remove("#paper")
        scissors.remove("#scissors")
    }
    else if (computerScore == 5) {
        winner.textContent = "You lost with a score of " + playerScore + " to the computer's " + computerScore
        results.appendChild(winner)
        
        //stops play
        rock.remove("#rock")
        paper.remove("#paper")
        scissors.remove("#scissors")
    }
}

//function that simulates computer's decision by generating rand num.
function computerPlay() {
    var decisions = ['rock','paper','scissors'] 
    var computerDecision = decisions[Math.floor(Math.random()*decisions.length)]
    return computerDecision
    }

//simulation of one round
function playRound(playerSelection, computerSelection) {
    var playerCheck = playerSelection.toLowerCase()
    computerSelection = computerPlay()
    var computerCapital = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    
    if (playerCheck == computerSelection) {
        content.textContent = "You tied! You both picked " + computerCapital + "!"
        results.appendChild(content)
        
    }
    else if (playerCheck == "paper" && computerSelection == "rock"){
        playerScore++
        keepingScore()
        content.textContent = "You won! Paper beats Rock!"
        results.appendChild(content)
        theWinner()
        return
    }
    else if (playerCheck == "paper" && computerSelection == "scissors"){
        computerScore++
        keepingScore()
        content.textContent = "You lost! Scissors beats Paper"
        results.appendChild(content)
        theWinner()
        return
    }
    else if (playerCheck == "scissors" && computerSelection == "rock"){
        computerScore++
        keepingScore()
        content.textContent = "You lost! Rock beats Scissors"
        results.appendChild(content)
        theWinner()
        return
    }
    else if (playerCheck== "scissors" && computerSelection == "paper"){
        playerScore++
        keepingScore()
        content.textContent = "You won! Scissors beats Paper!"
        results.appendChild(content)
        theWinner()
        return
    }
    else if (playerCheck == "rock" && computerSelection == "paper"){
        computerScore++
        keepingScore()
        content.textContent = "You lost! Rock beats Paper"
        results.appendChild(content)
        theWinner()
        return
    }
    else (playerCheck == "rock" && computerSelection == "scissors")
        playerScore++
        keepingScore()
        content.textContent = "You won! Rock beats Scissors!"
        results.appendChild(content)
        theWinner()
        return
}

//listening for button actions then sending them to playRound()
const rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
    playRound("rock")
})

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    playRound("paper")
})

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissors")
})

//typing animation
var i = 0;
var txt = 'Rock, Paper, or Scissors?'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()