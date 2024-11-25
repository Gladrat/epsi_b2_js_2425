const h1 = document.querySelector("#input");
const ul = document.querySelector("#list");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");

const tasks = ["", "Coder en C++", "Coder en Python", "Faire les courses"];
console.log(tasks);

function addTaskToDom(task) {
  if (task && typeof task === "string") {
    const li = document.createElement("li");
    li.textContent = task;

    const remove = document.createElement("button");
    remove.textContent = "X";

    remove.addEventListener("click", (event) => {
      li.remove();
    });

    li.append(remove);

    ul.append(li);
  }
}

tasks.forEach((task) => {
  addTaskToDom(task);
});
