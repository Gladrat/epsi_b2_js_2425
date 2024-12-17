import { createElement } from "../framework/core.js";

const pizzasDatas = [
  "Pizza spéciale",
  "Pizza reine",
  "Pizza chorizo",
  "Pizza 4 fromages",
  "Pizza poulet",
  "Pizza montagnarde",
];

export function PizzaList(state) {
  const pizzas = pizzasDatas.map((pizza) =>
    createElement(
      "li",
      null,
      pizza,
      " ",
      createElement(
        "button",
        {
          onclick: () => {
            state.pizzaCount++;
            state.pizzaSelection = [...state.pizzaSelection, pizza];
          },
        },
        "+"
      )
    )
  );

  return createElement("ul", null, ...pizzas);
}
