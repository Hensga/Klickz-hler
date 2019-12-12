'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttonIncrement = document.getElementById('button-increment');
  const buttonReset = document.getElementById('button-reset');
  const counterNumber = document.getElementById('counter-number');

  let currentCounter = parseInt(counterNumber.innerText, 10);
  buttonIncrement.addEventListener('click', () => {
    currentCounter++;
    counterNumber.innerText = currentCounter;
  });
  buttonReset.addEventListener('click', () => {
    currentCounter = 0;
    counterNumber.innerText = currentCounter;
  });
});
