import { createElement } from "../framework/core.js";

export const Navigation = createElement(
  "nav",
  createElement("a", "Accueil"),
  createElement("a", "Panier")
);
