// manage state of gameboard only
const GameBoard = (function () {})();
/* Must return current state of board so GameWinnerDraw can check for winner
Must allow updateGameBoard to update square states */

// checks for winner/draw
const GameWinnerDraw = (function () {})();
/* 
must check for win/draw and call GameEnd when condition is met
 */

// holds player methods specific to player factory
const Player = () => {
	// make sure we return the methods we want to use
};

// puts event listeners on each space
const GameBoardListeners = (function () {})();

// pushes UI interactions the GameBoard Module, which manages board state only
const UpdateGameBoard = () => {};

// gamestart - gathers the info to start the game
const GameStart = () => {};

// gameend - handles end of game

const GameEnd = (function () {})();
