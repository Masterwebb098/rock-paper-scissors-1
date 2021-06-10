//github.com/migace/js-plain-mvc/blob/master/src/assets/View.ts

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
			target.src = '../src/assets/images/rock-hover.svg';
		}

		if (target.id === 'paper') {
			target.src = '../src/assets/images/paper-hover.svg';
		}

		if (target.id === 'scissors') {
			target.src = '../src/assets/images/scissors-hover.svg';
		}
	}

	inactiveHover(event: Event): void {
		const target: HTMLImageElement = <HTMLImageElement>event.target;

		if (target.id === 'rock') {
			target.src = '../src/assets/images/rock.svg';
		}

		if (target.id === 'paper') {
			target.src = '../src/assets/images/paper.svg';
		}

		if (target.id === 'scissors') {
			target.src = '../src/assets/images/scissors.svg';
		}
	}

	//Handler is round game play
	//Another one would be about scores and logs
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
