import React from "react";

const Price = () => {
  return (
    <svg fill="#39B5E0" width="20px" height="20px" viewBox="0 0 24 24" id="price-tag" data-name="Flat Line" className="icon flat-line">
      <path id="secondary" d="M21,10V4a1,1,0,0,0-1-1H14L3.68,13.26a1,1,0,0,0,0,1.41l5.66,5.66a1,1,0,0,0,1.41,0Z"></path>
      <line id="primary-upstroke" x1="16.45" y1="7.5" x2="16.55" y2="7.5"></line>
      <path id="primary" d="M21,10V4a1,1,0,0,0-1-1H14L3.68,13.26a1,1,0,0,0,0,1.41l5.66,5.66a1,1,0,0,0,1.41,0Z"></path>
    </svg>
  );
};

export default Price;
