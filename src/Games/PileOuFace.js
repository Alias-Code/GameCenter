function startPOF() {

    let globalManager = require("../Managers/GlobalManager");
    let pofManager = require("../Managers/PileOuFaceManager");

    let prompt = require("prompt-sync")({sigint: true});

    const {str_replace} = require("locutus/php/strings");
    const {in_array} = require("locutus/php/array");

    let playerName = prompt(globalManager.playerName);

    if (playerName.length > 10) {

        console.warn(globalManager.caracterWarn);
        return;
    }

    console.clear()

    console.log(str_replace("{game}", globalManager.gameThreeName, str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, str_replace("{number}", 1, globalManager.gameInfos)))));

    let playerChoice = prompt(str_replace("{playerName}", playerName, pofManager.playerChoice));

    if (!in_array(playerChoice, pofManager.choiceList)) {

        console.warn(pofManager.needValidValue);
        return;
    }

    let randomInt = (Math.floor(Math.random() * 2) + 1);

    switch (randomInt) {
        case 1:
            var botChoice = pofManager.choiceList[0]
            break;
        case 2:
            var botChoice = pofManager.choiceList[1]
            break;
    }

    console.log(pofManager.robotLaunch)

    if(playerChoice === botChoice) {
        var gameResult = pofManager.playerWon
    } else {
        var gameResult = pofManager.playerLoose
    }

    let resultInformations = str_replace("{choice}", botChoice, str_replace("{player-choice}", playerChoice, pofManager.resultInformations));

    console.log(str_replace("{gameResult}", gameResult, str_replace("{resultInformations}", resultInformations, pofManager.finalResult)));
}

module.exports = { startPOF }