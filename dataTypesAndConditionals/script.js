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
  console.log(toLower);
  const array = toLower.split("");
  console.log(array);
  array[0] = array[0].toUpperCase();
  const newString = array.join("");
  return newString;
}

console.log(capitalize("ROLAND"));
