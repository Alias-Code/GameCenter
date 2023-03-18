const pofManager = require("../Managers/PileOuFaceManager");

function startPOF() {

    let globalManager = require("../Managers/GlobalManager");
    let pofManager = require("../Managers/PileOuFaceManager");

    let prompt = require("prompt-sync")({sigint: true});

    const {str_replace} = require("locutus/php/strings");
    const {in_array} = require("locutus/php/array");

    let playerOneName = prompt(globalManager.playerOneName);

    if (playerOneName.length > 10) {

        console.warn(globalManager.caracterWarn);
        return;
    }

    console.clear()

    console.log(str_replace("{game}", globalManager.gameThreeName, str_replace("{botName}", globalManager.botName, str_replace("{playerOneName}", playerOneName, str_replace("{number}", 1, globalManager.gameInfos)))));

    let playerOneChoice = prompt(str_replace("{playerOneName}", playerOneName, pofManager.playerOneChoice));

    if (!in_array(playerOneChoice, pofManager.choiceList)) {

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

    if(playerOneChoice === botChoice) {
        var gameResult = pofManager.playerWon
    } else {
        var gameResult = pofManager.playerLoose
    }

    let resultInformations = str_replace("{choice}", botChoice, str_replace("{player-choice}", playerOneChoice, pofManager.resultInformations));

    console.log(str_replace("{gameResult}", gameResult, str_replace("{resultInformations}", resultInformations, pofManager.finalResult)));
}

module.exports = { startPOF }