import { createElement } from "../framework/core.js";

export const PizzaList = createElement(
  "ul",
  createElement("li", "Pizza spéciale"),
  createElement("li", "Pizza reine"),
  createElement("li", "Pizza 4 fromages"),
  createElement("li", "Pizza chorizo"),
);