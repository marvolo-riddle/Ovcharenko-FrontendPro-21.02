//part 1
function findAverage(array) {
  let sum = 0;
  let numCount = 0;
  for (let element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      sum += element;
      numCount++;
    }
  }
  if (numCount === 0) {
    return 0;
  }
  return sum / numCount;
}
const myArray = [1, "a", 2, "b", 3, "c"];
const average = findAverage(myArray);
console.log(average);
//
// part 2
function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x, y);
      break;
    default:
      result = "Невірний оператор";
  }
  return result;
}
const x = parseFloat(prompt("Введіть перше число:"));
const znak = prompt("Введіть математичний оператор (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Введіть друге число:"));
const result = doMath(x, znak, y);
alert(`Результат: ${result}`);
//
// part 3
function fillArray() {
  const outLength = parseInt(prompt("Введіть довжину основного масиву:"));
  const inLength = parseInt(prompt("Введіть довжину внутрішніх масивів:"));

  const twoDimArray = [];

  for (let i = 0; i < outLength; i++) {
    const inArray = [];
    for (let j = 0; j < inLength; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
      inArray.push(value);
    }
    twoDimArray.push(inArray);
  }

  return twoDimArray;
}
const myArray2 = fillArray();
alert(myArray2);
//
// part 4
function removeCharacters(str, charsToRemove) {
  let result2 = "";
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result2 += str[i];
    }
  }
  return result2;
}
const inputString = prompt("Введіть рядок:");
const charsToRemove = prompt(
  "Введіть символи, які потрібно видалити (без пробілів):"
).split("");
const result2 = removeCharacters(inputString, charsToRemove);
alert(result2);
//
