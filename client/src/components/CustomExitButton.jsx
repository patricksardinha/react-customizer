import React from 'react'

const CustomExitButton = ({ handleClick }) => {
  return (
    <button 
        type="button" 
        className="bg-white rounded-md items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={handleClick}
      >
        <span class="sr-only">Close menu</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
  )
}

export default CustomExitButton