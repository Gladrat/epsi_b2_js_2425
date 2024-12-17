import { render, createElement, reactive } from "./framework/core.js";

// import { PizzaList } from "./components/pizzaList.js";
import { Navigation } from "./components/navigation.js";

const state = reactive(
  {
    title: "pizza world!",
    pizzaCount: 0,
  },
  renderApp
);

const pizzasDatas = [
  "Pizza spéciale",
  "Pizza reine",
  "Pizza chorizo",
  "Pizza 4 fromages",
  "Pizza poulet",
  "Pizza montagnarde",
];

function renderApp() {
  const pizzas = pizzasDatas.map((pizza) =>
    createElement(
      "li",
      null,
      pizza,
      " ",
      createElement(
        "button",
        {
          onclick: () => {
            state.pizzaCount++;
          },
        },
        "+"
      )
    )
  );

  const PizzaList = createElement("ul", null, ...pizzas);

  const app = createElement(
    "app",
    null,
    Navigation,
    createElement("h1", null, `Hello ${state.title}`),
    createElement("p", null, "Carte des pizzas :"),
    PizzaList,
    createElement("p", null, `Votre sélection (${state.pizzaCount}) :`),
    createElement("ul", null, 
      createElement("li", null, "PIZZA N°1...")
    )
  );

  document.querySelector("#root").innerHTML = "";
  render(app, document.querySelector("#root"));
}

renderApp();
