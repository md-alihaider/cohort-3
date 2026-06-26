// const heading = document.querySelector("h1");

// heading.textContent = "Hello Ali";


// Question 2 — Change Background Color

// const btn = document.querySelector("#btn");

// const body = document.querySelector("body");

// btn.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });


// Question 3 — Display Input Value

const input = document.querySelector("#username");
const output = document.querySelector("#output");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  output.textContent = input.value;
  input.value = "";
});