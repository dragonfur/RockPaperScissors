//script.js

//function called computerPlay will select random from 3 options
function computerPlay() {
    var decisions = ['Rock','Paper','Scissors'] 
    var decision = decisions[Math.floor(Math.random()*decisions.length)] //function will generate random number from 0-1, multiply it by 3 and round it down to pick which one it will throw out
    return decision
}
