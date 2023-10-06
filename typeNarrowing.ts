// Typeof Guard
function logNumber(numb: string | number): number {
	if (typeof numb === 'string') {
		return parseInt(numb);
	}
	return numb;
}

console.log(logNumber('2345'));

// Truthiness Guard
interface Product {
	name: string;
	price: number;
	amount: number;
}

function getTotal(productArray?: Product[]) {
	let total: number = 0;
	if (productArray) {
		for (const product of productArray) {
			total += product.amount * product.price;
		}
		return `The total price for the products in your cart is ${total}€`;
	}
	return 'There are no products in your cart!';
}

console.log(
	getTotal([
		{ name: 'Pencil', price: 1.45, amount: 3 },
		{ name: 'A4-Paper-Block', price: 2, amount: 4 },
		{ name: 'Fineliner-Box', price: 6.75, amount: 2 },
	])
);

// Equality Narrowing
function checkAnswer(x: string | number, y: string | boolean) {
	if (x === y) {
		return x.toUpperCase();
	}
}

// In Operator Narrowing
interface Employe {
	name: string;
	position: string;
	salary: number;
}

interface Ceo {
	name: string;
	salary: number;
}

function getPosition(input: Employe | Ceo): string {
	if ('position' in input) {
		return `The employe has a position as ${input.position}.`;
	}
	return 'The provided data belongs to the CEO';
}

console.log(getPosition({ name: 'Maria', salary: 4500, position: 'Developer' }));
console.log(getPosition({ name: 'Daria', salary: 7000 }));

// Instanceof Narrowing
class SuperHero {
	constructor(public name: string, public superpower: string, public score: number) {}
	useSuperpower() {
		console.log(`${this.name} uses ${this.superpower}.`);
	}
}

class SuperVillian {
	constructor(public name: string, public evilTrick: string, public score: number) {}
	useEvilTrick() {
		console.log(`${this.name} uses ${this.evilTrick}.`);
	}
}

function triggerAttack(character: SuperHero | SuperVillian) {
	if (character instanceof SuperHero) {
		character.useSuperpower();
	} else {
		character.useEvilTrick();
	}
}

const superman = new SuperHero('Superman', 'Laser Eyes', 100);
const joker = new SuperVillian('Joker', 'Dad-Joke', 95);

triggerAttack(superman);
triggerAttack(joker);
