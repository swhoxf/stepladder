// import utilities
import React from "react";
import { Link } from "react-router-dom";

// import components
import Card from '../components/Card.js'
import HeroSection from '../components/HeroSection.js'
import SignUpSection from '../components/SignUpSection.js'

// import images
import heroImage from '../assets/home/home-hero.jpg';
import plusPattern from '../assets/decorative/plus-pattern.svg'
import arcLines from '../assets/decorative/arc-lines.svg'
import screentoneSquare from '../assets/decorative/screentone-square.svg'
import triangle from '../assets/decorative/triangle.svg'
import caretsAscending from '../assets/decorative/carets-ascending.svg'

// import icons
import { Apple } from 'lucide-react';

const Home = () => {
  return (
    <>
      <HeroSection
        headerMainText = "Stepladder"
        headerHighlightedText = ""
        description = "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        heroImage = { heroImage }
      />
      <SignUpSection />
    </>
  )
};

export default Home;