import React from 'react'
import { awards } from '../../data'
const Awards = () => {
  return (
    <div>
      <div className='flex justify-center animate__animated animate__zoomInDown'>
      {
        awards.map((item)=> (
          <img className='object-cover rounded-md w-[80%] md:w-[50%] hd-[200px] hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} />
        ))
      }
    </div>
    </div>
  )
}

export default Awards