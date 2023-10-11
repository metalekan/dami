import React from 'react'

import image1 from '../assets/BOOK COVERS/Pg 3&4 presentation.jpg'
import image2 from '../assets/BOOK COVERS/Three_Magazines_Mockup.png'
import image3 from '../assets/BOOK COVERS/3&4.jpg'
import image4 from '../assets/BOOK COVERS/COver.jpg'
import image5 from '../assets/BOOK COVERS/11&12.jpg'
import image6 from '../assets/BOOK COVERS/Inner-presentation-2.jpg'
import image7 from '../assets/BOOK COVERS/13&14.jpg'
import image8 from '../assets/BOOK COVERS/carousel.jpg'
import image9 from '../assets/BOOK COVERS/Pg 5&6 presentation.jpg'
import image10 from '../assets/BOOK COVERS/mockup-book.png'
import image11 from '../assets/BOOK COVERS/1&2.jpg'
import image12 from '../assets/BOOK COVERS/6613797.jpg'

const bookCover = [
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
];


const BookCover = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
      {
        bookCover.map((item, index) => (
          <img key={index} className='object-cover object-center rounded-md w-[350px] hover:scale-105 duration-300' loading='lazy' src={item.imgage} alt="image1" />
        ))
      }
    </div>
  )
}

export default BookCover