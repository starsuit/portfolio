import React from "react";
import starsuit from "./starsuit.svg";
import CardContainer from "./CardContainer";
import Hello from "./Hello";
import ContactInfo from "./ContactInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={starsuit} className="App-logo" alt="logo" />
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
