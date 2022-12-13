const items = document.querySelector('#categories');
console.log('Number of categories:', items.length);
const titleEl = [...items.children];
titleEl.forEach((element) => {
        console.log('Category:', element.firstElementChild.textContent);
        console.log('Elements:', element.lastElementChild.childElementCount);
      });




