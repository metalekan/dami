import React from 'react'

const Nav = () => {
  return (
    <header className='w-full flex items-center justify-between text-white py-3 md:py-5 px-2 md:px-10 z-50 sticky top-0 glasss'>
      <div className="logo font-extrabold text-lg">
        <span className='text-white font-extrabold md:text-xl '>DAMILARE</span>
      </div>
      <nav className="hidden md:block">
        <ul className='flex gap-8'>
          <li>
            <a href='/'>
              Home
            </a >
          </li>
          <li>
            <a href='/'>
              About
            </a >
          </li>
          <li>
            <a href='/'>
              Contact
            </a >
          </li>
          <li>
            <a href='/'>
              My Projects
            </a >
          </li>
          <li>
            <a href='/'>
              Resume
            </a >
          </li>
        </ul>
      </nav>
      <button className="button_neg">
        <span className="text-[12px] p-2 md:text-sm font-semibold">Download CV</span>
      </button>
    </header>
  )
}

export default Nav