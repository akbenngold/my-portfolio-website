import React from "react";

function Button(props) {
  return (
    <a
      className={`btn bg-yellow w-${
        props.size ? 16 : 32
      } rounded-full font-semibold border-none`}
    >
      {props.children}
    </a>
  );
}

export default Button;
