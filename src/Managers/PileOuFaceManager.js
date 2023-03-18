let globalManager = require("../Managers/GlobalManager");
let tynt = require("tynt");

let choiceList = [

    "Pile",
    "Face"
]

let playerChoice = globalManager.gamePrefix + " {playerName}, Pile ou Face ? "

let needValidValue = globalManager.warnPrefix + " Veuillez entrer une valeur valide : Pile, Face"

let playerWon = tynt.Green("Vous avez gagné la partie !");
let playerLoose = tynt.Green("Vous avez perdu la partie !");

let robotLaunch = globalManager.gamePrefix + " Robot lance la pièce..."

let resultInformations = tynt.Green("Vous avez choisis {player-choice}, la pièce est tombée sur {choice}")

let finalResult = "\n------------------------------------\n{resultInformations}\n\n{gameResult}\n--------------------------------------\n"

module.exports = {
    choiceList,
    playerChoice,
    needValidValue,
    playerWon,
    playerLoose,
    robotLaunch,
    resultInformations,
    finalResult
}