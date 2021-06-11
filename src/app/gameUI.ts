import { Game as GameInterface } from '../shared/interfaces/game.interface';

import rockImageHover from '../assets/images/rock-hover.svg';
import rockImage from '../assets/images/rock.svg';
import paperImageHover from '../assets/images/paper-hover.svg';
import paperImage from '../assets/images/paper.svg';
import scissorsImageHover from '../assets/images/scissors-hover.svg';
import scissorsImage from '../assets/images/scissors.svg';

/**
 * Class: User interaction
 */
class UserInterface {
	scoreBoard: HTMLElement | null;
	userSelect: NodeListOf<Element>;
	playAgainButton: HTMLElement | null;

	constructor() {
		this.scoreBoard = document.querySelector('#scoreboard-container > h3');
		this.userSelect = document.querySelectorAll('.selection');
		this.playAgainButton = document.getElementById('playButton');
	}

	activeHover(event: Event): void {
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

	inactiveHover(event: Event): void {
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

	selectWeapon = (game: GameInterface): void => {
		this.userSelect?.forEach((weapon) => {
			weapon.addEventListener('click', () => {
				game.playRound(weapon.id);
			});
		});
	};

	scoreObserver = (game: GameInterface) => {
		let currentScore: number[] = game.getScores();
	};

	announceResults(game: GameInterface) {}

	bindSelectionHoverEvents() {
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

	bindPlayAgainButton(): void {
		this.playAgainButton?.addEventListener('click', (): void => {
			window.location.reload(true);
		});
	}

	bindEvents = (game: GameInterface): void => {
		this.bindPlayAgainButton();
		this.bindSelectionHoverEvents();
		this.selectWeapon(game);
	};
}

export { UserInterface };
