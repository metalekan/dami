import React from 'react'

import image1 from '../assets/FLIERS/VOB-Flier-For-Social-Meida.jpg'
import image2 from '../assets/FLIERS/food vendors.jpg'
import image3 from '../assets/FLIERS/Shegs.jpg'
import image4 from '../assets/FLIERS/Eldera-FOr-Him.jpg'
import image5 from '../assets/FLIERS/Timleo Gadgets.jpg'
import image6 from '../assets/FLIERS/Jan Edition 3.jpg'
import image7 from '../assets/FLIERS/Mothersday.jpg'
import image8 from '../assets/FLIERS/Christmas-1.jpg'
import image9 from '../assets/FLIERS/Godman.jpg'
import image10 from '../assets/FLIERS/Easter-Faith-Conference.jpg'
import image11 from '../assets/FLIERS/Afro-Beats-Party.jpg'
import image12 from '../assets/FLIERS/Eldera FOr Her.jpg'

const flier = [
  {
    id: 1,
    imgage: image1
  },
  {
    id: 2,
    imgage: image2
  },
  {
    id: 3,
    imgage: image3
  },
  {
    id: 4,
    imgage: image4
  },
  {
    id: 5,
    imgage: image5
  },
  {
    id: 6,
    imgage: image6
  },
  {
    id: 7,
    imgage: image7
  },
  {
    id: 8,
    imgage: image8
  },
  {
    id: 9,
    imgage: image9
  },
  {
    id: 10,
    imgage: image10
  },
  {
    id: 11,
    imgage: image11
  },
  {
    id: 12,
    imgage: image12
  }
]

const Fliers = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
      {
        flier.map((item)=> (
          <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.imgage} alt={item.imgage} />
        ))
      }
    </div>
  )
}

export default Fliers