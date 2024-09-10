// darkmode toggle
function startUp() {
  addEventListener("DOMContentLoaded", () => {
    eventListenerDarkMode();
  });
}

function eventListenerDarkMode() {
  let check = document.getElementById("checkbox");
  let box = document.querySelector(".box");
  let ball = document.querySelector(".ball");

  check.addEventListener("change", () => {
    check.checked ? darkMode(box, ball) : lightMode(box, ball);
  });
}

function darkMode(box, ball) {
  box.setAttribute("style", "background-color:;");
  ball.setAttribute("style", "transform:translatex(100%);");
  document.body.setAttribute("style", "background-color:grey;");
}
function lightMode(box, ball) {
  box.setAttribute("style", "background-color:black;");
  ball.setAttribute("style", "transform:translatex(0%);");
  document.body.setAttribute("style", "background-color:white;");
}

startUp();
