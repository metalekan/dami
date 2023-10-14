import React from 'react'
import { about } from '../../data';

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const About = () => {
  return (
    <section className='min-h-screen w-full text-dimWhite flex flex-col gap-8 lg:gap-0 px-2 lg:px-20 pb-20 lg:pb-0'>
      <h2 className='text-center text-xl font-extrabold text_gradient'>About</h2>
      <div className="flex flex-col justify-around lg:h-[80vh]">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between z-10">
          <div className="card_admin w-[80%] self-center lg:w-[30%] md:h-full">
            <img className="rounded-xl object-cover" src={"https://res.cloudinary.com/djljkfhjx/image/upload/v1697283821/Kalifa_verqv1.jpg"} alt="dami" />
          </div>
          <div className="flex flex-col justify-between lg:w-[40%] text-dimWhite]">
            <p className='font-light text-center md:text-start leading-6'><span className='text-gray font-bold text-md'> Damilare Olatinwa .J is a skilled Graphic Designer and adept Brand Manager, merging creativity with strategic expertise.</span> <br /> <br /> With a solid foundation in design principles and a flair for capturing brand essence, Olatinwa excels in delivering cohesive brand experience. From logos, fliers, to branding colateral. Damilare Olatinwa ensures brands consistency and innovative solutions, keeping an eye on industry trends to provide cutting-edge design. <br /> Collaborate with Damilare Olatinwa elevate your brand to new heights.</p>
            <div className="flex flex-col gap-2 self-end text-[12px] md:text-sm font-thin mt-10">
              <div className="flex items-center gap-2">
                <HiOutlineMail className='text-md' />
                <span>daredharmie@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlinePhone  className='text-md'/>
                <span>2349044578647</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className='text-md' />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mx-5 lg:mx-0 lg:gap-10 md:px-16 overflow-auto scroll-1 z-10">
        {
          about.map((item, index) => (
            <img className="w-[100px] lg:w-[150px]" src={item.src} alt={`image${item.id}`} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default About