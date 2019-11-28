//jshint esversion: 6

const startGame = document.getElementById('btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}`, '').toUpperCase();
    if(
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerCoice = () => {
    const randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0) return ROCK;
    else if(randomValue == 1) return PAPER;
    else return SCISSORS;
};

const getWinner = function(cChoice, pChoice) {
     if(cChoice === pChoice) return RESULT_DRAW;
    else if ((cChoice === ROCK && pChoice === PAPER) || 
            (cChoice === PAPER && pChoice === SCISSORS) ||
            (cChoice === SCISSORS && pChoice === ROCK)) return RESULT_PLAYER_WINS;
    else {return RESULT_COMPUTER_WINS;}
};


startGame.addEventListener('click', () => {
    if(gameIsRunning) {return;}
    gameIsRunning = true;
    console.log('The game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerCoice();
    const winner =  getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice} and computer picked ${computerChoice}, therefore you `;
    
    if (winner === RESULT_DRAW) {
        message += 'have a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message += 'won';
    } else {
        message += 'loose';
    }

    console.log(message);

    gameIsRunning = false;
});