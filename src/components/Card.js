// import utilities
import React from "react";

const Card = (props) => {
  return (
    <div className="bg-stone-100">
      { props.imgSrc && <img src={ props.imgSrc } alt={ props.imgAlt } /> }
      <div className="p-4">
        <p className="text-lg my-1">{ props.header }</p>
        { props.subheader && <p className="text-sm text-stone-500">{ props.subheader }</p> }
        { props.body && <p className="text-xs">{ props.body }</p> }
        { props.caption && <p className="text-xs italic">{ props.caption }</p> }
      </div>
    </div>
  )
}

export default Card