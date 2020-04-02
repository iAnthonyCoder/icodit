import { Link } from 'gatsby';
import Img from "gatsby-image"
import React from "react";
import './authorDetailsSmall.css';

export default function AuthorDetailsSmall (props){

    const image = props.image;
    const name = props.name;
    const date = props.date;
    const timeread = props.timeread;

return (
<div className="post-author" id="post-author-dynamic">
                    <Link to="#" >
                      
                          <div className="userPhoto">                        
                              <Img fluid={image} />
                          </div></Link>
                      <div>
                      <Link to="#" ></Link><div className="userName">
                            {name}
                          </div>
                      
               
                      <div className="postDate">
                      {`${date} ${(timeread)?(" · "+timeread):("")} `}
                      </div>
                      </div>
            </div>
)

}