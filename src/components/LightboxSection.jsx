import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef, useEffect } from "react";
export default function LightHouse({ lightboxImage, setLightboxImage }) {
  const modalWrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      modalWrapperRef.current &&
      !modalWrapperRef.current.contains(event.target) &&
      lightboxImage !== null
    ) {
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
  return (
    <>
      {lightboxImage && (
        <div className="fixed top-0 left-0 h-screen w-screen backdrop flex justify-center items-center z-[7]">
          <span className="" ref={modalWrapperRef}>
            <GatsbyImage
              image={getImage(
                lightboxImage.childMarkdownRemark.frontmatter.image
              )}
              alt="main-img"
            />
          </span>
        </div>
      )}
    </>
  );
}
