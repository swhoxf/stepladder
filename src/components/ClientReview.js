// import utilities
import React from "react";

// import images
import quotationMarks from '../assets/decorative/quotation-marks.svg'

const ClientReview = (props) => {
  return (
    <div className="border border-stone-200 flex gap-4 items-start p-6">
      <img src={ quotationMarks } alt="quotation marks" />
      <div>
        <p className="mb-4">
          { props.message }
        </p>
        <p className="my-b text-sm text-stone-500">
          { props.name }
        </p>
      </div>
    </div>
  )
}

export default ClientReview