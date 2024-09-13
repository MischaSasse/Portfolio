async function getHtmlData(number) {
  let wrapper = document.getElementById("contentContainer");
  return await fetch("./html/" + pageMap(number) + ".html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      wrapper.innerHTML = html;
    });
}

function pageMap(clickedPage) {
  const pageMap = {
    0: "home",
    1: "contact",
    2: "about",
  };
  return pageMap[clickedPage];
}
