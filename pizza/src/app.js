import { render, createElement } from "./framework/core.js";

const state = {
  title: "pizza world!",
};

const app = createElement(
  "app",
  createElement("h1", `Hello ${state.title}`),
  createElement("p"),
  createElement(
    "ul",
    createElement("li", "Pizza reine"),
    createElement("li", "Pizza 4 fromages"),
    createElement("li", "Pizza chorizo")
  )
);

console.log(app);

render(
  app,
  document.querySelector("#root")
);

