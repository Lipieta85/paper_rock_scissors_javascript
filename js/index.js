'use strict';

function printOutput(selector_id, text) {
	document.getElementById(selector_id).innerHTML = text;
}

var newGameButton = document.getElementById('newGame');
newGameButton.addEventListener('click', function () { newGame() })

var pickPaper = document.getElementById('Paper');
var pickRock = document.getElementById('Rock');
var pickScissors = document.getElementById('Scissors');

pickPaper.addEventListener('click', function () { playerMoveAction('Paper') })
pickRock.addEventListener('click', function () { playerMoveAction('Rock') })
pickScissors.addEventListener('click', function () { playerMoveAction('Scissors') })

var pickAllBtn = document.getElementById('pickElem');
var newGameElem = document.getElementById('newGameElement');
var resultsElem = document.getElementById('resultsTableElement');

var playerScore;
var computerScore;

var gameState = 'notStarted',
	playerScore = 0,
	computerScore = 0,
	roundNumber = 0;

function setGameElements() {
	switch (gameState) {
		case 'started':
			newGameElem.style.display = 'block';
			pickAllBtn.style.display = 'block';
			resultsElem.style.display = 'block';
			break;
		case 'ended':
			newGameButton.innerText = 'Play Again';
			pickAllBtn.style.display = 'none';
			resultsElem.style.display = 'block';
      break;
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickAllBtn.style.display = 'none';
			resultsElem.style.display = 'block';
	}
}
setGameElements();

function newGame() {
  
  playerScore = 0;
	computerScore = 0;
	roundNumber = prompt('How many rounds will end the game?');
	if (roundNumber < 99) {
		gameState = 'started';
	}
	if ((roundNumber === '') || (roundNumber === null)) {
		gamestate = 'default'
	}
  
	printOutput('numRoundToWin', roundNumber);
	printOutput('result', '');
	printOutput('result1', '');
	setGameElements();
};

function playerMoveAction(playerMove) {

	var gameOptions = new Array('Paper', 'Rock', 'Scissors');
	var computerMove = gameOptions[Math.floor(Math.random() * 3)];
	printOutput('output2', playerMove);
	printOutput('output3', computerMove);

	switch (isPlayerWin(playerMove, computerMove, )) {
		case 1:
			playerScore += 1
			printOutput('result', 'Player Win');
			if (playerScore == roundNumber) {
				printOutput('result1', 'You Won entire game!');
				gameState = 'ended';
			};
			break;
		case 0:
			printOutput('result', 'Nobody Win');
			break;
		case -1:
			computerScore += 1
			printOutput('result', 'Computer Win');
			if (computerScore == roundNumber) {
				printOutput('result1', 'You lose!, computer won entire game');
				gameState = 'ended';
			};
			break;
	};
	setGameElements();
	printOutput('playerScore', playerScore);
	printOutput('computerScore', computerScore);
};

function isPlayerWin(playerMove, computerMove) {
	if (playerMove == computerMove) {
		return 0;
	}
	if ((playerMove == 'Paper' && computerMove == 'Rock') || (playerMove == 'Rock' && computerMove == 'Scissors') || (playerMove == 'Scissors' && computerMove == 'Paper')) {
		return 1;
	}
	return -1;
};