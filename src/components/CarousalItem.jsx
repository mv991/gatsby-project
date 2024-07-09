import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const CarousalItem = ({h,p,img}) => {
  const image = getImage(img)
  return (
    <div className='w-[200px] h-fit flex flex-col-reverse   items-center'>
         <h1 className='text-3xl font-oswald'>{h}</h1>
         <h1 className='text-[#00357B] font-poppins'>{p}</h1>
         <GatsbyImage image={image}/>
    </div>
  )
}

export default CarousalItem
