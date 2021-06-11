import {
	Game as IGameInterface,
	UserInterface as IUserInterface,
} from './shared/interfaces/interfaces';

class Game implements IGameInterface {
	private _playerScore: number;
	private _computerScore: number;
	public userInterface: IUserInterface;

	private addScore(player: number, computer: number): void {
		this._playerScore += player;
		this._computerScore += computer;
	}

	//Function: randomize choice from string array for opponent
	private computerPlay(): string {
		let choice: string[] = ['rock', 'paper', 'scissors'];
		//Auto generate index number for random selection
		return choice[Math.floor(Math.random() * choice.length)];
	}

	constructor(userInterface: IUserInterface) {
		this.userInterface = userInterface;
		this._playerScore = 0;
		this._computerScore = 0;

		//Explicitly call function to bind events
		this.userInterface.bindEvents(this);
	}

	playRound = (playerSelection: string): string => {
		let playerSelect: string = playerSelection.toLowerCase();
		let opponentSelect: string = this.computerPlay();

		if (
			(playerSelect === 'rock' && opponentSelect === 'scissors') ||
			(playerSelect === 'scissors' && opponentSelect === 'paper') ||
			(playerSelect === 'paper' && opponentSelect === 'rock')
		) {
			this.addScore(1, 0);
			return `You win! ${playerSelect} beats ${opponentSelect}.`;
		}
		if (
			(opponentSelect === 'rock' && playerSelect === 'scissors') ||
			(opponentSelect === 'scissors' && playerSelect === 'paper') ||
			(opponentSelect === 'paper' && playerSelect === 'rock')
		) {
			this.addScore(0, 1);
			return `You lose! ${opponentSelect} beats ${playerSelect}.`;
		}
		if (playerSelect === opponentSelect) {
			this.addScore(0, 0);
			return `No one won! it's a draw.`;
		}
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
