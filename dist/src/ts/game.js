"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        this.computerPlay = () => {
            let choice = ['rock', 'paper', 'scissors'];
            //Auto generate index number for random selection
            return choice[Math.floor(Math.random() * choice.length)];
        };
        this._playerScore = 0;
        this._computerScore = 0;
    }
    get scores() {
        return [this._playerScore, this._computerScore];
    }
    playRound(playerSelection) {
        let roundScore = Array.from({ length: 2 });
        let playerSelect = playerSelection.toLowerCase();
        let opponentSelect = this.computerPlay();
        if ((playerSelect === 'rock' && opponentSelect === 'scissors') ||
            (playerSelect === 'scissors' && opponentSelect === 'paper') ||
            (playerSelect === 'paper' && opponentSelect === 'rock')) {
            roundScore = [1, 0];
        }
        if ((opponentSelect === 'rock' && playerSelect === 'scissors') ||
            (opponentSelect === 'scissors' && playerSelect === 'paper') ||
            (opponentSelect === 'paper' && playerSelect === 'rock')) {
            roundScore = [0, 1];
        }
        if (playerSelect === opponentSelect)
            roundScore = [0, 0];
        return roundScore;
    }
    addScore(player, computer) {
        this._playerScore += player;
        this._computerScore += computer;
    }
    resetScore(player, computer) {
        this._playerScore = 0;
        this._computerScore = 0;
    }
}
exports.Game = Game;
