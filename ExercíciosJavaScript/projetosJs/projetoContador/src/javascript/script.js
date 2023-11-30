const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () =>{
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

//adição do contador
plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        count += 1;
        updateValue();
    }, 100);
});

//subtração do contador
minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        count -= 1;
        updateValue();
    }, 100);
});

//reset
resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});


document.addEventListener('mouseup', () => clearInterval(intervalId));