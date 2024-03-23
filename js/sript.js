function power(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return num;
  } else if (degree < 0) {
    return 1 / power(num, -degree);
  } else {
    return num * power(num, degree - 1);
  }
}
let number = parseFloat(prompt("Введіть число: "));
let powerOf = parseInt(prompt("Введіть ступінь: "));
let result = power(number, powerOf);
alert(`${number} в ступені ${powerOf} дорівнює ${result}`);
