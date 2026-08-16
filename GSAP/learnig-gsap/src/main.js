import "./style.css";
import { gsap } from "gsap";
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");
const tl = gsap.timeline({paused: true});

// this is timeline sequencing
tl.to(".box1", {
  x: 600,
  duration: 1.3,
  ease: "power3.out",
})
  .to(".box2", {
    x: 600,
    duration: 1.3,
    ease: "power3.out",
  })
  .to(".box3", {
    x: 600,
    duration: 1.3,
    ease: "power3.out",
  })
  .to(".box4", {
    x: 600,
    duration: 1.3,
    ease: "power3.out",
  });

play.addEventListener("click", () => {
  tl.play();
});
pause.addEventListener("click", () => {
  tl.pause();
})
restart.addEventListener("click", () => {
  tl.restart();
})