import { createElement } from "../framework/core.js";

export const Navigation = createElement(
  "nav",
  null,
  createElement("a", { href: "#accueil", id: "lien-accueil" }, "Accueil"),
  createElement("a", { href: "#panier" }, "Panier")
);
