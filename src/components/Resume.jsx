import React from 'react'

const Resume = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-between gap-8 md:gap-0 px-2 md:px-20 pb-20 md:pb-0 text-[#f1faee] my-[6rem] relative'>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[50%] h-[50%] rounded-full new3__gradient" />
      <h1 className='text-center text-xl font-extrabold text_gradient'>Resume</h1>
      <p className='text-center'>More than 3 years as a Graphics designer and Brand Manager</p>
      <div className="mt-8">
        <div class="tl text-dimWhite">
          <div class="tl-container tl-left">
            <div class="tl-content glass_testimony">
              <h2 className='text-white'>August 2020 - September 2023</h2>
              <h2 className='font-bold'>LOVEWORLD PUBLISHING MINISTRY(LWPM) Lagos, Nigeria.</h2>
              <p>
                Senior Graphics Designer
              </p>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
              <h2 className='text-white'>June 2019 - July 2020</h2>
              <h2 className='font-bold'>CHRIST EMBASSY MINISTRY Lagos Virtual Zone (CELVZ/CORNERSTONE), NIGERIA.</h2>
              <p>
                Brand Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-0">
        <h1 className='text-lg font-extrabold text_gradient'>Qualification</h1>
        <p className=''>2019 Bachelor of Science in Water Resources Management and Agro-Meteorology (Hydrology). FUNAAB</p>
      </div>
    </section>
  )
}

export default Resume