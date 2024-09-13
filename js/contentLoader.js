async function getHtmlData(number) {
  let wrapper = document.getElementById("contentContainer");
  let htmlContent = await fetch("./hmtl/" + pageMap(number) + ".html");
  console.log(htmlContent);
  
    wrapper.replaceChildren(htmlContent)
}

function pageMap(clickedPage) {
  const pageMap = {
    0: "home",
    1: "contact",
    2: "about",
    // '3':'contact'
  };
  return pageMap[clickedPage];
}