import React from 'react'

import Hero from './components/Hero'
import ProductsCard from './components/ProductsCard'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Strength from './components/Strength'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-black'>
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

      <div className='xl:max-w-[1280px] mx-auto'>
        <Hero />
        <ProductsCard />
        <About />
        <Resume />
        <Portfolio />
        <Skills />
        <Strength />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App