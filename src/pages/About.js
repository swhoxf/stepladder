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

      <section className = "flex mx-auto justify-center gap-8 items-center">
        <div>
          <img src = { heroImage } className="max-h-96" />
        </div>
        <div className="max-w-96">
          <h2 className="mb-4">Our Story</h2>
          <p>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          </p>
          <br/>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
          </p>  
        </div>
      </section>

      <section className="text-center bg-stone-100 my-20 py-24">
        <h3>Our mission</h3>
        <h2>Worem ipsum dolor sit amet, consectetur adipscing elit.</h2>
      </section>

      <section className="px-12">
        <h2 className="mb-4 text-center">Meet our team</h2>
        <div className="grid grid-cols-3 gap-4">
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
          <Card 
            imgSrc={ heroImage }
            imgAlt={ "" }
            header="John Doe"
            body="Job Description"
            caption="Company"
          />
        </div>
      </section>

      <SignUpSection />
    </>
  )
};

export default Home;