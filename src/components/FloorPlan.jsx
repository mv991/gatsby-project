import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Brochure from "./Brochure";
import Modal from "./Modal";
const FloorPlan = () => {
  const [selected, setSelected] = useState(2);
  const [show, setShow] = useState(false);
  const data = useStaticQuery(graphql`
    query floorQuery {
      allFile(filter: { sourceInstanceName: { eq: "floorPlan" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              h
              type
              space
              price
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
      <div className="w-full mx-auto  h-fit blue-gradient relative lg:pb-[100px]">
        <div className="sm:w-[90%] max-w-[1000px] mx-auto text-center  ">
          <h1 className="text-3xl  font-[500] text-[#00357B] oswald w-[80%] md:w-full mx-auto">
            FLOOR PLANS OF ALL UNITS
          </h1>
          <button className="md:w-1/2 font-poppins flex items-center justify-center gap-1 md:hidden  my-4 mx-auto bg-[#00357B] py-3 px-4 rounded-md text-white w-[230px] text-[14px] font-[500]">
            Choose a Bedroom
            <StaticImage
              src="../images/downArrow.png"
              alt="down-arrow"
              className="w-[15px]"
            />
          </button>
          <div className="w-full px-8 border-b-[1px] border-[#00357B] h-[40px]  justify-between md:flex hidden mt-8 gap-6">
            {data.allFile.nodes.map((h, index) => (
              <span
                className={`text-[#00357B] text-[20px] font-[700] h-full font-poppins ${
                  selected === index &&
                  "border-b-[1px] border-[#17ABFF] text-[#17ABFF]"
                }`}
                key={index}
              >
                {h.childMarkdownRemark.frontmatter.h}
              </span>
            ))}
          </div>
          <div className="flex w-full md:flex-row flex-col-reverse min-h-[490px] lg:gap-[50px] items-center">
            <div className="md:w-1/2 md:min-h-[330px]  ">
              <StaticImage
                src="../images/floorImages/mapImage.png"
                alt="apartment-blueprint-image"
                className="max-w-[500px] "
              />
            </div>
            <div className="md:w-1/2 m-6  flex flex-col text-start gap-1 min-h-[330px]">
              <h1 className="md:text-2xl text-xl font-poppins font-[500]">
                {data.allFile.nodes[selected].childMarkdownRemark.frontmatter.h}{" "}
                APARTMENT
              </h1>
              <p className="text-md font-[500]">
                Type:{" "}
                {
                  data.allFile.nodes[selected].childMarkdownRemark.frontmatter
                    .type
                }
              </p>
              <p className="font-poppins  text-sm mt-4">
                {data.allFile.nodes[selected].childMarkdownRemark.frontmatter.p}
              </p>
              <div className="flex w-full justify-between ">
                <p className="mt-3 font-poppins font-[400]">
                  SPACE:{" "}
                  <span className="font-[600]">
                    {" "}
                    {
                      data.allFile.nodes[selected].childMarkdownRemark
                        .frontmatter.space
                    }
                  </span>
                </p>
                <p className="mt-3  font-poppins font-[400]">
                  PRICE:{" "}
                  <span className="font-[600]">
                    {
                      data.allFile.nodes[selected].childMarkdownRemark
                        .frontmatter.price
                    }
                  </span>
                </p>
              </div>
              <div className=" border-b-[1px] w-[98%] mx-auto mt-4 border-dashed border-[#323232]"></div>
              <div className="md:hidden flex w-full h-fit ">
                <div className="w-1/2 flex flex-col border-r-[1px] gap-3 p-2 font-poppins border-dashed text-sm border-[#323232]">
                  <p>Living Area : 72.50M2</p>
                  <p>Kitchen : 72.50M2</p>
                  <p>Living Area : 72.50M2</p>
                </div>
                <div className="w-1/2 flex flex-col p-2 pl-3 text-end gap-3 font-poppins border-dashed text-sm border-[#323232]">
                  <p>Bathroom: 72.50M2</p>
                  <p>Bathroom : 72.50M2</p>
                  <p>Balcony : 72.50M2</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col w-[103%] gap-3 md:mt-auto mt-6 md:mb-16 items-center md:items-normal">
                <a
                  href="pdf.pdf"
                  download={"pdf.pdf"}
                  className="md:w-1/2 bg-[#00357B] py-3 px-4 text-center rounded-md text-white w-[230px] text-[14px] font-[500]"
                >
                  <button>GET ALL FLOOR PLANS</button>
                </a>
                <button
                  className="md:w-1/2 border-[1.5px]   border-[#00357B] w-[230px]  py-3 px-4  text-[14px] rounded-md font-[700] text-[#00357B]"
                  onClick={() => setShow(true)}
                >
                  LEAVE A REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
        <Brochure />
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
};

export default FloorPlan;
