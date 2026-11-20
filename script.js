let firstNumber = "";
let secondNumber = "";
let operator = "";

let resultDisplayed = false;

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const newOperator = button.textContent;
    if (firstNumber === "") return;
    if (secondNumber !== "") {
      calculate();
    }
    operator = newOperator;
  });

});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", () => {

  firstNumber = "";
  secondNumber = "";
  operator = "";
  resultDisplayed = false;
  updateDisplay("0");
});

function calculate() {
  if (
    firstNumber === "" ||
    secondNumber === "" ||
    operator === ""
  ) {
    return;
  }

  let result = operate(
    operator,
    Number(firstNumber),
    Number(secondNumber)
  );
  if (typeof result === "number") {
    result = Math.round(result * 1000) / 1000;
  }
  updateDisplay(result);
  firstNumber = result.toString();
  secondNumber = "";
  resultDisplayed = true;
}



function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {

  if (b === 0) {
    return "Division by 0 error";
  }
  return a / b;
}

function operate(operator, a, b) {

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}

function updateDisplay(value) {
  display.textContent = value;
}

digitButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (resultDisplayed) {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      resultDisplayed = false;
    }

    if (operator === "") {
      firstNumber += button.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += button.textContent;
      updateDisplay(secondNumber);
    }
  });

});


