
import Img from "gatsby-image"
import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub} from "react-icons/io";

export default function AuthorDetailsSmall (props){

    const post = props.post;
    return(
        <div className="userCard backgrounded">
            <div className="userInnerCard"> 
                <div className="userPhotoCard">  
                    <Img fluid={post.frontmatter.author.photo.childImageSharp.fluid} />
                </div>
                <div className="userDesc">
                    PUBLISHED BY
                <h4>{post.frontmatter.author.name}</h4>
                  {/* <p className="">{post.frontmatter.author.title}</p> */}
                {post.frontmatter.author.bio}
                </div>
            </div>
            <div className="userSocials">
                <span className="socialIcons">
                    <a href={post.frontmatter.author.twitter}>
                        <IoLogoFacebook />
                        <IoLogoTwitter />
                        <IoLogoInstagram />
                        <IoLogoLinkedin />
                        <IoLogoGithub />
                    </a>
                </span>
            </div>
        </div>
    )

}