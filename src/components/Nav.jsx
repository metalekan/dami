import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='w-full hidden items-center justify-between text-[#f1faee] py-3 md:py-5 px-2 md:px-10 z-10'>
      <div className="logo font-extrabold text-lg">
        <span className='text_gradient2 font-extrabold'>DAMILARE</span>
      </div>
      <nav className="hidden md:block">
        <ul className='flex gap-8'>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="button">
        <span className="text-sm font-semibold">Download CV</span>
      </button>
    </header>
  )
}

export default Nav