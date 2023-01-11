import React, { useRef, useState } from "react";
import "./RightHome.css";
import Search from "../../../svg/Search";
import { coffee_history } from "../../../data/coffee_history";
import SuggesstionBox from "./SuggesstionBox";

const LeftHome = ({ setShowHistory, setCoffeeHistory }) => {
  const [filterArray, setFilterArray] = useState([]);
  const historyInputRef = useRef(null);

  const infoHandler = (event) => {
    if (event.keyCode && event.keyCode !== 13) return;
    const text = historyInputRef.current.value;
    if (!text) return;
    const data = coffee_history.find((item) => item.title.toLocaleLowerCase() === text.toLocaleLowerCase());
    if (!data) return;
    setCoffeeHistory(data);
    setShowHistory(true);
  };

  const filterData = (event) => {
    const text = event.target.value;
    const filtered_values = coffee_history.filter((data) => data.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setFilterArray(filtered_values);
  };

  return (
    <div className="right_home">
      <div className="right_home_text">Want to know about your coffee ?</div>
      <div className="right_home_input">
        <div onClick={infoHandler}>
          <Search color="#fff" />
        </div>
        <input
          type="text"
          placeholder="Coffee name ..."
          ref={historyInputRef}
          onKeyDown={infoHandler}
          onChange={filterData}
          onBlur={() => setFilterArray([])}
        />
      </div>
      {filterArray.length !== 0 && <SuggesstionBox filterArray={filterArray} historyInputRef={historyInputRef} />}
    </div>
  );
};

export default LeftHome;
