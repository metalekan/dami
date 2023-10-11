import React from 'react'

import image1 from '../assets/LOGO STUFFS/aquam logo.png'
import image2 from '../assets/LOGO STUFFS/ho meals.jpg'
import image3 from '../assets/LOGO STUFFS/Realm Carousel2.jpg'
import image4 from '../assets/LOGO STUFFS/Ho meals logo.jpg'
import image5 from '../assets/LOGO STUFFS/dlic 1.jpg'
import image6 from '../assets/LOGO STUFFS/carousel.jpg'
import image7 from '../assets/LOGO STUFFS/e STUDIOS 1.jpg'
import image8 from '../assets/LOGO STUFFS/Kiva Carousel3.jpg'
import image9 from '../assets/LOGO STUFFS/meemee carousel.jpg'
import image10 from '../assets/LOGO STUFFS/aquam 4.jpg'
import image11 from '../assets/LOGO STUFFS/Realm Carousel3.jpg'
import image12 from '../assets/LOGO STUFFS/HO-1.jpg'


const logo = [
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

const Logo = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
            {
                logo.map((item) => (
                    <img className='object-cover rounded-md w-[350px] hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.imgage} alt={item.imgage} />
                ))
            }
        </div>

    )
}

export default Logo