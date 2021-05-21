/**
 * Function: Updates score
 * @param {object} player scores
 * @param {array} array
 * @returns {array} [playerScore, computerScore, gameLog]
 */
const scoreUpdate = (gameScore, array) => {
	let key = Object.keys(gameScore);
	for (let i = 0; i < 2; i++) {
		gameScore[key[i]] += array[i];
	}
	return Object.values(gameScore).concat(array[2]);
};

//Function: game functions
const playGame = (() => {
	return {
		//Function: Plays a round
		playRound(playerSelection, computerSelection) {
			let boards = Array.from({ length: 3 });
			let select = playerSelection.toLowerCase();
			if (
				(select === 'rock' && computerSelection === 'scissors') ||
				(select === 'scissors' && computerSelection === 'paper') ||
				(select === 'paper' && computerSelection === 'rock')
			) {
				boards = [1, 0, `You win! ${select} beats ${computerSelection}.`];
				return boards;
			} else if (
				(computerSelection === 'rock' && select === 'scissors') ||
				(computerSelection === 'scissors' && select === 'paper') ||
				(computerSelection === 'paper' && select === 'rock')
			) {
				boards = [0, 1, `You lose! ${computerSelection} beats ${select}.`];
				return boards;
			} else if (computerSelection === select) {
				boards = [0, 0, `Draw!`];
				return boards;
			}
		},

		//Function: updates scoreboard
		liveUpdate(scoreBoard, gameLog, results) {
			scoreBoard[0].textContent = `${results[0]}`;
			scoreBoard[1].textContent = `${results[1]}`;
			gameLog.textContent = `${results[2]}`;
		},

		//Function: Displays endgame results
		endGame(resultArray) {
			let blur = document.getElementById('game');
			blur.classList.add('blur');
			let result = document.getElementById('result');
			result.classList.add('active');
			let announceText = ``;

			//Check results
			if (resultArray[0] > resultArray[1]) {
				announceText = `You have won the game!`;
			} else {
				announceText = 'You have lost. Computer has won the game !';
			}

			//Update result textcontent
			result.querySelector('h1').textContent = announceText;
		},
	};
})();

const computerPlay = () => {
	let choice = ['rock', 'paper', 'scissors'];
	//Auto generate index number for random selection
	return choice[Math.floor(Math.random() * choice.length)];
};

export { playGame, computerPlay, scoreUpdate };
