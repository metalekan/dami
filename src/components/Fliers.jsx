import React from 'react'

import { fliers } from '../../data'

const Fliers = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
      {
        fliers.map((item)=> (
          <img className='object-cover rounded-md wd-[300px] hd-[200px] hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} />
        ))
      }
    </div>
  )
}

export default Fliers