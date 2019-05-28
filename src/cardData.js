import smoothieBar from "./assets/smoothie-bar.png";
import jsCalculator from "./assets/calculator.png";
import toDoApp from "./assets/to-do.png";
import sheRa from "./assets/she-ra.png";

const cardData = [
  {
    url: "https://github.com/starsuit/she-ra-character-selector",
    image: sheRa,
    alt: "she-ra app",
    title: "She-Ra Character Selector",
    description: "My first React App! Select from a grid of characters."
  },
  {
    url: "https://github.com/FAC-Sixteen/Smoothie-bar",
    image: smoothieBar,
    alt: "smoothie bar app",
    title: "Smoothie Bar",
    description:
      "A smoothie ordering app. Uses Express, Handlebars and PostgreSQL."
  },
  {
    url: "https://github.com/starsuit/calculator",
    image: jsCalculator,
    alt: "calculator app",
    title: "Calculator",
    description: "A vanilla JS calculator."
  },
  {
    url: "https://github.com/starsuit/FAC16-todo-app",
    image: toDoApp,
    alt: "to-do app",
    title: "To-Do App",
    description: "A to do app using pure functions and test-driven development."
  }
];

export default cardData;
