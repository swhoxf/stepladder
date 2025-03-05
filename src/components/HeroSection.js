// import utilities
import React from 'react'

// import components
import Button from '../components/Button.js'

// import images
import linesVerticalAscending from '../assets/decorative/lines-vertical-ascending.svg'

const HeroSection = (props) => {
  return ( 
    // do something to get rid of the horizontal scrolling
    // add props to control the header and description
    <section className="hero mx-auto flex gap-8 pt-20 justify-center my-20">
      <div className="my-20 max-w-96">
        <h1 className="my-4">
          { props.headerMainText } 
          {/* <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-[120%] before:bottom-1 before:left-[-10px] before:z-[-1]">within</span> <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-[120%] before:bottom-1 before:left-[-10px] before:z-[-1]">reach</span> */}
          { props.headerHighlightedText.split(' ').map((item, index) => (
            <span className="font-black italic relative before:absolute before:bg-orange-400 before:h-3 before:w-[120%] before:bottom-1 before:left-[-10px] before:z-[-1]">{`${item} `}</span>
          ))}
        </h1>
        <p className="my-4">
          { props.description }
        </p>
        <Button label="Take your first step" />
      </div>
      <div className="relative">
        <img src={ props.heroImage } alt="man looking at keyboard" className="shadow-[20px_20px_teal] max-h-96"/>
        <img src={ linesVerticalAscending } alt="" className="absolute right-10 top-1/3 h-2/3" />
      </div>
    </section>
  )
}

export default HeroSection