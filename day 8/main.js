const rangeInput = document.querySelector(".range-input"),
  rangeNumSpan = document.querySelector(".range-number-span"),
  submitInput = document.querySelector("#submitInput"),
  submitBtn = document.querySelector(".submit-btn"),
  choseNumSpan = document.querySelector(".chose-number"),
  winOrLoseSpan = document.querySelector(".win-or-lose");

function printRangeNum(num) {
  rangeNumSpan.textContent = num;
}

function inputHandler() {
  printRangeNum(rangeInput.value);
}

function printResult(iNum, rNum) {
  choseNumSpan.textContent = `You chose: ${iNum}, the machine chose: ${rNum}`;
  if (iNum === rNum) winOrLoseSpan.textContent = "You win!";
  else winOrLoseSpan.textContent = "You lose!";
}
function setAttributes(minNum, maxNum) {
  submitInput.setAttribute("min", minNum);
  submitInput.setAttribute("max", maxNum);
}

function clickHandler(e) {
  e.preventDefault();
  const inputNum = parseInt(submitInput.value, 10);
  console.log(rangeInput.value);
  const randomNum = parseInt(
    Math.random() * (parseInt(rangeInput.value) + 1),
    10,
  );
  if (!isNaN(inputNum)) {
    printResult(inputNum, randomNum);
    setAttributes(0, rangeInput.value);
  }
}

function init() {
  printRangeNum(rangeInput.value);
  rangeInput.addEventListener("input", inputHandler);
  submitBtn.addEventListener("click", clickHandler);
}

init();

// const range = document.getElementById("js-range");
// const title = document.querySelector(".js-title");
// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");

// function handleRangeChange(e) {
//   const selectedRange = title.querySelector("span");
//   selectedRange.innerHTML = range.value;
// }

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "") {
//     return;
//   }
//   const max = range.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
// range.addEventListener("input", handleRangeChange);

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//   </head>

//   <body>
//     <h1>Random Number Game</h1>
//     <div>
//       <h3 class="js-title">Generate a number between 0 and <span>10</span></h3>
//       <datalist id="number">
//         <option value="50"></option>
//         <option value="100"></option>
//         <option value="150"></option>
//         <option value="200"></option>
//       </datalist>
//       <input
//         list="number"
//         id="js-range"
//         type="range"
//         min="5"
//         max="200"
//         value="5"
//         step="5"
//       />
//     </div>
//     <form id="js-guess">
//       <label>Guess the number:</label>
//       <input type="number" max="200" min="5" />
//       <button>Play!</button>
//     </form>
//     <div id="js-result">
//       <span></span>
//     </div>
//     <script src="src/index.js"></script>
//   </body>
// </html>
