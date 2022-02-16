const url = "http://localhost:3000/menu";
let x;

fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:");
    iterateMenu(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function iterateMenu(menuArr) {
  menuArr.forEach((menuObj) => {
    renderMenu(menuObj);
  });
}

function renderMenu(menuObj) {
  let menuSpan = document.createElement("span");
  let menu = document.getElementById("menu-items");
  menuSpan.textContent = menuObj.name;
  document.getElementById("dish-image").src = menuObj.image;
  menu.appendChild(menuSpan);
  menuSpan.addEventListener("click", () => {
    document.getElementById("dish-image").src = menuObj.image;
    document.getElementById("dish-name").textContent = menuObj.name;
    document.getElementById("dish-description").textContent =
      menuObj.description;
    document.getElementById("dish-price").textContent = ` $${menuObj.price}`;
    document.getElementById("number-in-cart").textContent =
      menuObj.number_in_bag;
    x = menuObj;
  });
}

document.getElementById("cart-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let form = document.getElementById("cart-amount").value;
  let input = document.getElementById("number-in-cart");
  input.textContent = form;
  x.number_in_bag = form;
  console.log(form);
});
