import React from 'react'

import { fieldWork } from '../../data'
const FieldWork = () => {
  return (
<div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-3 md:px-0 md:gap-8 animate__animated animate__zoomInDown'>
      {
        fieldWork.map((item)=> (
          <img className='object-cover rounded-md w-[90%] h-[200px] hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} />
        ))
      }
    </div>  )
}

export default FieldWork