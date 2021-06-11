import { Game as GameInterface } from '../shared/interfaces/game.interface';

class Game implements GameInterface {
	private _playerScore: number;
	private _computerScore: number;
	public userInterface: any;

	private addScore(player: number, computer: number): void {
		this._playerScore += player;
		this._computerScore += computer;
	}

	private computerPlay(): string {
		let choice: string[] = ['rock', 'paper', 'scissors'];
		//Auto generate index number for random selection
		return choice[Math.floor(Math.random() * choice.length)];
	}

	constructor(userInterface: any) {
		this.userInterface = userInterface;
		this.userInterface.bindEvents(this);

		this._playerScore = 0;
		this._computerScore = 0;
	}

	playRound = (playerSelection: string): void => {
		let playerSelect: string = playerSelection.toLowerCase();
		let opponentSelect: string = this.computerPlay();

		if (
			(playerSelect === 'rock' && opponentSelect === 'scissors') ||
			(playerSelect === 'scissors' && opponentSelect === 'paper') ||
			(playerSelect === 'paper' && opponentSelect === 'rock')
		) {
			this.addScore(1, 0);
		}
		if (
			(opponentSelect === 'rock' && playerSelect === 'scissors') ||
			(opponentSelect === 'scissors' && playerSelect === 'paper') ||
			(opponentSelect === 'paper' && playerSelect === 'rock')
		) {
			this.addScore(0, 1);
		}
		if (playerSelect === opponentSelect) this.addScore(0, 0);
	};

	getScores = (): number[] => {
		return [this._playerScore, this._computerScore];
	};

	resetScore = (): void => {
		this._playerScore = 0;
		this._computerScore = 0;
	};
}

export { Game };
