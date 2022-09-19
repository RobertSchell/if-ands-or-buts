const prompt = require('prompt-sync') ({sigint: true});

let player1 = prompt("Player 1: Enter rock, paper, or scissors: ");
let player2 = prompt("Player 2: Enter rock, paper, or scissors: ");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

//Rules of game
//Rock beats scissors
//Paper beats rock
//Scissors beats paper

if(player1 === rock && player2 === scissors){
    console.log("Player 1 wins!")
} else if(player1 === paper && player2 === rock){
    console.log("Player 1 wins!")
} else if(player1 === scissors && player2 === paper){
    console.log("Player 1 wins!")
} else if(player1 === scissors && player2 === rock){
    console.log("Player 2 wins!")
} else if(player1 === rock && player2 === paper){
    console.log("Player 2 wins!")
} else if(player1 === paper && player2 === scissors){
    console.log("Player 2 wins!")
} else if(player1 === rock && player2 === rock){
    console.log("It's a draw. Play again!")
} else if(player1 === paper && player2 === paper){
    console.log("It's a draw. Play again!")
} else if(player1 === paper && player2 === paper){
    console.log("It's a draw. Play again!")
} else  {
    console.log("error")
}
