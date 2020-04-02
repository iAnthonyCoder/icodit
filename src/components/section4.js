import React, { useState, useEffect } from 'react';
import { useStaticQuery } from 'gatsby'
import Joyride from 'react-joyride';
import { graphql, Link } from 'gatsby'

export default function Section4(){

	const initialSteps = [
		{
			target: '.step4',
			content: 'Click me!',
		},
		{
			target: '.step5',
			content: 'Click me!',
		}
	];
	const [ steps ] = useState(initialSteps);

    const TeamImgUrl = useStaticQuery(graphql`{
      allFile(filter: { extension: { in: ["svg", "jpg", "png"] },name: { in: ["anthony", "maria", "cod-team2", "ai2", "back", "cod-team2-small"] } }) {edges {node {publicURL,name}}},
    }
  `)

  const [ images, setImages ] = useState({
	  'teamDesk':{
		  'url':''
	  }
  });

    
  const mapImgToState = async () => {

		var tempImages = {};
		await TeamImgUrl.allFile.edges.map(image => {
			if(image.node.name==="cod-team2"){tempImages={...tempImages, teamDesk:image.node.publicURL}}
			if(image.node.name==="cod-team2-small"){tempImages={...tempImages, teamSmall:image.node.publicURL}}
			if(image.node.name==="anthony"){tempImages={...tempImages, anthony:image.node.publicURL}}
			if(image.node.name==="maria"){tempImages={...tempImages, maria:image.node.publicURL}}
			if(image.node.name==="ai2"){tempImages={...tempImages, ai2:image.node.publicURL}}
			if(image.node.name==="back"){tempImages={...tempImages, back:image.node.publicURL}}
			return null;
		})
		setImages(tempImages);
  }
  useEffect(() => {
	mapImgToState(images)
  return () => {
	  
  };
}, [TeamImgUrl])


  const [ anthonyDetails, setAnthonyDetails ] = useState(false);
  const [ mariaDetails, setMariaDetails ] = useState(false);

    return(
		
        <section className="inf" id="sect5"><div className="overflowWrap">
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
					<div id="mariaPrev" className={`${(anthonyDetails)?"mariaS":("")}`}>
						<div className="team-ppl-name white-back2">
							<img className="pplImg" src={images.maria} alt="img"/><div className="nameandtitle"><h1 id="sect-title" className="tm-name"> &nbsp; Maria J. Silva T.</h1><h2 className="white-back"><span className="fa-graduation-cap fa"></span> &nbsp;IT Engineer</h2></div>
						</div><br/>

						<div className="profileImg">
						

						

						<div className="softImg"><img width="100%" src={images.back} alt="img"/></div>
						<div className="ctandlinks"><p className="contentTextBlack cofounderDesc">Su contacto con la tecnlogia de la información, comienza desde la universidad, Su pasatiempo es ver peliculas, leer libros. Ella es autodidacta, vive en constate aprendizaje para brindar proyectos perfectamente terminados, bien estructurados, simples y legibles.</p>
							<div><Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mariajose.silva.96199"><span className="fa-facebook-square fa"></span></Link><a rel="noopener noreferrer" target="_blank" href="#0"><span className="fa-linkedin-square fa"></span></a><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MariJosSilva9"><span className="fa-twitter-square fa"></span></a></div>
						</div>
						</div>

								<div className="close-inf close-maria" onClick={()=>{setAnthonyDetails(false)}}></div>

					</div>

					<div id="anthonyPrev" 
					className={`${(mariaDetails)?"anthonyS":("")}`}
					>
						<div className="team-ppl-name white-back2">
							<img className="pplImg" alt="img"  src={images.anthony}/><div className="nameandtitle"><h1 id="sect-title" className="tm-name"> &nbsp; Anthony J. Medina Ch.</h1><h2 className="white-back"><span className="fa-graduation-cap fa"></span> &nbsp;IT Technician</h2></div>
						</div><br/>

						<div className="profileImg">
						<div className="ctandlinks"><p className="contentTextBlack cofounderDesc">Anthony, co-fundador de Codineffable encargado del diseño de UI/UX, apasionado por los diseños minimalistas y estilos basados en el diseño flat, siempre en la busqueda de la comodidad del usuario, de captar su atencion mediante interfaces limpias y agradables. Sus pasatiempos son los videojuegos y escuchar musica... realmente tiende a escuchar musica mientras trabaja en sus diseños.</p>
							<div><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><span className="fa-facebook-square fa"></span></a><a rel="noopener noreferrer" target="_blank" href="#0"><span className="fa-linkedin-square fa"></span></a><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/AntChinchilla"><span className="fa-twitter-square fa"></span></a></div>
						</div>

						

						<div className="softImg"><img alt="img" src={images.ai2} /></div>
						</div>




					
							<div className="close-inf close-anthony" onClick={()=>{setMariaDetails(false)}}></div>

					</div>

				<div className="content-wrap" id="sect5-wrap">
			

						<div id="sect3-title"><h1 id="sect-title">¡Conócenos! ¡somos un equipo increible!</h1>
						</div>

					</div>


					





					<div id="smoother"></div>
				<div id="svg-img"><div id="maria" className="step4" onClick={()=>{setAnthonyDetails(!anthonyDetails)}}></div><div   onClick={()=>{setMariaDetails(!mariaDetails)}} className="step4" id="anthony"></div>
				
			
                
				<object aria-label="arialabel" type="image/svg+xml" data={images.teamDesk} id="codnef-team-img" className={`${(anthonyDetails)?"anthonyS":("")} ${(mariaDetails)?"mariaS":("")}`}></object>
				{/* <object type="image/svg+xml" data="/img/cod-team2-small.svg" id="codnef-team-img2"></object> */}
				</div>
				
				

			





</div>
			</section>
    )
}





