import React from "react";
import { Outlet, Link } from "react-router-dom";

import NavBarItem from "./NavBarItem";

// import assets
import logo from "../assets/logo/logo-color-reversed.png";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-start items-center gap-10 text-base py-4 px-12 bg-cyan-900 text-white w-screen">
        <li>
          <Link to="/"><img src={logo} alt="stepladder logo" className="h-10"/></Link>
        </li>
        <NavBarItem to="/about" label="Courses"/>
        <NavBarItem to="/about" label="Coaching"/>
        <NavBarItem to="/about" label="Resources"/>
        <NavBarItem to="/contact" label="Contact"/>
        <NavBarItem to="/about" label="About"/>
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavBar;