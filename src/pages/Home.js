// import utilities
import React from "react";
import { Link } from "react-router-dom";

// import images
import heroImage from '../assets/home/home-hero.jpg';

const Home = () => {
  return (
    <div>
      <div className="hero mx-auto max-w-6xl flex gap-8 pt-20 justify-center">
        <div className="pt-20 min-w-96 max-w-64 w-56">
          <h1 className="my-4">
            Financial stability is <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-full before:bottom-1 before:right-2 before:z-[-1]">within reach</span>
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et
            voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum
            recusandae quas!
          </p>
          <button className="bg-cyan-600 text-white px-8 py-4 my-4">Take your first step</button>
        </div>
        <div className="w-100">
          <img src={heroImage} alt="man looking at keyboard"/>
        </div>
      </div>
    </div>
  )
};

export default Home;