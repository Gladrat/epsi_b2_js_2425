import { render, createElement, reactive } from "./framework/core.js";

import { PizzaList } from "./components/pizzaList.js";
import { Navigation } from "./components/navigation.js";

const state = reactive(
  {
    title: "pizza world!",
    pizzaCount: 0,
    pizzaSelection: [],
  },
  renderApp
);

function renderApp() {
  const app = createElement(
    "app",
    null,
    Navigation,
    createElement("h1", null, `Hello ${state.title}`),
    createElement("p", null, "Carte des pizzas :"),
    PizzaList,
    createElement("p", null, `Votre sélection (${state.pizzaCount}) :`),
    createElement(
      "ul",
      null,
      ...state.pizzaSelection.map((pizza) => createElement("li", null, pizza))
    ),
    createElement(
      "button",
      {
        onclick: () => console.log(state.pizzaSelection),
      },
      "Voir sélection"
    )
  );

  document.querySelector("#root").innerHTML = "";
  render(app, document.querySelector("#root"));
}

renderApp();
