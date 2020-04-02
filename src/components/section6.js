import React, { } from 'react'


export default function Section3 () {

    return(
        

<section className="inf bg" id="sect6"><div className="overflowWrap">
			
			
			<div className="content-wrap" id="sect6-wrap">
			

						<div id="sect3-title"><h1 id="sect-title" className="dynamic slide-up in-view">¿Te agradamos, cierto?</h1></div><div id="sect6-subtitle"><h2 className="dynamic slide-up in-view">¡Envíanos una carta... Dinos lo que necesitas! ¡Te responderemos rápido!</h2></div><br/><br/>
				<form id="send-form" name="send-form">
				
					<div className="input-cont dynamic slide-up in-view"><div id="input-icon"><span className="fa-user-o fa"></span></div><label className="formlabels" htmlFor="htmlFor">Nombre</label><input className="inputForm" type="text" id="name" name="name" required=""/></div>
					<div className="input-cont dynamic slide-up in-view"><div id="input-icon"><span className="fa-envelope-o fa"></span></div><label className="formlabels" htmlFor="htmlFor">Correo electrónico</label><input className="inputForm" required="" type="email" name="email" id="email"/></div>
					

					<div className="textarea-cont dynamic slide-up in-view">
					<div id="textarea-title">
						<div id="textarea-icon">
							<span className="fa-file-text-o fa"></span>
						</div>
						<label className="formlabels" htmlFor="description">Descripción</label>
					</div>

					<textarea id="description" required="" name="description"></textarea>
					</div>
					<input type="submit" name="submit-form" id="submit-form" className="dynamic slide-up in-view" value="Enviar"/>

				</form></div><div id="background-floating">
			<div className="n">
					<div className="window floating" id="window1">
						<div className="window-controls">
							<div className="button1"></div>
							<div className="button2"></div>
							<div className="button3"></div>
						</div>
						<div className="window-body">
							<p>&lt;</p><p>/</p><p>&gt;</p>
						</div>
						<div className="window-statusbar">
						</div>
					</div>

					<div className="window floating" id="window2">
						<div className="window-controls">
							<div className="button1"></div>
							<div className="button2"></div>
							<div className="button3"></div>
						</div>
						<div className="window-body">
							<p>{}</p>
						</div>
						<div className="window-statusbar">
						</div>
					</div>
</div><div className="n">
					<div className="window floating" id="window3">
						<div className="window-controls">
							<div className="button1"></div>
							<div className="button2"></div>
							<div className="button3"></div>
						</div>
						<div className="window-body">
							<p>&lt;({})&gt;</p>
						</div>
						<div className="window-statusbar">
						</div>
					</div>

					<div className="window floating" id="window4">
						<div className="window-controls">
							<div className="button1"></div>
							<div className="button2"></div>
							<div className="button3"></div>
						</div>
						<div className="window-body">
							<p>&lt;</p><p>?</p><p>&gt;</p>
						</div>
						<div className="window-statusbar">
						</div>
					</div>
				</div></div>


					</div>

			</section>
    );

};
