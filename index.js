function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide() {
  return a / b;
}

function operate(operator, numbersArr) {
  let result = null;
  if (operator == "+") {
    result = add(...numbersArr);
  } else if (operator == "-") {
    result = substract(...numbersArr);
  } else if (operator == "*") {
    result = multiply(...numbersArr);
  } else if (operator == "/") {
    result = divide(...numbersArr);
  }

  return result;
}

window.onload = function () {
  const display = document.getElementById("display");

  // initialise to null
  let leftOperand = null;
  let rightOperand = null;
  let currentNumber = null;
  let currentOperator = null;

  //select all number btns and attach click event listener
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function (event) {
      currentNumber = parseInt(event.target.innerText);
      display.innerHTML = currentNumber;

      if (leftOperand == null) {
        leftOperand = currentNumber;
      } else if (leftOperand !== null) {
        rightOperand = currentNumber;
      }
    };
  });

  // operator btns
  document.querySelectorAll("input").forEach((button) => {
    button.onclick = function (event) {
      // without this check = overrides operators
      if (event.target.value !== "=") {
        currentOperator = event.target.value;
      } else if (event.target.value == "=") {
        const result = operate(currentOperator, [leftOperand, rightOperand]);
        display.innerHTML = result;
      }

      if (currentOperator == "clear") {
        clear();
      }
    };
  });

  function clear() {
    display.innerHTML = "";
    leftOperand = null;
    rightOperand = null;
    currentNumber = null;
    currentOperator = null;
  }
};
