import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

barba.use(barbaCss);

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
