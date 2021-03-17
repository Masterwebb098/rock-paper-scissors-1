import {playGame, computerPlay, scoreUpdate} from './game.js'

const scoreBoard = document.getElementById('scoreboard');
const gameLog = document.getElementById('game-log');
const buttons = document.querySelectorAll('button');


let gameScore = {
    playerScore: 0,
    computerScore: 0
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let roundResult = playGame.playRound(button.value, computerPlay());
        let gameResult = scoreUpdate(gameScore, roundResult);
        
        playGame.liveUpdate(scoreBoard, gameLog, gameResult);

        if (gameResult[0] === 5 || gameResult[1] === 5) {
            gameLog.textContent = 'HELLO MOTHERFUCKER'
        }
    })
})
