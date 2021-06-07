"use strict";
//github.com/migace/js-plain-mvc/blob/master/src/View.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
class View {
    constructor() {
        this.scoreBoard = document.querySelector('#scoreboard-container > h3');
        this.userSelect = document.querySelectorAll('.selection');
        this.playAgainButton = document.getElementById('playButton');
    }
    activeHover(event) {
        const targetId = event.target.id;
        let targetSource = event.target.src;
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
    inactiveHover(event) {
        const targetId = event.target.id;
        let targetSource = event.target.src;
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
    selectWeapon(handler) {
        var _a;
        (_a = this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach((weapon) => {
            weapon.addEventListener('click', function () {
                let roundResult = handler(weapon.id);
            });
        });
    }
    bindSelectionHoverEvents() {
        var _a;
        (_a = this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach((select) => {
            select.addEventListener('mouseenter', (e) => {
                this.activeHover(e);
            });
        });
    }
    bindPlayAgainButton() {
        var _a;
        (_a = this.playAgainButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            window.location.reload(true);
        });
    }
}
exports.UI = View;
