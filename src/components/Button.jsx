import React from "react";

function Button(props) {
  return (
    <button>
      <span className="button__label">{props.label}</span>
      <span className="button__arrow">{props.arrow}</span>
    </button>
  );
}

export default Button;
