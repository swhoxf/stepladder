// import utilities
import React from "react";

const Card = (props) => {
  return (
    <div className="bg-stone-100 p-4">
      <p>{ props.header }</p>
      <p className="text-sm text-stone-500">{ props.subheader }</p>
    </div>
  )
}

export default Card