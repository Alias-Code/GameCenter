let globalManager = require("../Managers/GlobalManager");
let tynt = require("tynt");

let partiesTry = globalManager.infoPrefix + " Combien d'essais voulez-vous ? "

let reTry = globalManager.warnPrefix + " Râté, il te reste encore {number} essaie(s) !"

let playerChoice = globalManager.gamePrefix + " {playerName}, devinez le nombre entre 1 et 10 qu'à choisis le robot ! "

let resultInformations = tynt.Green("{playerName} a choisis le chiffre {number-player}, {robot} avait choisis le chiffre {number-robot} !");

let finalResult = "\n--------------{number}--------------\n{resultInformations}\n\n{gameResult}\n--------------------------------------\n"

module.exports = {
    partiesTry,
    reTry,
    playerChoice,
    resultInformations,
    finalResult
}