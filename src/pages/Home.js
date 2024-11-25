// import utilities
import React from "react";
import { Link } from "react-router-dom";

// import components
import ClientReview from '../components/ClientReview.js'
import Card from '../components/Card.js'
import HeroSection from '../components/HeroSection.js'
import SignUpSection from '../components/SignUpSection.js'
import Metric from '../components/Metric.js'

// import images
import heroImage from '../assets/home/home-hero.jpg';
import plusPattern from '../assets/decorative/plus-pattern.svg'
import arcLines from '../assets/decorative/arc-lines.svg'

// import icons
import { Apple } from 'lucide-react';

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <section className="max-w-2xl text-center my-48 mx-auto px-12 relative">
        <img src={plusPattern} alt="" className="left-[-1rem] top-[-2.5rem] absolute" />
        <img src={arcLines} alt="" className="absolute right-[-2rem]" />
        <h2 className="m-4">Small fiancial changes can make a <span className="font-black italic">big difference</span></h2>
        <p className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
        </p>
      </section>

      <section className="text-center bg-stone-100 px-12">
        <div className="py-20 mx-auto max-w-4xl">
          <h2 className="my-4">We've been serving our community for years</h2>
          <p className="max-w-xl mx-auto my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
          </p>
          <div className="flex gap-12 justify-center m-16">
            <Metric icon={<Apple className="mx-auto" />} 
              category="Savings" 
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              statistic="Nearly $750" />
            <Metric icon={<Apple className="mx-auto" />} 
              category="Clients" 
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              statistic="Nearly $750" />
            <Metric icon={<Apple className="mx-auto" />} 
              category="Support" 
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              statistic="Nearly $750" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl my-40 px-12">
        <div className="flex gap-8 my-20">
          <div className="max-w-lg">
            <img src={heroImage} alt="placeholder" />
          </div>
          <div>
            <h2 className="mt-20">What we offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card header="Header" subheader="Subheader" />
          <Card header="Header" subheader="Subheader" />
          <Card header="Header" subheader="Subheader" />
          <Card header="Header" subheader="Subheader" />
          <Card header="Header" subheader="Subheader" />
          <Card header="Header" subheader="Subheader" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl my-20 px-12">
        <h2 className="my-8 text-center max-w-3xl mx-auto">Read what our past clients have to say about us</h2>
        <div className="grid grid-cols-3 gap-4">
          <ClientReview name="Johnny Appleseed" 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!"/>
          <ClientReview name="Johnny Appleseed" 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!"/>
          <ClientReview name="Johnny Appleseed" 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!"/>
        </div>
      </section>

      <SignUpSection />
    </>
  )
};

export default Home;