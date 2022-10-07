// only 3 modules/factory functions this time

const Game = (function () {})();

const Player = (name, marker) => {
	return { name, marker };
};

const player1 = Player(
	prompt('What is your name player 1?', 'Trey'),
	'X'
);
const player2 = Player(
	prompt('What is your name player 2?', 'Toby'),
	'O'
);

const GameBoard = (function () {
	const squares = document.querySelectorAll('.space');

	const overHeadDisplay = document.querySelector('.display');
	const displayNamePlayer1 = document.querySelector('.player.left');
	const displayNamePlayer2 = document.querySelector('.player.right');

	const reset = document.querySelector('.reset');

	gameMoves = ['', '', '', '', '', '', '', '', ''];

	let activePlayer = player1;
	let endGame = false;

	displayNamePlayer1.textContent = player1.name;
	displayNamePlayer2.textContent = player2.name;

	reset.addEventListener('click', function (e) {
		window.location.reload();
	});

	function changePlayerMarker() {
		activePlayer === player1
			? (activePlayer = player2)
			: (activePlayer = player1);
	}

	function checkWinDraw() {
		const winnerList = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winnerList.length; i++) {
			if (
				gameMoves[winnerList[i][0]] === gameMoves[winnerList[i][1]] &&
				gameMoves[winnerList[i][0]] === gameMoves[winnerList[i][2]] &&
				gameMoves[winnerList[i][0]] !== ''
			) {
				const blinkWinnerSpace1 = document.getElementById(
					`${winnerList[i][0]}`
				);
				const blinkWinnerSpace2 = document.getElementById(
					`${winnerList[i][1]}`
				);
				const blinkWinnerSpace3 = document.getElementById(
					`${winnerList[i][2]}`
				);
				blinkWinnerSpace1.classList.add('winner');
				blinkWinnerSpace2.classList.add('winner');
				blinkWinnerSpace3.classList.add('winner');
				overHeadDisplay.textContent = `${activePlayer.name} - YOU WON!`;
				endGame = true;
			}
		}

		if (!gameMoves.includes('')) {
			endGame = true;
			overHeadDisplay.textContent =
				"It's a Draw! Hit reset to play a new game.";
		}
	}

	squares.forEach((squares) => {
		squares.addEventListener(
			'click',
			(e) => {
				gameMoves[e.target.id] = activePlayer.marker;
				e.target.textContent = activePlayer.marker;
				checkWinDraw();
				console.log(!endGame);
				if (!endGame) {
					changePlayerMarker();
					overHeadDisplay.textContent = `${activePlayer.name} - your turn!`;
				}
			},
			{ once: true }
		);
	});
})();
