import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside-hook";

import "./HistoryCard.css";

const HistoryCard = ({ coffeeHistory, setShowHistory, setCoffeeHistory }) => {
  const historyRef = useRef(null);

  useClickOutside(historyRef, () => {
    setShowHistory(false);
    setCoffeeHistory("");
  });

  return (
    <div className="blur">
      <div className="card">
        <div className="card_wrap" ref={historyRef}>
          <div className="card_left_info">
            <div className="card_header">{coffeeHistory.title}</div>
            <ul className="card_info_list">
              {coffeeHistory.inventedBy && <li>Invented by : {coffeeHistory.inventedBy}</li>}
              {coffeeHistory.year && <li>First made in year : {coffeeHistory.year}</li>}
              {coffeeHistory.place && <li>Origin : {coffeeHistory.place}</li>}
            </ul>
            <div className="card_about">{coffeeHistory.about}</div>
          </div>
          <div className="card_right_image">
            <img src={coffeeHistory.image} alt={coffeeHistory.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
