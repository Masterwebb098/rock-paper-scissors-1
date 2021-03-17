
export function activeHover() {
    if (this.id === 'rock') {
        this.src = './images/rock-hover.svg';
    }
    if (this.id === 'paper') {
        this.src = './images/paper-hover.svg';
    }
    if (this.id === 'scissors') {
        this.src = './images/scissors-hover.svg';
    }
}

export function removeHover() {
    if (this.id === 'rock') {
        this.src = './images/rock.svg';
    }
    if (this.id === 'paper') {
        this.src = './images/paper.svg';
    }
    if (this.id === 'scissors') {
        this.src = './images/scissors.svg';
    }
}

