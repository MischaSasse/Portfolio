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

//insert header

//create <section id="contentContainer">

//insert content into container

//insert footer