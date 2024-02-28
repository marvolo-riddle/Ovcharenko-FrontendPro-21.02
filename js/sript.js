let number1 = +prompt("Обери перше число", 2);
let number2 = +prompt("Обери наступне число", 2);
//
let sum = number1 + number2;
let diff = number1 - number2;
let multip = number1 * number2;
let divis = number1 / number2;
//
const result = alert(
  number1 +
    " + " +
    number2 +
    " = " +
    sum +
    "\n" +
    number1 +
    " - " +
    number2 +
    " = " +
    diff +
    "\n" +
    number1 +
    " * " +
    number2 +
    " = " +
    multip +
    "\n" +
    number1 +
    " / " +
    number2 +
    " = " +
    divis
);
