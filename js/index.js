let startShow = false;
let numbers = 20;
const widthMain = innerWidth - 50;
let bandSize = widthMain / numbers;
let arrayTest = [];
let frame = 30;
let sort = {
  bubble: sortArrayBubble,
  insertion: () => {},
  selection: sortArraySelection,
  quicksort: () => {},
};

let sortedArray = sort["bubble"];

function setup() {
  createCanvas(widthMain, innerHeight - 100);
  stroke(0);
  frameRate(55);
}

function draw() {
  if (startShow) {
    background(250);

    if (sortedArray(arrayTest)) {
      stroke("rgb(255,5,0)");
      displayArray(arrayTest);
    } else {
      stroke("rgb(0,255,0)");

      displayArray(arrayTest);
    }
  }
}

function generateArray(n = 20, max = 20, min = 0) {
  let arrayResult = [];
  for (let index = 0; index < n; index++) {
    arrayResult[index] = Math.floor(Math.random() * (max - min) + min);
  }
  return arrayResult;
}

function displayArray(array = []) {
  strokeWeight(5);
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    let x = (index + 0.3) * bandSize;

    line(x, height - item, x, height);
  }
}

function sortArrayBubble(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        return true;
      }
    }
  }
}

function sortArraySelection(arr = []) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      return true;
    }
  }

  return false;
}

document.getElementById("start").addEventListener("click", () => {
  startShow = !startShow;
  numbers = document.getElementById("number")?.value || 20;
  frame = document.getElementById("speed")?.value || 20;
  bandSize = widthMain / numbers;

  const valueSorts = document.getElementById("choose-sorts")?.value || "bubble";
  sortedArray = sort[valueSorts];

  const isChangeArray = confirm("Will generate a new array ?");
  if (isChangeArray) {
    arrayTest = generateArray(numbers, 500);
  }
});
