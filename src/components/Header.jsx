import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="public/ojima-high-resolution-logo-white-transparent.png"
        alt="logo"
      />
      <img
        className="header__hamburger"
        src="public/hamburger.svg"
        alt="hamburger icon"
      />
    </div>
  );
}

export default Header;
