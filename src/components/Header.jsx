import React, { useState } from "react";
import NavMenu from "./NavMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="header">
      <img
        onClick={toggleMenu}
        className="header__hamburger"
        src="public/hamburger.svg"
        alt="hamburger icon"
      />
      {isOpen && <NavMenu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Header;
