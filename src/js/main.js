'use strict';
const number = document.querySelector('.js_number');
const submit = document.querySelector('.js_submit');
const clue = document.querySelector('.js_clue');
const tries = document.querySelector('.js_try');
let counter = 0;


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);


function validNumber(number) {
  let varReturn;

  if (!isNaN(number)) {
    if (number > 0 && number <= 100) {
      if (number > randomNumber) {
        varReturn = 'Demasiado alto.';
      } else if (number < randomNumber) {
        varReturn = 'Demasiado bajo.';
      } else if (number === randomNumber) {
        varReturn = '¡Has ganado!';
      }
    } else if (number <= 0 || number >= 100) {
      varReturn = 'El número debe estar entre 1 y 100.';
    }
  } else {
    varReturn = 'Ingresa un número';
  }

  return varReturn;
}

function writeClue(something) {
  return clue.innerHTML = something;
}

function writeTry(counter) {
  return tries.innerHTML = counter;
}

function game(event) {
  let inputValue = parseInt(number.value);
  let clue = validNumber(inputValue);
  writeClue(clue);
  writeTry(counter++);
  event.preventDefault();
}

submit.addEventListener('click', game);