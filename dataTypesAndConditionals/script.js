function favoriteAnimal(animal) {
	return `Your favorite animal is ${animal}`;
}

console.log(favoriteAnimal("Goat"));
console.log(favoriteAnimal("Curcan"));

function favoriteFood(food) {
	return `My favorite food is ${food}`;
}

console.error(favoriteFood("Burger"));

function add7(number) {
	return number + 7;
}

console.warn(add7(7));

// Multiply function

function multiply(num1, num2) {
	return num1 * num2;
}

console.log(multiply(5, 6));

//Capitalize

function capitalize(text) {
	const toLower = text.toLowerCase();
	const array = toLower.split("");
	array[0] = array[0].toUpperCase();
	const newString = array.join("");
	return newString;
}

console.log(capitalize("ROLAND"));
console.log(capitalize("iulia"));
console.log(capitalize("dana"));

// Last letter function

function lastLetter(userInputText) {
	return userInputText[userInputText.lenght - 1];
}

console.log(lastLetter("Roland"));
