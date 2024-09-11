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

function eventListenerHeaderChangeWidth() {
  let header = document.getElementsByTagName("header")[0];
  header.addEventListener("mousemove", (e) => {
    let check = document.getElementById("checkbox");
    let gradient = document.getElementById("gradient");
    check.checked
      ? gradient.setAttribute(
          "style",
          "width:" + e.clientX + "px; background-color:#2C626C"
        )
      : gradient.setAttribute(
          "style",
          "width:" + e.clientX + "px; background-color:#82C0CC"
        );
  });
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
  // document.getElementById('gradient').setAttribute("style", "background-color:#2C626C;")
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
  // document.getElementById('gradient').setAttribute("style", "background-color:#82C0CC;")
  footer.setAttribute("style", "background-color:#FFA62B;");
  return;
}

startUp();
