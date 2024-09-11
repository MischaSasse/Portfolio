// darkmode toggle

/**
 * @author Mischa Sasse
 * @description This is a startup script which will run all eventListeners after the DOM is fully loaded
 * @returns void
 */
function startUp() {
  addEventListener("DOMContentLoaded", () => {
    eventListenerDarkMode();
    eventListenerHeaderChangeWidth(event);
  });
  return;
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
  let header = document.getElementsByTagName("header")[0];
  let footer = document.getElementsByTagName("footer")[0];
  check.addEventListener("change", () => {
    check.checked
      ? darkMode(box, ball, header, footer)
      : lightMode(box, ball, header, footer);
  });
  return;
}

/**
 * @author Mischa Sasse
 * @description This function creates an eventListener on the header to get mouse movement
 * @returns void
 */
function eventListenerHeaderChangeWidth() {
  let header = document.getElementsByTagName("header")[0];
  let check = document.getElementById("checkbox");
  let gradient = document.getElementById("gradient");
  header.addEventListener("mousemove", (e) => {
    changeGradientColor(check, gradient, e);
  });
  return;
}

/**
 * @author Mischa Sasse
 * @description This function gets the location of the mouse movement and changes the gradient bars width to the mouse location and the color depending on the colortheme
 * @param {*} check 
 * @param {*} gradient 
 * @param {*} e 
 * @returns void
 */
function changeGradientColor(check, gradient, e) {
  check.checked
    ? gradient.setAttribute(
        "style",
        "width:" + e.clientX + "px; background-color:#2C626C"
      )
    : gradient.setAttribute(
        "style",
        "width:" + e.clientX + "px; background-color:#82C0CC"
      );
  return;
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a dark theme
 * @param {*} box
 * @param {*} ball
 * @returns void
 */
function darkMode(box, ball, header, footer) {
  header.setAttribute("style", "background-color:#0A3038;");
  box.setAttribute("style", "background-color:white;");
  ball.setAttribute("style", "transform:translatex(100%);");
  document.body.setAttribute("style", "background-color:#826653;");
  footer.setAttribute("style", "background-color:#884F00;");
  return;
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a light theme
 * @param {*} box
 * @param {*} ball
 * @returns void
 */
function lightMode(box, ball, header, footer) {
  header.setAttribute("style", "background-color:#16697A;");
  box.setAttribute("style", "background-color:black;");
  ball.setAttribute("style", "transform:translatex(0%);");
  document.body.setAttribute("style", "background-color:#EDE7E3;");
  footer.setAttribute("style", "background-color:#FFA62B;");
  return;
}

startUp();
