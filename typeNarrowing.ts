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
