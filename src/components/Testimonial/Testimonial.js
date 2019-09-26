import React from 'react'

import TestiSlide from './TestiSlide';
import './Testimonial.css';

export default function Testimonial() {
    return (
        <div className="container white-text testi-container">
            <h1>Testimonials</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nobis officiis excepturi placeat voluptatibus minus? Exercitationem quis ad, iusto itaque sit quibusdam dolorem laboriosam saepe dolore repudiandae. Obcaecati, fugit omnis?</p>
            <TestiSlide />
        </div>
    )
}
