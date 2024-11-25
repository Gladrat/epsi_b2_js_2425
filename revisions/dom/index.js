const h1 = document.querySelector("#input");
const ul = document.querySelector("#list");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");

const tasks = ["", "Coder en C++", "Coder en Python", "Faire les courses"];
console.log(tasks);

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

// Ajouter des tâches
  // Soit en cliquant sur ADD soit avec la touche entrée dans l'input text
  // Vider l'input et (ux) remettre le focus dans l'input text

// Clear
  // Supprime toutes les tâches