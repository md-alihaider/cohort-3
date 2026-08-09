import './style.css'
import { gsap } from "gsap";

// gsap.to(".box", {
//   x: 300, // move 300px right
//   rotation: 360, // spin a full turn
//   duration: 2, // over 2 seconds
//   ease: "power2.out",
// });


// gsap.to("#boxId", {
//   x: 300,
//   rotate: 360,
//   duration:2,
//   ease:"bounce.out"
// })


// const box = document.querySelector(".box")
// to method start with default value to given value 
// gsap.to(box, {
//   x: 300,
//   rotate: 360,
//   duration:2,
//   ease:"bounce.out"
// })

// from method it start with given value to start value or defaul value 
// gsap.from(".box", {
//   x: 300,
//   rotate: 360,
//   duration: 2,
//   ease: "bounce.out",
// });

// fromTo method combine both to and from method 

gsap.fromTo(".box", {
  y: 200,
  backgroundColor:"limegreen"
}, {
  y: 0,
  x: 600,
  rotate: 360,
  backgroundColor: "lime",
  duration: 3,
  ease:"power1.in"
})