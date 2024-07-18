import React, { useEffect, useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import CarousalItem from "./CarousalItem";

const Section2 = () => {
  const [indexes, setIndexes] = useState([0, 1]);
  const indexesRef = useRef(indexes);

  useEffect(() => {
    indexesRef.current = indexes;
  }, [indexes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prevIndexes) => {
        if (prevIndexes[0] === 0) {
          return [2, 3];
        } else {
          return [0, 1];
        }
      });
      return () => clearInterval(interval);
    }, 4000);
  }, []);
  const data = useStaticQuery(graphql`
    query CarousalQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "carousalText" } }
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
              heading
              text
            }
          }
        }
      }
    }
  `);

  return (
    <div className="w-full h-[200px] flex items-center bg-[#F4F9FF] ">
      <div className="w-full   mx-auto md:justify-between xl:gap-[100px] gap-[20px] px-12 max-w-[1200px] md:flex hidden carousal">
        {data?.allFile?.nodes.map((item, index) => {
          return (
            <CarousalItem
              key={index}
              h={item?.childMarkdownRemark?.frontmatter.heading}
              p={item?.childMarkdownRemark?.frontmatter.text}
              img={item?.childMarkdownRemark?.frontmatter.image}
            />
          );
        })}
      </div>
      <div className="w-full   sm:mx-auto  gap-8 sm:px-12  md:hidden flex justify-center">
        {data?.allFile?.nodes.map((item, index) => {
          return (
            indexes.includes(index) && (
              <CarousalItem
                h={item?.childMarkdownRemark?.frontmatter.heading}
                p={item?.childMarkdownRemark?.frontmatter.text}
                img={item?.childMarkdownRemark?.frontmatter.image}
                key={index}
                index={index}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
