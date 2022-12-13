const changeButton = document.querySelector('button.change-color');
const body = document.querySelector('body');
const span = document.querySelector('span.color');


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 





// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
// 
// function getRandomHexColor() {
//   body.style.backgroundColor = [...color];
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }