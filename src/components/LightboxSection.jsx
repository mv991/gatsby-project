import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef, useEffect } from "react";
export default function LightHouse({ lightboxImage, setLightboxImage }) {
  const modalWrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxImage && event.target.closest(".lightbox-wrapper") === null) {
        // Check if the click is outside the lightbox content
        console.log("ran");
        document.body.style.overflowY = "scroll";
        setLightboxImage(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [lightboxImage, setLightboxImage]);

  console.log(lightboxImage, "lig  ");
  return (
    <>
      {lightboxImage && (
        <div className="fixed top-0 left-0 h-screen w-screen backdrop bg-black flex justify-center items-center z-[7]">
          <div className="lightbox-wrapper">
            <GatsbyImage
              image={getImage(
                lightboxImage.childMarkdownRemark.frontmatter.image
              )}
              alt="main-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
