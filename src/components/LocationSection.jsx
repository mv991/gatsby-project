import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const LocationSection = () => {
  const data = useStaticQuery(graphql`
    query locationQuery {
      allFile(filter: { sourceInstanceName: { eq: "locationText" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              h
              p
              img {
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
    <div className="2xl:w-[80%] w-[90%] max-w-[1400px] mx-auto h-fit text-center pt-10 lg:mt-[350px]">
      <h1 className="text-4xl oswald font-[500] text-[#00357B] mb-5">
        LOCATION
      </h1>
      <p className="lg:w-[60%] w-[90%] mx-auto poppins font-[500] mt-3 mb-8">
        Strategically located between Port Rashid and Dubai’s Drydocks World,
        Dubai Maritime City capitalises on its strengths, bringing together the
        entire maritime industry and offering residents a dynamic, urban
        lifestyle. <br />
        KNOW MORE
      </p>
      <div className="w-full md:h-[434px] h-[222px] mb-8 lg:mb-2  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3697.839608835482!2d55.27102643002369!3d25.274603223056538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f43142458cfa5%3A0xb76489680228dc08!2sharbour%20lights%20dubai%20google%20maps!3m2!1d25.271960699999998!2d55.268636!5e0!3m2!1sen!2sin!4v1720691966607!5m2!1sen!2sin"
          allowFullScreen={true}
          className="w-full h-full rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <div className="w-full md:h-[180px] rounded-xl mt-4 flex md:flex-row flex-col md:items-center gap-4 bg-[#00357B] md:pr-6 p-6">
        <div className="md:w-1/4 w-full flex items-end md:justify-center">
          <h2 className="text-2xl poppins font-[450]  poppins text-white w-[100px] ">
            FAMOUS LANDMARKS NEARBY
          </h2>
          <StaticImage
            alt="arrow"
            src="../images/locationImages/arrow.png"
            width={25}
            className="shrink-0 md:rotate-0 rotate-90 mb-1"
          />
        </div>
        {data.allFile.nodes.map((node, index) => {
          const image = getImage(node.childMarkdownRemark.frontmatter.img);

          return (
            <div
              className="md:w-1/4 w-full h-[140px] flex flex-col  rounded-xl gap-1 items-center justify-center bg-[#5790be30]"
              key={index}
            >
              <GatsbyImage image={image} alt="Main Image" className=" " />
              <p className="text-white font-[300]  text-[15px] poppins">
                {node.childMarkdownRemark.frontmatter.p}
              </p>
              <h1 className="text-2xl text-white font-[500] oswald">
                {node.childMarkdownRemark.frontmatter.h}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationSection;
