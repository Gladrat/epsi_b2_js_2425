const root = document.querySelector("root");
let cart = [];

// Coder un observer réactif sur la liste des produits

let products = [];
await fetch("http://localhost:5000/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;
  })
  .catch((error) =>
    console.error("Erreur lors de la récupération des produits:", error)
  );

products.forEach((product, i) => {
  const productID = product.toLowerCase().replace(" ", "_");

  const productHTML = document.createElement("div");
  productHTML.id = productID;
  productHTML.className = "page";
  productHTML.style.display = i == 0 ? "block" : "none";

  productHTML.innerHTML = `<h1>${product}<h1>`;
  const button = document.createElement("button");
  button.textContent = "Add to cart";
  button.addEventListener("click", () => addToCart(productID));

  productHTML.innerHTML = `<h1>${product}</h1>`;
  productHTML.appendChild(button);
  root.prepend(productHTML);

  const nav = root.querySelector("nav");
  const productNav = document.createElement("button");
  productNav.textContent = `Go to ${product}`;
  productNav.style.marginRight = "3px";
  productNav.addEventListener("click", () => {
    changePage(productID);
  });

  nav.append(productNav);
});

function changePage(page) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p) => {
    p.style.display = "none";
  });

  document.querySelector(`#${page}`).style.display = "block";
}

function addToCart(product) {
  if (!cart.includes(product)) {
    cart.push(product);
    console.log(cart);
    updateCart();
  }
}

function updateCart() {
  const cartList = document.querySelector("#cart-list");
  cartList.innerHTML = "";

  cart.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;

    cartList.append(li);
  });
}
