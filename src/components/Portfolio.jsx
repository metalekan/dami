import React from 'react'

import Tabs from './Tabs'


const Portfolio = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-10 text-white px-2 md:px-10 bg-black md:pb-20'>
      <h1 className='text-center text-xl font-extrabold text_gradient'>Portfolio</h1>
      <Tabs />
    </section>
  )
}

export default Portfolio