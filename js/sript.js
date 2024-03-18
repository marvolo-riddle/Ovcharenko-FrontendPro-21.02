//  1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
for (i = 10; i <= 20; i++) {
  document.write(i);
  if (i < 20) {
    document.write(", ");
  }
}
document.write("<br>");
//  2. Вивести квадрати чисел від 10 до 20.
for (i = 10; i <= 20; i++) {
  document.write(i * i + ", ");
}
document.write("<br>");
//  3. Вивести таблицю множення на 7.
for (i = 1; i <= 10; i++) {
  document.write(i * 7 + ", ");
}
//  4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write("<br>" + "Сума усіх: " + sum);
//  5. Знайти добуток усіх цілих чисел від 15 до 35.
let prod = 1;
for (let i = 15; i <= 35; i++) {
  prod *= i;
}
document.write("<br>" + "Добуток: " + prod);
//  6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum2 = 0;
for (i = 1; i <= 500; i++) {
  sum2 += i;
}
let average = sum2 / 500;
document.write("<br>" + "Cереднє арифметичне: " + average);
//  7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum3 = 0;
for (i = 30; i <= 80; i += 2) {
  sum3 += i;
}
document.write("<br>" + "Сума парних: " + sum3);
//  8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write("<br>");
for (i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    document.write(i + ", ");
  }
}
//  9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
document.write("<br>");
let number = 24;
let divisors = [];
document.write("Дільники числа " + number + ": ");
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisors.push(i);
  }
}
document.write(divisors);
//  10. Визначити кількість його парних дільників.
document.write("<br>");
let evenDivisorsCount = 0;
document.write("Парні дільники числа " + number + ": ");
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    evenDivisorsCount++;
    document.write(i + ", ");
  }
}
document.write("<br>Кількість парних дільників: " + evenDivisorsCount);
//  11. Знайти суму його парних дільників.
document.write("<br>");
let sumOfEvenDivisors = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    sumOfEvenDivisors += i;
  }
}
document.write(
  "Сума парних дільників числа " + number + ": " + sumOfEvenDivisors
);
//  12. Надрукувати повну таблицю множення від 1 до 10.
document.write("<br>");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(i + " * " + j + " = " + i * j + "<br>");
  }
  document.write("<br>");
}
