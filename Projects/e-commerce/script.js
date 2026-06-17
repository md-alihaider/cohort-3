const createBtn = document.querySelector("#create");
const createProduct = document.querySelector(".create-product");
const closeBtn = document.querySelector("#cancel");
const form = document.querySelector("form");

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createProduct.style.display = "flex";
})

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createProduct.style.display = "none";
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = e.target[0].value;
  console.log(product);
})
