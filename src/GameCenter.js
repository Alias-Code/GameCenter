const globalManager = require("./Managers/GlobalManager");

let prompt = require("prompt-sync")({sigint: true});

console.log(globalManager.startGame)

let gameChoice = prompt(globalManager.chooseGame);

if(gameChoice !== "1" && gameChoice !== "2" && gameChoice !== "3") {

    console.warn(globalManager.needNumber)
    return;
}

console.clear()

if(gameChoice === "1")
    require("./Games/PFC").startPFC();
else if(gameChoice === "2")
    require("./Games/GuessTheNumber").startGTN();
else if (gameChoice === "3")
    require("./Games/PileOuFace").startPOF();
