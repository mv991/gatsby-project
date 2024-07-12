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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `amenity`,
          path: `${__dirname}/src/markdown/amenity`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `dmaccPresents`,
          path: `${__dirname}/src/markdown/dmaccPresents`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `lightbox`,
          path: `${__dirname}/src/markdown/lightbox`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `locationText`,
          path: `${__dirname}/src/markdown/locationText`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `whyInvest`,
          path: `${__dirname}/src/markdown/whyInvest`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `floorPlan`,
          path: `${__dirname}/src/markdown/floorPlan`,  // Adjust this to your markdown path
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-responsive-iframe`],
        },
      },
      {
        resolve: `gatsby-omni-font-loader`,
        options: {
          enableListener: true,
          preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
          web: [
            {
              name: `oswald`,
              file: `https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap`,
            },
          ],
        },
      },

  ]
};