(function () {
  const body = document.body;

  const h2 = document.createElement("h2");
  h2.textContent = "HELLO";
  body.appendChild(h2);

  body.style.height = "100vh";
  body.style.backgroundColor = "#05c46b";
  h2.style.color = "#ffffff";

  const resizeHandler = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1320) body.style.backgroundColor = "#914EAD";
    else if (windowWidth > 1024) body.style.backgroundColor = "#EEBC12";
    else body.style.backgroundColor = "#2E8CD5";
  };
  window.addEventListener("resize", resizeHandler);
})();
