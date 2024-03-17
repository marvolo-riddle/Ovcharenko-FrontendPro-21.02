let length = parseInt(prompt("Яка буде довжина нашого масиву?"));
let array = [];
for (let i = 0; i < length; i++) {
  let element = parseInt(prompt("Введіть елемент масиву:"));
  array.push(element);
}
array.sort();
array.splice(1, 3);
alert("Масив:" + array);
