// import utilities
import React, { useState } from 'react'

const Contact = () => {
  const [name, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <>
      <form class="mx-auto grid w-96" onSubmit={ handleSubmit }>
        <label for="name" class="block text-sm/6 font-medium text-gray-900">Name:</label>
        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input type="text" name="name" value={ name } 
            onChange={ handleNameChange }
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
        </div>
        { nameError && <div>{ nameError }</div>}

        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email:</label>
        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input type="email" name="email" value={ email } onChange={ handleEmailChange } 
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
          { nameError && <div>{ nameError }</div>}
        </div>

        <label for="message" class="block text-sm/6 font-medium text-gray-900">Message:</label>
        <textarea class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"></textarea>
        <input type="submit" value="Submit" 
          class="bg-green-300 px-8 py-4 my-4" />
      </form>
    </>
  );
}

export default Contact;
