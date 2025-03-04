import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBarItem = (props) => {
  return (
    <li className="relative after:absolute hover:after:bg-green-500 hover:after:h-1 hover:after:w-full after:top-full after:left-0 after:scale-x-0 hover:after:scale-100 after:transition-transform hover:after:transition-transform after:duration-150 hover:after-duration-100 after:origin-top-left text-white hover:text-green-300">
      <Link to = { props.to }>{ props.label }</Link>
      <Outlet />
    </li>
  );
};

export default NavBarItem;