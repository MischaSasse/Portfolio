// darkmode toggle

/**
 * @author Mischa Sasse
 * @description This is a startup script which will run all eventListeners after the DOM is fully loaded
 * @returns void 
 */
function startUp() {
  addEventListener("DOMContentLoaded", () => {
    eventListenerDarkMode();
  });
  return
}
/**
 * @author Mischa Sasse
 * @description This is a function that checks if the dark mode toggle is checked  or not
 * @returns void
 */
function eventListenerDarkMode() {
  let check = document.getElementById("checkbox");
  let box = document.querySelector(".box");
  let ball = document.querySelector(".ball");

  check.addEventListener("change", () => {
    check.checked ? darkMode(box, ball) : lightMode(box, ball);
  });
  return
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a dark theme
 * @param {*} box 
 * @param {*} ball
 * @returns void 
 */
function darkMode(box, ball) {
  box.setAttribute("style", "background-color:white;");
  ball.setAttribute("style", "transform:translatex(100%);");
  document.body.setAttribute("style", "background-color:grey;");
  return
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a light theme
 * @param {*} box 
 * @param {*} ball 
 * @returns void
 */
function lightMode(box, ball) {
  box.setAttribute("style", "background-color:black;");
  ball.setAttribute("style", "transform:translatex(0%);");
  document.body.setAttribute("style", "background-color:white;");
  return
}

startUp();
