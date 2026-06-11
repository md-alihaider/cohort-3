const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

// main.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
// });

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3, // Higher = more lag/smoothness, Lower = snappier
    ease: "power2.out", // Smooth deceleration
  });
});