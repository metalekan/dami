import React from 'react'

const Resume = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-8 md:gap-0 px-2 md:px-20 bg-black pb-20 md:pb-0 text-dimWhite my-[6rem] relative'>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[50%] h-[100%] rounded-full new__gradient" />
      <h1 className='text-center text-xl font-extrabold text_gradient'>Resume</h1>
      <p className='text-center'>More than 3 years as a Graphics designer and Brand Manager</p>
      <div className="mt-8">
        <div class="tl text-dimWhite">
          <div class="tl-container tl-left">
            <div class="tl-content glass_testimony">
              <h2 className='text-white'>Jun 30th 2020 - Sept 27th 2023</h2>
              <h2 className='font-bold'>LOVEWORLD PUBLISHING MINISTRY(LWPM) Lagos, Nigeria.</h2>
              <p>
                 Senior Graphics Designer
              </p>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>Jun 3rd 2019 - May 28th 2023</h2>
              <h2 className='font-bold'>CHRIST EMBASSY MINISTRY Lagos Virtual Zone (CELVZ/CORNERSTONE), NIGERIA.</h2>
              <p>
                Brand Specialist
              </p>
            </div>
          </div>
          <div class="tl-container tl-left">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>Jun 30th 2020 - Sept 27th 2023</h2>
              <h2 className='font-bold'>LOVEWORLD PUBLISHING MINISTRY(LWPM)</h2>
              <p>
                Lagod, Nigeria. Senior Graphics Designer
              </p>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2021</h2>
              <h2 className='font-bold'>AQUAM WATER Ogun, Nigeria.</h2>
              <p>
                Senior Graphics Designer
              </p>
            </div>
          </div>
          <div class="tl-container tl-left">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2021</h2>
              <h2 className='font-bold'>JORAZI FOODS Cleveland, Canada</h2>
              <p>
                Brand Specialist and Consultant
              </p>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2020</h2>
              <h2 className='font-bold'>SOMIDEE CREATIVE ADVERTISING Nigeria</h2>
              <p>
                Senior Graphics Designer
              </p>
            </div>
          </div>

          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2021</h2>
              <h2 className='font-bold'>ACCESS BANK PLC</h2>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2021</h2>
              <h2 className='font-bold'>ORAIMO COMPANY</h2>
            </div>
          </div>
          <div class="tl-container tl-right">
            <div class="tl-content glass_testimony">
            <h2 className='text-white'>2021</h2>
              <h2 className='font-bold'>ACCESS BANK PLC</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <h1 className='text-lg font-extrabold text_gradient'>Qualification</h1>
      <p className=''>2019 Bachelor of Science in Water Resources Management and Agro-Meteorology (Hydrology). FUNAAB</p>

      </div>
    </section>
  )
}

export default Resume