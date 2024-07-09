import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import CarousalItem from './CarousalItem';

const Section2 = () => {

    const data = useStaticQuery(graphql`
        query CarousalQuery {
            allFile(filter: {sourceInstanceName: {eq: "carousalText"}}) {
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
    <div className='w-full h-fit'>
         <div className='w-[80%] overflow-x-scroll flex mx-auto justify-between'>
              {data?.allFile?.nodes.map((item,index) => {
                return(
                  <CarousalItem h={item?.childMarkdownRemark?.frontmatter.heading} p={item?.childMarkdownRemark?.frontmatter.text} img={item?.childMarkdownRemark?.frontmatter.image}/>
                )
              })}
             
         </div>
    </div>
  )
}

export default Section2
