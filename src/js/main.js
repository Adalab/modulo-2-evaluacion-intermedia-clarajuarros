'use strict';

 const Number = document.querySelector(".numero");
const btnPrueba = document.querySelector(".btnPrueba");
const pista = document.querySelector(".pista");
const numeroRespuestas = document.querySelector(".numeroRespuestas");

let guessCount = 1;
let resetButton;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = generateRandomNumber(100);

function verificar(){
    var numero =Number.value;
}

function checkGuess (){
    let userGuess = Number(Number.value);
if (numeroRespuestas === 1){
    guesses.numeroRespuestas = "Intentos anteriores: ";
}
guesses.numeroRespuestas += numeroRespuestas + " ";

if (Number === getRandomNumber){
    pista.innerHTML = "Has ganado campeona!!"
    setGameOver()
}
if (Number < getRandomNumber){
    pista.innerHTML = "demasiado bajo";
}
if (Number > getRandomNumber){
    pista.innerHTML = "demasiado alto";
}
if (Number > 100){
    pista.innerHTML = "El número debe estar entre 1 y 100"
}
}
