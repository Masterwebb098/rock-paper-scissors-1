//github.com/migace/js-plain-mvc/blob/master/src/View.ts

class View {
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
			target.src = './src/images/rock-hover.svg';
		}

		if (target.id === 'paper') {
			target.src = './src/images/paper-hover.svg';
		}

		if (target.id === 'scissors') {
			target.src = './src/images/scissors-hover.svg';
		}
	}

	inactiveHover(event: Event): void {
		const target: HTMLImageElement = <HTMLImageElement>event.target;

		if (target.id === 'rock') {
			target.src = './src/images/rock.svg';
		}

		if (target.id === 'paper') {
			target.src = './src/images/paper.svg';
		}

		if (target.id === 'scissors') {
			target.src = './src/images/scissors.svg';
		}
	}

	//Handler is round game play
	//Another one would be about scores and logs
	selectWeapon(handler: Function) {
		this.userSelect?.forEach((weapon) => {
			weapon.addEventListener('click', function () {
				handler(weapon.id);
			});
		});
	}

	bindSelectionHoverEvents() {
		this.userSelect?.forEach((select) => {
			select.addEventListener('mouseenter', (e: Event) => {
				this.activeHover(e);
			});
		});

		this.userSelect.forEach((select) => {
			select.addEventListener('mouseleave', (e: Event) => {
				this.inactiveHover(e);
			});
		});
	}

	bindPlayAgainButton() {
		this.playAgainButton?.addEventListener('click', () => {
			window.location.reload(true);
		});
	}
}

export { View as UI };
