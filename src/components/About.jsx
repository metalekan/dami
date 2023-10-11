import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

import dami from '../assets/kalifaAbout.jpg';
import { imagesList } from '../../data';

import image1 from '../assets/msg5506457297-396.png'
import image2 from '../assets/msg5506457297-400.png'
import image3 from '../assets/msg5506457297-404.png'
import image4 from '../assets/msg5506457297-410 1.png'



// console.log(imagesList);
const About = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-8 md:gap-0 px-2 md:px-20 bg-black pb-20 md:pb-0'>
      <h2 className='text-center text-xl font-extrabold text_gradient'>About</h2>
      <div className="flex flex-col justify-around md:h-[80vh]">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between z-10">
          <div className="card_admin w-[80%] self-center md:w-[30%] md:h-full">
            <img className="rounded-xl object-cover" src={dami} alt="dami" />
          </div>
          <div className="flex flex-col justify-between md:w-[40%] text-dimWhite">
            <p className='font-light text-center md:text-start leading-6'>Damilare Olatinwa .J is a skilled Graphic Designer and adept Brand Manager, merging creativity with strategic expertise. With a solid foundation in design principles and a flair for capturing brand essence, Olatinwa excels in delivering cohesive brand experience. From logos, fliers, to branding colateral. Damilare Olatinwa ensures brands consistency and innovative solutions, keeping an eye on industry trends to provide cutting-edge design. <br /> Collaborate with Damilare Olatinwa elevate your brand to new heights.</p>
            <div className="flex flex-col self-end md:self-start text-sm md:text-md font-thin mt-10">
              <div className="flex items-center gap-1">
                <HiOutlineMail />
                <span>daredharmie@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlinePhone />
                <span>+2349044578647</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineLocationMarker />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mx-5 md:mx-0 md:gap-10 md:px-16 overflow-scroll md:overflow-hidden z-10">
        <img className="w-[100px] md:w-[150px]" src={image1} alt="image1" />
        <img className="w-[100px] md:w-[150px]" src={image2} alt="image2" />
        <img className="w-[100px] md:w-[150px]" src={image4} alt="image3" />
        <img className="w-[100px] md:w-[150px]" src={image3} alt="image4" />
      </div>
    </section>
  )
}

export default About