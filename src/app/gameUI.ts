import {
	Game as IGameInterface,
	UserInterface as IUserInterface,
} from './shared/interfaces/interfaces';

import rockImageHover from '../assets/images/rock-hover.svg';
import rockImage from '../assets/images/rock.svg';
import paperImageHover from '../assets/images/paper-hover.svg';
import paperImage from '../assets/images/paper.svg';
import scissorsImageHover from '../assets/images/scissors-hover.svg';
import scissorsImage from '../assets/images/scissors.svg';

class UserInterface implements IUserInterface {
	scoreBoard: NodeListOf<HTMLInputElement> | null;
	gameLog: HTMLElement;
	userSelect: NodeListOf<Element>;
	playAgainButton: HTMLElement | null;

	private activeHover(event: Event): void {
		const target: HTMLImageElement = <HTMLImageElement>event.target;

		if (target.id === 'rock') {
			target.src = rockImageHover;
		}

		if (target.id === 'paper') {
			target.src = paperImageHover;
		}

		if (target.id === 'scissors') {
			target.src = scissorsImageHover;
		}
	}

	private inactiveHover(event: Event): void {
		const target: HTMLImageElement = <HTMLImageElement>event.target;

		if (target.id === 'rock') {
			target.src = rockImage;
		}

		if (target.id === 'paper') {
			target.src = paperImage;
		}

		if (target.id === 'scissors') {
			target.src = scissorsImage;
		}
	}

	//Bind hover events
	private bindSelectionHoverEvents() {
		this.userSelect?.forEach((select) => {
			select.addEventListener('mouseenter', (e: Event) => {
				this.activeHover(e);
			});
		});

		this.userSelect.forEach((select): void => {
			select.addEventListener('mouseleave', (e: Event) => {
				this.inactiveHover(e);
			});
		});
	}

	private bindPlayAgainButton(): void {
		this.playAgainButton?.addEventListener('click', (): void => {
			window.location.reload(true);
		});
	}

	constructor() {
		this.scoreBoard = document.querySelectorAll('#scoreboard-container > h3');
		this.gameLog = document.getElementById('game-log');
		this.userSelect = document.querySelectorAll('.selection');
		this.playAgainButton = document.getElementById('playButton');
	}

	selectWeapon = (game: IGameInterface): void => {
		this.userSelect?.forEach((weapon) => {
			weapon.addEventListener('click', () => {
				let winner: string = game.playRound(weapon.id);
				this.scoreObserver(game);
				this.announceResults(winner);
			});
		});
	};

	scoreObserver = (game: IGameInterface) => {
		let gameScore: number[] = game.getScores();
		let [playerScore, computerScore]: number[] = gameScore;

		if (playerScore === 5 || computerScore === 5) this.endGame(gameScore);

		this.scoreBoard[0].textContent = String(playerScore);
		this.scoreBoard[1].textContent = String(computerScore);
	};

	announceResults(winner: string): void {
		this.gameLog.textContent = winner;
	}

	endGame = (scoreResults: number[]): void => {
		//Display result modal
		let blur = document.getElementById('game') as HTMLElement;
		blur.classList.add('blur');
		let result = document.getElementById('result') as HTMLElement;
		result.classList.add('active');

		let [playerScore, computerScore]: number[] = scoreResults;
		let announceText = '';

		//Check results
		playerScore > computerScore
			? (announceText = `You have won the game!`)
			: (announceText = 'You have lost. Computer has won the game !');

		//Update results text content
		result.querySelector('h1').textContent = announceText;
	};

	//Function: bind user interface events
	bindEvents = (game: IGameInterface): void => {
		this.bindPlayAgainButton();
		this.bindSelectionHoverEvents();
		this.selectWeapon(game);
	};
}

export { UserInterface };
