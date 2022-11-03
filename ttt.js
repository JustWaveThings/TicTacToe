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

player1.setName(prompt(`Player One - What is your name?`, 'Odin'));
player2.setName(prompt(`Player Two - What is your name?`, 'Thor'));

const Game = (function () {
	let activePlayer;
	let startPlayer = player1;
	let i = 0;

	function whoIsPlaying(i) {
		if (i === 0) {
			i++;
			return startPlayer;
		}
		if (i !== 0) {
			return changePlayerMarker();
		}
	}

	whoIsPlaying(i);

	function changePlayerMarker() {
		if (activePlayer === player1) {
			activePlayer = player2;
			return activePlayer;
		} else {
			activePlayer = player1;
			return activePlayer;
		}
	}

	function disableClicksOnGameEnd() {
		GameBoard.squares.forEach((squares) => {
			squares.replaceWith(squares.cloneNode(true));
		});
	}

	function winMessage() {
		console.log('display win message');
		GameBoard.headsUpDisplay.textContent =
			"It's a WIN! Click Reset to play a new game.";
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
				winMessage();
				disableClicksOnGameEnd();
			}
		}

		if (!GameBoard.gameMoves.includes('')) {
			console.log('draw!');
			console.log(GameBoard.headsUpDisplay.textContent);
			GameBoard.headsUpDisplay.textContent =
				"It's a Draw! Click Reset to play a new game.";
			console.log(GameBoard.headsUpDisplay.textContent);
		}
	}
	return {
		disableClicksOnGameEnd,
		whoIsPlaying,
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

	function atClick(e) {
		gameMoves[e.target.id] = Game.whoIsPlaying().marker;
		e.target.textContent = Game.whoIsPlaying().marker;
		headsUpDisplay.textContent = `${Game.whoIsPlaying().getName()} - your turn!`;
		Game.checkWinDraw();
	}

	squares.forEach((squares) => {
		squares.addEventListener(
			'click',
			(e) => {
				atClick(e);
			},
			{ once: true }
		);
	});
	return {
		atClick,
		squares,
		headsUpDisplay,
		gameMoves,
	};
})();
