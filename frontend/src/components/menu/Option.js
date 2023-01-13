import React, { Fragment } from "react";
import "./Option.css";

const Option = ({ setShowChart }) => {
  return (
    <Fragment>
      <div className="option_wrapper">
        <div className="option_item" onClick={() => setShowChart(true)}>
          <span>Coffee Chart</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Option;
