import { Link } from 'gatsby';

import React from "react";
// import { MdDateRange } from "react-icons/md";
import { GoTag, GoComment } from "react-icons/go";
import Img from 'gatsby-image/withIEPolyfill';
import AuthorDetailsSmall from "../components/authorDetailsSmall"


export default function HorizontalPostCard (props){

    const post = props.post;
   
    return(
        <div className="pd10">
                                            <div className="post-wrapper">
                                              <div className="row">
                                                  <div className="post-image-preview">
                                                    <div className="image-preview">
                                                 
                                                    <Img
      fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      alt="This is a picture of my face."
    />
                                                    </div>
                                                      
                                                  </div>
                                                  <div className="post-details-preview">
                                                  <div className="post-tags">
                                                                           
                                                                           <GoTag />
                                                                           {
                                                                               post.frontmatter.tags.map((tag, index)=>{
                                                                                   return(<span key={index} className="tag"><Link to="#">{tag}</Link></span>)
                                                                                   // (index==0)?("")+tag:(",  ")+
                                                                               })
                                                                             }
                                                                             </div>
                                                  <div>
                                                    <div className="post-title"><h2>
                                                      <Link to={post.fields.slug}>{post.frontmatter.title}</Link> 
                                                      
                                                      </h2>
                                                      


                                                    {/* <div className="post-author">
                                                    <Link to="#" ><div className="userLink">
                                                      <div className="userPhoto">
                                                        
                                                      <Img
      fluid={post.frontmatter.author.photo.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      alt="This is a picture of my face."
    />
                                                        </div>
                                                        {post.frontmatter.author.name}</div> </Link>
                                                      <MdDateRange />
                                                      {post.frontmatter.date}
                                                      </div> */}
                                                  </div>


                                                  </div>
                                                  <p className="postPreviewDesc">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                                                    
                                                    

                                                    <div className="post-det">
                                                    <AuthorDetailsSmall 
                image={post.frontmatter.author.photo.childImageSharp.fluid} 
                name={post.frontmatter.author.name}
                date={post.frontmatter.date}
                timeread={post.frontmatter.timeread}
            />           
                               
                                                    
                                                      <span className="comment"><GoComment />{"1"}</span>
                                                    </div>
                                                  </div>

                                              </div>
                                              </div>
                                          </div>
    )

}