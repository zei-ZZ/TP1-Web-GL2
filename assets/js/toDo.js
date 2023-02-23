const submitButton = document.querySelector("#submit-button");
const day = document.querySelector("#day");
const task = document.querySelector("#task");
const list = document.querySelector("#toDoList");
// day.addEventListener("input", (event) => {
//   task.addEventListener("input", (e) => {
//     if (e.target.value && event.target.value) enableButton(submitButton);
//     else disableButton(submitButton);
//   });
// });
// task.addEventListener("input", (event) => {
//   day.addEventListener("input", (e) => {
//     if (e.target.value && event.target.value) enableButton(submitButton);
//     else disableButton(submitButton);
//   });
// });

day.addEventListener("input", (e) => {
  if (e.target.value && task.value) enableButton(submitButton);
  else disableButton(submitButton);
});
task.addEventListener("input", (e) => {
  if (e.target.value && day.value) enableButton(submitButton);
  else disableButton(submitButton);
});
submitButton.addEventListener("click", () => {
  let a = day.value;
  let b = task.value;
  generateToDo(a, b, list);
  task.value = "";
  day.value = "";
  disableButton(submitButton);
});

function generateToDo(day, task, element) {
  const toDo = document.createElement("div");
  toDo.appendChild(document.createTextNode(`${day}: ${task}`));
  const delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("X"));
  delButton.classList.add("btn");
  delButton.classList.add("btn-secondary");
  toDo.appendChild(delButton);
  toDo.classList.add("list-group-item");
  toDo.classList.add("d-flex");
  toDo.classList.add("justify-content-between");
  element.appendChild(toDo);
  delButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
}

function enableButton(element) {
  element.disabled = false;
}
function disableButton(element) {
  element.disabled = true;
}
