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
	ballTimer?: number | void;
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

let circle = document.querySelector('svg circle');
let rect = document.querySelector('svg rect');

//render will render the state to the page elements
function render(state: State): void {
	circle?.setAttribute('cx', String(state.ball.x));
	circle?.setAttribute('cy', String(state.ball.y));
	rect?.setAttribute('y', String(state.paddle.y));
}

render(state);

function animate(): void {
	state.ball.x += state.ball.vectorX;
	state.ball.y += state.ball.vectorY;

	if (
		state.ball.y - BALL_RADIUS <= 0 ||
		state.ball.y - BALL_RADIUS >= window.innerHeight
	) {
		state.ball.vectorY *= -1;
	}

	if (state.ball.x + BALL_RADIUS >= window.innerWidth) {
		state.ball.vectorX *= -1;
	}

	if (
		state.ball.x - BALL_RADIUS <= PADDLE_X + PADDLE_WIDTH &&
		state.ball.y >= state.paddle.y &&
		state.ball.y <= state.paddle.y + PADDLE_HEIGHT
	) {
		state.ball.vectorX *= -1;
	}

	render(state);
}

state.ballTimer = setInterval(animate, 16);

function adjustPaddle(e: HTMLInputElement | any) {
	state.paddle.y = e.clientY - PADDLE_HEIGHT / 2;

	render(state);
}

document.body.addEventListener('mousemove', adjustPaddle);
