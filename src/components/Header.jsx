import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="my-portfolio-website/src/assets/ojima-high-resolution-logo-white-transparent.png"
        alt="logo"
      />
      <img
        className="header__hamburger"
        src="my-portfolio-website/src/assets/hamburger.svg"
        alt="hamburger icon"
      />
    </div>
  );
}

export default Header;
