module.exports = {
  siteMetadata: {
    title: "Uchiha Clan",
    description: "Uchiha Clan is a Clan inside of Naruto Anime Series.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://naruto.local/graphql",
      },
    },
  ],
};