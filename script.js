//1 частина
const age = prompt("Скільки тобі років?", 24);
const birthDay = prompt("Яке число вашого народження?", 31);
const favNumber = prompt("Ваша улюблена цифра?", 3);
let sum = age + birthDay + favNumber;
console.log(sum);
//
//
//
//2 частина
let number = 24313;
let array = ("" + number).split("").map(Number);
console.log(array);
