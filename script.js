const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b == 0) return 'NOPE';
  return a / b;
};

const display = document.querySelector('.calculator .display');

let firstNumber = null;
let secondNumber = null;
let operatorValue = null;
let displayValue = '';
display.textContent = '0';

function operate(firstNumber, secondNumber, operator){
  if (operator === '+') return add(firstNumber, secondNumber);
  if (operator === '-') return subtract(firstNumber, secondNumber);
  if (operator === 'x') return multiply(firstNumber, secondNumber);
  if (operator === '/') return divide(firstNumber, secondNumber);
};


const numbers = document.querySelectorAll('.calculator .num');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    const num = event.target.textContent;
    if (displayValue.length >= 10) return;
    if (num == '.' && displayValue.indexOf('.') > -1) return;
    if (num == '.' && displayValue == '') displayValue += 0;
    displayValue += num;
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
  if(firstNumber == null || secondNumber === ''){
    display.textContent = 'ERROR';
    return;
  }
  displayValue = operate(firstNumber, secondNumber, operatorValue);
  if (displayValue.toString().includes('.')) {
    displayValue = Number(displayValue).toFixed(2)};
  display.textContent = displayValue;
});

const clear = document.querySelector('.calculator .clear');

clear.addEventListener('click', () => {
  firstNumber = null;
  secondNumber = null;
  operatorValue = null;
  displayValue = '';
  display.textContent = '0';
});