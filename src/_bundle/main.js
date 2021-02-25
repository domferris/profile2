import "alpinejs";
import "./main.pcss";
import barba from "barba";
import barbaCss from "barbaCss";

barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "home",
      once: () => {},
    },
  ],
});

console.log("fucking finally");
