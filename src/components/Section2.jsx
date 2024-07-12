import React, { useEffect, useState } from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import CarousalItem from './CarousalItem';

const Section2 = () => {
const [indexes,setIndexes] = useState([0,1])
   useEffect(() => {
         const interval = window.setInterval(() => {
               if(indexes[0]===0) {
                setIndexes([2,3])
               }
               else {
                setIndexes([0,1])
               }
         },4000)  ;

         return () => clearInterval(interval);
         
   },[indexes])

    const data = useStaticQuery(graphql`
       query CarousalQuery {
  allFile(filter: {sourceInstanceName: {eq: "carousalText"}}, sort: {name: ASC}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          heading
          text
        }
      }
    }
  }
}
            `);
            
   
  return (
    <div className='w-full h-[200px] flex items-center bg-[#F4F9FF] '>
         <div className='w-full   mx-auto md:justify-between xl:gap-[100px] gap-[20px] px-12 max-w-[1200px] md:flex hidden carousal'>
              {data?.allFile?.nodes.map((item,index) => {
                console.log(item)
                return(
                  <CarousalItem h={item?.childMarkdownRemark?.frontmatter.heading} p={item?.childMarkdownRemark?.frontmatter.text} img={item?.childMarkdownRemark?.frontmatter.image}/>
                )
              })}
             
         </div>
         <div className='w-full   mx-auto  gap-8 px-12  md:hidden flex justify-center'>
              {data?.allFile?.nodes.map((item,index) => {
                console.log(item)
                return(
                  indexes.includes(index) &&  <CarousalItem h={item?.childMarkdownRemark?.frontmatter.heading} p={item?.childMarkdownRemark?.frontmatter.text} img={item?.childMarkdownRemark?.frontmatter.image}/> 
                )
              })}
             
         </div>
    </div>
  )
}

export default Section2
