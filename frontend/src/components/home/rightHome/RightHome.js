import React, { useRef } from "react";
import "./RightHome.css";
import Search from "../../../svg/Search";
import { coffee_info } from "../../../data/coffee_info";

const LeftHome = ({ setShowInfo, setCoffeeInfo }) => {
  const infoInputRef = useRef(null);

  const infoHandler = (event) => {
    if (event.keyCode && event.keyCode !== 13) return;
    const text = infoInputRef.current.value;
    if (!text) return;
    const data = coffee_info.find((item) => item.title.toLocaleLowerCase() === text.toLocaleLowerCase());
    if (!data) return;
    setCoffeeInfo(data);
    setShowInfo(true);
  };

  return (
    <div className="right_home">
      <div className="right_home_text">Want to know about your coffee ?</div>
      <div className="right_home_input">
        <div onClick={infoHandler}>
          <Search color="#fff" />
        </div>
        <input type="text" placeholder="Coffee name ..." ref={infoInputRef} onKeyDown={infoHandler} />
      </div>
    </div>
  );
};

export default LeftHome;
