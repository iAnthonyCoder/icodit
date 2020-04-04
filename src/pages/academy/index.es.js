import React from "react"
import Layout from "../../layouts/en"
import SEO from "../../components/SEO"
import Academy from "../../templates/academy"
import { graphql } from 'gatsby'
import messages from '../../data/messages/es';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Academy i18nMessages={messages} data={data} posts={data.allMarkdownRemark.edges}/>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query IndexEsQuery {
    allMarkdownRemark(filter: { fields:{ langKey : { eq:"es" }},frontmatter: {type: {eq: "tutorial"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            featured
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
              id
              name
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