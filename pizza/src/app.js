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
  null,
  Navigation,
  createElement("h1", null, `Hello ${state.title}`),
  createElement("p", null, "Carte des pizzas :"),
  PizzaList,
  createElement("button", null, "Click-me!"),
);

// console.log(app);
// console.log(JSON.stringify(app));

render(app, document.querySelector("#root"));