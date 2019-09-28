import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Card from '../Card/Card';

import './Founders.css';

export default function Founders() {
    return (
        <div className="f-center center" id="founders">
            <h1 className="white-text f-heading smt">Founders</h1>
            <p className="white-text f-lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus amet. Omnis fugiat </p>
            <div className="f-founders container">
                <div className="about-testimonials white-text">
                    <p>Building a house from raw cement and mere bricks and making it a home for more than 40+members is what defines our team, the foundation of which was laid by the committed and capable 'cuigear' of our team . The leadership of our founding members are defined by the inexplicable work done by them. The ones who always walked beside us rather walking ahead. The ones whose passion, level of commitment, hard work, sheer determination and burning midnight's oil actually sparkled the pavements for future endeavour</p>
                </div>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav={true}
                    margin={5}
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
