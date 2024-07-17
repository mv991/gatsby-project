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
import Footer from "../components/Footer"
import { graphql } from "gatsby"
const IndexPage = ({data}) => {
     const [source,setSource] = React.useState("interior");;
       const [images, setImages] = React.useState([]);
      const [section5Data,setSection5Data] = React.useState(source === "interior" ? data?.allFile?.nodes?.slice(0, 5) : data?.allFile?.nodes?.slice(5));
   React.useEffect(() => {
source === "interior" ? setSection5Data(data?.allFile?.nodes?.slice(0, 5)) : setSection5Data(data?.allFile?.nodes?.slice(5,10))
   },[source]);
      React.useEffect(() => {

    const newImages =  section5Data?.slice(1);
    setImages(newImages)
  }, []);
 React.useEffect(() => {

  
    const newImages = section5Data?.slice(1);
    setImages([...newImages])
    
  }, [section5Data]);

  return (
      <div className="w-full min-h-screen h-fit  ">
           <Navbar/>
           <HeroComponent/>
           <Section2/>
           <Section4 />
           <Section3/>
           <div className="flex 2xl:w-[70%] max-w-[1400px] w-[90%] gap-2 mx-auto md:justify-end justify-center mt-8 mb-2">
                <button className={`sm:px-8 sm:py-4 px-6  py-3  font-[700] text-[16px] tracking-[2px]  border-[1.8px] border-[#00357B] rounded-md  max-w-1/2 w-fit hover:bg-[#002049] hover:text-white ${source==="exterior"? "bg-[#00357B] text-white" :"text-[#00357B] bg-white"}`} onClick={() =>{ setSource("exterior");}}>EXTERIORS</button>
                <button className={`sm:px-8 sm:py-4 px-6 py-3 font-[700] text-[16px] tracking-[2px]  border-[1.8px] border-[#00357B] rounded-md hover:bg-[#002049]  max-w-1/2  hover:text-white hover:border-none ${source==="interior"? "bg-[#00357B] text-white":"text-[#00357B] bg-white"}`}  onClick={() =>{ setSource("interior"); }}>INTERIORS</button>
           </div>
           <Section5 data = {section5Data} images={images} setImages={setImages}/>
           <PaymentPlan/>
           <FloorPlan/>
           <LocationSection/>
           <WhyInvest />
           <Contact/>
           <Footer/>
  
      </div>
  )
}

export default IndexPage

export const  data = graphql`
    query lightboxQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "lightbox" } }
        sort: { name: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `
