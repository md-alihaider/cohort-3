import "./style.css";
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

// gsap.fromTo(".box", {
//   y: 200,
//   backgroundColor:"limegreen"
// }, {
//   y: 0,
//   x: 600,
//   rotate: 360,
//   backgroundColor: "lime",
//   duration: 3,
//   ease:"power1.in"
// })

// set method don't animate anything it just set or place things where you want

// gsap.set(".box", {
//   x: 400,
//   y: 400,
//   backgroundColor:"blue"
// })

// gsap.from(".box", {
//   x: 400,
//   duration: 3, // seconds
//   delay: 0.3, // wait 0.3s before starting
//   ease: "bounce.out",
// });

// gsap.fromTo(".box", {
//   opacity:0,
//   scale:0.5,
// }, {
//   opacity: 1,
//   scale: 1,
//   duration:3
// })

// const obj = {
//   score:0
// }

// gsap.to(obj, {
//   score: 500,
//   duration: 3,
//   onUpdate:()=> console.log(Math.round(obj.score))
// })

// gsap.to(".box", {
//   x:"+=50"
// })

// document.querySelectorAll(".btn").forEach((btn) => {
//   btn.addEventListener("mouseenter", () => {
//     // Default hover scale
//     gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "back.out(2)" });

//     // Scale Button Effect
//     if (btn.classList.contains("btn--scale")) {
//       gsap.to(btn, {
//         backgroundColor: "limegreen",
//         color: "white",
//         fontSize: "1rem",
//         duration: 1.3,
//         ease: "elastic.inOut",
//       });
//     }

//     // Glow Button Effect
//     if (btn.classList.contains("btn--glow")) {
//       gsap.to(btn, {
//         boxShadow: "0px 10px 20px rgba(255, 0, 0, 0.94)",
//         duration: 0.3,
//         backgroundColor: "limegreen",
//       });
//     }

//     // Wiggle Button Effect
//     if (btn.classList.contains("btn--wiggle")) {
//       gsap.to(btn, {
//         yoyo: true,
//         repeat: 1,
//         rotate: 180,
//         duration: 0.3, // Added duration for smoother control
//       });
//     }
//   });

//   // FIX: Reset all styles back to their original CSS states
//   btn.addEventListener("mouseleave", () => {
//     // 1. Reset the default properties (scale)
//     gsap.to(btn, {
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out",
//     });

//     // 2. Reset the specific button properties
//     if (btn.classList.contains("btn--scale")) {
//       gsap.to(btn, {
//         backgroundColor: "", // Passing empty string restores original CSS values
//         color: "",
//         fontSize: "",
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }

//     if (btn.classList.contains("btn--glow")) {
//       gsap.to(btn, {
//         boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Fades shadow out completely
//         backgroundColor: "",
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }

//     if (btn.classList.contains("btn--wiggle")) {
//       gsap.to(btn, {
//         rotate: 0, // Snaps or rolls back to the starting angle
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   });
// });

gsap.to(".box", {
  x: 900,
  duration: 2,
  delay: 0.3,
  ease: "power2.out",
  stagger: {
    each: 0.4,
    from: "center",
    grid:"auto"
  }
});
