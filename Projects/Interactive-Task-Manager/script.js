const closeBtn = document.querySelector(".ri-close-line");
const createTaskModal = document.querySelector(".create-task-modal");
const openBtn = document.querySelector("#add-task");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.querySelector("form");
const taskContainer = document.querySelector(".task-container");
const createTask = document.querySelector(".btn-create");
const toggleTheme = document.querySelector(".toggle-theme");

const taskArray = [];
let updateTaskId = null;

let ui = () => {
  taskContainer.innerHTML = "";
  taskArray.forEach((task, index) => {
    const statusClass =
      task.status === "Completed"
        ? "completed"
        : task.status === "Pending"
          ? "pending"
          : "active";
    taskContainer.innerHTML += `<div class="task-card">
        <div class="card-top">
          <div class="task-id">
            <h3>#</h3>
            <h3>TASK-00${index + 1}</h3>
          </div>
          <div class="task-status ${statusClass}">
            <div class="circle-status"></div>
            <h3>${task.status}</h3>
          </div>
        </div>
        <div class="card-center">
          <h3>${task.task}</h3>
          <p>${task.description}</p>
          <div class="card-category">
            <h4>${task.category}</h4>
          </div>
          <div class="separete-line"></div>
        </div>
        <div class="card-bottom">
          <button id="complete-task" onclick="completeTask(${index})"><i class="ri-checkbox-circle-line"></i>Complete</button>
          <div class="actions">
            <button id="edit-task" onclick="editTask(${index})"><i class="ri-pencil-line"></i>Edit</button>
            <button id="delete-task" onclick="deleteTask(${index})"><i class="ri-delete-bin-line"></i>Delete</button>
          </div>
        </div>
      </div>`;
  });
};

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


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
  const category = e.target[1].value;
  const status = e.target[2].value;
  const description = e.target[3].value;

  let obj = {
    task,
    category,
    status,
    description,
  };
  if (updateTaskId !== null) {
    taskArray[updateTaskId] = obj;
    updateTaskId = null;
  } else {
    taskArray.push(obj);
  }

  ui();
  form.reset();
  createTaskModal.style.display = "none";
});

const editTask = (index) => {
  createTaskModal.style.display = "flex";
  const task = taskArray.find((task, i) => i === index);
  updateTaskId = taskArray.indexOf(task);

  form[0].value = task.task;
  form[1].value = task.category;
  form[2].value = task.status;
  form[3].value = task.description;
  createTask.innerHTML = "Update Task";
  createTask.style.backgroundColor = "green";
  createTask.style.color = "white";
  ui();
};

const completeTask = (index) => {
  const task = taskArray.find((task, i) => i === index);
  task.status = "Completed";
  ui();
};

const deleteTask = (index) => {
  taskArray.splice(index, 1);
  ui();
};
