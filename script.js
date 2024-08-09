const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let firstNumber = '';
let secondNumber = '';
let operatorValue = '';
let displayValue = '';

function operate(firstNumber, secondNumber, operator){
  if (operator === '+') return add(firstNumber, secondNumber);
  if (operator === '-') return subtract(firstNumber, secondNumber);
  if (operator === 'x') return multiply(firstNumber, secondNumber);
  if (operator === '/') return divide(firstNumber, secondNumber);
};


const display = document.querySelector('.calculator .display');
const numbers = document.querySelectorAll('.calculator .num');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    if (displayValue.length >= 10) return;
    displayValue += event.target.textContent;
    display.textContent = displayValue;
  });
});

const operators = document.querySelectorAll('.calculator .operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    operatorValue = event.target.textContent;
    firstNumber = Number(displayValue);
    displayValue = '';
  });
});

const equals = document.querySelector('.calculator .equal');

equals.addEventListener('click', () => {
  secondNumber = Number(displayValue);
  displayValue = operate(firstNumber, secondNumber, operatorValue);
  display.textContent = displayValue;
});

const clear = document.querySelector('.calculator .clear');

clear.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operatorValue = '';
  displayValue = '';
  display.textContent = displayValue;
});