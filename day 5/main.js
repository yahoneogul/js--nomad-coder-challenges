// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const body = document.body;
const clockContainer = document.createElement("div");
const clockTitle = document.createElement("h1");
const clock = document.createElement("h2");

clockContainer.classList.add("clock-container");
clockTitle.classList.add("clock-title");
clock.classList.add("clock");

body.appendChild(clockContainer);
clockTitle.textContent = "Time Untill Christmas";
clockContainer.appendChild(clockTitle);
clockContainer.appendChild(clock);

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const distance = xmasDay - now;
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((distance / (1000 * 60)) % 24);
  const second = Math.floor((distance / 1000) % 60);
  clock.textContent = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${
    minute < 10 ? `0${minute}` : minute
  }m ${second < 10 ? `0${second}` : second}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
