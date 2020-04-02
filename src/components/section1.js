import React, { useState, useRef, useEffect } from 'react';
import Particles from "react-particles-js";
import Joyride from 'react-joyride';




const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};



export default function Section1 (props) {

	const messagesInitialState=false;
	const [ messages, setMessages ] = useState(messagesInitialState);
	
	useEffect(() => {
		if(props){
			setMessages(props.props.i18nMessages)
		}
	}, [])

	
	
	const initialSteps = [
		{
			target: '.step1',
			content: '¡Presiona el botón de encendido!',
		},
		{
			target: '.step2',
			content: '¡Presiona el botón de encendido!',
		}
	];

	const [ steps ] = useState(initialSteps);

	const [ screenOn, setScreenOn ] = useState(false)
	const button = useRef();
	const screen = useRef();
	const screenDiv1 = useRef();
	const screenDiv2 = useRef();
	const screenDiv3 = useRef();
	const screenDiv4 = useRef();
	const screenDiv5 = useRef();
	const screenDiv6 = useRef();
	const textLine1 = useRef();
	const textLine2 = useRef();
	const textLine3 = useRef();
	const textLine4 = useRef();

    const powerScreen = () => {
        setScreenOn(!screenOn);
	}
	



    useEffect(() => {
        if(screenOn){
			button.current.classList.add("on");
			screen.current.classList.add("on");
			setTimeout(() => {
				screenDiv1.current.classList.add("active");
				screenDiv2.current.classList.add("active");
			}, 1500);
			setTimeout(() => {
				screenDiv3.current.classList.add("active");
			}, 2000);
			setTimeout(() => {
				screenDiv4.current.classList.add("active");
			}, 2500);
			setTimeout(() => {
				screenDiv5.current.classList.add("active");
			}, 2800);
			setTimeout(() => {
				screenDiv6.current.classList.add("active");
			}, 3100);
			setTimeout(() => {
				textLine1.current.classList.add("active");
			}, 3200);
			setTimeout(() => {
				textLine2.current.classList.add("active");
			}, 3400);
			setTimeout(() => {
				textLine3.current.classList.add("active");
			}, 3600);
			setTimeout(() => {
				textLine4.current.classList.add("active");
			}, 3800);
        }
        return () => {   
        };
    }, [screenOn])


	
    return (
    
			<section className="inf sect1-class" id="sect1">
                <div className="overflowWrap">
				    <div id="particles-js">
					<Particles className="particles"  canvasClassName="particles" params={particlesOptions}></Particles>
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
				        <div className="content-wrap" id="content-sect1">
					        <div id="title-container">
                                {
									(messages)?(<h1 id="page-title">{messages.sect1.title}</h1>):("")
								}
                                <br/>
                                {/* <h2>{props.i18nMessages.sect1.subtitle}</h2> */}
                                <div id="curve"></div>
					        </div>
					        <div id="computer-sect">
						        <div id="pc">
						            <div id="pc-left">
						                <div id="tv">
							                <div className="screen" ref={screen} ></div>
							                    <div className="screen-on">
								<div id="screen-wrap1">
									<div id="wr1-el1" ref={screenDiv1} className="animation-element slide-left"></div>
									<div id="wr1-el2" ref={screenDiv2} className="animation-element slide-right"></div>
								</div>
								<div id="screen-wrap2" ref={screenDiv3} className="animation-element zoomInDown"></div>
								<div id="screen-wrap3">
									<div id="wr3-el1" ref={screenDiv4} className="animation-element slide-up"></div>
									<div id="wr3-el2" ref={screenDiv5} className="animation-element slide-up"></div>
									<div id="wr3-el3" ref={screenDiv6} className="animation-element slide-up"></div>
								</div>
							</div>
							<div id="buttons">
								<div id="button" className="step1" onClick={powerScreen} ref={button}></div>
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

						<h2 ref={textLine1} className="t1 animation-element bounceInRight">Involúcrate <p9 className=" color2 shakespeare">con</p9> nuestro equipo</h2><br/>
						<h2 ref={textLine2} className="t2 animation-element bounceInRight">Siente lo que  <p9 className="color2 shakespeare">nuestro</p9> código dice</h2><br/>
						<h2 ref={textLine3} className="t3 animation-element bounceInRight"><p9 className="color2 shakespeare">Descubre</p9> lo que podemos hacer por ti</h2><br/>
						<h2 ref={textLine4} className="t4 animation-element bounceInRight">Permítenos ofrecerte  <p9 className="color2 shakespeare">una experiencia </p9> inefable</h2><br/>

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
			
			</div></div>
			</section>
    
    );
}