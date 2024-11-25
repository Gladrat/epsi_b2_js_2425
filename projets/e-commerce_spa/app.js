let cart = [];
let products = ["Product 01", "Product 02", "Product 03"]



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
