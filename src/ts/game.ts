class Game {
	private _playerScore: number;
	private _computerScore: number;

	get scores() {
		return [this._playerScore, this._computerScore];
	}

	private addScore(player: number, computer: number): void {
		this._playerScore += player;
		this._computerScore += computer;
	}

	constructor() {
		this._playerScore = 0;
		this._computerScore = 0;
	}

	computerPlay = (): string => {
		let choice: string[] = ['rock', 'paper', 'scissors'];
		//Auto generate index number for random selection
		return choice[Math.floor(Math.random() * choice.length)];
	};

	playRound(playerSelection: string): void {
		let playerSelect: string = playerSelection.toLowerCase();
		let opponentSelect = this.computerPlay();

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
	}

	resetScore(player: number, computer: number): void {
		this._playerScore = 0;
		this._computerScore = 0;
	}
}

export { Game };
