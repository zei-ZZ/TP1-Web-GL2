const test = document.querySelector("#test");
const color = document.querySelector("#color");
const size = document.querySelector("#size");
const font = document.querySelector("#font");
font.addEventListener("input", (e) => {
  changeFontFamily(e, test);
});
color.addEventListener("input", (e) => {
  changeColor(e, test);
});
size.addEventListener("change", (e) => {
  changeSize(e, test);
});

/**
 * function that changes the font size of text from an input box
 * @param {*} event
 * @param {*} element
 */
function changeSize(event, element) {
  element.style["font-size"] = event.target.value + "px";
}
/**
 * function that changes the color of an html element according to color input
 *
 * @param {*} event
 * @param {*} element
 */
function changeColor(event, element) {
  element.style.color = event.target.value;
}

function changeFontFamily(event, element) {
  console.log(event.target.value);
  element.style["fontFamily"] = event.target.value;
}
