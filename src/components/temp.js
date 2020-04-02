useLayoutEffect(() => {
		
    var isTop = "";
    var isfixed = "";
    var isBottom = "";
    var browserDivFixed="";
    const checkBrowserWindowStatus = () => {

        if((sect2Pt1.current.getBoundingClientRect().top<0))
        {
            isTop=true;
        }
        if((sect2Pt1.current.getBoundingClientRect().top>=0))
        {
            isTop=false;
        }
        if(sect2Pt1.current.getBoundingClientRect().top+sect2Pt1.current.clientHeight-window.innerHeight<0){
            isBottom=true
        }
        if(sect2Pt1.current.getBoundingClientRect().top+sect2Pt1.current.clientHeight-window.innerHeight>=0){
            isBottom=false
        }
        if(isTop===false&&isBottom===false){
            browserDivFixed="static";
        }
        if(isTop===true&&isBottom===false){
            browserDivFixed="fixed";
        }
        if(isTop===true&&isBottom===true){
            browserDivFixed="is-down";
        }
        
    }

    checkBrowserWindowStatus();
    


     const handleScroll = () => {
        setBrowserDivFixed(browserDivFixed)

     var scroll = window.pageYOffset;
     var parallaxDiv2MargTop = scroll*0.6;
    var parallaxDiv3MargTop = scroll*0.2+300;
    var parallaxDiv1MargTop = sect2Pt1.current.clientHeight-parallaxDiv1.clientHeight+scroll*-0.2;
    parallaxDiv2.current.style.marginTop = `${parallaxDiv1MargTop}px`;
    parallaxDiv2.current.style.marginTop = `${parallaxDiv2MargTop}px`;
    parallaxDiv3.current.style.marginTop = `${parallaxDiv3MargTop}px`; //parallax
    
    checkBrowserWindowStatus();
    


    
    // if(isTop&&isbottom){
    // 	setBrowserDivFixed("is-down")
    // }
    // if(!isTop&&!isbottom){
    // 	setBrowserDivFixed("static")
    // }
    
    
    //  	if((sect2Pt1.current.getBoundingClientRect().top<0) && ((browserDivEl.current.getBoundingClientRect().top+browserDivEl.current.clientHeight+200)>=(sect2Pt1.current.clientHeight+sect2Pt1.current.getBoundingClientRect().top)))
    //  	 {
    //  		 console.log("yes")
    //  	 };

    // (sect2Pt1.current.getBoundingClientRect().top<0) ? setBrowserDivFixed("is-fixed") : setBrowserDivFixed("static");

     // if((sect2Pt1.current.getBoundingClientRect().top<0)&&(((browserDivResponsiveText.current.getBoundingClientRect().top-(window.innerHeight/2))<0))) { setBrowserDivFixed("is-fixed") };




     //  ((browserDivResponsiveText.current.getBoundingClientRect().top-(window.innerHeight/2))<0) ? setBrowserDivMobile(true) : setBrowserDivMobile(false);

    //  if(browserDivEl.current.classList.contains("is-fixed")){console.log("yes")};

     //  if((browserDivEl.current.getBoundingClientRect().top+browserDivEl.current.clientHeight+200)>=
     //  (sect2Pt1.current.clientHeight+sect2Pt1.current.getBoundingClientRect().top)){

     //  	setBrowserDivFixed("is-down")
     //  }




     // if(browserDivFixed=="down"){
    
     // 	if(((window.innerHeight*0.20)<browserDivEl.current.getBoundingClientRect().top)){
     // 		setBrowserDivFixed("fixed")
     // 	}
     // }


    
     };
     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
 }, [])