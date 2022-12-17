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

  function updateDisplay() {
    display.innerHTML = `${leftOperand.join("")} ${
      currentOperator ? currentOperator : ""
    } ${rightOperand.join("")}`;
  }

  function clear() {
    display.innerHTML = "";
    leftOperand = [];
    rightOperand = [];
    currentOperator = null;
    result = null;
  }

  // initialise to null
  let leftOperand = [];
  let rightOperand = [];
  let currentOperator = null;
  let result = null;

  //select all number btns and attach click event listener
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function (event) {
      const currentNumber = event.target.innerText;

      if (result) {
        clear();
      }
      if (!currentOperator) {
        leftOperand.push(currentNumber);
      } else {
        rightOperand.push(currentNumber);
      }

      updateDisplay();
    };
  });

  // operator btns
  document.querySelectorAll("input").forEach((button) => {
    button.onclick = function (event) {
      // without this check = overrides operators
      const operator = event.target.value;
      if (operator == "=") {
        result = operate(currentOperator, [
          parseInt(leftOperand.join("")),
          parseInt(rightOperand.join("")),
        ]);
        display.innerHTML = result;
      }
      if (operator == "clear") {
        clear();
      }
      if (operator !== "clear" && operator !== "=" && leftOperand.length > 0) {
        currentOperator = operator;
        updateDisplay();
      }
    };
  });
};
