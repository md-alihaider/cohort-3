const registerLink = document.querySelector("#register-link");
const loginLink = document.querySelector("#login-link");
const loginContainer = document.querySelector(".login-container");
const registerContainer = document.querySelector(".register-container");

const currentForm = localStorage.getItem("currentForm");
if (currentForm === "register") {
  loginContainer.classList.remove("active");
  registerContainer.classList.add("active");
} else {
  loginContainer.classList.add("active");
  registerContainer.classList.remove("active");
}


registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginContainer.classList.remove("active");
  registerContainer.classList.add("active");
  localStorage.setItem("currentForm", "register");
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  registerContainer.classList.remove("active");
  loginContainer.classList.add("active");
  localStorage.setItem("currentForm", "login");
});