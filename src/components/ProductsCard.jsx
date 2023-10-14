import React from 'react'

import { products } from '../../data'

const ProductsCard = () => {
    return (
        <div className="flex justify-center h-[60vh] px-8">
            <div class="container bg-black md:w-[60%] scroll-1">
                {
                    products.map((item, index) => (
                        <img className='w-[300px] h-[100%] border object-cover card' src={item.src} alt={`image${item.id}`} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsCard