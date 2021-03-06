import React from "react"
import Layout from "../layouts/en"
import Home from '../templates/home';
import messages from '../data/messages/en';

const IndexPage = ({data}) => (
  
  <Layout>
   <Home 
    i18nMessages={messages}
    posts={data}
   />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexaEnQuery {
    tutorialPosts: allMarkdownRemark(limit:3, filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "tutorial"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            timeread
            featured
            date(formatString: "DD MMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
              name
              id
              twitter
              photo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug,
            langKey
          }

        }
      }
    }
    featuredPosts: allMarkdownRemark(limit:5, filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "tutorial"}, featured: {eq: "true"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            timeread
            featured
            date(formatString: "DD MMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
              name
              id
              twitter
              photo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug,
            langKey
          }

        }
      }
    }
    blogPosts: allMarkdownRemark(limit:3, filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "blog"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            timeread
            featured
            date(formatString: "DD MMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
              name
              id
              twitter
              photo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug,
            langKey
          }

        }
      }
    }
  }
`
