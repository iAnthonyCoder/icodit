/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { window} from 'browser-monads';
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Helmet from 'react-helmet';
import SEO from "../components/SEO"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
// import browserLang from 'browser-lang';
import "../../static/css/reset.css"
import "../../static/css/styles-fonts.css"
import "../../static/css/styles1024.css"
import "../../static/css/general.css"
import { navigate } from "gatsby";
import { globalHistory } from "@reach/router"
import CookieConsent, { Cookies } from "react-cookie-consent";


const lang = window.navigator.language.substr(0,2) || window.navigator.userLanguage.substr(0,2); 



function Layout(props) {
  
  const { children, location, i18nMessages, customSEO, lang } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          headline
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  



 
  // const url = window.location.pathname;
  const url = globalHistory.location.pathname;


  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}`.replace(`/${defaultLangKey}`,`/`);

  // const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, `/`) }));
  
  if(window.localStorage.getItem('lang')===null){
    langsMenu.map(uri => {
      if(uri.langKey===lang){
        window.localStorage.setItem('lang', lang);
        navigate(uri.link);
        
      }
      return null;
    });
  }



    

  return (
   
      <IntlProvider
            locale={langKey}
            messages={i18nMessages}
      >
    
        {/* <Helmet
                title="ICodit"
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
        /> */}
        {!customSEO && <SEO lang={lang} />}
        <Header siteTitle={data.site.siteMetadata.title} lang={langKey} langs={langsMenu}/>
        
            <main>{children}</main>
                
          <Footer langs={langsMenu} messages={i18nMessages}></Footer>
          <CookieConsent
          location="top"
          buttonText={(langKey=="en")?("Accept"):("Acepto")}
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
            {(langKey=="en")?("This website uses cookies to enhance the user experience. "):("Este sitio web usa cookies para optimizar la experiencia de usuario. ")}
            {(langKey=="en")?(<Link style={{color:"#1a83de"}} to={"/es/legal/cookies"}>Read More</Link>):(<Link style={{color:"#1a83de"}} to={"/legal/cookies"}>Leer mas</Link>)}
           
          </CookieConsent>

      </IntlProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
