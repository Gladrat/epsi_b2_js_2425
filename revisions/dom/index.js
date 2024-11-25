const input = document.querySelector("#input");
const ul = document.querySelector("#list");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");

const tasks = ["", "Coder en C++", "Coder en Python", "Faire les courses"];
console.log(tasks);

tasks.length

let taskCount = 0;

const htmlCount = document.querySelector("#task-count");
htmlCount.textContent = taskCount;

// Implémenter un observer

function taskToDom(task) {
  if (task && typeof task === "string") {
    const li = document.createElement("li");
    li.textContent = task;

    const remove = document.createElement("button");
    remove.textContent = "REMOVE";

    remove.addEventListener("click", (event) => {
      li.remove();
    });

    li.append(remove);
    ul.append(li);
  }
}

tasks.forEach((task) => {
  taskToDom(task);
});

clear.addEventListener("click", () => {
  ul.innerHTML = "";
});

function addTask() {
  taskToDom(input.value);
  input.value = "";
  input.focus();
}

add.addEventListener("click", () => addTask());

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
