import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Card from '../Card/Card';

import './Testimonial.css';

export default function Testimonial() {
    return (
        <div className="f-center">
            <h1 className="white-text f-heading">Testimonials</h1>
            <p className="white-text f-lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus amet. Omnis fugiat </p>
            <div className="f-founder">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={30}
                >
                    <div className="item">
                        <Card />
                    </div>
                    <div className="item">
                        <Card />
                    </div>
                    <div className="item">
                        <Card />
                    </div>
                    <div className="item">
                        <Card />
                    </div>
                    <div className="item">
                        <Card />
                    </div>

                </OwlCarousel>
            </div>

        </div>
    )
}
