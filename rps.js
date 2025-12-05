function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3) + 1;

    if (computerNumber === 1){
        console.log("Rock");
    } else if (computerNumber === 2){
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

function getHumanChoice(){
    let userNumber = Number(window.prompt("Enter a number, 1 = Rock , 2 = Paper , 3 = Scissors"));

    if (userNumber === 1){
        console.log("Rock");
    } else if (userNumber === 2){
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (humanChoice === Rock && computerChoice === Paper){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === Rock && computerChoice === Scissors){
        console.log("You won! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === Paper && computerChoice === Rock){
        console.log("You won! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === Paper && computerChoice === Scissors){
        console.log("You lose! Scissor beats Paper");
        computerScore++;
    } else if (humanChoice === Scissors && computerChoice === Rock){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice === Scissors && computerChoice === Paper){
        console.log("You Won! Scissors beats Paper");
        humanScore++;
    } else {
        console.log("It's a Tie!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);