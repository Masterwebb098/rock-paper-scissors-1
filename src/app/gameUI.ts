import rockImageHover from '../assets/images/rock-hover.svg';
import rockImage from '../assets/images/rock.svg';
import paperImageHover from '../assets/images/paper-hover.svg';
import paperImage from '../assets/images/paper.svg';
import scissorsImageHover from '../assets/images/scissors-hover.svg';
import scissorsImage from '../assets/images/scissors.svg';

class GameInterface {
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

	//Handler is round game play
	selectWeapon = (game: any): void => {
		this.userSelect?.forEach((weapon) => {
			weapon.addEventListener('click', () => {
				game.playRound(weapon.id);
			});
		});
	};

	scoreObserver = (game: any) => {
		let currentScore = game.scores;
	};

	announceResults(game: any) {}

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
		this.playAgainButton?.addEventListener('click', () => {
			window.location.reload(true);
		});
	}

	//Make an interface
	bindEvents = (game: any) => {
		this.bindPlayAgainButton();
		this.bindSelectionHoverEvents();
		this.selectWeapon(game);
	};
}

export { GameInterface };
