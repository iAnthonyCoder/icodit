import React from "react"
import Layout from "../../layouts/en"
import SEO from "../../components/SEO"
import Blog from "../../templates/blog"
import { graphql } from 'gatsby'

function IndexPage({data}) {
  
  // const [posts, setPosts] = React.useState();
  
  return(
  <Layout>
    <SEO title="Home" />
    <Blog data={data} posts={data.allMarkdownRemark.edges}/>
  </Layout>
)}

export default IndexPage


export const query = graphql`
  query IndexEnQuerya {
    allMarkdownRemark(filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "blog"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            timeread

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
