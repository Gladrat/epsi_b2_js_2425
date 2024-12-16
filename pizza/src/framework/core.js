export function createElement(tag, props = {}, ...children) {
  return { tag: tag, children: children };
}

export function render(vNode, container) {
  // console.log({ vNode });

  if (typeof vNode === "string" || typeof vNode === "number") {
    container.appendChild(document.createTextNode(vNode));
    return;
  }

  const element = document.createElement(vNode.tag);

  vNode.children.forEach((child) => {
    render(child, element);
  });

  container.appendChild(element);
}
