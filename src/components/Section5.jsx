import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import LightHouse from "./LightboxSection";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
const Section5 = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const [mainImg, setMainImg] = useState(0);
  const [images, setImages] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  useEffect(() => {
    images.length === 0 &&
      data?.allFile?.nodes?.slice(1).map((node, index) => {
        setImages((prev) => [...prev, node]);
      });
  }, []);

  const modalWrapperRefs = useRef([]);

  const handleClickOutside = (event) => {
    console.log(modalWrapperRefs, "refs");
    if (
      modalWrapperRefs.current &&
      !modalWrapperRefs.current[0]?.contains(event.target) &&
      !modalWrapperRefs.current[1]?.contains(event.target)
    ) {
      console.log("outside");
      document.body.style.overflowY = "scroll";
      setLightboxImage(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  function handleImageChange(direction) {
    if (direction === -1 && mainImg > 0) {
      const newImgs = data?.allFile?.nodes.filter(
        (image, index) => index !== mainImg - 1
      );
      setImages([...newImgs]);

      setMainImg(mainImg - 1);
    } else if (direction === 1 && mainImg < 4) {
      const newImgs = data?.allFile?.nodes.filter(
        (image, index) => index !== mainImg + 1
      );

      setImages([...newImgs]);
      setMainImg(mainImg + 1);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  function handleImageChange(direction, origin) {
    if (origin === "carousel") {
      if (direction === -1 && mainImg > 0) {
        const newImgs = data?.allFile?.nodes.filter(
          (image, index) => index !== mainImg - 1
        );
        setImages([...newImgs]);

        setMainImg(mainImg - 1);
      } else if (direction === 1 && mainImg < 4) {
        const newImgs = data?.allFile?.nodes.filter(
          (image, index) => index !== mainImg + 1
        );

        setImages([...newImgs]);
        setMainImg(mainImg + 1);
      }
    } else {
      if (direction === -1 && lightboxImage > 0) {
        setLightboxImage(lightboxImage - 1);
      } else if (direction === 1 && lightboxImage < 4) {
        setLightboxImage(lightboxImage + 1);
      }
    }
  }
  return (
    <>
      <div
        className="w-[90%] 2xl:w-[70%] max-w-[1500px] mx-auto h-fit flex flex-col mt-12 "
        ref={(el) => (modalWrapperRefs.current[0] = el)}
      >
        <div className="w-full relative">
          <div
            onClick={() => {
              setLightboxImage(mainImg);
              console.log(mainImg, "mainImg");
            }}
            className="object-cover rounded-xl h-[300px] 2xl:h-[500px] cursor-pointer"
          >
            <GatsbyImage
              image={getImage(
                data?.allFile?.nodes[mainImg]?.childMarkdownRemark.frontmatter
                  .image
              )}
              height={900}
              width={1500}
              alt="img"
              className="object-cover w-full h-full rounded-xl cursor-pointer"
            />
          </div>
          <div
            className="absolute z-[1] w-[60px] h-[60px] top-[50%] right-[10px] cursor-pointer"
            onClick={() => handleImageChange(+1, "carousel")}
          >
            <StaticImage src="../images/arrow.png" width={60} />
          </div>
          <div
            className="absolute rotate-180 z-[1] w-[60px] h-[60px] top-[50%] left-[10px] cursor-pointer"
            onClick={() => handleImageChange(-1, "carousel")}
          >
            <StaticImage src="../images/arrow.png" />
          </div>
        </div>
        <div className="flex gap-2 w-full max-w-full justify-between mt-2">
          {images.map((img, index) => {
            const image = getImage(img.childMarkdownRemark.frontmatter.image);
            return (
              <div
                onClick={() => setLightboxImage(index + 1)}
                className="w-[24%] sm:rounded-2xl rounded-md  cursor-pointer"
              >
                <GatsbyImage
                  image={image}
                  width={900}
                  height={900}
                  alt="img"
                  key={index}
                  className="object-cover h-full object-center sm:rounded-2xl rounded-md "
                />
              </div>
            );
          })}
        </div>
      </div>
      {console.log(
        data?.allFile?.nodes[lightboxImage]?.childMarkdownRemark.frontmatter
          .image,
        getImage(
          data?.allFile?.nodes[lightboxImage]?.childMarkdownRemark.frontmatter
            .image
        ),
        "image"
      )}
      {lightboxImage !== null && (
        <>
          <div className="fixed top-0 left-0 h-screen w-screen backdrop bg-black flex justify-center items-center z-[7]"></div>
          <div
            ref={(el) => (modalWrapperRefs.current[1] = el)}
            className="sm:w-[80%] w-[90%] h-[70%] fixed z-[8] fixed-center max-w-[1400px] rounded-xl"
          >
            <GatsbyImage
              image={getImage(
                data?.allFile?.nodes[lightboxImage]?.childMarkdownRemark
                  .frontmatter.image
              )}
              alt="main-img"
              class="h-full w-full rounded-[30px]"
            />
            <div
              className="absolute z-[1] w-[60px] h-[60px] top-[50%] right-[10px] cursor-pointer"
              onClick={() => handleImageChange(+1, "lightbox")}
            >
              <StaticImage src="../images/arrow.png" />
            </div>
            <div
              className="absolute rotate-180 z-[1] w-[60px] h-[60px] top-[50%] left-[10px] cursor-pointer"
              onClick={() => handleImageChange(-1, "lightbox")}
            >
              <StaticImage src="../images/arrow.png" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Section5;
