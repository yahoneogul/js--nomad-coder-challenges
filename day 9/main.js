const calculator = document.querySelector(".calculator");
const output = document.querySelector(".output");

const numberClickHandler = (button) => {
  output.value === "0"
    ? (output.value = button.value)
    : (output.value = output.value + button.value);
};

const operatorClickHandler = (button) => {
  output.value === "0"
    ? (output.value = "0")
    : (output.value = output.value + button.value);
};

const resultClickHandler = () => {
  const resultValue = eval(output.value);
  output.value = resultValue;
};

const clearClickHandler = () => {
  output.value = "0";
};

const clickHandler = (e) => {
  const targetButton = e.target;
  const targetValue = targetButton.value;
  if (targetValue) {
    if (targetButton.classList.contains("number")) {
      numberClickHandler(targetButton);
    }
    if (targetButton.classList.contains("operator")) {
      operatorClickHandler(targetButton);
    }
    if (targetButton.classList.contains("clear")) {
      clearClickHandler();
    }
    if (targetButton.classList.contains("result")) {
      resultClickHandler(targetButton);
    }
  }
};

calculator.addEventListener("click", clickHandler);
