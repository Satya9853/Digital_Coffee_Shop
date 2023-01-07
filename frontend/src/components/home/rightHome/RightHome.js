import React from "react";
import "./RightHome.css";
import Search from "../../../svg/Search";

const LeftHome = () => {
  return (
    <div className="right_home">
      <div className="right_home_text">Want to know about your coffee ?</div>
      <div className="right_home_input">
        <div>
          <Search color="#fff" />
        </div>
        <input type="text" placeholder="Coffee name ..." />
      </div>
    </div>
  );
};

export default LeftHome;
