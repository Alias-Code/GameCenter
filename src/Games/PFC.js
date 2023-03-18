function startPFC() {

    let globalManager = require("../Managers/GlobalManager");
    let pfcManager = require("../Managers/PFCManager");

    let prompt = require("prompt-sync")({sigint: true});

    const {str_replace} = require("locutus/php/strings");
    const {intval} = require("locutus/php/var");
    const {in_array} = require("locutus/php/array");

    let playerName = prompt(globalManager.playerName);

    if (playerName.length > 10) {

        console.warn(globalManager.caracterWarn);
        return;
    }

    let partiesNumber = prompt(globalManager.partiesNumber);

    if (isNaN(intval(partiesNumber))) {

        console.warn(globalManager.needNumber);
        return;
    }

    console.clear()

    console.log(str_replace("{game}", globalManager.gameOneName, str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, str_replace("{number}", partiesNumber, globalManager.gameInfos)))));

    for (let n = 1; n <= partiesNumber; n++) {

        let playerChoice = prompt(str_replace("{playerName}", playerName, pfcManager.playerChoice));

        if (!in_array(playerChoice, pfcManager.choiceList)) {

            console.warn(pfcManager.needValidValue);
            return;
        }

        let randomInt = (Math.floor(Math.random() * 3) + 1);

        switch (randomInt) {
            case 1:
                var botChoice = pfcManager.choiceList[0]
                break;
            case 2:
                var botChoice = pfcManager.choiceList[1]
                break;
            case 3:
                var botChoice = pfcManager.choiceList[2]
                break;
        }

        if (playerChoice === botChoice) {
            var gameResult = globalManager.noResult
        } else if (playerChoice === "Pierre" && botChoice === "Ciseau" || playerChoice === "Feuille" && botChoice === "Pierre" || playerChoice === "Ciseau" && botChoice === "Feuille") {
            var gameResult = str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, globalManager.playerOneWon));
        } else if (botChoice === "Pierre" && playerChoice === "Ciseau" || botChoice === "Feuille" && playerChoice === "Pierre" || botChoice === "Ciseau" && playerChoice === "Feuille") {
            var gameResult = str_replace("{botName}", globalManager.botName, str_replace("{playerName}", playerName, globalManager.botWon));
        }

        let resultInformations = str_replace("{botChoice}", botChoice, str_replace("{botName}", globalManager.botName, str_replace("{playerChoice}", playerChoice, str_replace("{playerName}", playerName, pfcManager.resultInformations))));

        console.log(str_replace("{gameResult}", gameResult, str_replace("{resultInformations}", resultInformations, str_replace("{number}", str_replace("{number}", n, globalManager.mancheNumber), pfcManager.finalResult))));
    }
}

module.exports = { startPFC }