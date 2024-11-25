// import utitilites
import React from 'react'

const Metric = (props) => {
  return (
    <div className="max-w-48 flex flex-col gap-8 justify-center">
      { props.icon }
      <h3>{ props.category }</h3>
      <p className="text-3xl">{ props.statistic }</p>
      <p>
        { props.message }
      </p>
    </div>
  )
}

export default Metric