class User {
	#username;
	#name;
	#lastName;
	constructor(username, name, lastName) {
		this.#username = username;
		this.#name = name;
		this.#lastName = lastName;
	}

	get getUsername() {
		return console.log(`User has the Username: ${this.#username}`);
	}
	get getData() {
		console.log(this.#username, this.#name, this.#lastName);
	}
	set setUsername(newUsername) {
		this.#username = newUsername;
		console.log(`Username was set to: ${newUsername}`);
	}
}

class AdminUser extends User {
	#admin;
	constructor(username, name, lastName) {
		super(username, name, lastName);
		this.#admin = true;
	}
	get getAdminStatus() {
		console.log(`This users admin rights are ${this.#admin ? 'active' : 'inactive'}. `);
	}

	set setAdminStatus(boolean) {
		this.#admin = boolean;
		console.log(`Admin status was set to ${boolean}`);
	}
}

const patrick = new AdminUser('MightyKiwi', 'Patrick', 'Miller');
