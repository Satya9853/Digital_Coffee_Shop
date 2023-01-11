import React from "react";

const SuggesstionBox = ({ filterArray, historyInputRef }) => {
  const handleItemClick = (event) => {
    const text = event.target.firstChild.textContent;
    historyInputRef.current.value = text;
  };
  return (
    <div className="suggestion_box">
      {filterArray &&
        filterArray.length !== 0 &&
        filterArray.map((data) => (
          <div className="filter_item" key={data.id} onMouseDown={handleItemClick}>
            <span>{data.title}</span>
          </div>
        ))}
    </div>
  );
};

export default SuggesstionBox;
