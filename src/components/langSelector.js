
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { window } from 'browser-monads';
import '../../static/css/footer.css';




export default function PostCard (props){


    
const langMenu = React.useRef();
const langMenuStatusInitialState = false;
const [ langs, setLangs ] = useState(props.langs)
const [ langMenuStatus, setLangMenuStatus] = useState(langMenuStatusInitialState)


// const handleClick = e => {
//    if (langMenu.current.contains(e.target)) {
    
//      return;
//    }
//    setLangMenuStatus(false);
   
//  };

const handleMouseOver = () => setLangMenuStatus(true);
  const handleMouseOut = () => setLangMenuStatus(false);

useEffect(() => {
    const node = langMenu.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
 }, [langMenu, langMenuStatus]);



 function handleLang(key) {
    window.localStorage.setItem('lang', key);
    
}






 return (

<div ref={langMenu} className="lang-d">
    <div class={`hover-menu-lang ${langMenuStatus}`}>
<div  className={`lang-menu-list `}>
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
	</div></div>
<a  className="lang-button"><FontAwesomeIcon icon={faGlobe} size="1x"/>&nbsp;
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
	
	
	<div>&#9650;</div></a>

</div>
)
}

// onClick={()=>{setLangMenuStatus(!langMenuStatus)}}