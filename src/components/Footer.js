import React from "react";
import { Outlet, Link } from "react-router-dom";

// import assets
import logo from "../assets/logo/logo-color.png";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-start items-center gap-10 text-base py-4 px-12 bg-slate-400 text-white w-screen">
        <li>
          <Link to="/"><img src={logo} alt="stepladder logo" className="h-10"/></Link>
        </li>
        <li className="relative after:absolute after:bg-green-500 after:h-1 after:w-full after:top-full after:left-0 after:scale-0 after:transition-transform after:duration-75">
          <Link to="/about">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Coaching</Link>
        </li>
        <li>
          <Link to="/contact">Resources</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact">About</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavBar;