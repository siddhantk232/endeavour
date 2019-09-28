import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Card from '../Card/Card';

import './Founders.css';

export default function Founders() {
    return (
        <div className="f-center center">
            <h1 className="white-text f-heading smt">Founders</h1>
            <p className="white-text f-lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus amet. Omnis fugiat </p>
            <div className="f-founders container">
                <div className="about-testimonials white-text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cumque, minus dicta distinctio ea nihil autem corrupti vel magni porro molestias dolores id eum provident quam omnis! Quia, saepe eos!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptates ratione iure sequi eos recusandae quod, voluptatem fugit dolorum exercitationem nobis blanditiis illum iste doloribus quam, distinctio molestias minus nesciunt!</p><br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel ipsum suscipit culpa quae eligendi in illum. Architecto animi magnam sequi vitae error dolore quasi necessitatibus, natus culpa repellendus officia.</p>
                </div>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav={true}
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
