const bandSize = 20;
let y = 100;
const arrayTest = generateArray(30, 500);

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(250);
  displayArray(arrayTest);
}

function generateArray(n = 20, max = 20, min = 0) {
  let arrayResult = [];
  for (let index = 0; index < n; index++) {
    arrayResult[index] = Math.floor(Math.random() * (max - min) + min);
  }
  return arrayResult;
}

function displayArray(array) {
  strokeWeight(5);
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    let x = (index + 0.3) * bandSize;

    line(x, height - item, x, height);
  }
}
