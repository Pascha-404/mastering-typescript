// Function is type specific
// For very different type needs a new function to be set up
function getRandomNumber(numArray: number[]): number {
	const randomNumber = Math.floor(numArray.length * Math.random());
	return numArray[randomNumber];
}

console.log(getRandomNumber([3, 1, 432, 21, 32]));

// Function is type dynamic
// Type gets set manual in < >, auto sets function input/output to added type
function getRandom<T>(elArray: T[]): T {
	const randomIndex = Math.floor(elArray.length * Math.random());
	return elArray[randomIndex];
}

console.log(getRandom<string>(['Patrick', 'Kseniia', 'Joe', 'Eve', 'Margrit']));
console.log(getRandom<number>([3, 1, 432, 21, 32]));

// <Type> setting can also be set by TypeScript automatically
console.log(
	getRandom([
		{ id: 1, username: 'DonJuan', posts: 4 },
		{ id: 2, username: 'BillyRed', posts: 20 },
		{ id: 3, username: 'RootAdmin', posts: 439 },
	])
);

// Generic with constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

console.log(merge({ name: 'Susen', id: 34 }, { salary: 2300, holidays: 28 }));
