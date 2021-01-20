const select = document.querySelector("select");

const changeHandler = () => {
  const currentIndex = select.selectedIndex;
  const currentCountry = select.options[currentIndex].value;

  localStorage.setItem("Country", currentCountry);
};
const loadCountry = () => {
  const getLSCountry = localStorage.getItem("Country");
  if (getLSCountry) {
    select.value = getLSCountry;
  }
};

loadCountry();
select.addEventListener("change", changeHandler);
// import "./styles.css";

// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
