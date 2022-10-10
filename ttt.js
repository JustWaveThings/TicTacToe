// This time -- separate concerns / encapsulation  into  3 modules/factory functions

//// creates players
const Player = (marker) => {
	let name = 'PLAYER';
	const setName = (newName) => {
		name = newName;
	};
	const getName = () => name;
	return { name, marker, setName, getName };
};
const player1 = Player('X');
const player2 = Player('O');

player1.setName(prompt(`Player One - What is your name?`));
player2.setName(prompt(`Player Two - What is your name?`));

const Game = (function () {
	let activePlayer;
	let startPlayer = player1;
	let i = 0;
	let endGame = false;

	function whoIsPlaying(i) {
		if (i === 0) {
			i++;
			return startPlayer;
		}
		if (i !== 0) {
			return changePlayerMarker();
		}
	}

	function changePlayerMarker() {
		if (activePlayer === player1) {
			activePlayer = player2;
			console.log(
				`In changePlayerMarker Function --  the next marker is - ${activePlayer.marker}`
			);
			return activePlayer;
		} else {
			activePlayer = player1;
			console.log(
				`In changePlayerMarker Function --  the next marker is -${activePlayer.marker}`
			);
			return activePlayer;
		}
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
				GameBoard.gameMoves[winnerList[i][0]] ===
					GameBoard.gameMoves[winnerList[i][1]] &&
				GameBoard.gameMoves[winnerList[i][0]] ===
					GameBoard.gameMoves[winnerList[i][2]] &&
				GameBoard.gameMoves[winnerList[i][0]] !== ''
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
				GameBoard.headsUpDisplay.textContent = `${activePlayer.getName()} - YOU WON!`;
				endGame = true;
			}
		}

		if (!GameBoard.gameMoves.includes('')) {
			endGame = true;
			GameBoard.headsUpDisplay.textContent =
				"It's a Draw! Click Reset to play a new game.";
		}
	}
	return {
		whoIsPlaying,
		endGame,
		checkWinDraw,
		changePlayerMarker,
		activePlayer,
	};
})();

// gameboard handles visual input / output

const GameBoard = (function () {
	const squares = document.querySelectorAll('.space');

	const headsUpDisplay = document.querySelector('.display');
	const displayNamePlayer1 = document.querySelector('.player.left');
	const displayNamePlayer2 = document.querySelector('.player.right');

	const reset = document.querySelector('.reset');

	gameMoves = ['', '', '', '', '', '', '', '', ''];

	displayNamePlayer1.textContent = player1.getName();
	displayNamePlayer2.textContent = player2.getName();

	reset.addEventListener('click', function (e) {
		window.location.reload();
	});

	squares.forEach((squares) => {
		squares.addEventListener(
			'click',
			(e) => {
				gameMoves[e.target.id] = Game.whoIsPlaying().marker;
				e.target.textContent = Game.whoIsPlaying().marker;
				console.log(
					`This is the marker that was just placed on the board - ${
						gameMoves[e.target.id]
					}`
				);
				Game.checkWinDraw();
				if (!Game.endGame) {
					//console.log('game is not over');
					//Game.changePlayerMarker();
					/* console.log(
						`In the EventListener function after changePlayerMarker()  is called will be the next marker to be placed  - ${Game.activePlayer.marker}-- this should be the SAME value as what is in changePlayerMarker()`
					); */
					headsUpDisplay.textContent = `${Game.whoIsPlaying().getName()} - your turn!`;
				}
			},
			{ once: true }
		);
	});
	return {
		headsUpDisplay,
		gameMoves,
	};
})();
