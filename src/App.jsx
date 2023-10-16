import React from 'react'

import Nav from './components/Nav'
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
      <Nav />
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