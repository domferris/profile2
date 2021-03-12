import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

// Add margin-left to main content for fixed nav
const mainNav = document.getElementById("main-nav");
let mainNavWidth = mainNav.clientWidth;
const content = document.getElementById("content");

// On page load, mainNav is either there or hidden
content.style.marginLeft = `${mainNavWidth}px`;

// Add/remove content margin if window is resized
window.addEventListener("resize", (event) => {
  const smBreakpoint = 640; // Tailwind sm breakpoint in px
  mainNavWidth = mainNav.clientWidth;

  window.innerWidth >= smBreakpoint
    ? (content.style.marginLeft = `${mainNavWidth}px`)
    : (content.style.marginLeft = "0px");
});

// barba.js page transitions
barba.use(barbaCss);

barba.hooks.before((data) => {
  const main = document.querySelector("main");
  const background = data.next.container.dataset.background;

  main.style.setProperty("--page-background", background);
});

let transitionName = "";

window.innerWidth >= smBreakpoint
  ? (transitionName = "fade-transition")
  : (transitionName = "fade-in");

barba.init({
  transitions: [
    {
      name: transitionName,
      to: {
        namespace: ["home", "projects", "experience", "info", "contact", "project"],
      },
      leave() {},
      enter() {},
    },
  ],
  preventRunning: true,
});
