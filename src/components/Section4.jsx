import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AmenityCard from "./AmenityCard";
import { useStaticQuery, graphql } from "gatsby";

const Section4 = () => {
  const data = useStaticQuery(graphql`
    query amenityQuery {
      allFile(filter: { sourceInstanceName: { eq: "amenity" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              text
            }
          }
        }
      }
    }
  `);

  return (
    <div className="w-full h-fit flex flex-col items-center text-center pt-12 gap-3">
      <StaticImage
        src="../images/harbourLights.png"
        alt="Harbour lights image"
        class="w-[200px] h-auto"
        width={200}
      />
      <h1 className="sm:text-4xl text-[31px] text-[#00357B] font-semibold oswald">
        FEATURES & AMENETIES
      </h1>
      <p className="text-lg lg:w-[800px] sm:w-[90%] w-[85%] poppins ">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      <div className="w-[98%] max-w-[1200px] lg:text-right text-center">
        <div className="w-full h-fit grid  lg:grid-cols-4 justify-items-center lg:max-w-full max-w-[600px] lg:mx-0 mx-auto grid-cols-2  xl:gap-[5.5rem] lg:gap-[5rem] gap-y-8 mt-6">
          {data?.allFile?.nodes?.map((node, index) => (
            <AmenityCard
              img={node.childMarkdownRemark.frontmatter.image}
              text={node.childMarkdownRemark.frontmatter.text}
              key={index}
            />
          ))}
          {/* <AmenityCard img={""} text={"frfrg"} p={"frf"}/> */}
        </div>
        <p className="text-xs mt-6 text-[#686868] max-w-[90%] mx-auto">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      </div>
    </div>
  );
};

export default Section4;
