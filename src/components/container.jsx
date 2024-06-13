import React, { useState } from "react";
import Buttonn from "./button";

function Container(props) {
  const [color, setColor] = useState("white");

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "white" : "red"));
  };

  return (
    <div className="container">
      <div className="heart">
        <Buttonn color={color} toggleColor={toggleColor} />
      </div>
      <img className="box-img" src={props.img} alt="villa" />
      <p className="place">{props.place}</p>
      <p className="side">{props.side}</p>
      <p className="price">
        {props.price}
        <span id="period"> night</span>
      </p>
    </div>
  );
}

export default Container;
