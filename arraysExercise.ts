// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
	name: string;
	price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
	let sum: number = 0;
	products.forEach(product => (sum += product.price));
	return sum;
}

const productArray: Product[] = [{ name: 'coffee mug', price: 11.50 }, { name: 'coffee', price: 4 }, { name: 'filter', price: 3 }, { name: 'milk', price: 1.50 }]

console.log(getTotal(productArray))