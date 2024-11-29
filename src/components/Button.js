// import utilities
import React from "react";

const Button = (props) => {
  return (
    <button className="relative bg-cyan-600 text-white px-8 py-4 my-4">{ props.label }</button>
  )
}

export default Button