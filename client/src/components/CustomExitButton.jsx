import React from 'react'

const CustomExitButton = ({ handleClick }) => {
  return (
    <button 
        type="button" 
        className="ml-1 h-6 bg-white/25 rounded-md items-center justify-center text-gray-500 hover:text-white hover:bg-red-500"
        onClick={handleClick}
    >
        <span className="sr-only">Close menu</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
  )
}

export default CustomExitButton