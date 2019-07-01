import React from "react";

import CV from "./assets/CV.pdf";

const Hello = props => {
  return (
    <React.Fragment>
      <h1>Hi, I'm Sam</h1>
      <p className="subtitle">
        I'm a full-stack web developer, trained by{" "}
        <a href="https://www.foundersandcoders.com/">Founders and Coders</a>
      </p>

      <p className="cv">
        <a href={CV} target="_blank" rel="noopener noreferrer">
          Download my CV{" "}
          <svg
            viewBox="0 0 32 32"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          >
            <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
          </svg>
        </a>
      </p>
    </React.Fragment>
  );
};

export default Hello;
