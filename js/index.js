import {playGame, computerPlay, scoreUpdate} from './game.js'
import {activeHover, removeHover} from './transitions.js'

const scoreBoard = document.getElementById('scoreboard-container').querySelectorAll('h3');
const gameLog = document.getElementById('game-log');
const selection = document.getElementById('select-weapon').childNodes
const playAgainButton = document.getElementById('result').childNodes[3];

let gameScore = {
    playerScore: 0,
    computerScore: 0
}

selection.forEach(weapon => {
    weapon.addEventListener('click', function(){
        let roundResult = playGame.playRound(weapon.id, computerPlay());
        let gameResult = scoreUpdate(gameScore, roundResult);
        playGame.liveUpdate(scoreBoard, gameLog, gameResult);
        if (gameResult[0] === 5 || gameResult[1] === 5) {
            playGame.endGame(gameResult);
        }
    })
})

selection.forEach(select => {
    select.addEventListener('mouseenter', activeHover);
})

selection.forEach(remove => {
    remove.addEventListener('mouseleave', removeHover);
})

playAgainButton.addEventListener('click', function() {
    window.location.reload(true);
})
