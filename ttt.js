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

const Player = (name, marker) => {
	playerList.push(name);
	console.log(`${playerList}`);
	return { name, marker };
};

let playerList = [];

const abby = Player('abby');
const david = Player('david');

/* Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)
 */

const board = (() => {
	let gameboard = ['', '', '', '', '', '', '', '', ''];
	const space0 = document.querySelector('#s0');
	space0.textContent = gameboard[0];
	const space1 = document.querySelector('#s1');
	space1.textContent = gameboard[1];
	const space2 = document.querySelector('#s2');
	space2.textContent = gameboard[2];
	const space3 = document.querySelector('#s3');
	space3.textContent = gameboard[3];
	const space4 = document.querySelector('#s4');
	space4.textContent = gameboard[4];
	const space5 = document.querySelector('#s5');
	space5.textContent = gameboard[5];
	const space6 = document.querySelector('#s6');
	space6.textContent = gameboard[6];
	const space7 = document.querySelector('#s7');
	space7.textContent = gameboard[7];
	const space8 = document.querySelector('#s8');
	space8.textContent = gameboard[8];
})();
