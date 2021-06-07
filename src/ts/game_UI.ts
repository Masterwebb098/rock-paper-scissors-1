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
		const targetId: string = (<HTMLInputElement>event.target).id;
		let targetSource: string = (<HTMLInputElement>event.target).src;
		console.log(`lol`);
		if (targetId === 'rock') {
			targetSource = './src/images/rock-hover.svg';
		}

		if (targetId === 'paper') {
			targetSource = './src/images/paper-hover.svg';
		}

		if (targetId === 'scissors') {
			targetSource = './src/images/scissors-hover.svg';
		}
	}

	inactiveHover(event: Event): void {
		const targetId: string = (<HTMLInputElement>event.target).id;
		let targetSource: string = (<HTMLInputElement>event.target).src;

		if (targetId === 'rock') {
			targetSource = './src/images/rock.svg';
		}

		if (targetId === 'paper') {
			targetSource = './src/images/paper.svg';
		}

		if (targetId === 'scissors') {
			targetSource = './src/images/scissors.svg';
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
	}

	bindPlayAgainButton() {
		this.playAgainButton?.addEventListener('click', () => {
			window.location.reload(true);
		});
	}
}

export { View as UI };
