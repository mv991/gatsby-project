import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import LightHouse from "./LightboxSection";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
const Section5 = () => {
  const data = useStaticQuery(graphql`
    query lightboxQuery {
      allFile(filter: { sourceInstanceName: { eq: "lightbox" } }) {
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

  const [mainImg, setMainImg] = useState(
    getImage(data?.allFile?.nodes[0].childMarkdownRemark.frontmatter.image)
  );
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    images.length === 0 &&
      data?.allFile?.nodes?.slice(1).map((node, index) => {
        setImages((prev) => [
          ...prev,
          node.childMarkdownRemark.frontmatter.image,
        ]);
      });
  }, []);
  function handleImageChange(img) {
    console.log("ran inside handle ");
    //    const newImgs = images.filter((image,index) => image!==img);
    //    setImages([...newImgs,mainImg]);
    setMainImg(getImage(img));
  }

  return (
    <>
      <div className="w-[90%] 2xl:w-[70%] mx-auto h-fit flex flex-col mt-12 ">
        <div className="w-full md:h-[600px] h-[300px] relative">
          <GatsbyImage
            image={mainImg}
            height={900}
            width={900}
            alt="img"
            className="w-full md:h-[600px] h-[300px] bg-cover max-h-[600px] object-cover rounded-xl cursor-pointer"
            onClick={() => console.log("ran")}
          />
          <StaticImage
            src="../images/arrow.png"
            className="absolute z-[1] w-[60px] h-[60px] top-[50%] right-[10px]"
            onClick={() => console.log("IMAGE")}
          />
          <StaticImage
            src="../images/arrow.png"
            className="absolute rotate-180 z-[1] w-[60px] h-[60px] top-[50%] left-[10px]"
          />
        </div>
        <div className="flex gap-2 w-full max-w-full justify-between mt-2">
          {images.map((img, index) => {
            const image = getImage(img);
            return (
              <div
                onClick={() => handleImageChange(img)}
                className="w-[24%] sm:rounded-2xl rounded-md bg-cover cursor-pointer"
              >
                <GatsbyImage
                  image={image}
                  width={900}
                  height={900}
                  alt="img"
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
      {open && <LightHouse setOpen={setOpen} img={mainImg} open={open} />}
    </>
  );
};

export default Section5;
