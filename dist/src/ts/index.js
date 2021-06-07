"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const game_UI_1 = require("./game_UI");
const gameController_1 = require("./gameController");
const rockPaperScissors = new gameController_1.Controller(game_1.Game, game_UI_1.UI);
rockPaperScissors.render();
