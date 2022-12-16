const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
const elements = [];
ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  elements.push(itemEl);

});
listEl.append(...elements);
console.log(elements);



// const listEl = document.querySelector ('#ingredients');
// const itemEl = ingredients
// .map((ingredient) => `<li class="js-item">${ingredient}</li>`)
// .join("");

// console.log(itemEl);