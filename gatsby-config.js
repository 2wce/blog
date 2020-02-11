module.exports = {
  pathPrefix: "/blog",
  plugins: [
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
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
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
