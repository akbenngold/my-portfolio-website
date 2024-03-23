import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <ul className="footer__nav">
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="footer__links">
        <div className="email">
          <a href="mailto:akbenngold@gmail.com">akbenngold@gmail.com</a>
        </div>
      </div>
      <p>Made with ❤️ and 💡 by Ojima.</p>
    </div>
  );
}

export default Footer;
