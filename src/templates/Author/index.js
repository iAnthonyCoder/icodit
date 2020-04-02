// // templates/Author/index.jsx
// import React from 'react'
// import { graphql, Link } from 'gatsby'

// export default ({
//   data: {
//     authorYaml: { id, bio, twitter },
//     allMarkdownRemark: { edges: postNodes },
//   },
// }) => (
//   <div>
//     <div>
//       <h2>{id}</h2>
//       <a href={`https://twitter.com/${twitter}/`} target="_blank">
//         {`@${twitter}`}
//       </a>
//       <p>
//         <em>{bio}</em>
//       </p>
//     </div>
//     <hr />
//     <p>{`Posted by ${id}: `}</p>
//     {postNodes.map(({ node: post }, idx) => (
//       <div key={post.id}>
//         <a href={post.fields.slug}>{post.frontmatter.title}</a>
//       </div>
//     ))}
//   </div>
// )

// export const pageQuery = graphql`
//   query PostsByAuthorId($authorId: String!) {
//     allMarkdownRemark(filter: { fields: { authorId: { eq: "anthony952" } } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             author {
//               id
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//     authorYaml(id: { eq: "anthony952" }) {
//       id
//       bio
//       twitter
//     }
//   }
// `