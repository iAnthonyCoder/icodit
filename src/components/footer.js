import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { MultiFooter } from '../data/multiFooter';
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Sitemap } from '../data/sitemap';
import {injectIntl} from 'react-intl';
import { window } from 'browser-monads';
import '../../static/css/footer.css';
import LangSelector from "./langSelector";
import GitHubButton from 'react-github-btn'

const Footer = injectIntl(({siteTitle, intl, langs}) => {



 	const legalPosts= useStaticQuery(graphql`
 	query legallistquery {
 	  enLegal: allMarkdownRemark(filter: { fields:{ langKey : { eq:"en" }}, frontmatter: {type: {eq: "legal"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
 		totalCount
 		edges {
 		  node {
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
	   }
	   esLegal: allMarkdownRemark(filter: { fields:{ langKey : { eq:"es" }}, frontmatter: {type: {eq: "legal"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
		totalCount
		edges {
		  node {
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
	  }
 	}
   `)



  
   
	// const flags = useStaticQuery(graphql`{
	// 	allFile(filter: { extension: { in: ["jpg"] },name: { in: ["en", "es"] } }) {edges {node {publicURL,name}}},
	//   }
	// `)
	// const [ images, setImages ] = useState({
	// 	'teamDesk':{
	// 		'url':''
	// 	}
	// });
	// useEffect(() => {
	// 	mapImgToState(images)
	//   return () => {
		  
	//   };
	// }, [flags])
	//  const langMenuStatusInitialState = false;
	// const [ langMenuStatus, setLangMenuStatus] = useState(langMenuStatusInitialState)


	// const handleClick = e => {
	// 	if (langMenu.current.contains(e.target)) {
	// 	  // inside click
	// 	  return;
	// 	}
	// 	// outside click
	// 	setLangMenuStatus(false);
	//   };

	// useEffect(() => {
	// 	document.addEventListener("mousedown", handleClick);
	
	// 	return () => {
	// 	  document.removeEventListener("mousedown", handleClick);
	// 	};
	//   }, []);
	  
	// const mapImgToState = async () => {
  
	// 	//   var tempImages = {};
	// 	//   await flags.allFile.edges.map(image => {
	// 	// 	  if(image.node.name==="en"){tempImages={...tempImages, en:image.node.publicURL}}
	// 	// 	  if(image.node.name==="es"){tempImages={...tempImages, es:image.node.publicURL}}
	// 	// 	  return null;
	// 	//   })
	// 	//   setImages(tempImages);
	// }

	
	

return (
<footer>
	<div className="content-wrap" id="footer-wrap">
		<div id="footer-sect1" className="loading">
			
			<div className="footer-content-div" className="fs1" id="fs1-1">
			<div><p className="p5">{MultiFooter.links[intl.locale]}</p></div><div class="separator-blue"></div>
					<ul>

					{Sitemap.map((sect, index) => {
						
							return(
								<li key={index}><Link className="links p6"  to={`${(intl.locale==="en")?(""):(intl.locale)}/${sect.path}`}>{
									Object.keys(sect.name).map(function(key){
										if(key===intl.locale){
											return sect.name[key];
										}
										return null;
									})
								}
								</Link></li>
							)

						})}
					</ul>
			</div>
			<div className="footer-content-div" className="fs1" id="fs1-2">
		

<div><p className="p5">{MultiFooter.lang[intl.locale]}</p></div><div class="separator-green"></div>


<ul>

	{langs.map((lang, index) => {
		
		if(lang.selected){
			if(lang.langKey==="es")
			return legalPosts.esLegal.edges.map( (post, index) => {
				return(
				<li key={index}>
					<Link className="links p6" to={post.node.fields.slug}>{post.node.frontmatter.title}
					</Link>
				</li>
				)
		
			} )
			if(lang.langKey==="en"){
				return legalPosts.enLegal.edges.map( (post, index) => {
					return(
					<li key={index}>
						<Link className="links p6" to={post.node.fields.slug}>{post.node.frontmatter.title}
						</Link>
					</li>
					)
			
				} )
			}
		}
		
			}
			
		
		
	
		
	)
}
	
	




	
</ul>


			</div>
			
			<div className="footer-content-div" className="fs1" id="fs1-4">

				<p className="p5">{MultiFooter.comunity[intl.locale]}</p>
				<div class="separator-purple"></div>
			<ul>
				
				<li><a href="#1"><p className="p6">About us</p></a></li>
				<li><a href="#4"><p className="p6">Contact us</p></a></li>

				</ul>
			
			</div>
			<div className="footer-content-div" className="fs1" id="fs1-3">
			<p className="p5">{MultiFooter.contact[intl.locale]}</p>
			<div class="separator-red"></div>
			<ul>
				<li><p className="p9">Anthony Medina</p></li>
				<li><p className="p8">IT Engineer</p></li>
				<li><a href="mailto:iAnthonyCoder@gmail.com"><p className="p8">iAnthonyCoder@gmail.com</p></a></li>
			
			
			</ul>
			
			<ul id="contactBtns">
					<li><a target="_blank"  href="https://api.whatsapp.com/send?phone=584169607265"><FontAwesomeIcon icon={faWhatsapp} size="1x"/><p className="p6"></p></a></li>
					<li><a target="_blank" href="https://www.linkedin.com/in/anthony-medina-862138a6/"><FontAwesomeIcon icon={faLinkedin} size="1x"/><p className="p6"></p></a></li>
					<li><a target="_blank" href="http://twitter.com/iAnthonyCoder"><FontAwesomeIcon icon={faTwitter} size="1x"/><p className="p6"></p></a></li>
					<li><a target="_blank" href="http://github.com/iAnthonyCoder"><FontAwesomeIcon icon={faGithub} size="1x"/><p className="p6"></p></a></li>
				
				 
				</ul>

			</div>
		</div>
		<div id="footer-sect2">
			<div>
		<div className="logoFooter">
													


													
																											<div className="logo scale-footer">
													
																												<div className="window">
																													<div className="window-controls">
																														<div className="button1"></div>
																														<div className="button2"></div>
																														<div className="button3"></div>
																													</div>
																													<div className="window-body">
																														<div className="line-number">
																															<div className="number first-line"></div>
																															<div className="number"></div>
																															<div className="number "></div>
																															<div className="number "></div>
																															<div className="number "></div>
																															<div className="number  "></div>
																															<div className="number "></div>
																															<div className="number"></div>
																														</div>
																														<div className="content">
																															<div className="code">
																																<div className="code-lines">
																																	<div className="number2 first-line blue-line"></div>
																																	<div className="number2 blue-line"></div>
																																	<div className="number2 second-col green-line"></div>
																																	<div className="number2 third-col purple-line"></div>
																																	<div className="number2 third-col purple-line"></div>
																																	<div className="number2 second-col two">
																																		<div className="two1 green-line"></div>
																																		<div className="two2"></div>
																																	</div>
																																	<div className="number2 second-col green-line"></div>
																																	<div className="number2 blue-line"></div>
																																</div>
																															</div>
																															<div className="div1"></div>
																															<div className="div2"></div>
																														</div>
																													</div>
																													<div className="window-statusbar"></div>
																												</div>
																												<p className="logo-symbol-1">&#60;</p>
																												<p className="logo-symbol-3">/</p><p className=" logo-letters strong">I</p><p className="logo-letters">
																												CODIT</p>
																												<p className="logo-symbol-2">></p>
																											</div>
																										</div>

																										<ul>
{/* {
	
	legalPosts.allMarkdownRemark.edges.map( (post, index) => {
		return(
		<li key={index}>
			<Link className="links p6" to={post.node.fields.slug}>{post.node.frontmatter.title}
			</Link>
		</li>
		)

	} )
} */}



{<LangSelector langs={langs} />}




{/* 
<div id="lang-d">
<div id="lang-menu-list" ref={langMenu} class={`${langMenuStatus}`}>
	<ul>
	{langs.map((lang, index) => {
		
		if(!lang.selected){
			return (<Link onClick={()=>{handleLang(lang.langKey)}} to={lang.link} key={lang.langKey} >
			{(lang.langKey==="es")?("Español"):("English")}
			</Link>)
		}
		else {
			return(null)
		}
	}
		
	)
}
		</ul>
	</div>
<div onClick={()=>{setLangMenuStatus(!langMenuStatus)}} id="lang-button"><FontAwesomeIcon icon={faGlobe} size="1x"/>&nbsp;
{langs.map((lang, index) => {
		
		if(lang.selected){
			if(lang.langKey==="es")
			return (<p>Español</p>)
			else
			return (<p>English</p>)
		}
		else {
			return(null)
		}
	}
		
	)
}
		<div>&#9650;</div></div></div>
	 */}



	







</ul><div/></div>
			
			
			<div id="footerSocialIcons">

			<li><a href="#1"><FontAwesomeIcon icon={faTwitter} size="2x"/></a></li>
			<li><a href="#1"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
			<li><a href="#1"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
			</div>
			
			</div>
		<hr></hr>
		<div id="footer-sect3"><p className="small-font-footer">Site Design & Logo © ANTHONY MEDINA - All Rights Reserved</p>
		<p className="small-font-footer">Handcrafted with &nbsp;<FontAwesomeIcon icon={faHeart} size="2x"/>&nbsp; by &nbsp;<GitHubButton href="https://github.com/iAnthonyCoder" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Follow @iAnthonyCoder on GitHub">@iAnthonyCoder</GitHubButton></p>	
								

		</div>
				
				</div>
	</footer>
)
});

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

 {/* {
	langs.map((lang, index) => {
		
		if(!lang.selected){
			return (<Link onClick={()=>{handleLang(lang.langKey)}} to={lang.link} key={lang.langKey} >
			<img className="" alt="alt" src={(lang.langKey==="es")?images.es:images.en}/>
			</Link>)
		}
		else {
			return(null)
		}
	}
		
	)
}  */}