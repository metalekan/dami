import React from 'react'

import { testimony } from '../../data';
import { GiRoundStar } from 'react-icons/gi';

const Testimonial = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-around text-[#f1faee] md:px-10 pb-20 relative'>
      <div className='flex flex-col'>
        <h1 className='text-center text-xl font-extrabold text_gradient'>Testimonials</h1>
        <h2 className='text-center md:text-lg text-dimWhite'>Few of my clients has one or two to say about me</h2>
      </div>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[50%] h-[40%] rounded-xl new__gradient" />
      <div className="grid lg:grid-cols-3 gap-5 mx-3 md:mx-0 mt-[2rem]">
        {
          testimony.map((review, index) => (
            <div key={index} className="flex flex-col gap-7 justify-between px-3 py-4 rounded-lg glass_testimony">
              <div className="flex items-center gap-4">
                <img className='rounded-full object-cover w-[50px] h-[50px]' src={review.src} alt={review.name} />
                <div className="flex flex-col gap-2">
                  <div className="flex text-[gold] gap-1">
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                  </div>
                  <span className='md:text-lg font-semibold text-dimWhite'>{review.name}</span>
                </div>
              </div>
              <p className='font-light text-white'>{review.testimony}</p>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Testimonial