import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

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
        namespace: [
          "home",
          "projects",
          "info",
          "contact",
          "reele",
          "archive",
          "gamestahp",
        ],
      },
      leave() {},
      enter() {},
    },
  ],
});
