import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const ThankYouPage = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute z-[-1] bottom-0 h-[70%]'>
        <StaticImage src='../images/thankyouPage/svg1.svg'  alt='gradient'/>
        </div>
        <div className='absolute z-[-1] right-0' >
          <StaticImage src='../images/thankyouPage/svg2.svg'   alt='gradient'/>
          </div>
        <div className='w-full h-[10%] md:pt-12 md:pl-[100px] p-6'>
          <StaticImage src='../images/thankyouPage/thankyou-logo.png' className='w-[160px]'  alt='tankyou-image' width={160}/>
        </div>
        <div className='sm:w-full w-[90%] mx-auto h-[80%] flex flex-col items-center text-center gap-4 justify-center'>
           <StaticImage src='../images/thankyouPage/done-icon.png' className='h-[150px] w-[150px]' alt='done' width={150}/>
           <h1 className='text-4xl oswald font-[300]'>Thank you for showing interest into our property</h1>
           <p className=' font-[400] max-w-[500px] '>Please check your email for updated Brochure, pricing and Payment plan. Our representative will call you back to present more details and similar properties.</p>
           <Link to='/'><button className='bg-[#00357B] w-[180px] rounded-md py-4 flex items-center justify-center gap-3 text-white  font-[400]'><StaticImage src='../images/thankyouPage/leftArrow.png' className='w-[30px]' alt='home' width={30}/>Go Home</button></Link>
        </div>
    </div>
  )
}

export default ThankYouPage