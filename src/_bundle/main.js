import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

// Add margin-left to main content for fixed nav
const mainNav = document.getElementById("main-nav");
let mainNavWidth = mainNav.clientWidth;
const content = document.getElementById("content");
const smBreakpoint = 640; // Tailwind sm breakpoint in px

// On page load, mainNav is either there or hidden
content.style.marginLeft = `${mainNavWidth}px`;

// Add/remove content margin if window is resized
window.addEventListener("resize", (event) => {
  mainNavWidth = mainNav.clientWidth;

  window.innerWidth >= smBreakpoint
    ? (content.style.marginLeft = `${mainNavWidth}px`)
    : (content.style.marginLeft = "0px");
});

// barba.js page transitions
barba.use(barbaCss);

const main = document.querySelector("main");

barba.hooks.before((data) => {
  const background = data.next.container.dataset.background;

  main.style.setProperty("--page-background", background);
});

barba.init({
  transitions: [
    {
      name: "fade-in",
      to: {
        namespace: ["home", "projects", "experience", "info", "contact", "project"],
      },
      leave() {},
      enter() {},
    },
  ],
  preventRunning: true,
});
