import React from 'react'

import { RiExternalLinkFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <main className='h-screen w-full bg-black hero_section animate__animated animate__fadeIn text-dimWhite'>
            <div className="glass h-[100%]">
                <header className='w-full flex items-center justify-between text-white py-3 md:py-5 px-2 md:px-10 z-10'>
                    <div className="logo font-extrabold text-lg">
                        <span className='text-dimWhite font-extrabold md:text-xl'>DAMILARE</span>
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

                <div className="flex flex-col justify-center h-full md:w-full md:px-10 px-2">
                    <h1 className='text-[2rem] md:text-[4rem] font-bold'>Hello!!! I'm <span className='text_gradient'>Damilare Olatinwa Jacobs</span></h1>
                    <h2 className='text-xl'>A Graphic Designer and Brand Manager</h2>
                    <p className='w-full md:w-[50%]'>Damilare Olatinwa ensures brand consistency and innovative solutions, keeping an eye on trends to provide design.</p>
                    <div className="flex gap-7 md:gap-14 mt-12">

                        <button className="button_pos p-2">

                            <a href="/" className="flex items-center">Portfolio<RiExternalLinkFill /></a>
                        </button>

                        <button className="button_neg p-2">
                            <a href='/' className="font-semibold">Hire me</a>
                        </button>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Hero