"use strict";
//Game Class acts as the controller
//Player Class acts as the data since
//Computer class acts as data from random algorithm
//UI that acts as the view has update score from game and announce
//https://drstearns.github.io/tutorials/eventarch/
//https://drstearns.github.io/tutorials/mvc/
//https://www.clear.rice.edu/comp212/00-spring/tutorials/03/mvc.html
//https://people.eecs.ku.edu/~hossein/Teaching/Sp08/816/Lec/design-patterns-06.pdf   12
//constants
var BALL_RADIUS = 5;
var PADDLE_X = 5;
var PADDLE_WIDTH = 5;
var PADDLE_HEIGHT = 15;
//Application state
var state = {
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
var circle = document.querySelector('svg circle');
var rect = document.querySelector('svg rect');
//render will render the state to the page elements
function render(state) {
    circle === null || circle === void 0 ? void 0 : circle.setAttribute('cx', String(state.ball.x));
    circle === null || circle === void 0 ? void 0 : circle.setAttribute('cy', String(state.ball.y));
    rect === null || rect === void 0 ? void 0 : rect.setAttribute('y', String(state.paddle.y));
}
render(state);
function animate() {
    state.ball.x += state.ball.vectorX;
    state.ball.y += state.ball.vectorY;
    if (state.ball.y - BALL_RADIUS <= 0 ||
        state.ball.y - BALL_RADIUS >= window.innerHeight) {
        state.ball.vectorY *= -1;
    }
    if (state.ball.x + BALL_RADIUS >= window.innerWidth) {
        state.ball.vectorX *= -1;
    }
    if (state.ball.x - BALL_RADIUS <= PADDLE_X + PADDLE_WIDTH &&
        state.ball.y >= state.paddle.y &&
        state.ball.y <= state.paddle.y + PADDLE_HEIGHT) {
        state.ball.vectorX *= -1;
    }
    render(state);
}
state.ballTimer = setInterval(animate, 16);
function adjustPaddle(e) {
    state.paddle.y = e.clientY - PADDLE_HEIGHT / 2;
    render(state);
}
document.body.addEventListener('mousemove', adjustPaddle);
