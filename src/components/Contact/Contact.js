import React from 'react'

import './Contact.css'

export default function Contact() {

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className="wrapper">
			<div className="intro-text center white-text">
				<h1 className="c-title">Contact Us!</h1>
				<p className="lead">Feel free to contact for any information or query about us.</p>
			</div>
			<div className="contact-area white-text">
				<div className="social-area">
					<h3>You can get in touch with us on these platforms!</h3>

					<div className="social-icons">
						<a href="/" className="c-link">
							<i className="fa fa-facebook fa-4x"></i>
						</a>
						<a href="/" className="c-link">
							<i className="fa fa-instagram fa-4x"></i>
						</a>
						<a href="/" className="c-link">
							<i className="fa fa-youtube fa-4x"></i>
						</a>
					</div>
				</div>
				<form className="white-text contact-form">
					<div className="input-field">
						<label htmlFor="name">Name</label>
						<input className="white-text" type="text" name="name" id="name" />
					</div>
					<div className="input-field">
						<label htmlFor="name">Email</label>
						<input type="Email" name="mail" id="mail" className="validate white-text" />
					</div>
					<div className="input-field">
						<label htmlFor="name">Message</label>
						<textarea name="message" id="msg" className="bnone white-text" ></textarea>
					</div>
					<div className="center">
						<button type="submit" className="btn mbtn" onClick={handleSubmit}>Send</button>
					</div>
				</form>
			</div>
		</div>
	)
}
