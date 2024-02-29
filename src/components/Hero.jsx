import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__stitle">{props.title}</div>
      <div className="hero__subtitle">{props.subtitle}</div>
    </div>
  );
}

export default Hero;
