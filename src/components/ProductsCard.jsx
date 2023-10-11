import React from 'react'


import image1 from '../assets/PRODUCTS/5988027.jpg'
import image2 from '../assets/PRODUCTS/7.jpg'
import image3 from '../assets/PRODUCTS/Beholder banner.jpg'
import image4 from '../assets/PRODUCTS/Free Outdoor Advertisement Building Branding Mockup PSD.jpg'
import image5 from '../assets/PRODUCTS/roll up.jpg'

const ProductsCard = () => {
    return (
        <div className="bg-black flex justify-center h-[60vh] px-8">
            <div class="container md:w-[60%] scroll-1">
                <img className='w-[300px] h-[100%] border object-cover card' src={image2} alt="" />
                <img className='w-[300px] h-[100%] border object-cover card' src={image1} alt="" />
                <img className='w-[300px] h-[100%] border object-cover card' src={image3} alt="" />
                <img className='w-[300px] h-[100%] border object-cover card' src={image4} alt="" />
                <img className='w-[300px] h-[100%] border object-cover card' src={image5} alt="" />
            </div>
        </div>
    )
}

export default ProductsCard