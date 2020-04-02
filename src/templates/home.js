import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import PostCard from "../components/postCard"
import '../../static/css/home.css';
import Slider from "react-slick";
import '../components/slick/slick-theme.min.css';
import '../components/slick/slick.min.css';
import '../../static/css/postLists.css'
import '../../static/css/infoSections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Code from "../../static/img/code.png"

export default function Home (props) {


	const slickSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	const [ tutorialPosts,  ] = React.useState(props.posts.tutorialPosts.edges);
	const [ blogPosts,  ] = React.useState(props.posts.blogPosts.edges);

	const messagesInitialState=false;
	const [ messages, setMessages ] = useState(messagesInitialState);

	useEffect(() => {
		if(props){
			setMessages(props.i18nMessages)
		}
	}, [])

    return (
		<main className="no-theme homePage">
<section className="inf sect1-class" id="sect1">
<div className="content-wrap">
                <div className="overflowWrap">
				    <div id="particles-js">
					
					
				        <div className="content-wrap" id="content-sect1">
					        <div id="title-container">
                                {
									(messages)?(<h1 id="page-title">{messages.home.welcome}</h1>):("")
								}
                                <br/>
                                {/* <h2>{props.i18nMessages.sect1.subtitle}</h2> */}
                                <div id="curve"></div>
					        </div>
					        <div id="computer-sect">
						        <div id="pc">
						            <div id="pc-left">
						                <div id="tv">
							                <div className="screenWelcome" >
											
											{/* <div className="screen-onB">
											
								
								</div> */}
								<img id="codeImg" src={Code}></img>
											</div>
							                    
							
							
						</div>	
						<div id="stab">
							<div id="stab1">
							
						</div>
						<div id="stab2">
							
						</div>
						</div>
						<div id="keyboard"></div></div>
						

						<div id="pc-right">
						<div id="desc1">

						
						{
									(messages)?(<h2 className="t1" style={{textAlign:"center"}}>{messages.home.details}</h2>):("")
								}
								
						
							<Link to="/academy">Go to academy</Link>

						</div>
						<div id="mouse-cooffee">
							<div id="mouse-wrap">
								<div id="mouse-cont">
									<div id="mouse"></div>
								</div>
								<div id="mousepad"></div>
							</div>
							<div id="cooffee-wrap">
							<div id="cooffee-pt1"></div>
							<div id="cooffee-pt2"></div>
						</div>
						</div>
						</div>
						</div>
						<div id="table"></div>
						<div id="st"></div>
					</div>
				</div>
			
			</div></div></div>
			</section>



			<div  className="academy-list ">
        
        <section className="posts_container">
        
         
        
            <div className="row">
                
                
<div className="left-big-posts-list fullWidth">

			<section className="category-section order-date ">
			<div className="content-wrap">
				<div className="title ">
					{(messages)?(<h2 className="subline">{messages.home.lastestTutorials}</h2>):("")}
                </div>
                <div className="posts-list-container ">
				{
					tutorialPosts.map(({ node }) =>
                		<div className="postCard3" key={node.id}> 
							<PostCard
                		    	post={node.frontmatter}
                		        postLink={node.fields.slug}
                		    />
						</div>
                )}
				</div>
				</div>
            </section>       






			<section className="category-section order-date featuredSlickTutorials">
			<div className="content-wrap">
				<div className="title ">
					{(messages)?(<h2 className="subline">{messages.home.ourExpertise}</h2>):("")}
                </div>
                <div className="tagsHomeShowcase">
				
					<div id="two-five" class="tag-showcase"><Link to="#">LARAVEL</Link></div>
					<div id="five-zero" class="tag-showcase "><Link to="#">REACT</Link></div>
					<div id="two-fivee" class="tag-showcase"><Link to="#">NODE</Link></div>
					<div id="three-three" class="tag-showcase "><Link to="#">JAVASCRIPT</Link></div>
					<div id="three-threee" class="tag-showcase "><Link to="#">MYSQL</Link></div>
					<div id="three-threea" class="tag-showcase"><Link to="#">VUE</Link></div>
					<div id="six-six" class="tag-showcase"><Link to="#">MONGO</Link></div>
					<div class="tag-showcase three-three"><Link to="#">MORE</Link></div>
					

                
				</div>
				</div>
            </section>       






			<section className="category-section ">
			<div className="content-wrap">
				<div className="title ">
					{(messages)?(<h2 className="subline">{messages.home.featuredTutorials}</h2>):("")}
                </div>
				<div>

        <Slider {...slickSettings}>
         {
					tutorialPosts.map(({ node }) =>
                		<div><div  key={node.id}> 
							<PostCard
                		    	post={node.frontmatter}
                		        postLink={node.fields.slug}
                		    />
						</div></div>
                )}
        </Slider>
      </div>
</div>
            </section> 



			<section className="category-section order-date featuredSlickTutorials">
			<div className="content-wrap">
				<div className="title ">
					{(messages)?(<h2 className="subline">{messages.home.lastestArticles}</h2>):("")}
                </div>
                <div className="posts-list-container ">
				{
					blogPosts.map(({ node }) =>
                		<div className="postCard3" key={node.id}> 
							<PostCard
                		    	post={node.frontmatter}
                		        postLink={node.fields.slug}
                		    />
						</div>
                )}
				</div>
				</div>
            </section>   
<section id="newsletter">
<div className="content-wrap" id="sect6-wrap">
			

			<div id="sect3-title">
			{(messages)?(<h1 id="sect-title" className="dynamic slide-up in-view">{messages.home.newsletter}</h1>):("")}
				</div>
				<form id="send-form" name="send-form">
	
		<div className="input-cont dynamic slide-up in-view"><div id="input-icon"><FontAwesomeIcon icon={faEnvelope} size="2x"/></div><label className="formlabels" htmlFor="htmlFor">Email</label><input className="inputForm" required="" type="email" name="email" id="email"/></div>
		

	
		<input type="submit" name="submit-form" id="submit-form" className="dynamic slide-up in-view" value={(messages)?(messages.home.subscribe):("")}/>

	</form></div>
</section>
			
</div>
                   
                
                
            </div>
          <li>
            <ul>





            </ul>
          </li>
        </section>
      </div>









		</main>
    );
}