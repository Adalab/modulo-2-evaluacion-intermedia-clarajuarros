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
    pista = "Has ganado campeona!!"
    setGameOver()
}
if (Number < getRandomNumber){
    pista = "demasiado bajo";
}
if (Number > getRandomNumber){
    pista = "demasiado alto";
}
if (Number > 100){
    pista = "El número debe estar entre 1 y 100"
}
}
