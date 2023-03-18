let tynt = require("tynt");

let startGame = tynt.Blue("\nBienvenue dans le GameCenter ! Voici les jeux proposés : \n\n1 - PFC\n2 - GuessTheNumber\n3 - Pile ou Face\n");
let chooseGame = tynt.Yellow("Vous souhaitez jouer à quel jeu ? ");

let infoPrefix = tynt.Blue("[Informations]");
let warnPrefix = tynt.Red("[Warn]");
let gamePrefix = tynt.Yellow("[Game]");

let gameOneName = "PFC"
let gameTwoName = "GuessTheNumber"
let gameThreeName = "Pile ou Face"

let botName = "Robot"

let mancheNumber = tynt.Red("Manche N°{number}");

let caracterWarn = warnPrefix + " Veuillez choisir un pseudo de moins de 10 caractères !"
let needNumber = warnPrefix + " Veuillez entrer une valeur numérique !"

let playerName = infoPrefix + " Quel est votre pseudo ? "
let partiesNumber = infoPrefix + " Combien de parties voulez-vous ? "

let gameInfos = tynt.Red("Jeu : {game} > Opposant N°1 {playerName} | Opposant N°2 {botName} | {number} Manche(s)\n");

let playerOneWon = tynt.Green("{playerName} a gagné, {botName} a perdu !");
let botWon = tynt.Green("{botName} a gagné, {playerName} a perdu !");

let noResult = tynt.Green("Egalité, personne ne gagne cette manche !");

module.exports = {
    startGame,
    chooseGame,
    infoPrefix,
    warnPrefix,
    gamePrefix,
    gameOneName,
    gameTwoName,
    gameThreeName,
    botName,
    mancheNumber,
    caracterWarn,
    needNumber,
    playerName,
    partiesNumber,
    gameInfos,
    playerOneWon,
    botWon,
    noResult,
}