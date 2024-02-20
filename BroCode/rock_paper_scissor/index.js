const choices = ["rock","paper","scissors"]

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
let computer = 0;
let player = 0;

function playGame(playerChoice){
    const computerChoice = choices [Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result = "";
    if (playerChoice===computerChoice){
        result = "IT'S A TIE!";
    }
    else{

        switch(playerChoice){

            case "rock":
                result = (computerChoice==='scissors')?"YOU WIN!":"YOU LOST!";
                break;
            case "paper":
                result = (computerChoice==='rock')?"YOU WIN!":"YOU LOST!";
                break;

            case "scissors":
                result = (computerChoice==='paper')?"YOU WIN!":"YOU LOST!";
                break;
        }
    }
    playerDisplay.textContent =`PLAYER: ${playerChoice}`;
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("green","red");
    if (result==="YOU WIN!"){
        player+=1;
        resultDisplay.classList.add("green");
    }
    else if (result=="YOU LOST!"){
        computer+=1;
        resultDisplay.classList.add("red");
    }
    playerScore.textContent = `Player: ${player}`;
    computerScore.textContent = `Computer: ${computer}`;
}