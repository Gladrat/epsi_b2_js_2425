import { createElement } from "../framework/core.js";

export const PizzaList = createElement(
  "ul",
  createElement("li", null, "Pizza spéciale"),
  createElement("li", null, "Pizza reine"),
  createElement("li", null, "Pizza 4 fromages"),
  createElement("li", null, "Pizza chorizo"),
);