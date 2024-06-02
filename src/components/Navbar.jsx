import React from "react";
import Button from "./Button";

function Navbar() {
  const navItems = (
    <>
      {" "}
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>{" "}
      <li>
        <a href="#about-me">About me</a>
      </li>
      <li>
        <a href="#contact-me">Contact me</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 relative section-container bg-inherit section-container">
      <div className="navbar-start">
        <a className="btn btn-ghost text-4xl">OJ_</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navItems} </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end fixed  top-2 z-10 md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <div className="bg-yellow p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm menuItems dropdown-content mt-3 z-[1] p-2 shadow bg-[#fff] rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
