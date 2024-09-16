//Start content loader
/**
 * @author Mischa Sasse
 * @description This function fetches data from a different component folder and displays it for the one page application
 * @param {*} number
 * @returns {string}
 */
async function getContentData(number) {
  let wrapper = document.getElementById("contentContainer");
  return await fetch(`./component/${pageMap(number)}.html`)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      wrapper.innerHTML = html;
    });
}

/**
 * @author Mischa Sasse
 * @description This function returns a string, using a map, based on the given number
 * @param {*} clickedPage
 * @returns {string}
 */
function pageMap(clickedPage) {
  const pageMap = {
    0: "home",
    1: "contact",
    2: "about",
  };
  return pageMap[clickedPage];
}

function componentMap(x) {
  const componentMap = {
    0: "header",
    1: "footer",
  };
  return componentMap[x];
}

//insert header
async function addHeader() {
  await fetch(`./component/${componentMap(0)}.html`)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      // console.log("header", html);

      document.body.innerHTML += html;
    });
}

//create <section id="contentContainer">
async function createContainer() {
  await addHeader();
  let contentContainer = document.createElement("section");
  contentContainer.id = "contentContainer";
  // console.log("container", contentContainer);
  // console.log("header1", document.getElementsByTagName("header")[0]);
  return document.body.appendChild(contentContainer);
}
//insert content into container
async function getDefaultContentData() {
  await createContainer();
  let wrapper = document.getElementById("contentContainer");
  // console.log("wrapper", wrapper);

  return await fetch(`./component/${pageMap(0)}.html`)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      // console.log("default", html);
      wrapper.innerHTML = html;
    });
}
//insert footer
async function addFooter() {
  await getDefaultContentData();
  await fetch(`./component/${componentMap(1)}.html`)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      // console.log("footer", html);
      document.body.innerHTML += html;
    });
  let css = document.getElementsByTagName("link")[0];
  css.href += ""; //reloads css
}
//end content loader

/**
 * @author Mischa Sasse
 * @description This is a startup script which will run all eventListeners after the DOM is fully loaded
 * @returns {void}
 */
function startUp() {
  addEventListener("DOMContentLoaded", async () => {
    await addFooter();
    eventListenerDarkMode();
    eventListenerHeaderChangeWidth(event);
  });
  return;
}
/**
 * @author Mischa Sasse
 * @description This is a function that checks if the dark mode toggle is checked  or not
 * @returns {void}
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
 * @returns {void}
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
 * @returns {void}
 */
function changeGradientColor(check, gradient, e) {
  check.checked
    ? gradient.setAttribute(
        "style",
        "width:" + e.clientX + "px; background-color:#214A54"
      )
    : gradient.setAttribute(
        "style",
        "width:" + e.clientX + "px; background-color:#489FB5"
      );
  return;
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a dark theme
 * @param {*} box
 * @param {*} ball
 * @returns {void}
 */
function darkMode(box, ball, header, footer) {
  header.setAttribute("style", "background-color:#0A3038;");
  box.setAttribute("style", "background-color:white;");
  ball.setAttribute("style", "transform:translatex(100%);");
  footer.setAttribute("style", "background-color:#884F00;");
  document
    .getElementsByClassName("leftAside")[0]
    .setAttribute("style", "background-color:#2C626C;");
  document
    .getElementsByClassName("rightAside")[0]
    .setAttribute("style", "background-color:#2C626C;");
  document
    .getElementsByTagName("main")[0]
    .setAttribute("style", "background-color:#826653;");
  document.body.setAttribute("style", "color:#CCCCCC;");
  return;
}

/**
 * @author Mischa Sasse
 * @description This function changes the css to a light theme
 * @param {*} box
 * @param {*} ball
 * @returns {void}
 */
function lightMode(box, ball, header, footer) {
  header.setAttribute("style", "background-color:#16697A;");
  box.setAttribute("style", "background-color:black;");
  ball.setAttribute("style", "transform:translatex(0%);");
  footer.setAttribute("style", "background-color:#FFA62B;");
  document
    .getElementsByClassName("leftAside")[0]
    .setAttribute("style", "background-color:#82C0CC;");
  document
    .getElementsByClassName("rightAside")[0]
    .setAttribute("style", "background-color:#82C0CC;");
  document
    .getElementsByTagName("main")[0]
    .setAttribute("style", "background-color:#EDE7E3;");
  document.body.setAttribute("style", "color:#000000;");
  return;
}

startUp();
