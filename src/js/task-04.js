const counter = document.querySelectorAll('#counter button');
const counterValue = document.querySelector('#value');

const decrementBtn = counter[0];
const incrementBtn = counter[1];
decrementBtn.addEventListener("click", onDecremetClick);
function onDecremetClick(){
    counterValue.textContent = '-1';
}
incrementBtn.addEventListener("click", onIncrementClick);
function onIncrementClick(){
    counterValue.textContent = '+1';
}