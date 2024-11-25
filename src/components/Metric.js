// import utitilites
import React from 'react'

// import assets
import rectangle from '../assets/decorative/rectangle.svg'

const Metric = (props) => {
  return (
    <div className="max-w-56 flex flex-col gap-8 justify-center">
      { props.icon }
      <h3 className="font-bold font-body">{ props.category }</h3>
      <p className="text-3xl font-display font-black">{ props.statistic }</p>
      <img src={rectangle} alt="" className="h-1" />
      <p>{ props.message }</p>
    </div>
  )
}

export default Metric