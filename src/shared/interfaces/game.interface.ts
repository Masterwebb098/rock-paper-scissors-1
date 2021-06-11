/**
 * Interface: used for game.ts file
 */
export interface Game {
	playRound: (playerSelection: string) => void;
	getScores: () => number[];
	resetScore: () => void;
}
