import React from 'react'

import './Card.css'

export default function Card() {
	return (

		<div className="card z-depth-3 my-color">
			<div className="card-image">
				<img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="founder" className="card-img" />
				<span className="card-title">Card Title</span>
			</div>
			<div className="card-content">
				<p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
			</div>
			<div className="card-action">
				<a href="/">This is a link</a>
			</div>
		</div>

	)
}


// export default function Card() {
//     return (
//         <div className="box">
//             <div className="imgBox">
//                 <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="img" />
//             </div>
//             <ul className="socialIcons">
//                 <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
//                 <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
//                 <li><a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
//                 <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
//             </ul>
//             <div className="details">
//                 <h2>Some Famous <br /><span>UX/UI designer</span></h2>
//             </div>
//         </div>
//     )
// }
