
let counterValue = 0;


const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', () => {
  
  counterValue -= 1;

  valueEl.textContent = counterValue;
});


incrementBtn.addEventListener('click', () => {
  
  counterValue += 1;
 
  valueEl.textContent = counterValue;
});