import React, { useState } from 'react';

import M from 'materialize-css'

import './Contact.css'

export default function Contact() {

	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		M.toast({ html: 'Message Sent!' });
		setName('');
		setEmail('');
		setMessage('');
	}

	const handleNameChange = (e) => {
		setName(e.target.value);
	}
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}
	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	}


	return (
		<div className="wrapper" id="contact-us">
			<div className="intro-text center white-text">
				<h1 className="c-title smt">Contact Us!</h1>
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
						<input onChange={handleNameChange} className="white-text" type="text" name="name" id="name" value={name} />
					</div>
					<div className="input-field">
						<label htmlFor="name">Email</label>
						<input onChange={handleEmailChange} type="Email" name="mail" id="mail" className="validate white-text" value={email} />
					</div>
					<div className="input-field">
						<label htmlFor="name">Message</label>
						<textarea onChange={handleMessageChange} name="message" id="msg" className="bnone white-text" value={message} ></textarea>
					</div>
					<div className="center">
						<button type="submit" className="btn mbtn" onClick={handleSubmit}>Send</button>
					</div>
				</form>
			</div>
		</div>
	)
}
