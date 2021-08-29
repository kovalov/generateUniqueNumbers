function generateRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function inputValue(array, value) {
  array.push(value);
}

function check(array, value) {
  return array.indexOf(value) === -1;
}

function generateUniqueArray() {
  const array = [];

  while (array.length < 5) {
    const random = generateRandom(10);
    if (check(array, random)) inputValue(array, random);
  }

  return array;
}

const myArray = generateUniqueArray();

console.log(myArray);
