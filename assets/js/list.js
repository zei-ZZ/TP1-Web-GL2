const ol = document.querySelector("ol");
ol.addEventListener("click", (e) => {
  e.target.style.color = randomColor();
});
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
