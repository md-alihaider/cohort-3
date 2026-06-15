const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inp1.value;
  let email = inp2.value;

  form.reset();
});
