import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import React, { useState } from "react";
import Modal from "./Modal";

const WhyInvest = () => {
  const [show, setShow] = useState(false);
  const data = useStaticQuery(graphql`
    query whyInvest {
      allFile(filter: { sourceInstanceName: { eq: "whyInvest" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              p
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

  return (
    <>
      <div className="w-full bg-[#F1F7FD] lg:min-h-[500px] h-fit md:mt-[100px] mt-[60px] flex flex-col">
        <h1 className="text-[#00357B] md:text-[37px] text-[32px] font-[600] oswald w-fit mx-auto md:pt-[70px] pt-[30px]">
          WHY INVEST IN DUBAI
        </h1>
        <div className="w-[90%] max-w-[1400px] mx-auto grid md:grid-cols-4 grid-cols-2 place-items-center  gap-y-6  mt-[60px]">
          {data.allFile.nodes.map((node, index) => {
            const image = getImage(node.childMarkdownRemark.frontmatter.image);
            return (
              <div
                className="lg:w-[200px] w-[160px] h-fit flex flex-col place-items-center justify-items-center gap-3"
                key={index}
              >
                <GatsbyImage
                  image={image}
                  className="w-[60px] "
                  alt="whyInvest"
                />
                <p className="text-center  lg:text-normal text-sm text-[#343434] font-[500]">
                  {node.childMarkdownRemark.frontmatter.p}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="px-12 py-3 text-sm bg-[#00357B] text-white rounded-md font-[500] mx-auto w-fit  mt-[70px] lg:mb-[140px] mb-[50px]"
          onClick={() => {
            setShow(true);
          }}
        >
          LOOKING FOR INVESTMENT?
        </button>
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
};

export default WhyInvest;
