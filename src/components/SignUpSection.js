// import utilities
import React from 'react'

// import components
import Button from '../components/Button.js'

const SignUpSection = () => {
  return (
    <section className="flex max-w-6xl mx-auto my-20 justify-between items-end">
      <div className="max-w-2xl">
        <h2 className="my-4">Read to take the next step?</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et voluptate rerum eaque adipisci soluta placeat ad temporibus, laborum recusandae quas!
        </p>
      </div>
      <Button label="Take your first step" />
    </section>
  )
}

export default SignUpSection