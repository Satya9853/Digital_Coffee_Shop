import React, { useRef } from "react";

import "./InfoCard.css";
import useClickOutside from "../hooks/useClickOutside-hook";

const InfoCard = ({ coffeeInfo, setShowInfo, setCoffeeInfo }) => {
  const InfoRef = useRef(null);
  const ingredients = coffeeInfo.ingredients.join(",");

  useClickOutside(InfoRef, () => {
    setShowInfo(false);
    setCoffeeInfo("");
  });
  return (
    <div className="blur">
      <div className="card_wrap">
        <div className="recipe-card" ref={InfoRef}>
          <aside>
            <img src={coffeeInfo.image} alt={coffeeInfo.title} />
          </aside>
          <article>
            <h2>{coffeeInfo.title}</h2>
            <p>{coffeeInfo.description}</p>
            <p className="ingredients">
              <span>Ingredients:&nbsp;</span>
              {ingredients}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
