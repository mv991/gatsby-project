import React, { useState } from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import LightHouse from './LightboxSection';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
const Section5 = () => {
    const data = useStaticQuery(graphql`
        query lightboxQuery {
   allFile(filter: {sourceInstanceName: {eq: "lightbox"}}) {
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
             `);
 
    
    const [mainImg,setMainImg] = useState(getImage(data?.allFile?.nodes[0].childMarkdownRemark.frontmatter.image));
   const [open,setOpen] = useState(false)
    function handleImageChange(img) {
    //    const newImgs = images.filter((image,index) => image!==img);
    //    setImages([...newImgs,mainImg]);
    console.log("RAN")
       setMainImg(getImage(img));

    }

  return (
    <>
     <div className="w-[90%] 2xl:w-[70%] w-[97%] mx-auto h-fit flex flex-col mt-12 ">
        <div className="w-full md:h-[600px] h-[300px] relative">
             <GatsbyImage image={mainImg} height={900} width={900} alt="img" className="w-full md:h-[600px] h-[300px] bg-cover max-h-[600px] object-cover rounded-xl rounded-md cursor-pointer" />  
             <StaticImage src='../images/arrow.png'  className='absolute z-[1] w-[60px] h-[60px] top-[50%] right-[10px]'/>
             <StaticImage src='../images/arrow.png' className='absolute rotate-180 z-[1] w-[60px] h-[60px] top-[50%] left-[10px]'/>
             {/* <div className="m-2 absolute left-[10px] top-[50%] bg-white rounded-ful w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={() => handleImageChange(images[0])}>
             <Image src={"/left-arrow.svg"} width={15} height={20} alt="arrow" className="cursor-pointer " />
             </div> */}
             {/* <div className="m-2 absolute right-[10px] top-[50%] bg-white rounded-ful w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={() => handleImageChange(images[3])}>
             <Image src={"/right-arrow.svg"} width={15} height={15} alt="arrow" className="cursor-pointer"/>     
             </div> */}
        </div>
        <div className="flex gap-2 w-full max-w-full justify-between mt-2">
            {data?.allFile?.nodes?.slice(1).map((img,index) =>
                {
                     const image = getImage(img.childMarkdownRemark.frontmatter.image)
                   return <GatsbyImage image={image} width={900} height={900} alt="img" className="w-[24%] sm:rounded-2xl rounded-md bg-cover cursor-pointer"  key={index}/>
                }
               )}

        </div>

    </div>
   {open && <LightHouse setOpen={setOpen} img={mainImg} open={open}/>}
    </>
  
  )
}

export default Section5
