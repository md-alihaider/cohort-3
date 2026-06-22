const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
let draggedTask = null;

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    draggedTask = task;
  });
});

function addDragEventOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    column.classList.remove("hover-over");
  });
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  })
  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(draggedTask);
    column.classList.remove("hover-over");
  });
}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);
