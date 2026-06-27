function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector("main");
var crsr2 = document.querySelector(".cursor2");
var heroVideo = document.querySelector("#hero-video");

// 1. Move BOTH cursors inside the main mousemove event
document.addEventListener("mousemove", function (dets) {
  // Use clientX and clientY for better browser compatibility
  crsr.style.left = dets.clientX + 20 + "px";
  crsr.style.top = dets.clientY + 20 + "px";

  crsr2.style.left = dets.clientX + "px";
  crsr2.style.top = dets.clientY + "px";
});

// 2. Only handle the opacity toggling on hover
heroVideo.addEventListener("mouseenter", function () {
  crsr.style.opacity = 0;
  crsr2.style.opacity = 1;
});

heroVideo.addEventListener("mouseleave", function () {
  crsr.style.opacity = 1;
  crsr2.style.opacity = 0;
});



gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "main",
    // markers:true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim",
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim",
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim",
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "main",
    // markers:true,
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to("main", {
  backgroundColor: "#fff",
});


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "main",
    // markers:true,
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

tl3.to("main", {
  backgroundColor: "#0F0D0D",
});
