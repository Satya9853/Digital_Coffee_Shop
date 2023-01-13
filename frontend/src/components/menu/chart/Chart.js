import React, { useRef } from "react";

import "./Chart.css";
import useClickOutside from "../../hooks/useClickOutside-hook";

const Chart = ({ setShowChart }) => {
  const chartRef = useRef(null);
  useClickOutside(chartRef, () => setShowChart(false));
  return (
    <div className="blur">
      <div className="chart_wrap" ref={chartRef}>
        <div className="chart_header">Coffee Chart</div>
        <div className="chart_text">
          Whether you’re looking to understand the menu at a coffee shop or brew a new drink at home, we’re here to help. Take a close look at the
          coffee drink chart and keep reading for our list of the 22 different types of coffee drinks.
        </div>
        <div className="chart"></div>
      </div>
    </div>
  );
};

export default Chart;
