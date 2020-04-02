import React, {} from 'react';

export default function LogoWindow(){

    return(
        <div className="window">
						<div className="window-controls">
							<div className="button1"></div>
							<div className="button2"></div>
							<div className="button3"></div>
						</div>
						<div className="window-body">
							<div className="line-number">
								<div className="number first-line"></div>
								<div className="number"></div>
								<div className="number "></div>
								<div className="number "></div>
								<div className="number "></div>
								<div className="number  "></div>
								<div className="number "></div>
								<div className="number"></div>
							</div>
							<div className="content">
								<div className="code">
									<div className="code-lines">
										<div className="number2 first-line blue-line"></div>
										<div className="number2 blue-line"></div>
										<div className="number2 second-col green-line"></div>
										<div className="number2 third-col purple-line"></div>
										<div className="number2 third-col purple-line"></div>
										<div className="number2 second-col two">
											<div className="two1 green-line"></div>
											<div className="two2"></div>
										</div>
										<div className="number2 second-col green-line"></div>
										<div className="number2 blue-line"></div>
									</div>
								</div>
								<div className="div1"></div>
								<div className="div2"></div>
							</div>
						</div>
						<div className="window-statusbar"></div>
					</div>
    )
}