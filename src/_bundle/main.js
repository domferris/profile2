import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

// Add margin-left to main content for fixed nav
const mainNav = document.getElementById("main-nav");
const mainNavWidth = mainNav.clientWidth;
const content = document.getElementById("content");
content.style.marginLeft = `${mainNavWidth}px`;

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
