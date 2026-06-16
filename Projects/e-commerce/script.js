const createBtn = document.querySelector("#create");
const createProduct = document.querySelector(".create-product");
const closeBtn = document.querySelector("#cancel");

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createProduct.style.display = "flex";
})

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createProduct.style.display = "none";
})
