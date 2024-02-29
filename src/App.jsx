import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
  const header = (
    <div className="header">
      <img
        className="header__logo"
        src="src/assets/ojima-high-resolution-logo-white-transparent.png"
        alt="logo"
      />
      <img src="src/assets/hamburger.svg" alt="hamburger icon" />
    </div>
  );

  const footer = (
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
      <img
        className="footer__logo"
        src="src/assets/ojima-high-resolution-logo-white-transparent.png"
        alt="logo"
      />
    </div>
  );

  return (
    <>
      {header}
      {route}
      {footer}
    </>
  );
}

export default App;
