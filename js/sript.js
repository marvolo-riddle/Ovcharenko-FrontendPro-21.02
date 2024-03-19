// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
  document.write(i + " ");
}
document.write("</br>");
// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let doll = 27;
for (i = 10; i <= 100; i += 10) {
  document.write(doll * i + " ");
}
document.write("</br>");
// 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let number = 144;
for (i = 1; i <= 100; i++) {
  if (i * i <= number) {
    document.write(i + " ");
  }
}
document.write("</br>");
// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const number3 = 30;
let isPrime = true;
if (number3 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number3 % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  document.write(number3 + " є простим числом.");
} else {
  document.write(number3 + " не є простим числом.");
}
document.write("</br>");
// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const number4 = 243;
let power = 0;
let result = 1;
while (result < number4) {
  power++;
  result *= 3;
}
if (result === number4) {
  document.write(
    number4 + " можна отримати шляхом зведення числа 3 у ступінь " + power + "."
  );
} else {
  document.write(
    number4 + " не можна отримати шляхом зведення числа 3 у ступінь."
  );
}
