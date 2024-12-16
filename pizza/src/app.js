import { render, createElement } from "./framework/core.js";

import { PizzaList } from "./components/pizzaList.js";
import { Navigation } from "./components/navigation.js";

const state = {
  title: "pizza world!",
};

// Modifier la navigation
  // Pour en faire un composant
  // Dans son propre fichier

const app = createElement(
  "app",
  Navigation,
  createElement("h1", `Hello ${state.title}`),
  createElement("p", "Carte des pizzas :"),
  PizzaList,
  createElement("button", "Click-me!"),
);

// console.log(app);
// console.log(JSON.stringify(app));

render(app, document.querySelector("#root"));