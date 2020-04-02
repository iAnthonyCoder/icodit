import { Link, useStaticQuery,graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useLayoutEffect, useState, useEffect } from "react"
import { Sitemap } from '../data/sitemap';
import {injectIntl} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import useDarkMode from "use-dark-mode"
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import LogoWindow from "./logoWindow"
import { window } from 'browser-monads';
import '../../static/css/header.css';
import LangSelector from "./langSelector";
import '../../static/css/langSelector.css';

const Header = injectIntl(({siteTitle, intl, langs}) => {
	
	
	const darkMode = useDarkMode(false);
	const flags = useStaticQuery(graphql`{
		allFile(filter: { extension: { in: ["jpg"] },name: { in: ["en", "es"] } }) {edges {node {publicURL,name}}},
	  }
	`)

	const [ images, setImages ] = useState({
		'teamDesk':{
			'url':''
		}
	});
	const hamburgerActiveInitialState = false;
	const [ hamburgerActive, setHamburgerActive] = useState(hamburgerActiveInitialState);

	const handleHamburgerStatus = () => {
		setHamburgerActive(!hamburgerActive);
	}


	
	// const [ homeHeader, setHomeHeader ] = useState('false');

	// const url = window.location.pathname;

  	

	//   useEffect(() => {
	// 	if(url.length<=4){
	// 		setHomeHeader(true)
	// 	}
	// 	else{
	// 		setHomeHeader(false)
	// 	}
	// }, [url])



	useEffect(() => {
		mapImgToState(images)
	  return () => {
		  
	  };
	}, [flags])

	  
	const mapImgToState = async () => {
  
		  var tempImages = {};
		  await flags.allFile.edges.map(image => {
			  if(image.node.name==="en"){tempImages={...tempImages, en:image.node.publicURL}}
			  if(image.node.name==="es"){tempImages={...tempImages, es:image.node.publicURL}}
			  return null;
		  })
		  setImages(tempImages);
	}


	
	const [ transparentHeader, setTransparentHeader ] = useState(true);
	// const [ selectedLanguage, setSelectedLanguage ] = useState('');

	useLayoutEffect(() => {

		const handleScroll = () => {
			(window.pageYOffset===0) ? setTransparentHeader(true) : setTransparentHeader(false);
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		};
	}, [])


	

	function handleLang(key) {
		window.localStorage.setItem('lang', key);
	
	}
	
	

	
	return(
		<header>
		<div id="em"></div>
			<div id="desk-navbar" className={ `${transparentHeader ? "" : "scrolled"} ${(hamburgerActive)?"scrolled":""}`} >
			<div id="navbar-wrap">
			<div id="logo-container">
				<div>
				<div id="logo" className="logo logo-copy">
				<Link to={"/"}><LogoWindow /></Link>
				<p className="logo-symbol-1">&#60;</p>
				<p className=" logo-letters strong">I</p><p className="logo-letters">
				CODIT</p>
				<p className="logo-symbol-2">></p>
				
				</div></div>
			</div>
<div onClick={handleHamburgerStatus} className={`hamburger hamburger--slider-r ${(hamburgerActive)?"is-active":""}`}>
    						<div className="hamburger-box">
      							<div className="hamburger-inner"></div>
    						</div>
  						</div>
				<div id="navigation" className={`${(hamburgerActive)?"is-active":""}`}>
					<ul id="navigation-items">
					 {
						Sitemap.map((sect, index) => {
							return(
								<li key={index}><Link activeClassName="active" to={`${(intl.locale==="en")?(""):(intl.locale)}/${sect.path}`}>{
									Object.keys(sect.name).map(function(key){
										if(key===intl.locale){
											return sect.name[key];
										}
										return null;
									})
								}
								</Link></li>
							)

						})
					} 
					</ul>
					<ul id="top-options">{/*<li className="page-option">
					 {
						langs.map((lang, index) => {
							
							if(!lang.selected){
								return (<Link onClick={()=>{handleLang(lang.langKey)}} to={`${lang.link}`} key={lang.langKey} >
								<img className="" alt="alt" src={(intl.locale==="en")?images.es:images.en}/>
								</Link>)
							}
							else {
								return(null)
							}
						}
					
						)
					} 
					
					</li>*/}
							
						<li className="page-option">
						<FontAwesomeIcon onClick={darkMode.toggle} icon={darkMode.value?faSun:faMoon} size="2x"/>
					</li>
					<li className="page-option">{<LangSelector langs={langs} />}</li>
					</ul>
					
				</div>
			
			</div>
			</div>
		</header>
	)
});

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
