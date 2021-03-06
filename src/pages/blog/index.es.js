import React from "react"
import Layout from "../../layouts/es"
import SEO from "../../components/SEO"
import Blog from "../../templates/blog"
import { graphql } from 'gatsby'

const IndexPage = ({data,location}) => (
  <Layout>
    <SEO
          title={"Blog - ICodit"}
          desc={"Noticias y articulos de gran interes para desarrolladores y amandtes de la tecnologia"}
          pathname={location.pathname}
          lang={"es"}
      />
    <Blog posts={data.allMarkdownRemark.edges}/>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query IndexEsQuerya {
    allMarkdownRemark(filter: { fields:{ langKey : { eq:"es" }},frontmatter: {type: {eq: "blog"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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