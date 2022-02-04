let userChoice;
let computerChoice;

window.addEventListener("load")
start();

function start() {
    console.log("start");
    getUserSelection();
    armButtons();
}

function armButtons() {
    // document.querySelectorAll("#buttons").forEach(elm) => {elm.addEventListener("click", getUserSelection)} ("click");
    document.querySelector("button .rock").addEventListener("click", getUserSelection);
    document.querySelector("button .paper").addEventListener("click", getUserSelection);
    document.querySelector("button .scissors").addEventListener("click", getUserSelection);
}

function getUserSelection() {
    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    const compChoiceArr = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    compChoice = compChoiceArr[randomNum];
    determineWinner();
}

function makeAnimations() {
    endAnimation();
}



function determineWinner(userChoice, compChoice) {
    if (userChoice == computerChoice) {
        winner = results.draw;
    } else if (())
}

function userWins() {
    document.querySelector("#win").classList.remove("hidden");
}

function userLoses() {
    document.querySelector("#lose").classList.remove("hidden");
}

function tiedMatch() {
    document.querySelector("#draw").classList.remove("hidden");
}

function restart() {}
// start => {
// }