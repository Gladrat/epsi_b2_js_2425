import { createElement } from "../framework/core.js";

// Ajouter un bouton "Commander" sur chaque pizza
// Ajouter un événement -> console.log("pizza") lors du click

export const PizzaList = createElement(
  "ul",
  createElement(
    "li",
    null,
    "Pizza spéciale",
    " ",
    createElement(
      "button",
      {
        onclick: () => {
          console.log("Pizza spéciale");
        },
      },
      "Commander"
    )
  ),
  createElement(
    "li",
    null,
    "Pizza reine",
    " ",
    createElement(
      "button",
      {
        onclick: () => {
          console.log("Pizza reine");
        },
      },
      "+"
    )
  ),
  createElement(
    "li",
    null,
    "Pizza 4 fromages",
    " ",
    createElement(
      "button",
      {
        onclick: () => {
          console.log("Pizza reine");
        },
      },
      "+"
    )
  ),
  createElement(
    "li",
    null,
    "Pizza chorizo",
    " ",
    createElement(
      "button",
      {
        onclick: () => {
          console.log("pizza");
        },
      },
      "+"
    )
  )
);
