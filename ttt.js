/*  = (() => {
	const gameMoves =
		({ a1: 1, a2: 1, a3: 1 },
		{ b1: 1, b2: 1, b3: 1 },
		{ c1: 1, c2: 1, c3: 1 },
		{ a1: 1, b1: 1, c1: 1 },
		{ a2: 1, b2: 1, c2: 1 },
		{ a3: 1, b3: 1, c3: 1 },
		{ a1: 1, b2: 1, c3: 1 },
		{ a3: 1, b2: 1, c1: 1 });
})();

const Player = () => {
	const assignName = prompt('Enter your name: ');
	const assignToPosition = () => playerList.push(assignName);
	const sayName = () => console.log(`my name is ${assignName}`);
	return { assignName, assignToPosition, sayName };
};

playerList = [];

const player1 = Player();
const player2 = Player();

player1.assignName;
player1.assignToPosition();
player1.sayName();
 */
/* 
const Player = (name, marker) => {
	playerList.push(name);
	console.log(`${playerList}`);
	return { name, marker };
};

let playerList = [];

const abby = Player('abby');
const david = Player('david'); */

/* Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)
 */
/* 
  winning array examples
  0 1 2 3 4 5 6 7 8 
  X X X               // ACROSS(3)
        X X X
              X X X
  X     X     X       // DOWN(3)
   X      X     X
     X      X     X
  X       X       X      // DIAGONAL(2)
      X   X   X    

 */

const board = (() => {
	let playerTurn = 'O';

	function whoseTurn() {
		playerTurn === 'X' ? (playerTurn = 'O') : (playerTurn = 'X');
		return playerTurn;
	}
	let gameboard = ['', '', '', '', '', '', '', '', ''];

	let winnerList = [
		{ k1: 0, k2: 1, k3: 2 },
		{ k1: 3, k2: 4, k3: 5 },
		{ k1: 6, k2: 7, k3: 8 },
		{ k1: 0, k2: 3, k3: 6 },
		{ k1: 1, k2: 4, k3: 7 },
		{ k1: 2, k2: 5, k3: 8 },
		{ k1: 0, k2: 4, k3: 8 },
		{ k1: 2, k2: 4, k3: 6 },
	];

	const allSpaces = document.querySelectorAll('.space');
	for (let i = 0; i < allSpaces.length; i++) {
		allSpaces[i].addEventListener('pointerup', (e) => {
			gameEngine(e);
		});
	}

	function gameEngine(e) {
		let i = 0;
		do {
			function checkForWin(pos1, pos2, pos3, winner) {
				console.log(
					`${winnerList[i].k1}, ${winnerList[i].k2}, ${winnerList[i].k3}`
				);
				if (
					gameboard[pos1] === gameboard[pos2] &&
					gameboard[pos1] === gameboard[pos3] &&
					gameboard[pos1] !== ''
				) {
					console.log(`${winner} has won the game`);
				}
			}
			checkForWin(
				winnerList[i].k1,
				winnerList[i].k2,
				winnerList[i].k3,
				gameboard[winnerList[i].k1]
			);
			i++;
		} while (i <= winnerList.length - 1);
	}
	const space0 = document.querySelector('#s0');
	space0.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[0] = playerTurn;
			console.log({ gameboard });
			space0.textContent = playerTurn;
		},
		{ once: true }
	);
	const space1 = document.querySelector('#s1');
	space1.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[1] = playerTurn;
			console.log({ gameboard });
			space1.textContent = playerTurn;
		},
		{ once: true }
	);
	const space2 = document.querySelector('#s2');
	space2.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[2] = playerTurn;
			console.log({ gameboard });
			space2.textContent = playerTurn;
		},
		{ once: true }
	);
	const space3 = document.querySelector('#s3');
	space3.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[3] = playerTurn;
			console.log({ gameboard });
			space3.textContent = playerTurn;
		},
		{ once: true }
	);
	const space4 = document.querySelector('#s4');
	space4.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[4] = playerTurn;
			console.log({ gameboard });
			space4.textContent = playerTurn;
		},
		{ once: true }
	);
	const space5 = document.querySelector('#s5');
	space5.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[5] = playerTurn;
			console.log({ gameboard });
			space5.textContent = playerTurn;
		},
		{ once: true }
	);
	const space6 = document.querySelector('#s6');
	space6.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[6] = playerTurn;
			console.log({ gameboard });
			space6.textContent = playerTurn;
		},
		{ once: true }
	);
	const space7 = document.querySelector('#s7');
	space7.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[7] = playerTurn;
			console.log({ gameboard });
			space7.textContent = playerTurn;
		},
		{ once: true }
	);
	const space8 = document.querySelector('#s8');
	space8.addEventListener(
		'pointerup',
		(e) => {
			whoseTurn();
			gameboard[8] = playerTurn;
			console.log({ gameboard });
			space8.textContent = playerTurn;
		},
		{ once: true }
	);
})();
