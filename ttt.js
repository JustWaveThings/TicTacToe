// only 3 modules/factory functions this time

/* Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later! */

const GameBoard = (function (moves, names, reset, rematch) {})();

/*
inputs
- recieves valid moves from game
- receieves players names
- receieves input to clear board at reset / rematch

functions
- create private gameboard array
- add event listeners to board squares with 'once' attribute as true.
- push events to private gameboard array
- displays game status  (active, draw, player1 name won, player2 name won)
- displays player names 
- reset board to start and no names on reset
- reset board to start for rematch (keep names)


returns
- board state array after move to public variable from private variable

*/

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

console.log(`${player1.name}, marker - ${player1.marker}`);
console.log(`${player2.name}, marker - ${player2.marker}`);
/*
inputs
- none

functions
- gathers player 1/2 names via prompt  -- assigns them to a private variable
- assigns player 1 - X, player 2 - O -- assigns them to a private variable

returns 
- players names that is a public variable
- players markers that is a public variable
 */

const Game = (function (GameBoard) {})();

/*
inputs 
- GameBoard state array 

functions
- set beginning player (for simplicity, it will always be player 1) (private)
- toggle active player after each valid gameboard click event fired or function call (private / public)
- game status - check for win/tie condition against the gameboard on same event fire or function call  (private / public)
- rematch game to 'rematch' which keeps the names, but clears the board
- reset which asks for new names - both clear board of markers / resets gameboard array

returns 
- current player
- game status (active, draw, player1 name won, player2 name won)

*/
