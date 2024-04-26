const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");

todoBtn.addEventListener("click", addTodo);

function addTodo(e) {
  let ul = document.querySelector("ul.todo-items");
  let div = document.createElement("div");
  div.className = "todos";
  ul.appendChild(div);

  let li = document.createElement("li");
  li.className = "todo-content";
  li.appendChild(document.createTextNode(todoInput.value));
  div.appendChild(li);

  todoInput.value="";

  let completedTask = document.createElement("button");
  completedTask.className = "complete";
  let completedIcon = document.createElement("i");
  completedIcon.className = "fa fa-check";
  completedTask.appendChild(completedIcon);
  div.appendChild(completedTask);

  let deleteTask = document.createElement("button");
  deleteTask.className = "delete";
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-trash";
  deleteTask.appendChild(deleteIcon);
  div.appendChild(deleteTask);

  e.preventDefault();
}

document.querySelector("i.reload-win").addEventListener("click", function() {
    location.reload();
})

const ul = document.querySelector(".todo-items");
ul.addEventListener("click", del);

function del(e) {
  const items = e.target;

  if(items.className === "delete") {
    const delItem = items.parentElement;
    delItem.classList.add("fall");
    delItem.addEventListener("transitionend", function() {
      delItem.remove();
    })
  }

  if(items.className === "complete") {
    items.parentElement.classList.toggle("completed");
  }

  e.preventDefault();
}

