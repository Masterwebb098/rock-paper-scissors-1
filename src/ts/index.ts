import { Game } from './gamePlay';
import { UI } from './gameUI';
import { Controller } from './gameController';
import '../style/style.css';

const rockPaperScissors = new Controller(new Game(), new UI());

rockPaperScissors.render();
