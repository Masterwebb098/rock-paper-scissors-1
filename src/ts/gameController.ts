class Controller {
	game: any;
	ui: any;

	constructor(game: any, ui: any) {
		this.game = game;
		this.ui = ui;
	}

	handleSelectWeapon(selection: string): void {
		this.game.playRound(selection);
	}

	handleUserInterfaceEvents(): void {
		this.ui.bindPlayAgainButton();
		this.ui.bindSelectionHoverEvents();
	}

	render(): void {
		this.handleUserInterfaceEvents();

		this.ui.selectWeapon(this.handleSelectWeapon);
	}
}

export { Controller };
