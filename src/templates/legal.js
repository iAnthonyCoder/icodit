import React, { useRef } from "react";
import Layout from "../layouts";
import '../../static/css/legal.css';
import { graphql } from 'gatsby'


export default ({ data, location, pageContext }) => {


 
console.log(data)


/* eslint-disable */
  const post = data.currentPost;
  const metadata = data.metadata;
  const langKey = pageContext.langKey;
  const fullUrl = metadata.siteMetadata.url+post.fields.slug;


  const contentDiv = useRef();
  



  
  







  
  return (
    <Layout>
      <main className="post-content-c">
        {/* <div id="desk-navbar-sep"></div> */}
        <section id="post-title-background" className="background" style={{justifyContent:"center"}}>
          <div className="slider-blur"/>
            <div className="wrapper"><h1>{post.frontmatter.title}</h1></div>
            
        </section>
      <div ref={contentDiv} className="academy-content">
        <section className="post_container">
          <div className="content-wrap">
            <div className="row">
                <div className="legal-text">

    
           

      

                {/* <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />   */}

      <div className="legal-text-content">

      {/* <div className="blog-post-header">
        <div className="blog-post-category">
          <span className="category">{post.frontmatter.category}</span>
        </div> 
      </div> */}

        {/* <h1 className="blog-post-title">{post.frontmatter.title}</h1>
 */}

        <div className="header-post no-padding ">
        </div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

    
   
    </div>

    </div></div></section></div></main>
    </Layout>
  )}





















export const query = graphql`
  query LegalQuery($slug: String!) {
    metadata: site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        
      }
      fields {
        slug,
        langKey
      }
    }
  }
`;