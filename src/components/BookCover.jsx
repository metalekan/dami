import React from 'react'

import { bookCover } from '../../data'

const BookCover = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 animate__animated animate__zoomInDown'>
      {
        bookCover.map((item, index) => (
          <img key={index} className='object-cover rounded-md wd-[300px] hd-[250px] hover:scale-110 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} />
        ))
      }
    </div>
  )
}

export default BookCover