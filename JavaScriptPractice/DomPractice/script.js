const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

// let flag = true;
// btn.addEventListener("click", function () {
//   if (flag) {
//     bulb.style.backgroundColor = "yellow";
//     btn.innerText = "Turn Off";
//     flag = false;
//   } else {
//     bulb.style.backgroundColor = "black";
//     btn.innerText = "Turn On";
//     flag = true;
//   }
// });

btn.addEventListener("click", () => {
  if (bulb.classList.toggle("lightup")) {
    btn.innerText = "Turn Off";
  } else {
    btn.innerText = "Turn On";
  }
});
