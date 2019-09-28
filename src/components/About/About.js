import React from 'react'

import Mission from './Mission'

import redLogo from './red_robot_final.png'

import './About.css'

export default function About() {
	return (
		<div className="about white-text" id="about">
			<h1 className="smt">About</h1>
			<div className="about-section">
				<div className="vec">
					<img src={redLogo} alt="robot" />
				</div>
				<div className="about-text">
					<div className="line"></div>
					<div className="text">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus officia nemo voluptate rem expedita ipsam magnam repellendus modi. Laudantium amet voluptates ex nihil, consequatur culpa ut maxime laboriosam iusto aliquid!</p><br />
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum libero, ex iste nihil a dolorem eveniet dicta mollitia accusantium eum, repudiandae, doloribus impedit ullam provident. Debitis amet aliquid asperiores fugiat?</p>
					</div>
				</div>
			</div>
			<Mission />
		</div>
	)
}
