import { Link } from 'gatsby';
import Img from "gatsby-image"
import React from "react";
import AuthorDetailsSmall from './authorDetailsSmall'
import { FaComments } from "react-icons/fa";
import { GoTag } from "react-icons/go";


export default function PostCard (props){

    const { post, postLink } = props;
    

    return (
        <div className="postCard">
            <AuthorDetailsSmall 
                image={post.author.photo.childImageSharp.fluid} 
                name={post.author.name}
                date={post.date}
                timeread={post.timeread}
            />
            <Link to={postLink}>
                <Img fluid={post.featuredImage.childImageSharp.fluid} />
            </Link>
            
            <div className="cardPostTitle"><Link to={postLink}>{post.title}</Link></div>
            <p className="postPreviewDesc">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem 
                                                      lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                                                      
                                                     <div className="bottomCard">
                                                      <div className="cardPostCategory">

{/* <Link to={postLink}>
{post.category} */}

<GoTag />
{
post.tags.map((tag, index)=>{
    return(<span key={index}  className="tag"><Link to="#">{tag}</Link></span>)
    // (index==0)?("")+tag:(",  ")+
})
}

{/* </Link> */}

</div>
            <div className="bottom-info">
                {/* <div className="bottom-info-item"><span className="comment"><FaClock /></span>{post.timeread}</div> */}
                <div className="bottom-info-item"><span className="comment"><FaComments /></span>1</div>
                
            </div>     </div>
        </div>
    )

}