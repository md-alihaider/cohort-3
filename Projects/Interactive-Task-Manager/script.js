const closeBtn = document.querySelector(".ri-close-line");
const createTaskModal = document.querySelector(".create-task-modal");
const openBtn = document.querySelector("#add-task");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.querySelector("form");

openBtn.addEventListener("click", () => {
  createTaskModal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  createTaskModal.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  createTaskModal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = e.target[0].value;
  console.log(task);


  
  form.reset();
  createTaskModal.style.display = "none";
});
