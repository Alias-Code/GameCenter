function startGTN() {

    const globalManager = require("../Managers/GlobalManager");
    const guessTheNumberManager = require("../Managers/GuessTheNumberManager");

    const {str_replace} = require("locutus/php/strings");
    const {intval} = require("locutus/php/var");

    let prompt = require("prompt-sync")({sigint: true});

    let playerName = prompt(globalManager.playerName);

    if (playerName.length > 10) {

        console.warn(globalManager.caracterWarn);
        return;
    }

    let partiesTry = prompt(guessTheNumberManager.partiesTry);

    console.clear()

    console.log(str_replace("{game}", globalManager.gameTwoName, str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, str_replace("{number}", partiesTry, globalManager.gameInfos)))));

    for (let n = 1; n <= partiesTry; n++) {

        let playerChoice = prompt(str_replace("{playerName}", playerName, guessTheNumberManager.playerChoice));

        if (isNaN(intval(playerChoice)) || intval(playerChoice) > 10) {

            console.warn(globalManager.needNumber);
            return;
        }

        let randomInt = (Math.floor(Math.random() * 10) + 1);

        if(randomInt === intval(playerChoice)) {

            let gameResult = str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, globalManager.playerOneWon));

            let resultInformations = str_replace("{number-robot}", randomInt, str_replace("{robot}", globalManager.botName, str_replace("{number-player}", playerChoice, str_replace("{playerName}", playerName, guessTheNumberManager.resultInformations))));

            console.log(str_replace("{number}", str_replace("{number}", n, globalManager.mancheNumber), str_replace("{resultInformations}", resultInformations, str_replace("{gameResult}", gameResult, guessTheNumberManager.finalResult))));

            break;

        } else {

            console.log(str_replace("{number}", (partiesTry - n), guessTheNumberManager.reTry))
        }
    }
}

module.exports = { startGTN }