import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { FaAlignJustify } from "react-icons/fa6";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="header">
      <FaAlignJustify
        className="header__hamburger"
        onClick={toggleMenu}
        color="white"
        size="4rem"
      />

      {isOpen && <NavMenu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Header;
