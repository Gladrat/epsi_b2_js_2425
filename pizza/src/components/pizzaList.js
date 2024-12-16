import { createElement } from "../framework/core.js";

export const pizzaList = createElement(
  "ul",
  createElement("li", "Pizza spéciale"),
  createElement("li", "Pizza reine"),
  createElement("li", "Pizza 4 fromages"),
  createElement("li", "Pizza chorizo"),
);