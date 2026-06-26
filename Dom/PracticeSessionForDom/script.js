// const heading = document.querySelector("h1");

// heading.textContent = "Hello Ali";


// Question 2 — Change Background Color

// const btn = document.querySelector("#btn");

// const body = document.querySelector("body");

// btn.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });


// Question 3 — Display Input Value

// const input = document.querySelector("#username");
// const output = document.querySelector("#output");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   output.textContent = input.value;
//   input.value = "";
// });


// Question 4 — Hide and Show Text

// const message = document.querySelector("#message");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   if (message.style.display === "none") {
//     message.style.display = "block";
//   } else {
//     message.style.display = "none";
//   }
// });


// Question 5 — Add New List Item

// const list = document.querySelector("#list");
// const addBtn = document.querySelector("#addBtn");
// const removeBtn = document.querySelector("#removeBtn");

// addBtn.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "Banana";
//   list.appendChild(li);
// });

// removeBtn.addEventListener("click", () => {
//   const li = document.querySelector("li");
//   li.remove();
// });


// Question 6 — Remove a Card

// const card = document.querySelector(".card");
// const btn = document.querySelector("button");


// btn.addEventListener("click", () => {
//   card.remove();
// })



// Question 7 — Counter App

// const increaseBtn = document.querySelector("#increase");
// const decreaseBtn = document.querySelector("#decrease");
// const heading = document.querySelector("h1");

// let count = 0;

// increaseBtn.addEventListener("click", () => {
//   count += 1;
//   heading.textContent = count
// })

// decreaseBtn.addEventListener("click", () => {
//   if (count > 0) {
//     count -= 1
//   }
//   heading.textContent = count
// })


// Question 8 — Live Character Counter

// const textarea = document.querySelector("textarea");
// const Character = document.querySelector("p")

// textarea.addEventListener("input", () => {
//   Character.textContent = `Characters: ${textarea.value.length}`;
// })


// Question 9 — Todo List

// const input = document.querySelector("input");
// const addBtn = document.querySelector("button");
// const ul = document.querySelector("ul")


// addBtn.addEventListener("click", () => {
//   let newUl = input.value;
//   let li = document.createElement("li")
//   li.textContent = newUl
//   ul.append(li)
// })



// Question 10 — Image Gallery

const images = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&h=150",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
];

const gallery = document.querySelectorAll("img");
const nextBtn = document.querySelector("button");


nextBtn.addEventListener("click", () => {
  const currentImage = images.shift();
  images.push(currentImage);
  gallery.forEach((image, index) => {
    image.src = images[index];
  });
})