import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

import { gsap } from "gsap";

import { fliers } from '../../data'


const Fliers = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: "+=360"
    });
  }, [])

  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 animate__animated animate__zoomInDown'>
      {
        fliers.map((item, index) => (
          <img key={index} ref={boxRef} className='object-cover rounded-md hover:scale-110 duration-300 shadow-xl' loading='lazy' src={item.src} alt={`image${item.id}`} />
        ))
      }
    </div>
  )
}

export default Fliers