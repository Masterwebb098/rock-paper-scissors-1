import {playGame, computerPlay, gameStatus} from './game.js'

const scoreBoard = document.getElementById('scoreboard');
const gameLog = document.getElementById('game-log');
const buttons = document.querySelectorAll('button');


let gameScore = {
    playerScore: 0,
    computerScore: 0
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        // let score = [0, 0];
        let roundResult = playGame.playRound(button.value, computerPlay());
        // playGame.liveUpdate('scoreboard', 'game-log', test);
        let gameResult = gameStatus(gameScore, roundResult);
        playGame.liveUpdate(scoreBoard, gameLog, gameResult);
    })
})
