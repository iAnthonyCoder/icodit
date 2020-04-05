import React from "react"
import Layout from "../../layouts/en"
import SEO from "../../components/SEO"
import Academy from "../../templates/academy"
import { graphql } from 'gatsby'
import messages from '../../data/messages/en';

function IndexPage({data, location, lang}) {
  
  console.log(lang)
  // const [posts, setPosts] = React.useState();
  console.log(data)
  return(
  <Layout>
    <SEO
          title={"Academy - ICodit"}
          desc={"Tutorials which will become you in a great developer"}
          pathname={location.pathname}
          lang={"en"}
      />
    <Academy i18nMessages={messages} data={data} posts={data.allMarkdownRemark.edges}/>
  </Layout>
)}

export default IndexPage


export const query = graphql`
  query IndexEnQuery {
    allMarkdownRemark(filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "tutorial"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
