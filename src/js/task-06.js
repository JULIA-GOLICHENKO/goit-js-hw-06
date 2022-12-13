const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(evt){
    const {value} = evt.currentTarget;
    console.log(value);
    if(input.value.length !== Number(input.dataset.length)) {
        input.classList.add(`invalid`);
        
    }else input.classList.replace(`invalid`, `valid`);
}




