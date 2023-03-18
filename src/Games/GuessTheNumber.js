const globalManager = require("../Managers/GlobalManager");
const guessTheNumberManager = require("../Managers/GuessTheNumberManager");

const {str_replace} = require("locutus/php/strings");
const {intval} = require("locutus/php/var");

let prompt = require("prompt-sync")({sigint: true});

function startGTN() {

    let playerOneName = prompt(globalManager.playerOneName);

    if (playerOneName.length > 10) {

        console.warn(globalManager.caracterWarn);
        return;
    }

    let partiesTry = prompt(guessTheNumberManager.partiesTry);

    console.clear()

    console.log(str_replace("{game}", globalManager.gameTwoName, str_replace("{botName}", globalManager.botName, str_replace("{playerOneName}", playerOneName, str_replace("{number}", partiesTry, globalManager.gameInfos)))));

    for (let n = 1; n <= partiesTry; n++) {

        let playerOneChoice = prompt(str_replace("{playerOneName}", playerOneName, guessTheNumberManager.playerOneChoice));

        if (isNaN(intval(playerOneChoice)) || intval(playerOneChoice) > 10) {

            console.warn(globalManager.needNumber);
            return;
        }

        let randomInt = (Math.floor(Math.random() * 10) + 1);

        if(randomInt === intval(playerOneChoice)) {

            let gameResult = str_replace("{botName}", globalManager.botName, str_replace("{playerOneName}", playerOneName, globalManager.playerOneWon));

            let resultInformations = str_replace("{number-robot}", randomInt, str_replace("{robot}", globalManager.botName, str_replace("{number-player}", playerOneChoice, str_replace("{playerOneName}", playerOneName, guessTheNumberManager.resultInformations))));

            console.log(str_replace("{number}", str_replace("{number}", n, globalManager.mancheNumber), str_replace("{resultInformations}", resultInformations, str_replace("{gameResult}", gameResult, guessTheNumberManager.finalResult))));

            break;

        } else {

            console.log(str_replace("{number}", (partiesTry - n), guessTheNumberManager.reTry))
        }
    }
}

module.exports = { startGTN }