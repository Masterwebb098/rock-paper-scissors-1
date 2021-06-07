"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(game, ui) {
        this.game = game;
        this.ui = ui;
    }
    handleSelectWeapon(selection) {
        return this.game.playRound(selection);
    }
    handleUserInterfaceEvents() {
        this.ui.bindPlayAgainButton();
        this.ui.bindSelectionHoverEvents();
    }
    render() {
        this.handleUserInterfaceEvents();
        this.ui.selectWeapon(this.handleSelectWeapon);
    }
}
exports.Controller = Controller;
