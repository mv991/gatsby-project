import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[500px] relative'>
           <div className='h-[480px] md:w-[70%] w-[96%] lg:bg-[#FDFDFD] mx-auto flex gap-8 lg:flex-row flex-col absolute middle-div lg:top-[-80px] rounded-lg p-4'>
                <div className='h-full lg:w-1/2 '>
                        <h1 className='text-3xl text-[#00357B] oswald  font-[500] mt-6'>LEAVE A REQUEST</h1>
                        <p className='font-poppins text-[14px]'>to get a unique offer from our consultant.</p>
                        <form className='flex flex-col gap-3 mt-4'>
                            <input placeholder='Full Name*' className='p-3 bg-[#F4F4F4] w-full rounded-md'/>
                            <input placeholder='Email*' className='p-3 bg-[#F4F4F4] w-full rounded-md'/>
                            <input placeholder='Phone Number*' className='p-3 bg-[#F4F4F4] w-full rounded-md'/>
                            <button className='font-[600] text-lg font-poppins bg-[#00357B] py-3 md:max-w-[300px] max-w-[250px] text-white font-[500] rounded-md'>SUBMIT NOW</button>
                        </form>
                        <p className='text-[#B2B2B2] text-sm mt-3 underline italic md:max-w-full  max-w-[290px]'>By Sumbmitting the data, you agree to the terms of the privacy policy and data return</p>
                </div>
                <div className='lg:w-1/2 h-full'>
                    <StaticImage src='../images/footerImage.png' className='mt-2 object-cover' />
                </div>
           </div>
    </div>
  )
}

export default Contact
