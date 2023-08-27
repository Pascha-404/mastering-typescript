// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

function twoFer(name: string = 'you'): string {
	return `one for ${name}, one for me`;
}

console.log(twoFer());
console.log(twoFer('Patrick'));


const isLeapyear = (year: number): boolean => {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	} else {
		return false;
	}
};

console.log(isLeapyear(1992))
console.log(isLeapyear(2000))
console.log(isLeapyear(1900))
