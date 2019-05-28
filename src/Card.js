import React from "react";

const Card = props => {
  return (
    <li className="card">
      <a href={props.data.url}>
        <img src={props.data.image} alt={props.data.alt} />
        <div className="overlay">
          <h2>{props.data.title}</h2>
          <p>{props.data.description} </p>
        </div>
      </a>
    </li>
  );
};

export default Card;
