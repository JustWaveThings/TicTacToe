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

const Game = (function (GameBoard) {})();

const GameBoard = (function () {
	const squares = document.querySelectorAll('.space');

	const overHeadDisplay = document.querySelector('.display');
	const displayNamePlayer1 = document.querySelector('.player.left');
	const displayNamePlayer2 = document.querySelector('.player.right');

	gameMoves = ['', '', '', '', '', '', '', '', ''];

	let activePlayer = player1;

	displayNamePlayer1.textContent = player1.name;
	displayNamePlayer2.textContent = player2.name;

	function changePlayerMarker() {
		activePlayer === player1
			? (activePlayer = player2)
			: (activePlayer = player1);
	}
	squares.forEach((squares) => {
		squares.addEventListener(
			'click',
			(e) => {
				console.log(e.target.id);
				gameMoves[e.target.id] = activePlayer.marker;
				console.log(gameMoves);
				e.target.textContent = activePlayer.marker;

				changePlayerMarker();
				overHeadDisplay.textContent = `${activePlayer.name} - your turn!`;
			},
			{ once: true }
		);
	});
})();
