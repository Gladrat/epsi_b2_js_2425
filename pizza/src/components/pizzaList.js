import { createElement } from "../framework/core.js";

const pizzasDatas = [
  "Pizza spéciale",
  "Pizza reine",
  "Pizza chorizo",
  "Pizza 4 fromages",
  "Pizza poulet",
];

export const pizzas = pizzasDatas.map((pizza) =>
  createElement(
    "li",
    null,
    pizza,
    " ",
    createElement(
      "button",
      {
        onclick: () => {
          console.log(pizza);
        },
      },
      "+"
    )
  )
);

export const PizzaList = createElement("ul", null, ...pizzas);
