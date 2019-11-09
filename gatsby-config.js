module.exports = {
  siteMetadata: {
    title: `Entrepreneurs of Utrecht`,
    description: `Taciti facilisi et tortor tellus fusce eleifend`,
    author: `@wirtzdan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-boilerplate`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#38B2AC`,
        display: `browser`,
        icon: `./src/assets/copy.svg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Marcellus`
          },
          {
            family: `Open Sans`
          }
        ]
      }
    }
  ]
};
