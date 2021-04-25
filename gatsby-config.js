require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'JS Couching',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    'gatsby-plugin-antd',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -40,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M8TC2ZN',
        includeInDevelopment: false,
      },
    },
  ],
}
