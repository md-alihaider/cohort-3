const h2 = document.querySelector("h2");

const btn = document.querySelector("button");

let flag = true
btn.addEventListener("click", function () {
  if (flag) {
    h2.innerText = "Friend"
    h2.style.color = "green";
    btn.innerText = "Remove Friend"
    flag = false;
  } else {
    h2.innerText = "Stranger"
    h2.style.color = "red";
    btn.innerText = "Add Friend"
    flag = true;
  }
})