const config = require("./src/data/config")

module.exports = {
  pathPrefix: "/blog",
  plugins: [
    "gatsby-plugin-preload-link-crossorigin",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
              gatsbyRemarkPlugins: [`gatsby-remark-images`],
              plugins: [`gatsby-remark-images`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./static/favicon/favicon-512.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.defaultTitle,
        short_name: "starter",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "./static/favicon/favicon-512.png",
      },
    },
    "gatsby-plugin-offline",
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Kudakwashe's Blog`,
    author: `Kudakwashe Mupeni`,
    description: `My thoughts on the different things I'm passionate about`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/real_kuda`,
      },
      {
        name: `github`,
        url: `https://github.com/2wce`,
      },
    ],
  },
}
