export function createElement(tag, ...children) {
  return {  tag: tag, children: children,};
}

// Rendre un composant sur la page
// template : Code HTML
// container : Emplacement sur la page
export function render(template, container) {
  container.innerHTML = template;
}
