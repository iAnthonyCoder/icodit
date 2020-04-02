import React, { useState, useRef, useEffect } from 'react'
import Slider from "react-slick";
import {useStaticQuery,graphql} from 'gatsby';
import { DiMysql, DiPhp, DiCss3, DiHtml5, DiJqueryLogo, DiJavascript } from "react-icons/di";
import './slick/slick-theme.min.css';
import './slick/slick.min.css';


export default function Section5(){

	const slider1 = useRef();
	const slider2 = useRef();
		const [state,setState] = useState({
		  nav1: null,
		  nav2: null
		});
	  
	useEffect(() => {
		var slider1Cur = slider1.current;
		var slider2Cur = slider2.current;
		setState({
			nav1: slider1Cur,
			nav2: slider2Cur
		  });
		return () => {
			
		};
	}, [])





	const TeamImgUrl = useStaticQuery(graphql`{
		allFile(filter: { extension: { in: ["jpg"] },name: { in: ["samim", "sifcomp", "ma"] } }) {edges {node {publicURL,name}}},
	  }
	`)
  
	const [ images, setImages ] = useState({'teamDesk':{
		'url':''
	}});
  
	const mapImgToState = async () => {
		  var tempImages = {};
		  await TeamImgUrl.allFile.edges.map(image => {
			  if(image.node.name==="samim"){tempImages={...tempImages, samim:image.node.publicURL}}
			  if(image.node.name==="sifcomp"){tempImages={...tempImages, sifcomp:image.node.publicURL}}
			  if(image.node.name==="ma"){tempImages={...tempImages, ma:image.node.publicURL}}
			  return null;
		  })
		
		  setImages(tempImages);
	}
	useEffect(() => {
	  mapImgToState(images)
	return () => {
	};
  }, [TeamImgUrl])




	  



    return(
		
		

		
			
			
		


<section className="inf loading bg" id="sect4"><div>

<div id="sect4-title"><h1 id="sect-title">¡Mira qué hemos hecho por nuestros clientes!</h1></div>
    
        { <Slider
			autoplay={true}
			autoplaySpeed={3000}
          asNavFor={state.nav2}
		  ref={slider1}
		  
        > 
          <div>
		  <div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img alt="alt" src={images.samim}/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>SAMIM</h1></div><br/>
								<p1>Se trata de un sistema de información para la administración del inventario de un almacen de farmacia institucional, capaz de generar reportes, administrar digitalmente la cantidad de productos, y otras características adicionales.
								<br/><br/>
									<strong>Autores:</strong><br/>Anthony Medina (Frontend), Maria Silva (Backend)
									<br/><br/>
									<strong>Herramientas tecnologicas usadas:</strong><br/>
									<div className="icons-dev">
									<DiMysql />&nbsp;&nbsp;
									<DiPhp />&nbsp;&nbsp;
									<DiCss3 />&nbsp;&nbsp;
									<DiHtml5/>&nbsp;&nbsp;
									<DiJqueryLogo/></div>

								</p1>

							</div>
						</div>
          </div>
          <div>
		  <div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img alt="img" src={images.ma}/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>Miguel Ayala</h1></div><br/>
								<p1>Portal web con la finalidad de ofrecer al público las obras literarias del autor Miguel Ayala
								<br/><br/>
									<strong>Autores:</strong><br/>Anthony Medina
									<br/><br/>
									<strong>Herramientas tecnologicas usadas:</strong><br/>
									<div className="icons-dev">
									<DiCss3 />&nbsp;&nbsp;
									<DiHtml5/>&nbsp;&nbsp;
									<DiJqueryLogo/>&nbsp;&nbsp;
									<DiJavascript/></div>

								</p1>
							</div>
						</div>
          </div>
          <div>
		  <div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img alt="img" src={images.sifcomp}/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>Sifcomp</h1></div><br/>
								<p1>Sistema de información destinado al procesamiento de las órdenes de trabajos de una empresa dedicada a la mantención de equipos variados.
								<br/><br/>
									<strong>Autores:</strong><br/>Anthony Medina (Frontend), Maria Silva (Backend)
									<br/><br/>
									<strong>Herramientas tecnologicas usadas:</strong><br/>
									<div className="icons-dev">
									<DiMysql />&nbsp;&nbsp;
									<DiPhp />&nbsp;&nbsp;
									<DiCss3 />&nbsp;&nbsp;
									<DiHtml5/>&nbsp;&nbsp;
									<DiJavascript/>&nbsp;&nbsp;
									<DiJqueryLogo/></div>

								</p1>



								
							</div>
						</div>
          </div>
         
        </Slider>}
        <center><h2>Y abajo hay mas!</h2></center>
        <Slider
          asNavFor={state.nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
		  focusOnSelect={true}
		  

        >
          <div>
		  <img alt="img" src={images.samim}/>
          </div>
          <div>
		  <img alt="img" src={images.ma}/>
          </div>
          <div>
		  <img alt="img" src={images.sifcomp}/>
          </div>
          
        </Slider>
      </div>
	

{/* <div>
				<div id="sect4-title"><h1 id="sect-title">¡Mira qué hemos hecho por nuestros clientes!</h1></div>
				<div id="slider">
			
					
						<div className="project-list">
							<div className="project-thumb" id="thumb-project-1">
								<div className="project-img"><img src="/img/samim.jpg"/></div>
								<div className="project-name">SAMIM - Sistema de información<div className="proj-desc-phone"><p1 className="desc-phone">Se trata de un sistema de información para la administración del inventario de un almacen de farmacia institucional, capaz de generar reportes, administrar digitalmente la cantidad de productos, y otras características adicionales.</p1></div></div>
							</div>
							<div className="project-thumb" id="thumb-project-2">
								<div className="project-img"><img src="/img/ma.jpg"/></div>
								<div className="project-name">Miguel Ayala - Página web<div className="proj-desc-phone"><p1 className="desc-phone">Portal web con la finalidad de ofrecer al público las obras literarias del autor Miguel Ayala</p1></div></div>
							</div>
							<div className="project-thumb" id="thumb-project-3">
								<div className="project-img"><img src="/img/sifcomp.jpg"/></div>
								<div className="project-name">Sifcomp - Sistema de información<div className="proj-desc-phone"><p1 className="desc-phone">Sistema de información destinado al procesamiento de las órdenes de trabajos de una empresa dedicada a la mantención de equipos variados.</p1></div></div>
							</div>
						</div> 
						<div id="spacer"></div>
						<div id="prev-button">
					<a href="#" id="portfolio-prev" className="button"></a>
					</div>
					<div id="next-button">
					<a href="#" id="portfolio-next" className="button"></a></div>

					</div>

				<div className="proj-desc-cont">
					<div className="proj-desc loading" id="desc-project-1">
						<div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img src="/img/samim.jpg"/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>SAMIM</h1></div><br/>
								<p1>Se trata de un sistema de información para la administración del inventario de un almacen de farmacia institucional, capaz de generar reportes, administrar digitalmente la cantidad de productos, y otras características adicionales.</p1>
							</div>
						</div>
					</div>
					<div className="proj-desc loading" id="desc-project-2">
						<div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img src="/img/ma.jpg"/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>Miguel Ayala</h1></div><br/>
								<p1>Portal web con la finalidad de ofrecer al público las obras literarias del autor Miguel Ayala</p1>
							</div>
						</div>
					</div>
					<div className="proj-desc loading" id="desc-project-3">
						<div className="project-description-all content-wrap">
							<div className="project-description-img">
								<img src="/img/sifcomp.jpg"/>
							</div>
							<div className="project-text">
								<div className="proj-desc-title"><h1>Sifcomp</h1></div><br/>
								<p1>Sistema de información destinado al procesamiento de las órdenes de trabajos de una empresa dedicada a la mantención de equipos variados.</p1>
							</div>
						</div>
					</div>
				</div> 
</div>*/ }
		</section>
    );

}
