import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Card from '../Card/Card';

import './Testimonial.css';

export default function Testimonial() {
    return (
        <div className="f-center center">
            <h1 className="white-text t-heading smt">Testimonials</h1>
            <p className="white-text t-lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus amet. Omnis fugiat </p>
            <div className="t-founders container">
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
                <div className="about-testimonials white-text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cumque, minus dicta distinctio ea nihil autem corrupti vel magni porro molestias dolores id eum provident quam omnis! Quia, saepe eos!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptates ratione iure sequi eos recusandae quod, voluptatem fugit dolorum exercitationem nobis blanditiis illum iste doloribus quam, distinctio molestias minus nesciunt!</p><br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel ipsum suscipit culpa quae eligendi in illum. Architecto animi magnam sequi vitae error dolore quasi necessitatibus, natus culpa repellendus officia.</p>
                </div>
            </div>

        </div>
    )
}
