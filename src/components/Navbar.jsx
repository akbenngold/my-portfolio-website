import React from "react";
import Button from "./Button";

function Navbar() {
  const navItems = (
    <>
      {" "}
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a href="">Portfolio</a>
      </li>
      <li>
        <a>Testimonials</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  section-container bg-inherit section-container">
      <div className="navbar-start">
        <a className="btn btn-ghost text-4xl">OJ.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems} </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
