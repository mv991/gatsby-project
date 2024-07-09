/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss",

      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,  // Adjust this to your markdown path
        },
      },
      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     // The unique name for each instance
      //     name: `markdown`,
      //     // Path to the directory
      //     path: `${__dirname}/src/markdown/`,S
      //   },
      // },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `carousalText`,
          path: `${__dirname}/src/markdown/carousalText`,  // Adjust this to your markdown path
        },
      },

  ]
};