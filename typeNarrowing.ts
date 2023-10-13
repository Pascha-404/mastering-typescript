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

// Type predicate
interface Item {
	name: string;
	price: number;
	count: number;
	lastReduced: string;
}

interface SaleItem {
	name: string;
	price: number;
	count: number;
	sale: boolean;
	discount: number;
}

function isSaleItem(product: Item | SaleItem): product is SaleItem {
	return (product as SaleItem).sale !== undefined;
}

function advertiseItem(product: Item | SaleItem): string {
	if (isSaleItem(product)) {
		return `Big sale on ${product.name}! Safe ${product.discount}%. ${product.count} in stock!`;
	}
	return `Item not in sale. Last time on sale was ${product.lastReduced}.`;
}

const airpods: SaleItem = {
	name: 'AirPods',
	price: 199,
	count: 6,
	sale: true,
	discount: 15,
};

const headset: Item = {
	name: 'Logitech Headset',
	price: 60,
	count: 30,
	lastReduced: '20.07.2023',
};

console.log(advertiseItem(airpods));
console.log(advertiseItem(headset));

// Discriminated Unions
interface Member {
	active: boolean;
	fullName: string;
	age: number;
}

interface MonthlyMember extends Member {
	kind: 'monthly';
}

interface YearlyMember extends Member {
	kind: 'yearly';
}

interface HalfyearMember extends Member {
	kind: 'halfyear';
}

interface UnlimitedMember extends Member {
	kind: 'unlimited';
}

type Members = MonthlyMember | YearlyMember | HalfyearMember;

function checkPermission(member: Members): string {
	switch (member.kind) {
		case 'monthly':
			return 'Member has 4 times a week access.';
		case 'halfyear':
			return 'Member has access once a day.';
		case 'yearly':
			return 'Member has unlimited access.';
		default:
			// Code should never reach this point
			const _exhaustivenessCheck: never = member;
			return _exhaustivenessCheck;
	}
}

const member1: MonthlyMember = {
	active: true,
	fullName: 'Mary Pettinson',
	age: 20,
	kind: 'monthly',
};

const member2: HalfyearMember = {
	active: true,
	fullName: 'James Jameson',
	age: 35,
	kind: 'halfyear',
};

const member3: YearlyMember = {
	active: true,
	fullName: 'Kurt Karlsen',
	age: 41,
	kind: 'yearly',
};

const member4: UnlimitedMember = {
	active: true,
	fullName: 'Rose Reddington',
	age: 90,
	kind: 'unlimited',
};

console.log(checkPermission(member1));
console.log(checkPermission(member2));
console.log(checkPermission(member3));
console.log(checkPermission(member4));
