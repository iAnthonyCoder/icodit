import React, {useLayoutEffect, useRef} from "react";
import { FaTh, FaThList } from "react-icons/fa";
import HorizontalPostCard from "../components/horizontalPostCard"
import { window, document } from 'browser-monads';
import PostCard from "../components/postCard"
import PostCardSmall from "../components/postCardSmall"
import { Link } from 'gatsby'
import { IoIosArrowForward} from "react-icons/io";
import { GoSearch } from "react-icons/go";
import Slider from "react-slick";
import LogoWindow from "../components/logoWindow";
import useDarkMode from "use-dark-mode";
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import '../../static/css/postLists.css'


export default function Academy (props) {
  
  if (window.localStorage.getItem("card") === null) {
    window.localStorage.setItem('card', 'true');
  }

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    cssEase: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  const darkMode = useDarkMode(false);



  
  const inputSearch=useRef();
  const searchIcon=useRef();
  const logoContainer=useRef();
  const stickyNavbarPostlist=useRef();
  const postContainer=useRef();
  const wrapperReplacer=useRef();
  const postListTitleInitialState="Tutorials"
  const searchValInitialState = "";
  const activeSearchInitialState = false
  const modeIcon = useRef();
  const postPreviewIcon = useRef();
  const configInitialState={"lang":window.localStorage.getItem("lang"), "card":window.localStorage.getItem("card"), "darkMode":window.localStorage.getItem("darkMode")};
  
  const [ config, setConfig ] = React.useState(configInitialState)
  const [ posts, setPosts ] = React.useState(props.posts);
  const [ searchVal, setSearchVal ] = React.useState({searchResult:[], searchValue:searchValInitialState})
  const [ randomPost ] = React.useState(posts[Math.floor(Math.random()*posts.length)]);
  const [ featuredPosts, setFeaturedPosts ] = React.useState(props.posts);
  const [ postListTitle, setPostListTitle ] = React.useState(postListTitleInitialState);
  const [ activeSearch, setActiveSearch ] = React.useState(activeSearchInitialState);
  



  const handleSearchclick = async () => {
   
    await setActiveSearch(!activeSearch)
    if(activeSearch===false){
      inputSearch.current.focus();
     
    }
   
  }

  // const handleClick = (e) => {
  //   if(activeSearch===true){
  //   if ((!inputSearch.current.contains(e.target)) ) {
  //     setActiveSearch(false)
  //    return;
  //   }}
    
   
  // }

  // React.useEffect(() => {
  //   document.addEventListener("mouseup", handleClick);
  //   return() =>{
  //     document.removeEventListener("mouseup", handleClick);
  //   }
      
  //   },[activeSearch])


  const handleTagClick = async event => {
    var value = event.target.text;
    var filteredTag = await props.posts.filter((post) => {
      return post.node.frontmatter.tags.join("").toLowerCase().includes(value.slice(1).toLowerCase());
    });
    setPosts(filteredTag);
    setPostListTitle(value);
    //postContainer.current.scrollIntoView();
    window.scrollTo({
      top: postContainer.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }


  const handleSearchChange = async event => {
    const { value } = event.target;
    const searchValue = value
    var searchResult = await props.posts.filter((post)=>{
     
    return  post.node.frontmatter.title.toLowerCase().includes(value.toLowerCase()) ||
              post.node.frontmatter.author.name.toLowerCase().includes(value.toLowerCase()) ||
              post.node.frontmatter.author.id.toLowerCase().includes(value.toLowerCase()) ||
              post.node.frontmatter.category.toLowerCase().includes(value.toLowerCase())||
              post.node.frontmatter.tags.join("").toLowerCase().includes(value.toLowerCase());
    });

    setSearchVal({searchResult, searchValue});
    window.scrollTo({
      top: postContainer.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }
 
  const getFeatuedPosts = async () => {
   var fp = await  props.posts.filter((post) => {
      return post.node.frontmatter.featured==="true";
    });
    setFeaturedPosts(fp);
  }


  React.useEffect(() => {
    


    getFeatuedPosts(); 
    
   
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');


  if (!document.getElementById(cssId))
  {
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';
      link.media = 'all';
      head.appendChild(link);
  }

  if (!document.getElementById("myCss2"))
  {
      link.id   = "myCss2";
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';
      link.media = 'all';
      head.appendChild(link);
  }
  return() =>{
    
  }
    
  },[])
 
  
  const handleMenuItemClick = (name, desc) =>{
 
    window.localStorage.setItem(name, desc);
    if(name==="darkMode") {darkMode.toggle()}
    //setConfig({lang:localStorage.getItem("lang"), postPreviewMode:localStorage.getItem("postPreviewMode"), darkMode:localStorage.getItem("darkMode")});
    setConfig({...config, [name]:desc})
    
  }
  




  useLayoutEffect(() => {
    handleResize();
    var sticky="";
    const navbarSel = document.getElementById("desk-navbar");
    // const logoContainer2Sel = document.getElementById("logo-container2");
    const checkSticky = () => {
      if(stickyNavbarPostlist.current.getBoundingClientRect().top<=0){sticky=true}
      if(postContainer.current.getBoundingClientRect().top>0){sticky=false}
    }
    const enableSticky = () => {
      navbarSel.style.display="none"
      stickyNavbarPostlist.current.style.position="fixed"
      wrapperReplacer.current.style.height="60px";
      logoContainer.current.style.display="flex";
      modeIcon.current.style.display="flex";
      postPreviewIcon.current.style.display="flex";
    }
    const disableSticky = () => {
      navbarSel.style.display="flex"
      stickyNavbarPostlist.current.style.position="relative"
      wrapperReplacer.current.style.height="0px";
      modeIcon.current.style.display="none";
      postPreviewIcon.current.style.display="none";
    }
    checkSticky();
    
    function handleScroll(){
      checkSticky();
      (sticky===true)?enableSticky():disableSticky();
      }

    function handleResize(){
      var width = window.innerWidth;
      if(width<=1000){
        setConfig({...config, "card":"true"});
        postPreviewIcon.current.style.display="none";
      }
      if(width>1000){
        setConfig({...config, "card":window.localStorage.getItem("card")});
        postPreviewIcon.current.style.display="flex";
      }
    }

    

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return(
   
    <main>
      {/* <div id="desk-navbar-sep"></div> */}



      <div  className={`background  ${randomPost.node.frontmatter.category.toLowerCase()} `}>
        <div className="slider-blur"></div>
        <div  className="fullSlider"></div>

        <div className="centeredH">
        <div className="content-wrap front-post">
            <div className="randomPostContainer">
            <span>{randomPost.node.frontmatter.category.toUpperCase()}</span><br/>
              <h1>{randomPost.node.frontmatter.title}</h1>
              
              <Link to={randomPost.node.fields.slug}>Go to post <IoIosArrowForward /></Link>
            </div>

            

        </div>
        </div>

        <div className="header-slider">


        <h4 className="subline">FEATURED</h4>
            <Slider {...settings}>
            {featuredPosts.map(({ node }) =>

<PostCardSmall
key={node.id}
post={node.frontmatter}
postLink={node.fields.slug}
/>




)}
        </Slider>

        
   

            </div>

      </div>

      

      



      <div ref={postContainer} className="academy-list">
      <div ref={wrapperReplacer} id="wrapper-replacer"></div>
        <div ref={stickyNavbarPostlist} className="sticky-navbar">
        <div  className="sticky-navbar-wrapper">
        <div ref={logoContainer} className="e" id="logo-container2">
				<div>
				<div id="logo2" className="logo logo-copy">
				<Link to={"/"}><LogoWindow /></Link>
				<p className="logo-symbol-1">&#60;</p>
				<p className=" logo-letters strong">A</p><p className="logo-letters">
				CADEMY</p>
				<p className="logo-symbol-2">></p>
				
				</div></div>
			</div>
      <div className="flex-separator">
        {
          (!activeSearch)?(
        
      <ul id="navigation-items">
        <li><a href="#0" onClick={handleTagClick}>#Laravel</a></li>
        <li><a href="#0" onClick={handleTagClick}>#React</a></li>
        <li><a href="#0" onClick={handleTagClick}>#Vue</a></li>
        <li><a href="#0" onClick={handleTagClick}>#Express</a></li></ul>
        
          ):(
           <input onChange={handleSearchChange} ref={inputSearch} name="search" id="inputFilter" placeholder="search" />
           )
           }
           <div>
         <div id="searchIcon" className={`${ (activeSearch)?("clicked"):("") }`} onClick={handleSearchclick} ref={searchIcon} ><GoSearch></GoSearch></div>
         <div id="modeIcon"  ref={modeIcon} >
           <FontAwesomeIcon onClick={darkMode.toggle}  icon={darkMode.value?faSun:faMoon} size="2x"/></div>
           <div id="postPreviewIcon"  ref={postPreviewIcon} >
             {
               (config.card==="true")
               ?(
                   
                  (<FaThList onClick={()=>{handleMenuItemClick("card","false")}} />)
               ):(config.card==="false")?(
                  <FaTh onClick={()=>{handleMenuItemClick("card","true")}} />
               ):("error")
             }
          
           
           </div>
           
           
{/*            

           <DropdownButton
    btnSize="lg"
    btnStyle="emphasis"
    title="Settings"
    onSelect={(eventKey) => {
    }}
      >
    <MenuItem header>Change Language</MenuItem>
    <MenuItem eventKey={1} active={window.localStorage.getItem("lang")==="en"} onClick={()=>{handleMenuItemClick("lang","en")}}>English</MenuItem>
    <MenuItem eventKey={2} active={window.localStorage.getItem("lang")==="es"} onClick={()=>{handleMenuItemClick("lang","es")}}>Spanish</MenuItem>
    <MenuItem divider />
    <MenuItem header>Change Theme</MenuItem>
    <MenuItem eventKey={3} active={window.localStorage.getItem("darkMode")==="true"} onClick={()=>{handleMenuItemClick("darkMode","true")}}>Dark</MenuItem>
    <MenuItem eventKey={4} active={window.localStorage.getItem("darkMode")==="false"} onClick={()=>{handleMenuItemClick("darkMode","false")}}>Light</MenuItem>
    <MenuItem divider />
    <MenuItem header>Card Style</MenuItem>
    <MenuItem eventKey={5} active={window.localStorage.getItem("postPreviewMode")==="vertical"} onClick={()=>{handleMenuItemClick("postPreviewMode","vertical")}}>Vertical</MenuItem>
    <MenuItem eventKey={6} active={window.localStorage.getItem("postPreviewMode")==="horizontal"} onClick={()=>{handleMenuItemClick("postPreviewMode","horizontal")}}>Horizontal</MenuItem>
        </DropdownButton> */}



         </div>
          
          </div>
          </div>
        </div>
        <section className="posts_container">
        
          <div className="content-wrap">
        
            <div className="row">
                



               

                {
                   (searchVal.searchValue) ? (
<div className="left-big-posts-list">
                    <section className="category-section order-date">
                    
                    <div className="title ">
                   <h2 className="subline">Search Result for: {searchVal.searchValue}</h2>
                      

                    </div>


                    <div className="posts-list-container">

 

                                        {
                                        
                                        (searchVal.searchResult.length<1)?(<h2>No se encontraron coincidencias</h2>):(
                                        searchVal.searchResult.map(({ node }) =>

                                        (config.card==="true")?(
                                          <div className="postCard30" key={node.id}> 
                                              <PostCard
                                                  post={node.frontmatter}
                                                  postLink={node.fields.slug}
                                              />
                                          </div>
                                        ):(config.card==="false")?(
                                          <HorizontalPostCard post={node} key={node.id}/>
                                        ):("")




                                        ))
                                      }


</div>
                    </section>
</div>

                   ):(
<div className="left-big-posts-list">
<section className="category-section order-date">
                    
                    <div className="title ">
                      <h2 className="subline">{postListTitle}</h2>
                     

                    </div>


                    <div className="posts-list-container">

 

                                        {posts.map(({ node }) =>
                                          (config.card==="true")?(
                                            <div className="postCard30" key={node.id}> 
                                                <PostCard
                                                    post={node.frontmatter}
                                                    postLink={node.fields.slug}
                                                />
                                            </div>
                                          ):(config.card==="false")?(
                                            <HorizontalPostCard post={node} key={node.id}/>
                                          ):("")
                              
                                         
                  
                                        )}


</div>
                    </section>



                    {/* <section className="category-section order-date">
                    
                    <div className="title ">
                      <h2 className="subline">Lastest</h2>
                      <button onClick={()=>{setCards(!cards)}}>{(cards)?(<FaThList/>):(<FaTh/>)}</button>

                    </div>


                    <div className="posts-list-container">

 

                                        {posts.map(({ node }) =>

                                          (cards)?(<div className="postCard30"> <PostCard
                                          post={node.frontmatter}
                                          postLink={node.fields.slug}
                                        /></div>):(
                                        <HorizontalPostCard post={node} />)




                                        )}


</div>
                    </section> */}

</div>
                   )
                }
                    







                  
                <div className="right-small-posts-list"></div>
            </div></div>
          <li>
            <ul>





            </ul>
          </li>
        </section>
      </div>

		</main>
  )
}
