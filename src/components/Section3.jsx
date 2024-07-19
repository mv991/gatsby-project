import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Modal from "./Modal";

const Section3 = () => {
  const [show, setShow] = useState(false);
  const data = useStaticQuery(graphql`
    query dmaccPresents {
      allFile(filter: { sourceInstanceName: { eq: "dmaccPresents" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              text
              heading
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="w-full min-h-[700px] h-fit relative md:p-8 p-2 mt-[80px]">
        <div className="absolute z-[-1] inset-0 h-full w-full">
          <StaticImage
            src="../images/section3BG.png"
            className="absolute z-[-1] inset-0 h-full w-full"
            alt="bg-image"
          />
        </div>
        <div className="2xl:w-[80%] w-full flex lg:flex-row flex-col-reverse mx-auto h-fit gap-[6rem] md:mt-[80px] mt-6">
          <div className="lg:w-1/2 w-[90%] mx-auto ">
            <div className="md:w-[600px] max-w-full w-full mx-auto relative">
              <StaticImage
                src="../images/section4Images/img1.png"
                className="max-w-full"
                alt="bg-image"
              />
              <div className="absolute md:w-[300px] sm:w-[300px] w-[200px] h-auto bottom-[-60px] right-0">
                <StaticImage
                  src="../images/section4Images/img2.png"
                  alt="bg-image"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  w-[90%] mx-auto flex flex-col items-center text-start gap-4">
            <p className="text-start w-full text-[#17ABFF] font-[500] text-[20px]">
              DAMAC PRESENTS
            </p>
            <h1 className="text-start w-full text-[36px] leading-[46px] oswald text-white font-[500] md:w-[400px] mr-auto w-[300px] ">
              WELCOME TO THE GLAMOUR OF HARBOUR LIGHTS
            </h1>
            <p className="text-start w-full text-white text-lg  font-[400]">
              Here waves, wonder, and love for the sea converge in a stunning
              52-storey collection of waterfront apartments.
            </p>
            <p className="text-start w-full text-white text-lg mt-4  font-[400]">
              Harbour Lights, a beacon of luxury and maritime passion, is the
              epitome of a waterfront dream. Experience the magic of Harbour
              Lights, where the beauty of the sea merges with residential bliss,
              offering a lifestyle of tranquility in the heart of a bustling
              maritime hub.
            </p>
            <div className="flex md:flex-row flex-col w-full md:gap-6 mt-4 gap-4">
              <button
                className="md:w-1/2 w-[80%] bg-[#17ABFF] px-3 py-4 text-white text-sm rounded-lg font-semibold "
                onClick={() => setShow(true)}
              >
                REGISTER YOUR INTEREST{" "}
              </button>
              <a
                href="pdf.pdf"
                download={"pdf.pdf"}
                className="md:w-1/2 w-[80%] bg-[#17ABFF] px-3 py-4 text-white text-sm text-center rounded-lg font-semibold "
              >
                <button>PRICING & PAYMENT PLAN </button>
              </a>
            </div>
          </div>
        </div>

        <div className="2xl:w-[70%] w-[90%] flex flex-row flex-wrap xl:gap-0 gap-2 justify-between mx-auto mt-[100px] mb-[5rem]">
          {data?.allFile?.nodes?.map((node, index) => {
            return (
              <div
                className="lg:w-[200px] w-[150px] text-white h-fit flex flex-col items-start gap-3 mt-4 md:mt-0 "
                key={index}
              >
                <h1 className="lg:text-5xl text-4xl font-[500] oswald">
                  {node.childMarkdownRemark.frontmatter.heading}
                </h1>
                <p className="text-[16px] tracking-wide">
                  {node.childMarkdownRemark.frontmatter.text}
                </p>
                <div className="w-full h-[6px]  bg-[#D9D9D9] opacity-[0.3]  rounded-xl"></div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center my-12">
          <video muted controls className="max-w-[98%] w-[768px] " width={768}>
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
};

export default Section3;
