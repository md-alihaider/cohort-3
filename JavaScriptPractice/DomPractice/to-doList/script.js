const inp = document.querySelector("input");
const btn = document.querySelector("#add-btn");
const todoBox = document.querySelector(".todo-list");


btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const value = inp.value;
  if (value.trim() === "") return;
  li.innerHTML = ` 
        <h3>${value}</h3>
        <div>
          <button class="btn edit">Edit</button>
          <button class="btn delete">Delete</button>
        </div>
      `;
  li.classList.add("li");
  todoBox.appendChild(li);
  inp.value = "";
});


todoBox.addEventListener("click", (e) => {
  const clickedElement = e.target;
  const currentTodo = clickedElement.closest("li");

  if(clickedElement.classList.contains("delete")) {
    currentTodo.remove();
  }


  if (clickedElement.classList.contains("edit")) {
    const heading = currentTodo.querySelector("h3");
    const newValue = prompt("Edit your task:", heading.textContent);
    if (newValue !== null && newValue.trim() !== "") {
      heading.textContent = newValue;
    }
  }
})