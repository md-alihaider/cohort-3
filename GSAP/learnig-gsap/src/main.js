import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".box", {
  x:-200
})
gsap.to(".box", {
  x: 700,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top 30%",
    scrub:1,
    markers:true
  },
});

// const play = document.getElementById("play");
// const pause = document.getElementById("pause");
// const restart = document.getElementById("restart");
// const reverse = document.getElementById("reverse");

// const tl = gsap.timeline({paused: true});

// // this is timeline sequencing
// tl.to(".box1", {
//   x: 600,
//   duration: 1.3,
//   ease: "power3.out",
// })
//   .to(".box2", {
//     x: 600,
//     duration: 1.3,
//     ease: "power3.out",
//   })
//   .to(".box3", {
//     x: 600,
//     duration: 1.3,
//     ease: "power3.out",
//   })
//   .to(".box4", {
//     x: 600,
//     duration: 1.3,
//     ease: "power3.out",
//   });

// play.addEventListener("click", () => {
//   tl.play();
// });
// pause.addEventListener("click", () => {
//   tl.pause();
// })
// restart.addEventListener("click", () => {
//   tl.restart();
// })
// reverse.addEventListener("click", () => {
//   tl.reverse();
// })

//repeat

// gsap.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "bounce.In",
//   repeat: -1,
//   yoyo: true,
// })

// const obj = {
//   value: 0,
// };

// const counter = document.querySelector(".loader-count h2");

// gsap.to(obj, {
//   value: 100,
//   duration: 1.7,
//   ease: "none",
//   onUpdate: () => {
//     counter.textContent = `${obj.value.toFixed(0)}%`;
//   },
//   onComplete: () => {
//     gsap.to(counter, {
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//       onComplete: () => {
//         tl.play();
//       },
//     });
//   },
// });

// const tl = gsap.timeline({ paused: true });

// gsap.set([".heading h1", ".sub-heading p"], {
//   yPercent: 110,
// });

// tl.to(".loader", {
//   yPercent: 100,
//   duration: 1.2,
//   ease: "expo.out",
// })
//   .from(
//     ".hero-bg img",
//     {
//       scale: 1.5,
//       duration: 1.23,
//       ease: "expo.out",
//     },
//     "-=1.1",
//   )
//   .to(
//     ".heading h1",
//     {
//       yPercent: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     },
//     "-=0.9",
//   )
//   .to(
//     ".sub-heading p",
//     {
//       yPercent: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     },
//     "-=0.8",
//   );
