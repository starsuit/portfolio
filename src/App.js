import React from "react";
import { ReactComponent as Starsuit } from "./starsuit.svg";
import CardContainer from "./CardContainer";
import Hello from "./Hello";
import ContactInfo from "./ContactInfo";

const limit = (lower, upper, x, y) => {
  const diff = upper - lower;
  const widthPercent = x / window.innerWidth;
  const heightPercent = y / window.innerHeight;
  const avgPercent = Math.max(widthPercent, heightPercent);
  const proportion = avgPercent * diff;
  console.log({ avgPercent, proportion });
  return lower + proportion;
};

function App() {
  const [X, setX] = React.useState(0);
  const [Y, setY] = React.useState(0);

  const col1 = limit(200, 280, X, Y);
  const col2 = limit(260, 340, X, Y);
  const col3 = limit(320, 350, X, Y);
  const col4 = limit(340, 360, X, Y);

  React.useEffect(() => {
    document.body.style.setProperty("--col1", col1);
    document.body.style.setProperty("--col2", col2);
    document.body.style.setProperty("--col3", col3);
    document.body.style.setProperty("--col4", col4);
  }, [col1, col2, col3, col4]);

  React.useEffect(() => {
    const handleMouseMove = event => {
      setX(event.x);
      setY(event.y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://codepen.io/Starsuit/pen/mQzOzm"
          aria-label="link to this svg in codepen"
        >
          <Starsuit className="App-logo" alt="logo" />
        </a>
      </header>
      <main>
        <Hello />
        <ContactInfo />
        <section className="project-links">
          <CardContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
