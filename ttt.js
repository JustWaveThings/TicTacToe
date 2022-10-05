// only 3 modules/factory functions this time

/* Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later! */

const GameBoard = (function () {})();

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

/* console.log(`${player1.name}, marker - ${player1.marker}`);
console.log(`${player2.name}, marker - ${player2.marker}`); */

const Game = (function (GameBoard) {})();
