import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <button>
      <img src={props.arrow} alt="" />
      {props.label}
    </button>
  );
}

export default Button;
