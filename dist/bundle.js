/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\nvar Game = /** @class */ (function () {\n    function Game() {\n        this.computerPlay = function () {\n            var choice = ['rock', 'paper', 'scissors'];\n            //Auto generate index number for random selection\n            return choice[Math.floor(Math.random() * choice.length)];\n        };\n        this._playerScore = 0;\n        this._computerScore = 0;\n    }\n    Object.defineProperty(Game.prototype, \"scores\", {\n        get: function () {\n            return [this._playerScore, this._computerScore];\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Game.prototype.addScore = function (player, computer) {\n        this._playerScore += player;\n        this._computerScore += computer;\n    };\n    Game.prototype.playRound = function (playerSelection) {\n        var playerSelect = playerSelection.toLowerCase();\n        var opponentSelect = this.computerPlay();\n        if ((playerSelect === 'rock' && opponentSelect === 'scissors') ||\n            (playerSelect === 'scissors' && opponentSelect === 'paper') ||\n            (playerSelect === 'paper' && opponentSelect === 'rock')) {\n            this.addScore(1, 0);\n        }\n        if ((opponentSelect === 'rock' && playerSelect === 'scissors') ||\n            (opponentSelect === 'scissors' && playerSelect === 'paper') ||\n            (opponentSelect === 'paper' && playerSelect === 'rock')) {\n            this.addScore(0, 1);\n        }\n        if (playerSelect === opponentSelect)\n            this.addScore(0, 0);\n    };\n    Game.prototype.resetScore = function (player, computer) {\n        this._playerScore = 0;\n        this._computerScore = 0;\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/ts/game.ts?");

/***/ }),

/***/ "./src/ts/gameController.ts":
/*!**********************************!*\
  !*** ./src/ts/gameController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\nvar Controller = /** @class */ (function () {\n    function Controller(game, ui) {\n        this.game = game;\n        this.ui = ui;\n    }\n    Controller.prototype.handleSelectWeapon = function (selection) {\n        this.game.playRound(selection);\n    };\n    Controller.prototype.handleUserInterfaceEvents = function () {\n        this.ui.bindPlayAgainButton();\n        this.ui.bindSelectionHoverEvents();\n    };\n    Controller.prototype.render = function () {\n        this.handleUserInterfaceEvents();\n        this.ui.selectWeapon(this.handleSelectWeapon);\n    };\n    return Controller;\n}());\n\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/ts/gameController.ts?");

/***/ }),

/***/ "./src/ts/game_UI.ts":
/*!***************************!*\
  !*** ./src/ts/game_UI.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ View)\n/* harmony export */ });\n//github.com/migace/js-plain-mvc/blob/master/src/View.ts\nvar View = /** @class */ (function () {\n    function View() {\n        this.scoreBoard = document.querySelector('#scoreboard-container > h3');\n        this.userSelect = document.querySelectorAll('.selection');\n        this.playAgainButton = document.getElementById('playButton');\n    }\n    View.prototype.activeHover = function (event) {\n        var targetId = event.target.id;\n        var targetSource = event.target.src;\n        console.log(\"lol\");\n        if (targetId === 'rock') {\n            targetSource = './src/images/rock-hover.svg';\n        }\n        if (targetId === 'paper') {\n            targetSource = './src/images/paper-hover.svg';\n        }\n        if (targetId === 'scissors') {\n            targetSource = './src/images/scissors-hover.svg';\n        }\n    };\n    View.prototype.inactiveHover = function (event) {\n        var targetId = event.target.id;\n        var targetSource = event.target.src;\n        if (targetId === 'rock') {\n            targetSource = './src/images/rock.svg';\n        }\n        if (targetId === 'paper') {\n            targetSource = './src/images/paper.svg';\n        }\n        if (targetId === 'scissors') {\n            targetSource = './src/images/scissors.svg';\n        }\n    };\n    //Handler is round game play\n    //Another one would be about scores and logs\n    View.prototype.selectWeapon = function (handler) {\n        var _a;\n        (_a = this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach(function (weapon) {\n            weapon.addEventListener('click', function () {\n                handler(weapon.id);\n            });\n        });\n    };\n    View.prototype.bindSelectionHoverEvents = function () {\n        var _this = this;\n        var _a;\n        (_a = this.userSelect) === null || _a === void 0 ? void 0 : _a.forEach(function (select) {\n            select.addEventListener('mouseenter', function (e) {\n                _this.activeHover(e);\n            });\n        });\n    };\n    View.prototype.bindPlayAgainButton = function () {\n        var _a;\n        (_a = this.playAgainButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\n            window.location.reload(true);\n        });\n    };\n    return View;\n}());\n\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/ts/game_UI.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/ts/game.ts\");\n/* harmony import */ var _game_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_UI */ \"./src/ts/game_UI.ts\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameController */ \"./src/ts/gameController.ts\");\n\n\n\nvar rockPaperScissors = new _gameController__WEBPACK_IMPORTED_MODULE_2__.Controller(new _game__WEBPACK_IMPORTED_MODULE_0__.Game(), new _game_UI__WEBPACK_IMPORTED_MODULE_1__.UI());\nrockPaperScissors.render();\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;