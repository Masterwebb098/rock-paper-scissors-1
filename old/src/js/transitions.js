//Functions for hover
export function activeHover() {
	if (this.id === 'rock') {
		this.src = './src/images/rock-hover.svg';
	}
	if (this.id === 'paper') {
		this.src = './src/images/paper-hover.svg';
	}
	if (this.id === 'scissors') {
		this.src = './src/images/scissors-hover.svg';
	}
}

export function removeHover() {
	if (this.id === 'rock') {
		this.src = './src/images/rock.svg';
	}
	if (this.id === 'paper') {
		this.src = './src/images/paper.svg';
	}
	if (this.id === 'scissors') {
		this.src = './src/images/scissors.svg';
	}
}
