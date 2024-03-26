const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
// 1. Знайти суму та кількість позитивних елементів.
let sum = 0;
let positiveCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    positiveCount++;
  }
}
console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", positiveCount);
//
// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = array[0];
let minIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < minElement) {
    minElement = array[i];
    minIndex = i;
  }
}
console.log("Мінімальний елемент масиву:", minElement);
console.log("Порядковий номер мінімального елементу:", minIndex);
//
// 3. Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = array[0];
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxIndex = i;
  }
}
console.log("Максимальний елемент масиву:", maxElement);
console.log("Порядковий номер максимального елементу:", maxIndex);
//
// 4. Визначити кількість негативних елементів.
let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}
console.log("Кількість негативних елементів:", negativeCount);
//
// 5. Знайти кількість непарних позитивних елементів.
let oddPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}
console.log("Кількість непарних позитивних елементів:", oddPositiveCount);
//
// 6. Знайти кількість парних позитивних елементів.
let evenPositiveCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    evenPositiveCount++;
  }
}
console.log("Кількість парних позитивних елементів:", evenPositiveCount);
//
// 7. Знайти суму парних позитивних елементів.
let sumOfEvenPositive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    sumOfEvenPositive += array[i];
  }
}
console.log("Сума парних позитивних елементів:", sumOfEvenPositive);
//
// 8. Знайти суму непарних позитивних елементів.
let sumOfOddPositive = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    sumOfOddPositive += array[i];
  }
}
console.log("Сума непарних позитивних елементів:", sumOfOddPositive);
//
// 9. Знайти добуток позитивних елементів.
let productOfPositive = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    productOfPositive *= array[i];
  }
}
console.log("Добуток позитивних елементів:", productOfPositive);
//
// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
let maxElement2 = Math.max(...array);
for (let i = 0; i < array.length; i++) {
  if (array[i] !== maxElement2) {
    array[i] = 0;
  }
}
console.log("Масив після обнулення:", array);
//
