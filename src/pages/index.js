import * as React from "react"
import HeroComponent from "../components/HeroComponent"
import Section2 from "../components/Section2"


const IndexPage = () => {
  return (
      <div className="w-screen min-h-screen h-fit overflow-x-hidden">
           <HeroComponent/>
           <Section2/>
      </div>
  )
}

export default IndexPage


