const counter = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
let counterValue = 0
buttonDecrement.addEventListener('click', () => {
	counterValue--
	counter.textContent = counterValue
})

buttonIncrement.addEventListener('click', () => {
	counterValue++
	counter.textContent = counterValue
})