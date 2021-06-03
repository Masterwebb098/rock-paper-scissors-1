//Game Class acts as the controller
//Player Class acts as the data since
//Computer class acts as data from random algorithm
//UI that acts as the view has update score from game and announce

//https://drstearns.github.io/tutorials/eventarch/
//https://drstearns.github.io/tutorials/mvc/
//https://www.clear.rice.edu/comp212/00-spring/tutorials/03/mvc.html
//https://people.eecs.ku.edu/~hossein/Teaching/Sp08/816/Lec/design-patterns-06.pdf   12

//constants
const BALL_RADIUS: number = 5;
const PADDLE_X: number = 5;
const PADDLE_WIDTH: number = 5;
const PADDLE_HEIGHT: number = 15;

interface Ball {
	x: number;
	y: number;
	vectorX: number;
	vectorY: number;
}

interface Paddle {
	y: number;
}

interface State {
	ball: Ball;
	paddle: Paddle;
}

//Application state
let state: State = {
	ball: {
		x: 0,
		y: 0,
		vectorX: 1,
		vectorY: 1,
	},

	paddle: {
		y: 0,
	},
};
