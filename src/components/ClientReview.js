// import utilities
import React from "react";

const ClientReview = (props) => {
  return (
    <div className="border border-stone-200">
      <p className="m-4">
        { props.message }
      </p>
      <p className="m-4 text-sm text-stone-500">
        { props.name }
      </p>
    </div>
  )
}

export default ClientReview