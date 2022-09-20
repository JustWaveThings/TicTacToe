/* // factory method that returns an object  - from  learning outcomes
function myObject(data) {
	let obj = Object.create(myObject.proto);
	obj.data = data;
	return obj;
}

myObject.proto = {
	getData: function () {
		return this.data();
	},
};

let b = console.log(myObject('sample'));

// second factory function example

const personFactory = (name, age) => {
	this.sayHello = () => console.log('hello!');
	this.name = name;
	this.age = age;
	return { name, age, sayHello };
};

const fred = personFactory('fred', 41);

console.log(fred.name);

fred.sayHello();

// 3rd example

const counterCreator = () => {
	let count = 0;
	return () => {
		console.log(count);
		count++;
	};
};

const counter = counterCreator(); */

/* // 4th example of factory functions

const Player = (name, level) => {
	let health = level * 2;
	const getLevel = () => level;
	const getName = () => name;
	const die = () => {
		// uh oh
	};
	const damage = (x) => {
		health -= x;
		if (health <= 0) {
			die();
		}
	};

	const attack = (enemy) => {
		if (level < enemy.getLevel()) {
			damage(1);
			console.log(`${enemy.getName()} has damaged ${name}`);
		}
		if (level >= enemy.getLevel()) {
			enemy.damage(1);
			console.log(`${name} has damaged ${enemy.getName()}`);
		}
	};
	return { attack, damage, getLevel, getName };
};

const james = Player('James', 10);
const baddie = Player('Jeff', 8);
james.attack(baddie);
james.attack(james); */

const Player = (name, level) => {
	let health = level * 2;
	const getLevel = () => level;
	const getName = () => name;
	const die = () => {
		// I added this
		console.log(`${getName()} has died.`);
	};
	const damage = (x) => {
		health -= x;
		if (health <= 0) {
			die();
		}
	};
	const attack = (enemy) => {
		if (level < enemy.getLevel()) {
			damage(1);
			console.log(`${enemy.getName()} has damaged ${name}`);
		}
		if (level >= enemy.getLevel()) {
			enemy.damage(1);
			console.log(`${name} has damaged ${enemy.getName()}`);
		}
	};

	return { attack, damage, getLevel, getName };
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);

// my code below
function aGuyAlwaysWins(winner, attacks, loser) {
	let i = attacks;
	do {
		winner.attack(loser);
		i--;
	} while (i > 0);
}
//
aGuyAlwaysWins(badGuy, 20, jimmie);
