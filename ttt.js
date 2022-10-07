// only 3 modules/factory functions this time

/* Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later! */

const Player = (name, marker) => {
	return { name, marker };
};

const player1 = Player(
	/* prompt('What is your name player 1?') */ 'Trey',
	'X'
);
const player2 = Player(
	/*prompt('What is your name player 2?') */ 'Toby',
	'O'
);

const Game = (function () {})();

const GameBoard = (function () {
	const squares = document.querySelectorAll('.space');

	const overHeadDisplay = document.querySelector('.display');
	const displayNamePlayer1 = document.querySelector('.player.left');
	const displayNamePlayer2 = document.querySelector('.player.right');

	const reset = document.querySelector('.reset');

	gameMoves = ['', '', '', '', '', '', '', '', ''];

	let activePlayer = player1;

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
		console.table(winnerList);
		const winSampleList = [0, 1, 2];
		const gameSampleMoves = ['X', 'O', 'X', '', '', '', '', '', ''];

		/*  pseudocode 
 			for each nested array in winnerList check gameMoves array element positions value  to see if any contain 3 of the same marker. if yes, return that marker as winner and display end game message / remove listeners.  */

		/* // this works
		function checkWinSample() {
			gameSampleMoves[winSampleList[0]] ===
				gameSampleMoves[winSampleList[1]] &&
			gameSampleMoves[winSampleList[0]] ===
				gameSampleMoves[winSampleList[2]]
				? console.log(`${gameSampleMoves[winSampleList[0]]} has won`)
				: console.log('error');
		} */
		console.log(gameMoves);

		function checkWinSample2() {
			for (let i = 0; i < winnerList.length; i++) {
				if (
					gameMoves[winnerList[i][0]] ===
						gameMoves[winnerList[i][1]] &&
					gameMoves[winnerList[i][0]] ===
						gameMoves[winnerList[i][2]] &&
					gameMoves[winnerList[i][0]] !== ''
				) {
					console.log(
						`${gameMoves[winnerList[i][0]]} - has won the game!`
					);
				}
			}
		}

		checkWinSample2();

		/* 		gameMoves.includes('')
			? console.log('Keep playing!')
			: console.log("It's a draw!"); */
	}

	squares.forEach((squares) => {
		squares.addEventListener(
			'click',
			(e) => {
				gameMoves[e.target.id] = activePlayer.marker;
				e.target.textContent = activePlayer.marker;
				checkWinDraw();
				changePlayerMarker();
				overHeadDisplay.textContent = `${activePlayer.name} - your turn!`;
			},
			{ once: true }
		);
	});
})();
