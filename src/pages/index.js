import * as React from "react"
import HeroComponent from "../components/HeroComponent"
import Section2 from "../components/Section2"
import Section4 from "../components/Section4"
import Section3 from "../components/Section3"
import Section5 from "../components/Section5"
import Navbar from "../components/Navbar"
import PaymentPlan from "../components/PaymentPlan"
import FloorPlan from "../components/FloorPlan"
import LocationSection from "../components/LocationSection"
import WhyInvest from "../components/WhyInvest"
import Contact from "../components/Contact"
const IndexPage = () => {
  return (
      <div className="w-full min-h-screen h-fit  ">
           <Navbar/>
           <HeroComponent/>
           <Section2/>
           <Section4 />
           <Section3/>
           <div className="flex 2xl:w-[70%] max-w-[1400px] w-[90%] gap-2 mx-auto md:justify-end justify-center mt-8 mb-2">
                <button className="px-8 py-4 text-white font-[400] text-[16px] tracking-[2px] bg-[#00357B] rounded-md   w-fit hover:bg-[#002049] ">EXTERIORS</button>
                <button className="px-8 py-4 text-[#00357B] font-[700] text-[16px] tracking-[2px] bg-white border-[1.8px] border-[#00357B] rounded-md hover:bg-[#002049] hover:text-white hover:border-none">INTERIORS</button>
           </div>
           <Section5/>
           <PaymentPlan/>
           <FloorPlan/>
           <LocationSection/>
           <WhyInvest />
           <Contact/>
      </div>
  )
}

export default IndexPage


