import { Link } from 'gatsby';
import Img from "gatsby-image"
import React from "react";
import { FaComments } from "react-icons/fa";
import './postCardSmall.css';

export default function PostCard (props){

    const { post, postLink } = props;
    

    return (
        <div className="postCard">
            
            <Link to={postLink}>
                <Img fluid={post.featuredImage.childImageSharp.fluid} />
            </Link>
            <div className="cardPostCategory">

                <Link to={postLink}>
                {post.category} </Link>

            {/* <GoTag />
            {
                post.tags.map((tag, index)=>{
                    return(<span className="tag"><Link to="#">{tag}</Link></span>)
                    // (index==0)?("")+tag:(",  ")+
                })
              } */}
            
            
            
            </div>
            <div className="cardPostTitle"><Link to={postLink}>{post.title}</Link></div>
            <div className="bottom-info">
                {/* <div className="bottom-info-item"><span className="comment"><FaClock /></span>{post.timeread}</div> */}
                <div className="bottom-info-item"><span className="comment"><FaComments /></span>1</div>
                
            </div>     
        </div>
    )

}