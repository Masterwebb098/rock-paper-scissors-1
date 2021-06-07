import { Game } from './game';
import { UI } from './game_UI';
import { Controller } from './gameController';

const rockPaperScissors = new Controller(new Game(), new UI());

rockPaperScissors.render();
