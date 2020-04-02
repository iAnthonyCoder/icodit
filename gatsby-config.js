const languages = require('./src/data/languages');


module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: `ICodit - Let's code it!`,
    titleAlt: 'Icodeit.net',
    description: `Learn greats ways to develop awesome apps`,
    headline: 'Learn about many web dev tools', // Headline for schema.org JSONLD
    url: 'https://icodit.net', // Domain of your site. No trailing slash!
    author: `iAnthonyCoder`,
    twitterHandle: '@anthony952',
    url: 'https://www.icodit.net',
    siteUrl: `https://www.icodit.net`,
    logo: '/static/img/logoC.png', // Used for SEO
    banner: '/static/img/logoC.png', // Used for SEO
    favicon: '/static/img/logoC.png', // Used for manifest favicon generation
    shortName: 'Icodit', // shortname for manifest. MUST be shorter than 12 characters
    author: 'iAnthonyCoder', // Author for schemaORGJSONLD

    languages
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7380690252754239`
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `codineffable`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name:`ICodit - Let's code it!`,
        short_name: 'Icodeit.net',
        description: `Learn greats ways to develop awesome apps`,
        start_url: '/',
        // background_color: website.backgroundColor,
        // theme_color: website.themeColor,
        display: 'standalone',
        icon: './static/img/logoC.png',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/legal/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges{
              node {
                path
              }}
            }
        }`,
        
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mappings',
        path: `${__dirname}/src/data/authors`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `blue`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
       
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `
        }
      }
    },
    `gatsby-transformer-sharp`,
    // `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: false,
              className:"anchor",
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },

        ],
      },
      // resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `gatsby-starter-default`,
      //   short_name: `starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `minimal-ui`,
      //   icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
