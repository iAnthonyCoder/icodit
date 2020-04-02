import React, { useRef } from "react";
import Layout from "../layouts";
import '../../static/css/blog-post.css';
import { graphql, Link } from 'gatsby'
import { IoIosArrowForward,  IoIosArrowBack} from "react-icons/io";
// import { SimilarArticlesFactory } from './SimilarArticlesFactory'
import AuthorDetailsSmall from './../components/authorDetailsSmall'
import PostCard from './../components/postCard'
import UserCard from '../components/userCard'
import SEO from '../components/seo'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share'; 
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import LogoWindow from "../components/logoWindow";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
// import { DropdownButton, MenuItem } from '../components/dropdown';
import { window, document, } from 'browser-monads';

export default ({ data, location, pageContext }) => {

 
  let disqusConfig = {
    url: `${location.href}`,
    identifier: data.currentPost.id,
    title: data.currentPost.frontmatter.title,
  }
 



/* eslint-disable */
  const post = data.currentPost;
  const metadata = data.metadata;
  const langKey = pageContext.langKey;
  // const articles = data.posts;
  const tags= post.frontmatter.tags;
  // const category= post.frontmatter.category;
  // const currentArticleSlug = pageContext.slug;


  // const similarArticles = new SimilarArticlesFactory(
  //   articles, currentArticleSlug
  // )
  // .setMaxArticles(4)
  // .setCategory(category)
  // .setTags(tags)
  // .getArticles()

  const fullUrl = metadata.siteMetadata.url+post.fields.slug;
  var prev;
  var next;
  var prevLink;
  var nextLink;
  const stickyNavbarPostlist = useRef();
  const logoContainer = useRef();
  const contentDiv = useRef();
  const wrapperReplacer = useRef();
  if(langKey==="en"){
    next = data.nextEn?(data.nextEn):("")
    prev = data.prevEn?(data.prevEn):("")
    prevLink = pageContext.prevEn === "no post"?(false):(pageContext.prevEn)
    nextLink = pageContext.nextEn === "no post"?(false):(pageContext.nextEn)
  }
  if(langKey==="es"){
    next = data.nextEs?(data.nextEs):("")
    prev = data.prevEs?(data.prevEs):("")
    prevLink = pageContext.prevEs === "no post"?(false):(pageContext.prevEs)
    nextLink = pageContext.nextEs === "no post"?(false):(pageContext.nextEs)
  }
  
  const backgroundStyle= {
    backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`
  }
  const stickerInitialState = "";
  const [ sticker, setSticker ] = React.useState(stickerInitialState)
  
  
  React.useLayoutEffect(() => {

    var sticky=""
    setSticker("true");

    const mainNav = document.getElementById("desk-navbar");
    const stickyNav = stickyNavbarPostlist;
    const body = document.getElementsByTagName("body")[0];
   
    
    const checkSticky = () => {
      if(stickyNav.current.getBoundingClientRect().top < 60){sticky = true};
      if(contentDiv.current.getBoundingClientRect().top >= 60){sticky = false};
       if(contentDiv.current.getBoundingClientRect().top < 120){
        if(body.classList.contains("dark-mode")){stickyNav.current.style.background="rgb(15,15,15)"}
        else{stickyNav.current.style.background="rgb(255,255,255)"}
      
       }else{
        stickyNav.current.style.background="rgba(0,0,0,0)"
       }
      (sticky==true)?enableSticky():disableSticky();
    }
    const enableSticky = () => {
      setSticker(true);
      mainNav.style.position="absolute"
      stickyNav.current.style.position="fixed"
      stickyNav.current.style.height="60px"
      document.getElementById("post-author-dynamic").style.display="none";
      document.getElementById("logo-container2").style.display="flex";
      wrapperReplacer.current.style.height="60px";
      
    }
    const disableSticky = () => {
      setSticker(false);
      mainNav.style.position="fixed"
      stickyNav.current.style.position="relative"
      stickyNav.current.style.height="initial"
      document.getElementById("logo-container2").style.display="none";
      document.getElementById("post-author-dynamic").style.display="flex";
      wrapperReplacer.current.style.height="0px";
    }
    
    checkSticky();

    const handleScroll = () => {
      checkSticky();
    }


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticker])








  
  return (
    <Layout customSEO>
      <SEO
        title={`${data.currentPost.frontmatter.title} | ${metadata.siteMetadata.titleAlt}`}
        desc={data.currentPost.frontmatter.description}
        banner={post.frontmatter.featuredImage.childImageSharp.fluid.src}
        pathname={location.pathname}
        node={data.currentPost.frontmatter}
        lang={langKey}
        author={post.frontmatter.author.name}
        article
      />
      <main className="post-content-c">
        {/* <div id="desk-navbar-sep"></div> */}
        <section id="post-title-background" className="background" style={ backgroundStyle }>
          <div className="slider-blur"/>
            <div className="vert-separator"></div>
            <div id="wrapper-replacer2"></div>
            <div className="wrapper"><h1>{post.frontmatter.title}</h1></div>
            <div ref={wrapperReplacer} id="wrapper-replacer"></div>
            <div ref={stickyNavbarPostlist} className={`sticky-navbar ${(sticker)?"sticked":""} `}>
              <div  className="sticky-navbar-wrapper">
                <AuthorDetailsSmall 
                  image={post.frontmatter.author.photo.childImageSharp.fluid} 
                  name={post.frontmatter.author.name}
                  date={post.frontmatter.date}
                  timeread={post.frontmatter.timeread}
                />

                 <div ref={logoContainer} className="e" id="logo-container2">
			          	<div>
			          	<div id="logo2" className="logo logo-copy">
			          	<Link to={"/"}><LogoWindow /></Link>
			          	<p className="logo-symbol-1">&#60;</p>
			          	<h2 className="postType">{(post.frontmatter.type==="tutorial")?("ACADEMY"):(post.frontmatter.type==="blog")?("BLOG"):("")}</h2><h2 className="postTitle" >|</h2><h2 className="postTitle">{post.frontmatter.title}</h2>
			          	<p className="logo-symbol-2">></p>

			          	</div></div>
			          </div> 
                 <div>
                 <div className="flex-separator">
                   <div className="post-social-container">
                    <div className="post-social">
	              	     <FacebookShareButton url={fullUrl}>
	              	     	<span className="icon">
	              	     	<FaFacebook/>
	              	     	</span>
	              	     	{/* <span className="text">Facebook</span> */}
	              	     </FacebookShareButton>
	              	     <TwitterShareButton url={fullUrl} title={post.frontmatter.title} via={metadata.siteMetadata.twitterHandle.split('@').join('')} hashtags={tags} >
	              	     	<span className="icon">
                          <FaTwitter/>
	              	     	</span>
	              	     	{/* <span className="text">Twitter</span> */}
	              	     </TwitterShareButton>
	              	     <LinkedinShareButton url={fullUrl} title={post.frontmatter.title} >
	              	     	<span className="icon">
                        <FaLinkedin/>
	              	     	</span>
	              	     	{/* <span className="text">LinkedIn</span> */}
	              	     </LinkedinShareButton>
	                  </div>
                  </div>
                       {/* <div> 
                      <input name="search" id="inputFilter" placeholder="Filter" />
                        <DropdownButton
                           btnSize="l"
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
                      </DropdownButton>
                       </div> */}
                    </div>
                 </div>
              </div>
            </div>
        </section>
      <div ref={contentDiv} className="academy-content">
        <section className="post_container">
          <div className="content-wrap">
            <div className="row">
                <div className="left-big-posts-list">

    
           

      

                {/* <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />   */}

      <div className="blog-post-text backgrounded">

      {/* <div className="blog-post-header">
        <div className="blog-post-category">
          <span className="category">{post.frontmatter.category}</span>
        </div> 
      </div> */}

        {/* <h1 className="blog-post-title">{post.frontmatter.title}</h1>
 */}

        <div className="header-post no-padding ">
        </div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="post-tags">
           {
             post.frontmatter.tags.map((tag, index)=>{
                 return(<span key={index} className="tag">{tag}</span>)
             })
           }
          </div>
          <div className="nearestArticles">
              {(prevLink)?(
                  <div className="prevArticle">
                    <div><p><span><IoIosArrowBack /></span>PREV POST</p></div>
                    <PostCard 
                      post={prev.frontmatter}
                      postLink={prevLink}
                    />
                
                  </div>

                ):(<div className="prevArticle"></div>)}
                {(nextLink)?(
                <div className="nextArticle">
                <div><p>NEXT POST<span><IoIosArrowForward /></span></p></div>
                <PostCard 
                      post={next.frontmatter}
                      postLink={nextLink}
                    />
                </div>
                ):(<div className="nextArticle"/>)}
              </div>
      </div>

      <UserCard post={post} />
      {/* {
        (prev)?(<Link to={prev.fields.slug}>POST ANTERIOR</Link>):(<></>)
        
      }
      {
        (next)?(<Link to={next.fields.slug}>POST siguiente</Link>):(<></>)
      } */}
      <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={""} />
      
      <Disqus config={disqusConfig} />
    </>
    </div>
    <div className="right-small-posts-list"></div>

    </div></div></section></div></main>
    </Layout>
  )}





















export const query = graphql`
  query BlogPostQuery($slug: String!, $prevEn: String!,$prevEs: String!,$nextEn: String!,$nextEs: String!) {
    metadata: site {
      siteMetadata {
        url
        titleAlt
        twitterHandle
      }
    }
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        tags
        category
        timeread
        type
        date(formatString: "DD MMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          username
          bio
          id
          title
          twitter
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      fields {
        slug,
        langKey
      }
    }
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            category
            date(formatString: "DD MMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              bio
              id
              twitter
              photo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug,
            langKey
          }
        }
      }
    }
    nextEn: markdownRemark(fields: { slug: { eq: $nextEn } }) {
      frontmatter {
        title
        tags
        category
        type
        timeread
        date(formatString: "DD MMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          username
          bio
          id
          title
          twitter
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    nextEs: markdownRemark(fields: { slug: { eq: $nextEs } }) {
      frontmatter {
        title
        tags
        category
        timeread
        date(formatString: "DD MMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          username
          bio
          id
          title
          twitter
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    prevEn: markdownRemark(fields: { slug: { eq: $prevEn } }) {
      frontmatter {
        title
        tags
        category
        timeread
        date(formatString: "DD MMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          username
          bio
          id
          title
          twitter
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    prevEs: markdownRemark(fields: { slug: { eq: $prevEs } }) {
      frontmatter {
        title
        tags
        category
        timeread
        date(formatString: "DD MMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          username
          bio
          id
          title
          twitter
          photo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

  // var relatedPosts = [];

  

  // async function test(){
  //   await allPosts.map( singlePost =>{
      
  //     if(singlePost.node.fields.langKey==langKey){
       
  //       singlePost.node.frontmatter.tags.map(tagA=>{
          
  //         postTags.map(tagB=>{
  //           if(tagA===tagB){
  //             relatedPosts = [...relatedPosts, singlePost.node];
  //           }
  //         })}
  //       )
  //     }
  //   })
  // }


  // test();
  // console.log(relatedPosts);