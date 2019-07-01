import smoothieBar from "./assets/smoothie-bar.png";
import jsCalculator from "./assets/calculator.png";
import toDoApp from "./assets/to-do.png";
import sheRa from "./assets/she-ra.png";
import neopetsApi from "./assets/neopets-api.png";
import mastermind from "./assets/mastermind.png";
import bookBrowse from "./assets/book-browse.jpg";
import recyclingHeroes from "./assets/recycling-heroes.jpg";

const cardData = [
  {
    url: "https://github.com/starsuit/book-browse",
    image: bookBrowse,
    alt: "book searching app",
    title: "Book Browse",
    description: "Python & Django app allowing the user to search books."
  },
  {
    url: "https://github.com/starsuit/RE4.W",
    image: recyclingHeroes,
    alt: "recycling game",
    title: "Recycling Superheroes",
    description: "ReactDnD drag and drop game teaching kids recycling."
  },
  {
    url: "https://github.com/starsuit/mastermind",
    image: mastermind,
    alt: "mastermind game",
    title: "Mastermind Game",
    description: "React-based version of the classic board game."
  },
  {
    url: "https://github.com/starsuit/neopets",
    image: neopetsApi,
    alt: "neopets api",
    title: "NeoPets API",
    description: "A tiny API that returns NeoPets data"
  },
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
