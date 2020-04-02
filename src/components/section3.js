import React, { useRef, useLayoutEffect } from 'react'


export default function Section3 () {
    
    // const [ parallax, setParallax ] = (false);
    const parallaxBackground = useRef();

    useLayoutEffect(() => {
        const el = parallaxBackground.current;
        const handleScroll = () =>{
        if(window.innerWidth>1023){
            var elHeight = el.getBoundingClientRect();
            var elTop = ((window.scrollY/10)-el.getBoundingClientRect().top+window.innerHeight)*0.3*-1-(el.clientHeight/9)+"px";

            if(elHeight.top<window.innerHeight && elHeight.top+elHeight.height>0){
                parallaxBackground.current.style.backgroundPositionY=elTop;
            }
            }
            else{
                parallaxBackground.current.style.backgroundPositionY="0px";
            }
            
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return(
        <section className="inf" id="sect3">
			
				<div ref={parallaxBackground} id="parallax1" className="loading parallax dynamic preload"><div className="black-blur">
					<div className="content-wrap dynamic" id="sect3-wrap">
						<div id="sect3-title"><h1 id="sect-title">Nosotros somos tu mejor opción, nuestro trabajo es simplemente inefable!</h1>
						</div>
						<div id="sect3-desc"><h2>Nuestro grupo busca la satisfacción del cliente con cada línea de código escrita, somos profesionales en el area de Tecnología de Información especializados en el diseño gráfico, diseño web y desarrollo de soluciones informáticas, nuestra misión coorporativa es brindarle al cliente una completa satisfacción con nuestros servicios permitiendole lograr sus objetivos, lograr que sus inversiones den frutos, ofreciendo soluciones digitales fiables, mediante el uso de la programación. Trabajamos en conjunto con nuestros clientes para asegurar el éxito del proyecto.<br/><br/>Nuestros productos son desarrollados totalmente a medida del cliente, son originales, innovadores, nos esforzamos por cumplir sus espectativas, somos una organización dedicada a nuestro trabajo.</h2>
						</div>
					</div>
				</div>
				</div>
				</section>
    );

};