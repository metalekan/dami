import React from 'react'

import { logo } from '../../data'

const Logo = () => {
    
    return (
        <div className='grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
            {
                logo.map((item, index) => (
                    <img className='object-cover rounded-md hover:scale-105 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} key={index} />
                ))
            }
        </div>

    )
}

export default Logo