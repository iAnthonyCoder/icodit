import React from "react"
import Layout from "../../layouts/en"
import SEO from "../../components/SEO"
import Blog from "../../templates/blog"
import { graphql } from 'gatsby'

const IndexPage = ({data, location}) => (
  <Layout>
    <SEO
          title={"Blog - ICodit"}
          desc={"News and articles of great interest to developers and technology amateurs"}
          pathname={location.pathname}
          lang={"en"}
      />
    <Blog posts={data.allMarkdownRemark.edges}/>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query IndexEnQuerya {
    allMarkdownRemark(filter: { fields:{ langKey : { eq:"en" }},frontmatter: {type: {eq: "blog"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
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