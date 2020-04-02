import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import Joyride from 'react-joyride';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Parallax } from 'react-scroll-parallax';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

export default function Section2 () {

	

		



	const initialSteps = [
		{
			target: '.step2',
			content: '¡Usa el terminal para solucionar el problema!',
		}
	];
	const [ steps ] = useState(initialSteps);
	
    const parallaxDiv2 = useRef();
    const parallaxDiv3 = useRef();
    const parallaxDiv1 = useRef();
	const sect2Pt1 = useRef();
	const browserDivEl = useRef();
	const browserDivResponsiveText = useRef();
	const sectTwoTitle = useRef();
	const consoleInputClick = useRef();

	const handleFocus = () => {
		
		consoleInputClick.current.focus();
	}

	// const [ resize, setRezise ] = useState("");
	// const [ load, setLoad ] = useState("");
	const [ browserDivFixed, setBrowserDivFixed ] = useState("static")
	const [ browserDivMobile, setBrowserDivMobile ] = useState(false)
	const [ serverError, setServerError ] = useState({});
	// const i=0;

 
	
	

     useLayoutEffect(() => {

		var isTop = "";
    var isBottom = "";
    var browserDivFixeda="";
    const checkBrowserWindowStatus = () => {

        if((sect2Pt1.current.getBoundingClientRect().top<-50))
        {
            isTop=true;
        }
        if((sect2Pt1.current.getBoundingClientRect().top>=-50))
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
            browserDivFixeda="static";
        }
        if(isTop===true&&isBottom===false){
            browserDivFixeda="is-fixed";
        }
        if(isTop===true&&isBottom===true){
            browserDivFixeda="is-down";
        }
        
    }

    checkBrowserWindowStatus();






         const handleScroll = () => {

			checkBrowserWindowStatus();
			setBrowserDivFixed(browserDivFixeda);
	 	var scroll = window.pageYOffset;
	 	var parallaxDiv2MargTop = scroll*0.6;
        var parallaxDiv3MargTop = scroll*0.2+300;
        var parallaxDiv1MargTop = sect2Pt1.current.clientHeight-parallaxDiv1.clientHeight+scroll*-0.2;
        parallaxDiv2.current.style.marginTop = `${parallaxDiv1MargTop}px`;
        parallaxDiv2.current.style.marginTop = `${parallaxDiv2MargTop}px`;
		parallaxDiv3.current.style.marginTop = `${parallaxDiv3MargTop}px`; //parallax
		((browserDivResponsiveText.current.getBoundingClientRect().top-(window.innerHeight/2))<0) ? setBrowserDivMobile(true) : setBrowserDivMobile(false);

		
		//  	if((sect2Pt1.current.getBoundingClientRect().top<0) && ((browserDivEl.current.getBoundingClientRect().top+browserDivEl.current.clientHeight+200)>=(sect2Pt1.current.clientHeight+sect2Pt1.current.getBoundingClientRect().top)))
		//  	 {
		//  		 console.log("yes")
		//  	 };

		// (sect2Pt1.current.getBoundingClientRect().top<0) ? setBrowserDivFixed("is-fixed") : setBrowserDivFixed("static");

	 	// if((sect2Pt1.current.getBoundingClientRect().top<0)&&(((browserDivResponsiveText.current.getBoundingClientRect().top-(window.innerHeight/2))<0))) { setBrowserDivFixed("is-fixed") };




	 	//  ((browserDivResponsiveText.current.getBoundingClientRect().top-(window.innerHeight/2))<0) ? setBrowserDivMobile(true) : setBrowserDivMobile(false);
	
		//  if(browserDivEl.current.classList.contains("is-fixed")){console.log("yes")};

	 	//   if((browserDivEl.current.getBoundingClientRect().top+browserDivEl.current.clientHeight+200)>=
	 	//   (sect2Pt1.current.clientHeight+sect2Pt1.current.getBoundingClientRect().top)){
	
	 	//   	setBrowserDivFixed("is-down")
	 	//   }




	 	//  if(browserDivFixed=="down"){
	
	 	//  	if(((window.innerHeight*0.20)<browserDivEl.current.getBoundingClientRect().top)){
	 	//  		setBrowserDivFixed("fixed")
	 	//  	}
	 	//  }


		
         };
         window.addEventListener('scroll', handleScroll)
         return () => window.removeEventListener('scroll', handleScroll)
	 }, [])
	
    
	

	


	 useEffect(() => {
	 	var number = 2 + Math.floor(Math.random() * 10);
	 	var i = 0;
		var allnumbers=[];
		for(i=1; i<=15; i++){
			allnumbers = [...allnumbers, ""];
		}
	 	for(i=0; i<=number; i++){
			 var number2 = 1 + Math.floor(Math.random() * 15);
			 allnumbers[number2]="error";
		 }
	 	setServerError(allnumbers)

	 }, [])

	
	



    
	
    return (
		<ParallaxProvider>
        <section className="inf" id="sect2"><div className="overflowWrap">

<Joyride steps={steps} 
                    disableOverlay={false}
                    disableScrolling={true}
                    offset={100}
					styles={{
						options: {
						  primaryColor: '#c98de5',
						}
					  }}
					/>
			<div ref={sect2Pt1} id="sect2-pt1">


		
		
		
						<div id="small-laptop-container" ref={parallaxDiv1} className="loading parallax-div1">
						<div id="par-blur"></div>
							<div id="small-laptop">
								<div id="small-laptop-screen">
									<div id="small-laptop-camera">
										<div id="small-cam">
											
										</div>
									</div>
									<div id="small-laptop-screen-b">
										<div id="small-laptop-window" >
										</div>
									</div>
								</div>
								<div id="small-laptop-body">
									<div id="small-padd">
									</div>
								</div>
							</div>
						</div>
				

					
						<div id="small-phone-container" ref={parallaxDiv2} className="loading parallax-div2"><div id="par-blur"></div>
							<div id="small-phone">
								<div id="small-phone-screen">
									<div id="small-phone-camera">
										<div id="small-phone-cam">
										</div>
									</div>
									<div id="small-phone-screen-b">
										<div id="small-phone-window">
										</div>
									</div>
									<div id="small-phone-button-a">
										<div id="small-phone-button">
										</div>
									</div>
								</div>
							</div>
						</div>
				

				
						<div id="small-tablet-container" ref={parallaxDiv3} className="loading parallax-div3"><div id="par-blur"></div>
							<div id="small-tablet">
								<div id="small-tablet-screen">
									<div id="small-tablet-camera">
										<div id="small-tablet-cam">
										</div>
									</div>
									<div id="small-tablet-screen-b">
										<div id="small-tablet-window">
										</div>
									</div>
									<div id="small-tablet-button-a">
										<div id="small-tablet-button">
										</div>
									</div>
								</div>
							</div>
						</div>
			<div className="content-wrap" id="sect2-wrap">

			<div id="sect2-title"><h1 id="sect-title">¡Nuestro conocimiento podría ser útil para ti!</h1></div>
			<div id="sect2-body">
				<div id="sect2-desc"><h3 className="dynamic in-view slide-left">¿Necesitas una página web?</h3><br/>

				<p className="contentTextWhite dynamic in-view slide-left">Las páginas web se han convertido en una estrategia importante para hacer brillar tu negocio o algun producto que desees lanzar al mercado. El equipo Codineffable se puede encargar de crear productos atractivos y únicos, con los que podra ofrecer sus servicios en internet y de esta manera estara al alcance de todos.<br/><br/>
					Muchas empresas han crecido exponencialmente gracias a las paginas web debido a que son millones de personas que pueden tener acceso a éstas. Si lo miramos desde un ángulo de rentabilidad, un sitio web puede considerarse un anuncio publicitario que está al alcance de todos, las 24 horas del día, los 7 días de la semana.<br/><br/>
					Nuestro equipo puede ofrecerle los siguientes productos:</p><br/><br/>
					<li>
					<ul className="servicesList">
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Páginas Web Corporativas</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Páginas web de servicios</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Portafolios digitales</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Páginas web páginas de contenido</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Landing pages</p></li>
					</ul>
					</li>


				
				<br/><br/><br/><br/><div ref={browserDivResponsiveText} id="responsive-text"><h3 className="dynamic slide-left in-view">Diseños web adaptables</h3><br/>

					<p className="contentTextWhite dynamic in-view slide-left">Los teléfonos móviles se han convertido en una herramienta de gran utilidad, es por ello que te ofrecemos diseños web totalmente responsivos, para que los usuarios puedan acceder a su pagina web desde distintos tipos de dispositivos sin necesidad de realizar esfuerzo alguno para visualizar el contenido del portal, ampliando de esta forma el alcance de sus servicios.
<br/><br/></p>
						<ul className="servicesList">
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Teléfonos inteligentes</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Tablets</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Computadores</p></li>

					</ul>


				<br/><br/><br/><br/>
				<h3 className="dynamic in-view slide-left">Tu imagen es nuestra prioridad</h3><br/>

					<p className="contentTextWhite dynamic  in-view slide-left">Le ofrecemos sitios web totalmente profesionales hechos a medida, con interfaces de usuario estupendas que esten bajo las ultimas tendencias, optimizados y estandarizados para asegurar la comodidad de sus clientes. <br/><br/>

						Nuestro equipo esta especializado también en diseño gráfico, ofreciendole creaciones frescas, atractivas, equilibradas, agradables a la vista y aptas para todo tipo de usuario; también podemos trabajar a la medida de sus requerimientos.<br/><br/>
						Nuestros diseños estan orientados a:<br/><br/>	</p>


					<ul className="servicesList">
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Diseño de gráficos</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Diseño de logos</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Diseño coorporativo</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Diseño de animaciones</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Ilustraciones de textos</p></li>
						<li className="servicesItems dynamic in-view slide-left"><p className="contentTextWhite dynamic in-view slide-left"><FontAwesomeIcon icon={faCheckSquare} size="1x"/>&nbsp;Retoque de imágenes y fotografías</p></li>
					</ul>
						

			
				<br/><br/><br/><br/>







				</div>
				<h3 className="dynamic in-view slide-left">La comodidad de sus clientes es primordial</h3><br/>

					<p className="contentTextWhite dynamic in-view slide-left">Le ofrecemos sitios web totalmente profesionales hechos a medida, con diseños estupendos que esten bajo las últimas tendencias, optimizados y estandarizados para la comodidad de sus clientes. <br/><br/>
						Nosotros también nos enfocamos en la navegación de su sitio web, para que sea fácil de usar, sea muy entendible y pueda captar la atención de sus clientes dejandole una agradable experiencia, ya que su sitio web, es como una oficina virtual donde los usuarios tendran una primera impresión sobre sus servicios.

						

				</p>
				<br/><br/><br/><br/><br/>
				

			</div><div id="sect2-separator"></div>
				<div id="browser-container" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
					<div ref={browserDivEl} id="browser-window" 
						className={`
							device-change ${ (browserDivMobile) ? "mobile" :"" } 

							${browserDivFixed}`}
					>

						<div id="browser-head" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
							<div id="browser-buttons-sect" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
								<div id="browser-button1"></div>
								<div id="browser-button2"></div>
								<div id="browser-button3"></div>
							</div>
							<div id="browser-head-right">
								<div id="browser-dir-bar"></div>
							</div>
						</div>
						<div id="browser-body" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
							<div id="browser-navbar">
								<div id="browser-wrap-head" className={`device-change browser-wrap ${ (browserDivMobile) ? "mobile" :"" }`}>
									<div id="browser-logo"></div>
									<div id="browser-navigation" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }` }><span></span>
										<div className={`browser-nav-item menu-button device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
										<div className={`browser-nav-item browser-nav-item-dis device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
										<div className={`browser-nav-item menu-button device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
										<div className={`browser-nav-item browser-nav-item-dis device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
										<div className={`browser-nav-item menu-button device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
									</div>
								</div>
							</div>
							<div id="browser-content">
							<div id="browser-wrap-content" className={`device-change browser-wrap ${ (browserDivMobile) ? "mobile" :"" }`}>
							<div id="browser-content-top">
								
							</div>
							<div id="browser-content-bottom" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
								<div id="browser-content-left" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
									<div className="browser-text"></div>
								</div>
								<div id="browser-content-right" className={`device-change ${ (browserDivMobile) ? "mobile" :"" }`}></div>
								
							</div>
							</div>
							</div>
						</div>
					</div>
				</div>

</div></div>
</div>
</div>

<div id="sect2-pt2" className="white-back">
	<div className="content-wrap" id="sect2-wrap">
			<div ref={ sectTwoTitle } id="sect2-title"><h1 id="sect-title" className="dynamic">¿O necesitas optimizar los procesos de tu negocio?</h1></div>
			<div id="sect2-pt2-body">
		<div id="codin-datacenter">
			<div id="server-error-title"><h4>Oh! Hay algo  <color4 className="">mal</color4> con el   <color3 className="">centro de datos de </color3> Codineffable</h4><br/><center><h2>¡Ayúdanos!  <color5>Usa el terminal</color5></h2></center></div>
			<div id="back-left">
				<div id="servers-container">
					<div className="servers-stack" id="stack1">
					
						<div className={`server-unity ${ serverError[1] }`} id="server-unity01">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[2] }`} id="server-unity02">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[3] }`} id="server-unity03">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
				
						<div className={`server-unity ${ serverError[4] }`} id="server-unity04">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[5] }`} id="server-unity05">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
					</div>
					<div className="servers-stack" id="stack2">
						<div className={`server-unity ${ serverError[6] }`} id="server-unity06">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[7] }`} id="server-unity07">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[8] }`} id="server-unity08">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[9] }`} id="server-unity09">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[10] }`} id="server-unity10">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
					</div>
					<div className="servers-stack" id="stack3">
						<div className={`server-unity ${ serverError[11] }`} id="server-unity11">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[12] }`} id="server-unity12">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[13] }`} id="server-unity13">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[14] }`} id="server-unity14">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
						<div className={`server-unity ${ serverError[15] }`} id="server-unity15">
							<div className="server-unity-left">
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
								<div className="server-unity-left-line"></div>
							</div>
							<div className="server-unity-center"></div>
							<div className="server-unity-right">
								<div className="led1"></div>
								<div className="led2"></div>
								<div className="led3"></div>
							</div>
						</div>
					</div>
				</div>

				<div id="laptop-container">
				<div id="termsa-tips" className="black-back">
					{/* <h5 id="term-help"></h5> */}
					</div>
				<div id="laptop">
					<div id="laptop-screen">
						<div id="laptop-camera"><div id="cam"></div></div>
						<div id="laptop-screen-a">
							<div id="laptop-window" className="step2">
								<div id="laptop-window-up">
									<div id="console-window-control">
										
											<div id="console-button1"></div>
											<div id="console-button2"></div>
											<div id="console-button3"></div>
									</div>
								</div>
								<div  onClick={ handleFocus } id="laptop-window-down">
								<p className="console-content" id="servers-status"># &nbsp; datacenter status: error<br></br># &nbsp; type --help for more information</p>
								<p id="console-messages" className="console-error-msg"></p>
								<p id="console-input"  className="console-content">#&nbsp;&nbsp;<input ref={consoleInputClick} type="text" id="console-input-text"/></p></div>
							</div>
						</div>
						</div>
					<div id="laptop-body"><div id="padd"></div></div>
					</div>
				</div>
				</div>
			</div>
			<div id="sect2-pt2-desc"><h2>¡Somos expertos en el area del tratamiento de la información!</h2><br/><br/>


				<p className="contentTextBlack">En Codineffable también nos especializamos en el diseño y programación de sistemas de información, para automatizar los procesos de tu empresa, con lo que podrás mejorar el rendimiento, ingresos de tu negocio y optimizar los servicios que le ofreces a tus clientes.<br/><br/>Nos basamos directamente en las necesidades y características de su negocio, somos profesionales en el manejo de la información dedicados a la optimización de todos sus procesos. Nuestros servicios estan orientados al desarrollo de sistemas web basados en plataformas web Cliente - Servidor, obteniendo de esta manera todos los beneficios que esto conlleva.<br/><br/>Si los procesos de tu empresa son realizados manualmente ¡llego la hora de automatizarlos!<br/><br/>Los pasos a seguir para ello son los siguientes:</p><br/><br/>

				<ul className="servicesListB">
						<li className="servicesItems"><span className="fa-file-text fa">&nbsp;</span>Analizaremos las necesidades de su organización</li>
						<li className="servicesItems"><span className="fa-sitemap fa">&nbsp;</span>Planificaremos segun sus necesidades y procederemos a diseñar la arquitectura logica.</li>
						<li className="servicesItems"><span className="fa-code fa">&nbsp;</span>Desarrollaremos el sistema de información.</li>
						<li className="servicesItems"><span className="fa-bug fa">&nbsp;</span>Probaremos cada caracteristica del sistema de información.</li>
						<li className="servicesItems"><span className="fa-handshake-o fa">&nbsp;</span>Finalmente entregaremos, y de ser necesario, le haremos mantenimiento a futuro.</li>
					</ul>


			</div>
			</div>
</div></div>


</section>
</ParallaxProvider>);
}