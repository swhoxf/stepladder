import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-10 text-2xl pb-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;