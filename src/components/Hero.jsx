import React from 'react'

import hero from '/prototyping-process-animate.svg'
import { RiExternalLinkFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <main className='min-h-screen w-full bg-black hero_section animate__animated animate__fadeIn text-dimWhite'>
            <div className="glass">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className="flex flex-col justify-center md:w-full md:px-10 px-2 h-screen ">
                        <h1 className='text-[2rem] md:text-[4rem] font-extrabold'>Hello!!! I'm <span className='text_gradient'>Damilare Olatinwa Jacobs</span></h1>
                        <h2 className='text-xl'>A Graphic Designer and Brand Manager</h2>
                        <p className='w-full md:w-[80%]'>Damilare Olatinwa ensures brand consistency and innovative solutions, keeping an eye on trends to provide design.</p>
                        <div className="flex gap-7 md:gap-14 mt-12">
                            <button className="button_pos p-2">
                                <a href="/" className="flex items-center">Portfolio<RiExternalLinkFill /></a>
                            </button>
                            <button className="button_neg p-2">
                                <a href='/' className="font-semibold">Hire me</a>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center p-2 h-full">
                        <img className='h-[70%]' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero