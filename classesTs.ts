class Item {
	constructor(
		readonly id: number,
		private name: string,
		private type: string,
		protected _price: number,
		public inStorage: number
	) {}

	get getItem(): string {
		return `${this.name}, ${this.type}, ${this._price}€, ${this.inStorage} in storage.`;
	}

	set setType(newType: string) {
		this.type = newType;
		console.log(`Type was set to ${this.type}.`);
	}
}

const keyboard = new Item(23454, 'RGB-Keyboard', 'electronic', 49.99, 6);

keyboard.setType = 'peripheral';
console.log(keyboard.getItem);

class SaleItem extends Item {
	public isOnSale: boolean = true;
	constructor(
		id: number,
		name: string,
		type: string,
		_price: number,
		inStorage: number,
		public discount: number
	) {
		super(id, name, type, _price, inStorage);
	}

	get getDiscount(): string {
		const discountPrice = this._price - this._price * (this.discount / 100);
		return `The discount price is ${discountPrice}€.`;
    }
    
    set setDiscount(newDiscount: number) {
        this.discount = newDiscount;
        console.log(`Discount was set to ${newDiscount}%.`)
    }
}

const macbookPro = new SaleItem(42341, 'Macbook Pro 2015', 'electronic', 1249.5, 2, 15);

console.log(macbookPro.getItem);
macbookPro.setDiscount = 10;
console.log(macbookPro.getDiscount);
