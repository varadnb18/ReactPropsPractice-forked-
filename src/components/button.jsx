import React from "react";

function Buttonn({ color, toggleColor }) {
  return (
    <button
      id="btnh"
      className="btn"
      onClick={toggleColor}
      style={{ color: color }}
    >
      <i className="bi bi-heart-fill"></i>
    </button>
  );
}

export default Buttonn;
