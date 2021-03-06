import React from "react";
import cardData from "./cardData";
import Card from "./Card";
import DarkCard from "./DarkCard";

const CardContainer = props => {
  const leftovers = cardData.length % 3;
  console.log(cardData.length, leftovers);
  return (
    <React.Fragment>
      <p className="look">
        Please take a look at some of my favourite projects:
      </p>
      <ul className="card-container">
        {cardData.map(data => (
          <Card data={data} key={data.title} />
        ))}
        {leftovers > 0 &&
          (leftovers === 2 ? (
            <DarkCard />
          ) : (
            <React.Fragment>
              <DarkCard />
              <DarkCard />
            </React.Fragment>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default CardContainer;
