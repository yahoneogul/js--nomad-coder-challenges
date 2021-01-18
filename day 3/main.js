// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");
const messages = [
  "The mouse is here",
  "The mouse is gone",
  "You just resized!",
  "That's was a right click",
];
let randomNumber;
let randomColors;
const mkRandomColors = () => {
  randomNumber = Math.floor(Math.random() * colors.length);
  randomColors = colors[randomNumber];
};

const superEventHandler = {
  mouseEnter: () => {
    mkRandomColors();
    h2.style.color = randomColors;
    h2.textContent = messages[0];
  },
  mouseLeave: () => {
    mkRandomColors();
    h2.style.color = randomColors;
    h2.textContent = messages[1];
  },
  resize: () => {
    mkRandomColors();
    h2.style.color = randomColors;
    h2.textContent = messages[2];
  },
  mouseRightClick: () => {
    mkRandomColors();
    h2.style.color = randomColors;
    h2.textContent = messages[3];
  },
};

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
h2.addEventListener("contextmenu", superEventHandler.mouseRightClick);
window.addEventListener("resize", superEventHandler.resize);
