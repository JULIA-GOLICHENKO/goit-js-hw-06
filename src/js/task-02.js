const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  listEl.append(itemEl);

});
 
console.log(elements);


// const listEl = document.querySelector ('#ingredients');
// const itemEl = ingredients
// .map((ingredient) => `<li class="js-item">${ingredient}</li>`)
// .join("");

// console.log(itemEl);