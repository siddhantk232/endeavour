import React from 'react'

import Card from '../Card/Card';
import './Founders.css';

export default function Founders() {
	return (
		<div className="f-center">
			<h1 className="white-text f-heading">Founders</h1>
			<p className="white-text f-lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus amet. Omnis fugiat </p>
			<div className="row f-pcover">
				<div className="col s12 m4">
					<Card className="f-padding" />
				</div>
				<div className="col s12 m4">
					<Card className="f-padding" />
				</div>
				<div className="col s12 m4">
					<Card className="f-padding" />
				</div>
			</div>
			<div className="row f-pcover f-center-2">
				<div className="col s12 m4" >
					<Card className="f-padding" />
				</div>
				<div className="col s12 m4">
					<Card className="f-padding" />
				</div>
			</div>
		</div>

	)
}
