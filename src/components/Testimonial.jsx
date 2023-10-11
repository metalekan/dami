import React from 'react'

import { GiRoundStar } from 'react-icons/gi';

import gsv from '../assets/gsv.jpg';
import john from '../assets/adelekan.jpg';
import segun from '../assets/segun.jpg'
import moyo from '../assets/moyo.jpg'
import ayo from '../assets/ayo.jpg'
import loveworld from '../assets/loveworld.jpg'

const myTestimonials = [
  {
    name: "Ayo",
    image: ayo,
    testimony:
      "Dare is a great Desgner! Whether its a quick graphic design piece that we need to roll out on short notice, Dare delivers.He was able to take existing design elements and create a fresh look for our business with a consistent theme. We highly recommend",
  },
  {
    name: "Segun",
    image: segun,
    testimony:
      "Dare surpassed my expectation at every step in the logo and other design process, from his thoughtful and imaginative initial concepts all the way to the final round of fine-tining. He was a real pleasure to work with.",
  },
  {
    name: "John",
    image: john,
    testimony:
      "By far the easiest graphic designer I've had the pleasure of working with. He was very insightful from the beginning even when i wasn't sure what i wanted and, worked through tough concepts with me and delivered exactly the logo I wanted in the end.",
  },
  {
    name: "GSV Studio",
    image: gsv,
    testimony:
      "He,s truly a master of his craft He's creative, has great communication and really listens to what you're looking for then makes it happen, I could'nt be happier with the logos he created for my small business",
  },
  {
    name: "Abimbola",
    image: moyo,
    testimony:
      "Dare surpassed my expectations at every step in the logo and other design process, from his thoughtful and imaginative initial concepts all the way to the final round of fine-tuning. He was a real pleasure to work with",
  },
  {
    name: "Loveworld Team",
    image: loveworld,
    testimony:
      "I've had the privilege of working with Damilare on multiple design projects, and each time, I've been blown away by his creativity and professionalism. Whether it's branding, web design, or print materials, Damilare consistently delivers outstanding results. He is responsive, reliable, and a true asset to any project.",
  },
];

const Testimonial = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-around bg-black text-white px-2 md:px-10 pb-20 relative'>
      <div className='flex flex-col'>
        <h1 className='text-center text-xl font-extrabold text_gradient'>Testimonials</h1>
        <h2 className='text-center md:text-lg'>Few of my clients has one or two to say about me</h2>
      </div>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[50%] h-[100%] rounded-xl new__gradient" />
      <div className="grid md:grid-cols-3 gap-5 mt-[2rem]">
        {
          myTestimonials.map((review, index) => (
            <div key={index} className="flex flex-col gap-7 justify-between px-3 py-4 rounded-lg glass_testimony">
              <div className="flex items-center gap-4">
                <img className='rounded-full object-cover w-[50px] h-[50px]' src={review.image} alt={review.name} />
                <div className="flex flex-col gap-2">
                  <div className="flex text-[gold] gap-1">
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                  </div>
                  <span className='md:text-lg font-semibold'>{review.name}</span>
                </div>
              </div>
              <p className='font-light text-dimWhite'>{review.testimony}</p>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default Testimonial