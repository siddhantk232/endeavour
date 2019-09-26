import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';

export default function Carousel() {
	return (
		<OwlCarousel
			className="owl-theme"
			loop
			margin={30}
		>
			<div className="item">
				<i className="fa fa-university fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-graduation-cap fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>
			<div className="item">
				<i className="fa fa-shield fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-american-sign-language-interpreting fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-leaf fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-cog fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-heartbeat fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>

			<div className="item">
				<i className="fa fa-assistive-listening-systems fa-5x icon-car"></i>
				<h4 className="title-car">Mission</h4>
				<p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio id consequuntur ducimus exercitationem natus labore alias nesciunt, vel iusto reprehenderit dolorem accusantium illo quasi est veniam saepe facilis quia debitis.</p>
			</div>


		</OwlCarousel>
	)
}
