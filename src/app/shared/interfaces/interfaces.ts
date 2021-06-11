export interface Game {
	playRound: (playerSelection: string) => string;
	getScores: () => number[];
	resetScore: () => void;
}

export interface UserInterface {
	selectWeapon: (game: Game) => void;
	scoreObserver: (game: Game) => void;
	announceResults: (winner: string) => void;
	endGame: (scoreResults: number[]) => void;
	bindEvents: (game: Game) => void;
}
