start();

function start() {
    console.log("start");
    getUserSelection();
}

function getUserSelection() {
    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    compareChoices()
}

function compareChoices(userChoice, compChoice) {}

function userWins() {
    document.querySelector("#win").classList.remove("hidden");
}

function userLoses() {
    document.querySelector("#lose").classList.remove("hidden");
}

function tiedMatch() {
    document.querySelector("#draw").classList.remove("hidden");
}
// start => {
// }