// import utilities
import React from 'react'

// import components
import Button from '../components/Button.js'

// import images
import heroImage from '../assets/home/home-hero.jpg';
import linesVerticalAscending from '../assets/decorative/lines-vertical-ascending.svg'

const HeroSection = () => {
  return (
    <section className="hero mx-auto max-w-8xl flex gap-8 pt-20 justify-center my-20">
      <div className="my-20 max-w-96 flex-grow">
        <h1 className="my-4">
          Financial stability is <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-[120%] before:bottom-1 before:left-[-10px] before:z-[-1]">within</span> <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-[120%] before:bottom-1 before:left-[-10px] before:z-[-1]">reach</span>
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et
          voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum
          recusandae quas!
        </p>
        <Button label="Take your first step" />
      </div>
      <div className="relative">
        <img src={heroImage} alt="man looking at keyboard" className="shadow-[20px_20px_teal] h-96"/>
        <img src={linesVerticalAscending} alt="" className="absolute right-10 top-1/3 h-2/3" />
      </div>
    </section>
  )
}

export default HeroSection