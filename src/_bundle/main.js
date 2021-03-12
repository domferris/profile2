import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

// Add margin-left to main content for fixed nav
const mainNav = document.getElementById("main-nav");
const mainNavWidth = mainNav.clientWidth;
const content = document.getElementById("content");

// On page load, mainNav is either there or hidden
content.style.marginLeft = `${mainNavWidth}px`;

// Add/remove content margin if window is resized
window.addEventListener("resize", (event) => {
  const mainNavWidth = mainNav.clientWidth;
  const smBreakpoint = 640; // Tailwind sm breakpoint in px

  if (window.innerWidth >= smBreakpoint) {
    content.style.marginLeft = `${mainNavWidth}px`;
  } else if (window.innerWidth < smBreakpoint) {
    content.style.marginLeft = "0px";
  }
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
      name: "fade",
      to: {
        namespace: ["home", "projects", "experience", "info", "contact", "project"],
      },
      leave() {},
      enter() {},
    },
  ],
});
