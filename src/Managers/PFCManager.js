let globalManager = require("../Managers/GlobalManager");
let tynt = require("tynt");

let choiceList = [
    "Pierre",
    "Feuille",
    "Ciseau"
]

let needValidValue = globalManager.warnPrefix + " Veuillez entrer une valeur valide : Pierre Feuille ou Ciseau !"

let playerOneChoice = globalManager.gamePrefix + " {playerOneName} ! Pierre, Feuille, Ciseau ? "

let resultInformations = tynt.Green("{playerOneName} a joué {playerOneChoice}, {botName} a joué {botChoice} !");

let finalResult = "\n--------------{number}--------------\n{resultInformations}\n\n{gameResult}\n--------------------------------------\n"

module.exports = {

    choiceList,
    needValidValue,
    playerOneChoice,
    resultInformations,
    finalResult
}