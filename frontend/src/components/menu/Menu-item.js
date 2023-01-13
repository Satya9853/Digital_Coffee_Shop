import React from "react";
import "./Menu-item.css";
import Timer from "../../svg/Timer";
import Ingredients from "../../svg/Ingredients";
import Price from "../../svg/Price";
import CoffeeCup from "../../svg/CoffeeCup";

const Menu = ({ item }) => {
  const ingredients = item.ingredients.join(", ");
  return (
    <div className="info_container">
      <div className="info_card">
        <div className="info_card_front">
          <img src={item.image} />
          <div className="info_front_header">
            <span>{item.title} Coffee</span>
          </div>
        </div>
        <div className="info_card_back">
          <div className="info_card_back_item">
            <div className="info_icons">
              <i>
                <Timer />
              </i>
              <span>{item.time}</span>
            </div>

            <div className="info_icons">
              <i>
                <Ingredients />
              </i>
              <span>{ingredients}</span>
            </div>
            <div className="info_icons">
              <i>
                <Price />
              </i>
              <span>Rs.{item.price}</span>
            </div>
          </div>
          <div className="split-line"></div>
          <div className="info_back_button_container">
            <button className="info_back_button">
              Brew <CoffeeCup />
            </button>
          </div>
          <div className="info_card_back_description">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
