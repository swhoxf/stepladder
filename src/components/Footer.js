import React from "react";
import { Outlet, Link } from "react-router-dom";

// import assets
import logo from "../assets/logo/logo-color.png";
import { Facebook, Instagram, Mail} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-12 bg-stone-200 w-screen text-black">
      <div className="flex mb-8 gap-16">
        <div className="pd-2">
          <Link to="/"><img src={logo} alt="stepladder logo" className="h-10 mb-8"/></Link>
          <p>
            Stepladder<br/>
            c/o Joel Goldberg<br/>
            50 W. Montgomery Ave., Ste. 330<br/>
            Rockville, MD 20850
          </p>
        </div>
        <ul className="text-base w-full flex flex-col gap-2">
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
        <ul className="flex gap-4">
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Mail />
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <p>Copyright © 2024 Stepladder. All rights reserved.</p>
        <p>Website by <a href="https://github.com/swhoxf">@swhoxf</a></p>
      </div>
    </footer>
  );
};

export default Footer;